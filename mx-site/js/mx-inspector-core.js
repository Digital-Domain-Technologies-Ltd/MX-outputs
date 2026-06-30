// MX Inspector — pure detect/classify core, any carrier.
//
// Shared by the browser inspector (mx-inspector.js), the Node test harness
// (tests/test-mx-inspector.js), and the CLI (scripts/bin/mx-inspect.js).
// Nothing in this module touches the DOM, the network, the filesystem, or
// pdf.js loading: it is dependency-free so the browser tool and the Node CLI
// run identical code and reach identical verdicts. The caller supplies a loaded
// pdf.js document (PDF) or raw bytes/text (every other carrier); this module
// reads it, classifies it, and returns the findings + classification a renderer
// presents.
//
// PDF stays the flagship path: inspectPdfDoc + classify keep their exact
// evidence keys and tier values, because the public PDF product and the
// mx.pdf.sh render gate depend on them. inspectCarrier() adds the same
// detect -> extract -> classify shape for raster, svg, html, markdown, shell,
// and sidecar carriers.
//
// SINGLE SOURCE OF TRUTH — this module exists as two byte-identical copies:
//   - mx-site/js/mx-inspector-core.js                             (canonical; edit here)
//   - distributions/mx-inspector/v1.0.0/lib/mx-inspector-core.js  (shipped CLI copy)
// The audit-site loads the first; the packaged CLI loads the second. Edit the
// canonical file, then copy it across so both run identical code.
// scripts/check_inspector_core_sync.py (SessionStart gate + CI) fails the build
// if the two diverge.

export const MX_NAMESPACE_PRIMARY = 'https://mx.allabout.network/ns/1.0';
export const MX_NAMESPACE_LEGACY = 'https://schemas.cognovamx.com/mx/1.0/';

export const RESPONSIBLE_PERSON_FIELDS = ['name', 'email', 'identifier', 'role', 'organisation', 'country'];

export const PIVOT_COPY = {
  mx: {
    headline: 'This file publishes at the MX bar.',
    body: 'Tagged structure, MX metadata, and a provenance chain are all present. The next step is verification across your whole publishing surface — every PDF, every report, every contract. We audit the full estate and surface the gaps between best and average.',
    cta: 'Commission an audit',
    href: '/services/',
  },
  'eaa-tagged': {
    headline: 'This file is accessible. It is not attested.',
    body: 'A tagged structure tree is here — a screen reader can walk it, and the file qualifies for EAA Directive 2019/882 conformance review. What it lacks is the MX evidence chain: provenance, responsible-person identifier, machine-readable claims. Without that chain, a regulator or AI agent cannot verify who authored the file or what canon it cites. We rebuild documents into MX Compatible PDFs that carry the full chain.',
    cta: 'Add the MX chain',
    href: '/services/',
  },
  plain: {
    headline: 'This file is a picture of a document.',
    body: 'There is no tagged structure tree, so a screen reader has to guess and an AI agent has to do vision-based reconstruction. There is no MX metadata, so machines cannot verify what the file claims. This is the bar EAA Directive 2019/882 raised on 28 June 2025. We rebuild documents from source into accessible, machine-readable PDFs that carry their own evidence.',
    cta: 'Rebuild this to MX',
    href: '/services/',
  },
};

export function findStringByName(node, predicate) {
  if (!node) return null;
  if (node.name && predicate(node.name)) {
    const value = node.value !== undefined ? node.value : node;
    if (typeof value === 'string') return value;
  }
  if (Array.isArray(node)) {
    for (const child of node) {
      const found = findStringByName(child, predicate);
      if (found !== null) return found;
    }
  }
  if (typeof node === 'object') {
    for (const key of Object.keys(node)) {
      const val = node[key];
      const found = findStringByName(val, predicate);
      if (found !== null) return found;
    }
  }
  return null;
}

export function readXmpField(metadata, key) {
  if (!metadata) return null;
  if (typeof metadata.get === 'function') {
    const direct = metadata.get(key);
    if (direct) return direct;
  }
  if (typeof metadata.getAll === 'function') {
    const all = metadata.getAll();
    if (all) {
      if (all[key]) return all[key];
      // Case-insensitive fallback. pdf.js lowercases XMP field keys (so
      // `mx:Status` arrives as `mx:status`, `pdfuaid:Part` as
      // `pdfuaid:part`); exiftool preserves the case authored in the
      // packet. The inspector accepts either, so callers can pass the
      // canonical (capitalised) form and the lookup still finds the
      // field whichever case-folding the parser applied.
      const lower = key.toLowerCase();
      for (const k of Object.keys(all)) {
        if (k.toLowerCase() === lower) return all[k];
      }
    }
  }
  return null;
}

