// MX Inspector — client-side inspection of any MX-carrying object.
//
// The visitor drops a file on the page. The browser reads it locally: PDFs are
// parsed with pdf.js (served from this site under /js/vendor/pdfjs/); raster
// images, SVG, HTML, markdown and sidecars are read as bytes or text and parsed
// by the same dependency-free detection core the CLI uses. We classify the
// file, render an evidence table and (for non-PDF carriers) the MX metadata the
// file carries, and offer downloadable artefacts.
//
// Bytes never leave the browser. There is no upload endpoint and no third-party
// fetch at inspection time.
//
// The pure detect + classify pipeline lives in mx-inspector-core.js so the same
// code runs in tests/test-mx-inspector.js and the CLI. This file is the browser
// shell: pdf.js loader, file reading, DOM wiring, results rendering, downloads.

import {
  PIVOT_COPY,
  makeReportMarkdown,
  inspectPdfDoc,
  inspectCarrier,
  detectCarrierFromName,
} from './mx-inspector-core.js';
import {
  objectCard,
  verificationPanel,
  relationshipLine,
  signalBar,
  narrativeLayer,
  gridMount,
  objectInspector,
  render as renderComponents,
  RELATIONSHIP_FIELDS,
} from './component-mx.js';
import { el } from './mx-dom.js';

// Vendored from pdfjs-dist@4.10.38. Files are kept as .js (not .mjs) because
// the Cloudflare worker's content-type map does not yet emit
// application/javascript for .mjs; without that header the browser refuses to
// execute the module.
const PDFJS_URL = '/js/vendor/pdfjs/pdf.min.js';
const PDFJS_WORKER_URL = '/js/vendor/pdfjs/pdf.worker.min.js';

const TIER_LABELS = {
  mx: 'MX Compatible', 'eaa-tagged': 'EAA Tagged Only', plain: 'Plain', unsupported: 'Unsupported',
};

// Carrier-neutral pivot copy for non-PDF carriers (the PDF-specific copy lives
// in the core's PIVOT_COPY and stays the PDF story).
const GENERIC_PIVOT = {
  mx: {
    headline: 'This file carries MX metadata.',
    body: 'A machine reading this file can tell what it is, who made it, and how it may be reused, without the page that produced it. That is the bar MX sets for every published asset. We make the whole estate read like this.',
    cta: 'See our services', href: '/services/',
  },
  plain: {
    headline: 'This file carries no MX metadata.',
    body: 'A machine meeting this file in isolation cannot tell what it is, who made it, or how it may be used. It has to guess. We decorate assets so the metadata travels with the file in its own carrier.',
    cta: 'Make it machine-readable', href: '/services/',
  },
};

let pdfjsLib = null;
let pdfjsLoadPromise = null;
let chainSectionEl = null;

// Hand a parsed provenance record to the explorer and reveal the chain view.
function revealChain(source, parsed) {
  document.dispatchEvent(new CustomEvent('mx:provenance', { detail: { source, parsed } }));
  if (chainSectionEl) chainSectionEl.hidden = false;
}

function hideChain() {
  if (chainSectionEl) chainSectionEl.hidden = true;
}

function isHttpUrl(u) {
  return typeof u === 'string' && /^https?:\/\//i.test(u.trim());
}

