// MX PDF Inspector — client-side inspection of MX Compatible PDFs.
//
// The visitor drops a PDF on the page. The browser parses it locally via
// pdf.js (loaded as an ES module from a CDN). We classify the file into one
// of three tiers (MX Compatible, EAA tagged only, plain), render an evidence
// table, build three downloadable blobs (machine-readable JSON, human report,
// extracted provenance), and surface a tier-specific services pitch.
//
// PDF bytes never leave the browser. There is no upload endpoint.

const PDFJS_CDN = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs';
const PDFJS_WORKER_CDN = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';

const MX_NAMESPACE_PRIMARY = 'https://mx.allabout.network/ns/1.0';
const MX_NAMESPACE_LEGACY = 'https://schemas.cognovamx.com/mx/1.0/';

const RESPONSIBLE_PERSON_FIELDS = ['name', 'email', 'identifier', 'role', 'organisation', 'country'];

const PIVOT_COPY = {
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

let pdfjsLib = null;
let pdfjsLoadPromise = null;

async function loadPdfJs() {
  if (pdfjsLib) return pdfjsLib;
  if (pdfjsLoadPromise) return pdfjsLoadPromise;

  pdfjsLoadPromise = import(PDFJS_CDN).then((mod) => {
    mod.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_CDN;
    pdfjsLib = mod;
    return mod;
  });

  return pdfjsLoadPromise;
}

function findStringByName(node, predicate) {
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

function readXmpField(metadata, key) {
  if (!metadata) return null;
  if (typeof metadata.get === 'function') {
    const direct = metadata.get(key);
    if (direct) return direct;
  }
  if (typeof metadata.getAll === 'function') {
    const all = metadata.getAll();
    if (all && all[key]) return all[key];
  }
  return null;
}

function readXmpFieldByCandidates(metadata, candidates) {
  for (const c of candidates) {
    const v = readXmpField(metadata, c);
    if (v) return v;
  }
  return null;
}

function readResponsiblePersonFromXmp(metadata) {
  const block = {};
  let foundAny = false;
  for (const field of RESPONSIBLE_PERSON_FIELDS) {
    // Capitalised first letter convention from exiftool injection
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

async function readPdfMetadata(pdfDoc) {
  try {
    const meta = await pdfDoc.getMetadata();
    return { info: meta.info || null, metadata: meta.metadata || null };
  } catch (e) {
    return { info: null, metadata: null, error: e.message };
  }
}

function detectTaggedTree(metadata) {
  // pdf.js exposes the IsMarked / Marked flag in metadata.info.IsAcroFormPresent
  // and friends, but the canonical signal is the /MarkInfo catalog entry.
  // We probe both surfaces. pdf.js metadata.info.IsAcroFormPresent is unrelated;
  // pdf.js does NOT expose /MarkInfo directly in getMetadata, so we read the
  // XMP claim of pdfuaid:Part=1 (the Level 2 PDF/UA declaration) as a strong
  // proxy. Absence of pdfuaid:Part is not a definitive "no tagged tree" answer,
  // but presence is a definitive yes.
  const pdfuaPart = readXmpField(metadata.metadata, 'pdfuaid:Part') ||
    readXmpField(metadata.metadata, 'Part');
  return {
    pdfuaPart: pdfuaPart || null,
    hasTaggedClaim: Boolean(pdfuaPart),
  };
}

function detectMxMetadata(metadata) {
  // Probe a handful of MX-namespaced fields. If any return a value, the
  // PDF carries the MX XMP packet.
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

function detectProvenanceAiPayload(metadata) {
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

// Pull every accountable party from a parsed provenance payload. Handles
// both shapes the inspector encounters in the wild:
//   v2 — `parties` is an array of role-attributed identity blocks
//   v1 — only `responsiblePerson` is present (single block, no role enum)
// Returns an array of `{role, name, email, identifier, organisation, country}`
// entries (parts that are missing on the source come back undefined).
function readPartiesFromPayload(parsed) {
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

// Detect schemaVersion of the embedded provenance payload. Returns '2.0',
// '1.0', or null when no payload exists. Used to surface the schema
// version on the evidence panel.
function detectProvenanceSchemaVersion(parsed) {
  if (!parsed) return null;
  if (parsed.schemaVersion) return parsed.schemaVersion;
  // v1 sidecars have no explicit schemaVersion; the presence of
  // `frameworksCited` (flat string array) with no `frameworks[]` array
  // is the v1 fingerprint.
  if (Array.isArray(parsed.frameworksCited) && !Array.isArray(parsed.frameworks)) return '1.0';
  return null;
}

function classify(findings) {
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
          (findings.provenance.parsed.lastRunAt
            ? `, last run ${findings.provenance.parsed.lastRunAt}`
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

function makeReportMarkdown(file, classification, findings) {
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

function downloadBlob(filename, mime, content) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function renderResults(file, classification, findings, resultsEl) {
  const tierLabels = {
    mx: 'MX Compatible',
    'eaa-tagged': 'EAA Tagged Only',
    plain: 'Plain PDF',
  };

  const verdictClass = `tool-verdict is-${classification.tier === 'eaa-tagged' ? 'eaa' : classification.tier}`;

  const evidenceRows = classification.evidence.map((row) => `
    <tr>
      <td>${row.label}</td>
      <td class="tool-evidence-status is-${row.status}">${row.status.toUpperCase()}</td>
      <td class="tool-evidence-detail">${row.detail}</td>
    </tr>
  `).join('');

  const pivot = PIVOT_COPY[classification.tier];

  const baseStem = file.name.replace(/\.pdf$/i, '');

  resultsEl.innerHTML = `
    <h2 id="results-heading">Inspection result</h2>
    <p>
      <span class="${verdictClass}">${tierLabels[classification.tier]}</span>
      <span class="tool-verdict-pdf-name">${file.name}</span>
    </p>

    <table class="tool-evidence" aria-label="Evidence findings">
      <thead>
        <tr><th>Check</th><th>Status</th><th>Detail</th></tr>
      </thead>
      <tbody>${evidenceRows}</tbody>
    </table>

    <h3>Downloads</h3>
    <p>Three downloadable artefacts capture this inspection so you can keep, share, or re-verify offline.</p>
    <div class="tool-downloads" id="tool-downloads">
      <button type="button" class="tool-download" data-download="json">inspection.json</button>
      <button type="button" class="tool-download" data-download="md">inspection-report.md</button>
      ${findings.provenance.present && findings.provenance.parsed
        ? '<button type="button" class="tool-download" data-download="provenance">provenance-ai-extracted.json</button>'
        : ''}
    </div>

    <div class="tool-pivot">
      <h3>${pivot.headline}</h3>
      <p>${pivot.body}</p>
      <p>
        <a class="tool-pivot-cta" href="${pivot.href}">${pivot.cta}</a>
        <a class="tool-pivot-cta" href="/about/contact.html" style="margin-left: 0.5rem;">Contact us</a>
      </p>
    </div>
  `;

  resultsEl.hidden = false;

  // Wire downloads
  const inspectionJson = {
    inspectedAt: new Date().toISOString(),
    file: { name: file.name, size: file.size },
    verdict: classification.tier,
    evidence: classification.evidence,
    responsiblePerson: findings.responsiblePerson || null,
    pdfInfo: findings.info || null,
  };

  const reportMd = makeReportMarkdown(file, classification, findings);

  resultsEl.querySelector('[data-download="json"]').addEventListener('click', () => {
    downloadBlob(`${baseStem}-inspection.json`, 'application/json', JSON.stringify(inspectionJson, null, 2));
  });

  resultsEl.querySelector('[data-download="md"]').addEventListener('click', () => {
    downloadBlob(`${baseStem}-inspection-report.md`, 'text/markdown', reportMd);
  });

  const provBtn = resultsEl.querySelector('[data-download="provenance"]');
  if (provBtn) {
    provBtn.addEventListener('click', () => {
      downloadBlob(
        `${baseStem}-provenance-ai-extracted.json`,
        'application/json',
        JSON.stringify(findings.provenance.parsed, null, 2),
      );
    });
  }
}

function renderError(resultsEl, message) {
  resultsEl.innerHTML = `<div class="tool-error" role="alert"><strong>Inspection failed.</strong> ${message}</div>`;
  resultsEl.hidden = false;
}

async function inspectFile(file, resultsEl, busyEl) {
  if (!file || file.type !== 'application/pdf') {
    renderError(resultsEl, 'Drop a PDF file. Other formats are not supported by this tool.');
    return;
  }

  busyEl.textContent = 'Loading inspector…';
  busyEl.hidden = false;

  try {
    const pdfjs = await loadPdfJs();
    busyEl.textContent = 'Reading PDF…';

    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    const meta = await readPdfMetadata(pdfDoc);

    const tagged = detectTaggedTree(meta);
    const mxMeta = detectMxMetadata(meta);
    const provenance = detectProvenanceAiPayload(meta);
    const provenanceSchemaVersion = detectProvenanceSchemaVersion(provenance.parsed);
    // Pull every accountable party from the embedded payload (v2 parties[]
    // when present; v1 responsiblePerson when only the shadow is there).
    // Falls back to the XMP-side meta-tag walk so a PDF without an embedded
    // payload still surfaces the responsible-person block from its meta tags.
    const parties = readPartiesFromPayload(provenance.parsed);
    const responsiblePerson = parties[0]
      || readResponsiblePersonFromXmp(meta.metadata)
      || provenance.parsed?.responsiblePerson
      || null;

    const findings = { info: meta.info, tagged, mxMeta, provenance, provenanceSchemaVersion, parties, responsiblePerson };
    const classification = classify(findings);

    busyEl.hidden = true;
    renderResults(file, classification, findings, resultsEl);
  } catch (err) {
    busyEl.hidden = true;
    renderError(resultsEl, `Could not parse the PDF: ${err.message}`);
  }
}

function init() {
  const dropzone = document.querySelector('[data-pdf-inspector-dropzone]');
  const fileInput = document.querySelector('[data-pdf-inspector-input]');
  const resultsEl = document.querySelector('[data-pdf-inspector-results]');
  const busyEl = document.querySelector('[data-pdf-inspector-busy]');

  if (!dropzone || !fileInput || !resultsEl || !busyEl) return;

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) inspectFile(file, resultsEl, busyEl);
  });

  ['dragenter', 'dragover'].forEach((ev) => {
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('is-dragover');
    });
  });

  ['dragleave', 'drop'].forEach((ev) => {
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('is-dragover');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const file = e.dataTransfer?.files?.[0];
    if (file) inspectFile(file, resultsEl, busyEl);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