export function readXmpFieldByCandidates(metadata, candidates) {
  for (const c of candidates) {
    const v = readXmpField(metadata, c);
    if (v) return v;
  }
  return null;
}

export function readResponsiblePersonFromXmp(metadata) {
  const block = {};
  let foundAny = false;
  for (const field of RESPONSIBLE_PERSON_FIELDS) {
    const cap = field.charAt(0).toUpperCase() + field.slice(1);
    const value = readXmpFieldByCandidates(metadata, [
      `responsiblePerson.${field}`,
      `responsiblePerson${cap}`,
      `ResponsiblePerson${cap}`,
    ]);
    if (value) {
      block[field] = value;
      foundAny = true;
    }
  }
  return foundAny ? block : null;
}

export async function readPdfMetadata(pdfDoc) {
  try {
    const meta = await pdfDoc.getMetadata();
    return { info: meta.info || null, metadata: meta.metadata || null };
  } catch (e) {
    return { info: null, metadata: null, error: e.message };
  }
}

export function detectTaggedTree(metadata) {
  // pdf.js does NOT expose /MarkInfo directly in getMetadata, so we read
  // the XMP claim of pdfuaid:Part=1 (PDF/UA-1 conformance declaration) as a
  // strong proxy. Absence of pdfuaid:Part is not a definitive "no tagged
  // tree" answer, but presence is a definitive yes.
  const pdfuaPart = readXmpField(metadata.metadata, 'pdfuaid:Part') ||
    readXmpField(metadata.metadata, 'Part');
  return {
    pdfuaPart: pdfuaPart || null,
    hasTaggedClaim: Boolean(pdfuaPart),
  };
}

export function detectMxMetadata(metadata) {
  const candidates = [
    'mx:Status', 'mx:ContentType', 'mx:CanonicalUrl', 'mx:Author',
    'Status', 'CanonicalUrl', 'Author',
  ];
  for (const c of candidates) {
    const v = readXmpField(metadata.metadata, c);
    if (v) return { present: true, sampleField: c, sampleValue: v };
  }
  return { present: false };
}

export function detectProvenanceAiPayload(metadata) {
  const payload = readXmpField(metadata.metadata, 'mx:ProvenanceAiPayload') ||
    readXmpField(metadata.metadata, 'ProvenanceAiPayload');
  if (!payload) return { present: false };
  try {
    const parsed = JSON.parse(payload);
    return { present: true, parsed, raw: payload };
  } catch (e) {
    return { present: true, parsed: null, raw: payload, parseError: e.message };
  }
}

// Pull every accountable party from a parsed provenance payload.
// v2 — `parties` is an array of role-attributed identity blocks
// v1 — only `responsiblePerson` is present (single block, no role enum)
export function readPartiesFromPayload(parsed) {
  if (!parsed || typeof parsed !== 'object') return [];
  if (Array.isArray(parsed.parties) && parsed.parties.length > 0) {
    return parsed.parties.map((p) => ({ ...p }));
  }
  if (parsed.responsiblePerson && parsed.responsiblePerson.name) {
    return [{
      role: parsed.responsiblePerson.role || 'auditOperator',
      name: parsed.responsiblePerson.name,
      email: parsed.responsiblePerson.email,
      identifier: parsed.responsiblePerson.identifier,
      organisation: parsed.responsiblePerson.organisation,
      country: parsed.responsiblePerson.country,
    }];
  }
  return [];
}

export function detectProvenanceSchemaVersion(parsed) {
  if (!parsed) return null;
  if (parsed.schemaVersion) return parsed.schemaVersion;
  if (Array.isArray(parsed.frameworksCited) && !Array.isArray(parsed.frameworks)) return '1.0';
  return null;
}

