// MX PDF Inspector — client-side inspection of MX Compatible PDFs.
//
// The visitor drops a PDF on the page. The browser parses it locally via
// pdf.js (served from this site under /js/vendor/pdfjs/). We classify the
// file into one of three tiers (MX Compatible, EAA tagged only, plain),
// render an evidence table, build three downloadable blobs (machine-readable
// JSON, human report, extracted provenance), and surface a tier-specific
// services pitch.
//
// PDF bytes never leave the browser. There is no upload endpoint, and
// no third-party CDN fetch happens at inspection time.
//
// The pure detection + classification pipeline lives in pdf-inspector-core.js
// so the same code can be exercised by tests/test-pdf-inspector.js in Node.
// This file is the browser shell: pdf.js loader, DOM event wiring, results
// rendering, download buttons.

import {
  PIVOT_COPY,
  makeReportMarkdown,
  inspectPdfDoc,
} from './pdf-inspector-core.js';

// Vendored from pdfjs-dist@4.10.38. Files are kept as .js (not .mjs) because
// the Cloudflare worker's content-type map (allaboutv2/cloudflare/files/
// cloudflare-worker.js) does not yet emit application/javascript for .mjs;
// without that header the browser refuses to execute the module.
const PDFJS_URL = '/js/vendor/pdfjs/pdf.min.js';
const PDFJS_WORKER_URL = '/js/vendor/pdfjs/pdf.worker.min.js';

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
    const { findings, classification } = await inspectPdfDoc(pdfDoc);

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
