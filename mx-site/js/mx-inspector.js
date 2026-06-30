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

function evidenceTable(classification) {
  const rows = classification.evidence.map((row) => `
    <tr>
      <td>${escapeHtml(row.label)}</td>
      <td class="tool-evidence-status is-${row.status}">${row.status.toUpperCase()}</td>
      <td class="tool-evidence-detail">${escapeHtml(row.detail)}</td>
    </tr>
  `).join('');
  return `
    <table class="tool-evidence" aria-label="Evidence findings">
      <thead><tr><th>Check</th><th>Status</th><th>Detail</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function metadataTable(fields) {
  const keys = Object.keys(fields || {});
  if (!keys.length) return '';
  const rows = keys.map((k) => `
    <tr><td>${escapeHtml(k)}</td><td class="tool-evidence-detail">${escapeHtml(fields[k])}</td></tr>
  `).join('');
  return `
    <h3>MX metadata</h3>
    <table class="tool-evidence" aria-label="MX metadata fields">
      <thead><tr><th>Field</th><th>Value</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function renderResults(file, carrier, classification, findings, resultsEl) {
  const tier = classification.tier;
  const verdictClass = `tool-verdict is-${tier === 'eaa-tagged' ? 'eaa' : tier}`;
  const isPdf = carrier === 'pdf';
  const pivot = isPdf ? PIVOT_COPY[tier] : (GENERIC_PIVOT[tier] || GENERIC_PIVOT.plain);
  const baseStem = file.name.replace(/\.[^.]+$/, '');

  const provDownload = isPdf && findings.provenance && findings.provenance.present && findings.provenance.parsed;

  resultsEl.innerHTML = `
    <h2 id="results-heading">Inspection result</h2>
    <p>
      <span class="${verdictClass}">${TIER_LABELS[tier] || tier}</span>
      <span class="tool-verdict-pdf-name">${escapeHtml(file.name)} <small>(${escapeHtml(carrier)})</small></span>
    </p>

    ${evidenceTable(classification)}
    ${isPdf ? '' : metadataTable(findings.fields)}

    <h3>Downloads</h3>
    <div class="tool-downloads" id="tool-downloads">
      <button type="button" class="tool-download" data-download="json">inspection.json</button>
      ${isPdf ? '<button type="button" class="tool-download" data-download="md">inspection-report.md</button>' : ''}
      ${provDownload ? '<button type="button" class="tool-download" data-download="provenance">provenance-ai-extracted.json</button>' : ''}
    </div>

    <div class="tool-pivot">
      <h3>${escapeHtml(pivot.headline)}</h3>
      <p>${escapeHtml(pivot.body)}</p>
      <p>
        <a class="tool-pivot-cta" href="${pivot.href}">${escapeHtml(pivot.cta)}</a>
        <a class="tool-pivot-cta" href="/about/contact.html" style="margin-left: 0.5rem;">Contact us</a>
      </p>
    </div>
  `;
  resultsEl.hidden = false;

  const inspectionJson = {
    inspectedAt: new Date().toISOString(),
    file: { name: file.name, size: file.size },
    carrier,
    verdict: tier,
    evidence: classification.evidence,
    fields: findings.fields || null,
    responsiblePerson: findings.responsiblePerson || null,
  };

  resultsEl.querySelector('[data-download="json"]').addEventListener('click', () => {
    downloadBlob(`${baseStem}-inspection.json`, 'application/json', JSON.stringify(inspectionJson, null, 2));
  });

  const mdBtn = resultsEl.querySelector('[data-download="md"]');
  if (mdBtn) {
    mdBtn.addEventListener('click', () => {
      downloadBlob(`${baseStem}-inspection-report.md`, 'text/markdown', makeReportMarkdown(file, classification, findings));
    });
  }

  const provBtn = resultsEl.querySelector('[data-download="provenance"]');
  if (provBtn) {
    provBtn.addEventListener('click', () => {
      downloadBlob(`${baseStem}-provenance-ai-extracted.json`, 'application/json', JSON.stringify(findings.provenance.parsed, null, 2));
    });
  }
}

function renderError(resultsEl, message) {
  resultsEl.innerHTML = `<div class="tool-error" role="alert"><strong>Inspection failed.</strong> ${escapeHtml(message)}</div>`;
  resultsEl.hidden = false;
}

async function inspectFile(file, resultsEl, busyEl) {
  const carrier = detectCarrierFromName(file.name);
  if (!carrier) {
    renderError(resultsEl, 'Unsupported file type. Drop a PDF, image (PNG/JPG/WEBP/GIF/AVIF), SVG, HTML, markdown, or .mx.yaml sidecar.');
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

    if (carrier === 'pdf' && findings.provenance && findings.provenance.parsed) {
      document.dispatchEvent(new CustomEvent('mx:provenance', {
        detail: { source: file.name, parsed: findings.provenance.parsed },
      }));
    }
  } catch (err) {
    busyEl.hidden = true;
    renderError(resultsEl, `Could not inspect the file: ${err.message}`);
  }
}

function init() {
  const dropzone = document.querySelector('[data-mx-inspector-dropzone]');
  const fileInput = document.querySelector('[data-mx-inspector-input]');
  const resultsEl = document.querySelector('[data-mx-inspector-results]');
  const busyEl = document.querySelector('[data-mx-inspector-busy]');

  if (!dropzone || !fileInput || !resultsEl || !busyEl) return;

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