export function classify(findings) {
  const evidence = [
    {
      key: 'tagged-tree',
      label: 'Tagged structure (ISO 14289-1)',
      status: findings.tagged.hasTaggedClaim ? 'pass' : 'fail',
      detail: findings.tagged.pdfuaPart
        ? `pdfuaid:Part = ${findings.tagged.pdfuaPart}`
        : 'pdfuaid:Part not declared in XMP packet.',
    },
    {
      key: 'mx-namespace',
      label: 'MX XMP namespace present',
      status: findings.mxMeta.present ? 'pass' : 'fail',
      detail: findings.mxMeta.present
        ? `${findings.mxMeta.sampleField} = ${String(findings.mxMeta.sampleValue).slice(0, 80)}`
        : 'No mx:* fields detected in the XMP packet.',
    },
    {
      key: 'provenance-ai',
      label: 'Provenance AI payload embedded',
      status: findings.provenance.present
        ? (findings.provenance.parsed ? 'pass' : 'fail')
        : 'fail',
      detail: findings.provenance.present
        ? (findings.provenance.parsed
          ? `${findings.provenance.parsed.steps?.length || 0} step(s) recorded; operator: ${findings.provenance.parsed.operator || 'unknown'}`
          : `Payload present but does not parse as JSON: ${findings.provenance.parseError}`)
        : 'mx:ProvenanceAiPayload field absent.',
    },
    {
      key: 'responsible-person',
      label: 'Responsible Person Identifier',
      status: findings.responsiblePerson ? 'pass' : 'fail',
      detail: findings.responsiblePerson
        ? `${findings.responsiblePerson.name || 'unnamed'} (${findings.responsiblePerson.organisation || 'no org'}, ${findings.responsiblePerson.country || '??'})`
        : 'No responsiblePerson block found in XMP packet.',
    },
    {
      key: 'parties',
      label: 'Accountable parties (v2)',
      status: (Array.isArray(findings.parties) && findings.parties.length > 0) ? 'pass' : 'na',
      detail: (Array.isArray(findings.parties) && findings.parties.length > 0)
        ? `${findings.parties.length} party/parties: ${findings.parties.map((p) => `${p.role || 'role?'}=${p.name || 'unnamed'}`).join('; ')}`
        : findings.provenanceSchemaVersion === '1.0'
          ? 'v1 sidecar — re-render to produce a v2 parties[] block.'
          : 'No parties[] block in payload.',
    },
    {
      key: 'schema-version',
      label: 'Provenance schema',
      status: findings.provenanceSchemaVersion === '2.0' ? 'pass' : (findings.provenanceSchemaVersion === '1.0' ? 'na' : 'fail'),
      detail: findings.provenanceSchemaVersion
        ? `v${findings.provenanceSchemaVersion}`
        : 'No provenance payload present.',
    },
    {
      key: 'run-revision',
      label: 'Run revision',
      status: Number.isInteger(findings.provenance?.parsed?.runRevision) ? 'pass' : 'na',
      detail: Number.isInteger(findings.provenance?.parsed?.runRevision)
        ? `revision ${findings.provenance.parsed.runRevision}` +
          (findings.provenance.parsed.lastWriteAt
            ? `, last write ${findings.provenance.parsed.lastWriteAt}`
            : '') +
          (findings.provenance.parsed.startedAt
            ? `, started ${findings.provenance.parsed.startedAt}`
            : '')
        : 'No runRevision (v1 sidecar — re-render to populate).',
    },
  ];

  let tier;
  if (findings.tagged.hasTaggedClaim && findings.mxMeta.present) {
    tier = 'mx';
  } else if (findings.tagged.hasTaggedClaim) {
    tier = 'eaa-tagged';
  } else {
    tier = 'plain';
  }

  return { tier, evidence };
}