// Fetch the provenance cog a file names in its mx.provenanceUri and open the
// chain view. This is a GET of a public URL the file itself declares; nothing
// about the dropped file is ever sent, so the no-upload promise holds. Prompted,
// never automatic, so the one network call the tool can make is the visitor's
// explicit choice.
async function fetchAndWalkProvenance(url, statusEl) {
  if (statusEl) statusEl.textContent = 'Fetching provenance…';
  try {
    const res = await fetch(url, { credentials: 'omit', redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const parsed = await res.json();
    if (!parsed || typeof parsed !== 'object' || (!('steps' in parsed) && !('schemaVersion' in parsed))) {
      if (statusEl) statusEl.textContent = 'That URL did not return an MX provenance record (no steps or schemaVersion).';
      return;
    }
    if (statusEl) statusEl.textContent = '';
    revealChain(url, parsed);
  } catch (err) {
    if (statusEl) statusEl.textContent = `Could not fetch that provenance record: ${err.message}`;
  }
}

async function loadPdfJs() {
  if (pdfjsLib) return pdfjsLib;
  if (pdfjsLoadPromise) return pdfjsLoadPromise;
  pdfjsLoadPromise = import(PDFJS_URL).then((mod) => {
    mod.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL;
    pdfjsLib = mod;
    return mod;
  });
  return pdfjsLoadPromise;
}

function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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

// The inspected file as one MX object: the fields the carrier declares (keys
// normalised to the dictionary's camelCase, since the PDF path capitalises
// XMP labels), plus the verification trail the inspection itself produced.
function inspectedObject(file, carrier, classification, findings, inspectedAt) {
  const obj = {};
  for (const [k, v] of Object.entries(findings.fields || {})) {
    obj[k.charAt(0).toLowerCase() + k.slice(1)] = v;
  }
  if (!obj.title) obj.title = file.name;
  obj.validationStatus = classification.tier;
  if (findings.responsiblePerson && findings.responsiblePerson.name && !obj.responsiblePerson) {
    obj.responsiblePerson = findings.responsiblePerson.name;
  }
  const parsed = findings.provenance && findings.provenance.parsed;
  if (parsed) {
    obj.verificationChanged = parsed.lastRunAt || parsed.startedAt || undefined;
    if (!obj.generatedBy && parsed.operator) obj.generatedBy = parsed.operator;
    if (!obj.authorship && Array.isArray(parsed.steps) && parsed.steps.length) obj.authorship = 'curated';
  }
  const rows = classification.evidence || [];
  obj.verificationSteps = rows.map((row) => ({
    timestamp: inspectedAt,
    agent: 'mx-inspector-core.js (in your browser)',
    method: row.key,
    outcome: row.status === 'na' ? 'skipped' : row.status,
    detail: row.detail,
  }));
  const judged = rows.filter((r) => r.status === 'pass' || r.status === 'fail');
  if (judged.length) {
    obj.finalConfidence = Math.round((judged.filter((r) => r.status === 'pass').length / judged.length) * 100) / 100;
    obj.confidenceMethod = 'share of evidence checks passed';
  }
  obj.verificationSummary = `${TIER_LABELS[classification.tier] || classification.tier}: ${judged.filter((r) => r.status === 'pass').length} of ${judged.length} evidence check(s) passed for this ${carrier}.`;
  return obj;
}

// The actions the object card offers on an inspected file, the same list for a
// person and an agent. The buttons are wired by their data-mx-action-button name.
function inspectionActions({ isPdf, provDownload, provUrl, hasEmbedded }) {
  const actions = [{ name: 'download-inspection-json', label: 'inspection.json', verifiability: 'deterministic' }];
  if (isPdf) actions.push({ name: 'download-report-md', label: 'inspection-report.md', verifiability: 'deterministic' });
  if (provDownload) actions.push({ name: 'download-provenance', label: 'provenance-ai-extracted.json', verifiability: 'deterministic' });
  if (provUrl) {
    actions.push({
      name: 'fetch-canonical-provenance',
      label: hasEmbedded ? 'Fetch canonical provenance' : 'Fetch and walk the provenance record',
      target: provUrl,
      verifiability: 'external',
    });
  }
  actions.push({ name: 'inspect-another', label: 'Inspect another file', verifiability: 'deterministic' });
  return actions;
}

// One relationship line per target of every relationship field the object declares.
function relationshipLines(obj, fallbackFrom) {
  const lines = [];
  for (const field of RELATIONSHIP_FIELDS) {
    const raw = obj[field];
    if (!raw) continue;
    const targets = Array.isArray(raw) ? raw : String(raw).split(/,\s*/);
    for (const t of targets) if (t) lines.push(relationshipLine(obj.canonicalUri || fallbackFrom, field, t));
  }
  return lines;
}

// Wire the rendered actions to their handlers.
function wireResultActions(resultsEl, ctx) {
  const { file, baseStem, classification, findings, inspectionJson, provUrl, provStatus } = ctx;
  const onAction = (name, fn) => {
    const btn = resultsEl.querySelector(`[data-mx-action-button="${name}"]`);
    if (btn) btn.addEventListener('click', fn);
  };
  const dropzoneEl = document.querySelector('[data-mx-inspector-dropzone]');
  onAction('inspect-another', () => {
    resultsEl.hidden = true;
    resultsEl.textContent = '';
    hideChain();
    const input = document.querySelector('[data-mx-inspector-input]');
    if (input) input.value = '';
    if (dropzoneEl) {
      dropzoneEl.hidden = false;
      dropzoneEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
  onAction('download-inspection-json', () => {
    downloadBlob(`${baseStem}-inspection.json`, 'application/json', JSON.stringify(inspectionJson, null, 2));
  });
  onAction('export-inspection', () => {
    downloadBlob(`${baseStem}-mx-fields.json`, 'application/json', JSON.stringify(inspectionJson.components, null, 2));
  });
  onAction('download-report-md', () => {
    downloadBlob(`${baseStem}-inspection-report.md`, 'text/markdown', makeReportMarkdown(file, classification, findings));
  });
  onAction('download-provenance', () => {
    downloadBlob(`${baseStem}-provenance-ai-extracted.json`, 'application/json', JSON.stringify(findings.provenance.parsed, null, 2));
  });
  // Rendered as a link (the target is a URL), so the handler takes over the
  // click and walks the record in place; without script the link still resolves.
  onAction('fetch-canonical-provenance', (event) => {
    event.preventDefault();
    fetchAndWalkProvenance(provUrl, provStatus);
  });
}

// Render an inspection as the MX Component Standard's components (component-mx.js):
// signal bars for the verdict, an object card with a provenance badge and the
// actions, a verification panel of the checks, a relationship line per declared
// relationship, an inspector view of every field, and a narrative layer. Exported
// so the jsdom smoke check in tests/test-component-mx.js can render one.
export function renderResults(file, carrier, classification, findings, resultsEl) {
  const tier = classification.tier;
  const isPdf = carrier === 'pdf';
  const pivot = isPdf ? PIVOT_COPY[tier] : (GENERIC_PIVOT[tier] || GENERIC_PIVOT.plain);
  const baseStem = file.name.replace(/\.[^.]+$/, '');
  const inspectedAt = new Date().toISOString();
  const fields = findings.fields || {};
  const provUrlRaw = fields.provenanceUri || fields.provenanceuri || fields.ProvenanceUri || '';
  const provUrl = isHttpUrl(provUrlRaw) ? provUrlRaw.trim() : '';
  const hasEmbedded = Boolean(findings.provenance && findings.provenance.parsed);
  const provDownload = isPdf && hasEmbedded;

  const obj = inspectedObject(file, carrier, classification, findings, inspectedAt);
  obj.actions = inspectionActions({ isPdf, provDownload, provUrl, hasEmbedded });

  const heading = el('h2', { id: 'results-heading', text: 'Inspection result' });
  const verdict = el('p', { class: 'mxc-verdict-line' },
    signalBar('validationStatus', TIER_LABELS[tier] || tier, { styleToken: `token:mx-state-${tier}` }),
    signalBar('carrier', carrier),
    obj.status ? signalBar('status', obj.status) : null,
    el('span', { class: 'tool-verdict-pdf-name', text: file.name }));
  const chainJump = hasEmbedded
    ? el('p', {}, el('a', { class: 'tool-chain-jump', href: '#explore-the-chain', text: 'Walk the evidence chain' }))
    : null;
  const provStatus = el('p', { class: 'tool-prov-url-status', 'data-prov-url-status': '', 'aria-live': 'polite' });
  const inspector = objectInspector(obj, { heading: 'Every MX field this file carries' });
  const grid = gridMount([
    objectCard(obj, { fallbackTitle: file.name, displayMode: 'compact' }),
    verificationPanel(obj, { heading: 'What the inspection checked' }),
    ...relationshipLines(obj, file.name),
    inspector,
  ], { gridUnit: '8px' });
  const note = narrativeLayer(pivot.body, pivot.href, { heading: pivot.headline, contextLabel: pivot.cta });
  note.appendChild(el('p', {}, el('a', { class: 'tool-pivot-cta', href: '/about/contact.html', text: 'Contact us' })));

  renderComponents(resultsEl, [heading, verdict, chainJump, grid, provStatus, note]);
  resultsEl.hidden = false;
  const dropzoneEl = document.querySelector('[data-mx-inspector-dropzone]');
  if (dropzoneEl) dropzoneEl.hidden = true;

  const inspectionJson = {
    inspectedAt,
    file: { name: file.name, size: file.size },
    carrier,
    verdict: tier,
    evidence: classification.evidence,
    fields: findings.fields || null,
    responsiblePerson: findings.responsiblePerson || null,
    components: inspector.mxExport(),
  };
  wireResultActions(resultsEl, { file, baseStem, classification, findings, inspectionJson, provUrl, provStatus });
}

function renderError(resultsEl, message) {
  resultsEl.innerHTML = `<div class="tool-error" role="alert"><strong>Inspection failed.</strong> ${escapeHtml(message)}</div>`;
  resultsEl.hidden = false;
}

async function inspectFile(file, resultsEl, busyEl) {
  hideChain();

  // A bare provenance JSON is the evidence chain itself: parse it and open the
  // chain view directly, with no inspection verdict.
  if (/\.json$/i.test(file.name)) {
    busyEl.textContent = 'Reading provenance…';
    busyEl.hidden = false;
    try {
      const parsed = JSON.parse(await file.text());
      busyEl.hidden = true;
      if (!parsed || typeof parsed !== 'object' || (!('steps' in parsed) && !('schemaVersion' in parsed))) {
        renderError(resultsEl, 'That JSON does not look like an MX provenance record (no steps or schemaVersion).');
        return;
      }
      resultsEl.hidden = true;
      revealChain(file.name, parsed);
    } catch (err) {
      busyEl.hidden = true;
      renderError(resultsEl, `Could not read that provenance JSON: ${err.message}`);
    }
    return;
  }

  const carrier = detectCarrierFromName(file.name);
  if (!carrier) {
    renderError(resultsEl, 'Unsupported file type. Drop a PDF, image (PNG/JPG/WEBP/GIF/AVIF), SVG, HTML, markdown, .mx.yaml sidecar, or a provenance .json.');
    return;
  }

  busyEl.textContent = 'Reading file…';
  busyEl.hidden = false;

  try {
    let findings;
    let classification;
    if (carrier === 'pdf') {
      busyEl.textContent = 'Loading inspector…';
      const pdfjs = await loadPdfJs();
      busyEl.textContent = 'Reading PDF…';
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      ({ findings, classification } = await inspectPdfDoc(pdfDoc));
    } else if (carrier === 'raster') {
      const bytes = new Uint8Array(await file.arrayBuffer());
      ({ findings, classification } = inspectCarrier({ carrier, filename: file.name, bytes }));
    } else {
      const text = await file.text();
      ({ findings, classification } = inspectCarrier({ carrier, filename: file.name, text }));
    }

    busyEl.hidden = true;
    renderResults(file, carrier, classification, findings, resultsEl);

    // Any carrier that embeds a parseable provenance chain (PDF XMP, decorated
    // raster/SVG, or an HTML page) opens the evidence-chain view.
    if (findings.provenance && findings.provenance.parsed) {
      revealChain(file.name, findings.provenance.parsed);
    } else {
      hideChain();
    }
  } catch (err) {
    busyEl.hidden = true;
    renderError(resultsEl, `Could not inspect the file: ${err.message}`);
  }
}

// The FULL-EXPERIENCE URL mode: mx-inspector.html?inspect=<https-url-of-file>
// fetches the named public file and runs the exact pipeline a drop runs -
// verdict tier, evidence table, the MX metadata field table, downloads, and
// the evidence-chain walk - so a link inside a PDF delivers the whole
// inspection in one click in any viewer. The visitor's click IS the explicit
// choice; the URL is echoed while it fetches, and nothing else is sent.
async function inspectFromQueryParam(resultsEl, busyEl) {
  let url = '';
  try {
    url = new URLSearchParams(window.location.search).get('inspect') || '';
  } catch { return false; }
  if (!isHttpUrl(url)) return false;
  const clean = url.trim();
  const name = (() => {
    try { return decodeURIComponent(new URL(clean).pathname.split('/').pop() || 'file'); } catch { return 'file'; }
  })();
  busyEl.textContent = `Fetching ${name} for inspection…`;
  busyEl.hidden = false;
  try {
    const res = await fetch(clean, { credentials: 'omit', redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const blob = await res.blob();
    busyEl.hidden = true;
    const file = new File([blob], name, { type: blob.type });
    await inspectFile(file, resultsEl, busyEl);
  } catch (err) {
    busyEl.hidden = true;
    renderError(resultsEl, `Could not fetch ${escapeHtml(clean)} for inspection: ${err.message}`);
  }
  return true;
}

// The record-only URL mode: mx-inspector.html?prov=<https-url-of-provenance-record>
// fetches the named record and opens the chain walk directly, so a link
// inside a PDF (or anywhere else) reaches the walk in one click in any
// viewer - no embedded PDF JavaScript, no upload, the same fetch the
// "Fetch and walk" button makes. The visitor's click on that link IS the
// explicit choice, so the no-surprise-network-call promise holds; the URL
// is echoed in the results box before anything is fetched.
function walkFromQueryParam(resultsEl) {
  let url = '';
  try {
    url = new URLSearchParams(window.location.search).get('prov') || '';
  } catch { return false; }
  if (!isHttpUrl(url)) return false;
  resultsEl.innerHTML = `
    <h2 id="results-heading">Walking a linked evidence chain</h2>
    <p>This page was opened with a provenance-record link. Fetching the record the link names - your browser reads the public URL directly; nothing else is sent anywhere.</p>
    <p><code>${escapeHtml(url)}</code></p>
    <p class="tool-prov-url-status" data-prov-param-status aria-live="polite"></p>
    <p><a class="tool-chain-jump" href="#explore-the-chain">Walk the evidence chain &darr;</a>
    <button type="button" class="tool-download tool-inspect-another" data-inspect-another>Inspect a file instead</button></p>`;
  resultsEl.hidden = false;

  // The same swap rule as a dropped file: the walk banner REPLACES the
  // dropzone box; the control brings the dropzone back (and drops the ?prov
  // parameter from the address bar so a reload shows the plain inspector).
  const dropzoneEl = document.querySelector('[data-mx-inspector-dropzone]');
  if (dropzoneEl) dropzoneEl.hidden = true;
  const anotherBtn = resultsEl.querySelector('[data-inspect-another]');
  if (anotherBtn) {
    anotherBtn.addEventListener('click', () => {
      resultsEl.hidden = true;
      resultsEl.innerHTML = '';
      hideChain();
      try { window.history.replaceState(null, '', window.location.pathname); } catch { /* address bar keeps the param */ }
      if (dropzoneEl) dropzoneEl.hidden = false;
    });
  }

  fetchAndWalkProvenance(url.trim(), resultsEl.querySelector('[data-prov-param-status]'));
  return true;
}

function init() {
  const dropzone = document.querySelector('[data-mx-inspector-dropzone]');
  const fileInput = document.querySelector('[data-mx-inspector-input]');
  const resultsEl = document.querySelector('[data-mx-inspector-results]');
  const busyEl = document.querySelector('[data-mx-inspector-busy]');
  chainSectionEl = document.querySelector('[data-prov-explorer-section]');

  if (!dropzone || !fileInput || !resultsEl || !busyEl) return;

  // ?inspect= (the whole experience) wins over ?prov= (the chain only).
  inspectFromQueryParam(resultsEl, busyEl).then((handled) => {
    if (!handled) walkFromQueryParam(resultsEl);
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
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
    const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) inspectFile(file, resultsEl, busyEl);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
