// MX PDF Inspector — pure detect/classify core.
//
// Shared by the browser inspector (pdf-inspector.js) and the Node test
// harness (tests/test-pdf-inspector.js). Nothing in this module touches
// the DOM, the network, or pdf.js loading. Caller provides a loaded
// pdf.js document; this module reads it, classifies it, and returns the
// findings + classification a renderer can present.

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
  // the XMP claim of pdfuaid:Part=1 (Level 2 PDF/UA declaration) as a
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
  lines.push('# PDF/UA Level 2 conformance claim');
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

  const findings = { info: meta.info, tagged, mxMeta, provenance, provenanceSchemaVersion, parties, responsiblePerson };
  const classification = classify(findings);
  return { findings, classification };
}