export function makeReportMarkdown(file, classification, findings) {
  const lines = [];
  lines.push(`# MX PDF Inspection — ${file.name}`);
  lines.push('');
  lines.push(`Inspected: ${new Date().toISOString()}`);
  lines.push(`File size: ${file.size.toLocaleString()} bytes`);
  lines.push('');
  lines.push(`## Verdict: ${classification.tier.toUpperCase()}`);
  lines.push('');
  lines.push('## Evidence');
  lines.push('');
  lines.push('| Check | Status | Detail |');
  lines.push('|-------|--------|--------|');
  for (const row of classification.evidence) {
    lines.push(`| ${row.label} | ${row.status} | ${row.detail} |`);
  }
  lines.push('');
  if (findings.responsiblePerson) {
    lines.push('## Responsible Person');
    lines.push('');
    for (const [k, v] of Object.entries(findings.responsiblePerson)) {
      lines.push(`- **${k}**: ${v}`);
    }
    lines.push('');
  }
  lines.push('## Re-verify offline');
  lines.push('');
  lines.push('```bash');
  lines.push('# Tagged structure tree');
  lines.push('qpdf --json file.pdf | jq \'.objects[] | select(.["/Type"] == "/StructTreeRoot")\'');
  lines.push('');
  lines.push('# PDF/UA-1 (ISO 14289-1) conformance claim');
  lines.push('exiftool -XMP-pdfuaid:Part file.pdf');
  lines.push('');
  lines.push('# Embedded AI provenance');
  lines.push('exiftool -b -XMP-mx:ProvenanceAiPayload file.pdf | jq .');
  lines.push('```');
  return lines.join('\n');
}

// High-level entry: given a loaded pdf.js document, run the full
// detection + classification pipeline and return everything a
// renderer (browser UI, Node assertions) needs.
export async function inspectPdfDoc(pdfDoc) {
  const meta = await readPdfMetadata(pdfDoc);
  const tagged = detectTaggedTree(meta);
  const mxMeta = detectMxMetadata(meta);
  const provenance = detectProvenanceAiPayload(meta);
  const provenanceSchemaVersion = detectProvenanceSchemaVersion(provenance.parsed);
  const parties = readPartiesFromPayload(provenance.parsed);
  const responsiblePerson = parties[0]
    || readResponsiblePersonFromXmp(meta.metadata)
    || provenance.parsed?.responsiblePerson
    || null;

  const findings = { info: meta.info, tagged, mxMeta, provenance, provenanceSchemaVersion, parties, responsiblePerson, carrier: 'pdf' };
  const classification = classify(findings);
  return { findings, classification };
}

// ───────────────────────────────────────────────────────────────────────────
// Carrier-agnostic inspection — every other object type.
//
// The PDF path above is untouched. Everything below adds the same
// detect -> extract -> classify shape for raster images, SVG, HTML, markdown,
// shell scripts, and sidecars, in pure JS so the browser tool and the CLI run
// identical code. A carrier is read from raw bytes (raster) or text (the rest);
// the source YAML that MX embeds in each carrier is parsed into a flat field
// map, then classified.
// ───────────────────────────────────────────────────────────────────────────

export const INSPECTABLE_CARRIERS = ['pdf', 'raster', 'svg', 'html', 'markdown', 'shell', 'sidecar'];

function lcKey(k) { return k.charAt(0).toLowerCase() + k.slice(1); }

export function detectCarrierFromName(filename) {
  const fp = String(filename || '').toLowerCase();
  if (/\.mx\.ya?ml$/.test(fp)) return 'sidecar';
  const dot = fp.lastIndexOf('.');
  const ext = dot >= 0 ? fp.slice(dot) : '';
  switch (ext) {
    case '.pdf': return 'pdf';
    case '.png': case '.jpg': case '.jpeg': case '.webp': case '.gif': case '.avif': return 'raster';
    case '.svg': return 'svg';
    case '.html': case '.htm': return 'html';
    case '.md': case '.markdown': return 'markdown';
    case '.sh': case '.bash': return 'shell';
    case '.yaml': case '.yml': return 'sidecar';
    default: return null;
  }
}

// Decode bytes (Uint8Array) to a byte-faithful (Latin1) string so an embedded
// XMP packet (ASCII XML, stored verbatim in PNG iTXt / JPEG APP1 / WEBP chunk)
// can be scanned regardless of image format. A string passes through unchanged.
export function bytesToLatin1(bytes) {
  if (typeof bytes === 'string') return bytes;
  if (!bytes) return '';
  let s = '';
  const CHUNK = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK) {
    s += String.fromCharCode.apply(null, bytes.subarray(i, Math.min(i + CHUNK, bytes.length)));
  }
  return s;
}

export function extractXmpPacket(str) {
  const start = str.indexOf('<x:xmpmeta');
  if (start < 0) return null;
  const close = '</x:xmpmeta>';
  const end = str.indexOf(close, start);
  if (end < 0) return null;
  return str.slice(start, end + close.length);
}

function xmlUnescape(s) {
  return String(s)
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&#x0?A;/gi, '\n').replace(/&#0?10;/g, '\n')
    .replace(/&amp;/g, '&');
}

// Pull mx:* and dc:* fields from an XMP packet. Handles exiftool's two
// serialisations: element form (<mx:Status>active</mx:Status>) and compact
// attribute form (mx:Status="active" on rdf:Description). dc:title /
// dc:description arrive wrapped in rdf:Alt/rdf:li; the inner text is taken.
export function parseXmpFields(xmp) {
  const fields = {};
  if (!xmp) return fields;
  const elRe = /<(mx|dc):([A-Za-z0-9_]+)>([\s\S]*?)<\/\1:\2>/g;
  let m;
  while ((m = elRe.exec(xmp)) !== null) {
    let val = m[3];
    const li = val.match(/<rdf:li[^>]*>([\s\S]*?)<\/rdf:li>/);
    if (li) val = li[1];
    fields[lcKey(m[2])] = xmlUnescape(val).trim();
  }
  const attrRe = /\b(mx|dc):([A-Za-z0-9_]+)="([^"]*)"/g;
  while ((m = attrRe.exec(xmp)) !== null) {
    const key = lcKey(m[2]);
    if (!(key in fields)) fields[key] = xmlUnescape(m[3]).trim();
  }
  return fields;
}

// Minimal YAML reader for the MX subset embedded in source-frontmatter blocks
// (svg <metadata>, html MX-SOURCE-FRONTMATTER, sidecars, markdown/shell
// headers). Flattens nested keys to their leaf name, which is all the inspector
// needs to show fields and decide a verdict. Not a general YAML parser.
export function parseYamlSubset(yaml) {
  const out = {};
  if (!yaml) return out;
  for (const raw of String(yaml).split(/\r?\n/)) {
    const line = raw.replace(/\t/g, '  ');
    if (!line.trim() || /^\s*#/.test(line) || /^\s*-\s/.test(line)) continue;
    const mm = line.match(/^\s*([A-Za-z0-9_.-]+):\s*(.*)$/);
    if (!mm) continue;
    const key = lcKey(mm[1].split('.').pop());
    let val = mm[2].trim();
    if (val === '') continue; // block parent such as "mx:"
    val = val.replace(/\s+#.*$/, '').trim().replace(/^["']|["']$/g, '');
    if (val && !(key in out)) out[key] = val;
  }
  return out;
}

// The source YAML rides inside a comment block (HTML MX-SOURCE-FRONTMATTER, the
// raster mx:SourceFrontmatter field) or an SVG <metadata> CDATA body. Pull the
// `--- ... ---` fenced YAML out of whatever wrapper it arrived in.
function yamlFromCommentBlock(text) {
  if (!text) return null;
  const m = String(text).match(/---\s*\r?\n([\s\S]*?)\r?\n---/);
  return m ? m[1] : null;
}

export function extractRasterMx(bytesOrStr) {
  const xmp = extractXmpPacket(bytesToLatin1(bytesOrStr));
  if (!xmp) return {};
  const fields = parseXmpFields(xmp);
  if (fields.sourceFrontmatter) {
    const sf = parseYamlSubset(yamlFromCommentBlock(fields.sourceFrontmatter) || '');
    for (const k of Object.keys(sf)) if (!(k in fields)) fields[k] = sf[k];
    delete fields.sourceFrontmatter;
  }
  return fields;
}

export function extractSvgMx(text) {
  const block = text.match(/<metadata\b[^>]*id=["']mx-metadata["'][^>]*>([\s\S]*?)<\/metadata>/i);
  if (!block) return {};
  const cdata = block[1].match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  const body = cdata ? cdata[1] : block[1];
  return parseYamlSubset(yamlFromCommentBlock(body) || body);
}

export function extractHtmlMx(text) {
  const fields = {};
  const blk = text.match(/MX-SOURCE-FRONTMATTER:START[\s\S]*?MX-SOURCE-FRONTMATTER:END/);
  if (blk) Object.assign(fields, parseYamlSubset(yamlFromCommentBlock(blk[0]) || ''));
  const metaRe = /<meta\s+[^>]*?\bname=(["'])mx:([^"']+)\1[^>]*>/gi;
  let m;
  while ((m = metaRe.exec(text)) !== null) {
    const c = m[0].match(/\bcontent=(["'])([\s\S]*?)\1/i);
    const key = lcKey(m[2]);
    if (c && !(key in fields)) fields[key] = c[2];
  }
  return fields;
}

export function extractFrontmatterMx(text, carrier) {
  if (carrier === 'shell') {
    const lines = String(text).split(/\r?\n/);
    let s = -1; let e = -1;
    for (let i = 0; i < Math.min(lines.length, 80); i += 1) {
      if (/^#\s*---\s*$/.test(lines[i])) { if (s < 0) s = i; else { e = i; break; } }
    }
    if (s < 0 || e < 0) return {};
    return parseYamlSubset(lines.slice(s + 1, e).map((l) => l.replace(/^#\s?/, '')).join('\n'));
  }
  const m = String(text).match(/^﻿?---\r?\n([\s\S]*?)\r?\n---/);
  if (m) return parseYamlSubset(m[1]);
  return carrier === 'sidecar' ? parseYamlSubset(text) : {};
}

const MX_FIELD_HINTS = ['status', 'contentType', 'type', 'canonicalUri', 'audience', 'license', 'author', 'description', 'title', 'provenanceOrigin'];

export function classifyGeneric(carrier, fields, extra = {}) {
  const sample = MX_FIELD_HINTS.find((k) => fields[k] !== undefined);
  const present = Boolean(sample);
  const evidence = [
    {
      key: 'mx-metadata',
      label: 'MX metadata present',
      status: present ? 'pass' : 'fail',
      detail: present
        ? `${sample} = ${String(fields[sample]).slice(0, 80)}`
        : `No MX metadata found in this ${carrier} file.`,
    },
    {
      key: 'canonical-uri',
      label: 'Canonical URI declared',
      status: fields.canonicalUri ? 'pass' : 'na',
      detail: fields.canonicalUri ? String(fields.canonicalUri) : 'No canonicalUri field.',
    },
    {
      key: 'provenance-origin',
      label: 'Provenance / origin',
      status: fields.provenanceOrigin ? 'pass' : 'na',
      detail: fields.provenanceOrigin ? String(fields.provenanceOrigin) : 'No provenanceOrigin declared.',
    },
    {
      key: 'accessibility',
      label: 'Accessibility signal',
      status: extra.accessibility ? 'pass' : 'na',
      detail: extra.accessibility || 'No carrier accessibility signal inspected.',
    },
  ];
  return { tier: present ? 'mx' : 'plain', evidence };
}

// Top-level carrier-agnostic entry for every carrier except PDF (PDFs go through
// inspectPdfDoc, since the caller already holds a pdf.js document). Returns the
// same { findings, classification } shape as the PDF path.
export function inspectCarrier({ carrier, filename, bytes, text } = {}) {
  const c = carrier || detectCarrierFromName(filename);
  const asText = () => (typeof text === 'string' ? text : bytesToLatin1(bytes));
  let fields = {};
  let accessibility = null;

  if (c === 'raster') {
    fields = extractRasterMx(bytes != null ? bytes : text);
  } else if (c === 'svg') {
    const t = asText();
    fields = extractSvgMx(t);
    if (/<title[>\s]/i.test(t) || /<desc[>\s]/i.test(t)) accessibility = 'SVG carries <title> / <desc>.';
  } else if (c === 'html') {
    const t = asText();
    fields = extractHtmlMx(t);
    const lang = t.match(/<html[^>]*\blang=(["'])([^"']+)\1/i);
    const hasMain = /<main[>\s]/i.test(t);
    if (lang || hasMain) accessibility = `${lang ? `lang=${lang[2]}` : 'no lang'}${hasMain ? ', <main> present' : ''}`;
  } else if (c === 'markdown' || c === 'shell' || c === 'sidecar') {
    fields = extractFrontmatterMx(asText(), c);
  } else {
    return {
      findings: { carrier: c, fields: {} },
      classification: { tier: 'unsupported', evidence: [{ key: 'carrier', label: 'Carrier', status: 'fail', detail: `Unsupported carrier: ${c || 'unknown'}` }] },
    };
  }

  const classification = classifyGeneric(c, fields, { accessibility });
  return { findings: { carrier: c, fields, accessibility }, classification };
}
