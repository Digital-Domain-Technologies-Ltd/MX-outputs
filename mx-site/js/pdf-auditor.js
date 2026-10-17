// PDF auditor - the browser shell for recording an approval inside a PDF.
//
// The operator drops a PDF, reads it in the preview, and records a decision: who,
// approved / changes requested / rejected, when, and notes. pdf-auditor-core.js writes
// that into the PDF's XMP as an incremental update, with the SHA-256 and length of
// the bytes that were reviewed, and the approved file downloads under its own name.
//
// Bytes never leave the browser: there is no upload endpoint and no network call.
// The approver's name is remembered in this browser only, as a convenience.

import { approvePdf, readApproval, sha256Hex, DECISIONS } from './pdf-auditor-core.js';
import { el } from './mx-dom.js';

const NAME_KEY = 'mx-pdf-auditor:approver';
const DECISION_LABELS = { approved: 'Approved', 'changes-requested': 'Changes requested', rejected: 'Rejected' };

let previewUrl = null;

function remembered() {
  try { return localStorage.getItem(NAME_KEY) || ''; } catch { return ''; }
}
function remember(name) {
  try { localStorage.setItem(NAME_KEY, name); } catch { /* private window: nothing kept */ }
}

function sizeLabel(n) {
  return n >= 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`;
}

/** The current local time as a datetime-local value. */
function localNow() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 16);
}

function fieldRows(fields) {
  const rows = [
    ['Decision', DECISION_LABELS[fields.ApprovalDecision] || fields.ApprovalDecision],
    ['Approved by', fields.ApprovedBy],
    ['Date', fields.ApprovedAt],
    ['Notes', fields.ApprovalNotes],
    ['Approved bytes', fields.ApprovedLength ? `${fields.ApprovedLength} bytes` : null],
    ['SHA-256', fields.ApprovedSha256],
  ].filter(([, v]) => v);
  return el('table', { class: 'tool-evidence' },
    el('tbody', {}, ...rows.map(([k, v]) => el('tr', {}, el('th', { scope: 'row', text: k }), el('td', { text: v })))));
}

function approvalStatus(approval) {
  if (!approval.bytesMatch) return { cls: 'is-fail', text: 'The approved bytes do not match the recorded hash: this file was changed inside the part that was approved.' };
  if (approval.changedAfter) return { cls: 'is-warn', text: 'The approved bytes match, but more was added to the file after the approval. Review what was added.' };
  return { cls: 'is-pass', text: 'The approved bytes match the recorded hash, and nothing was added after the approval.' };
}

function approvalPanel(approval, heading) {
  const status = approvalStatus(approval);
  return el('section', { class: 'tool-approval', 'data-mx-approval': approval.fields.ApprovalDecision },
    el('h3', { text: heading }),
    el('p', { class: `tool-approval-status ${status.cls}`, text: status.text }),
    fieldRows(approval.fields));
}

function renderError(resultsEl, message) {
  resultsEl.replaceChildren(el('p', { class: 'tool-error', role: 'alert', text: message }));
  resultsEl.hidden = false;
}

function reset(resultsEl, dropzoneEl) {
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = null;
  resultsEl.hidden = true;
  resultsEl.replaceChildren();
  dropzoneEl.hidden = false;
}

function download(bytes, name) {
  const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
  const a = el('a', { href: url, download: name });
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

function approvalForm(onSubmit) {
  const name = el('input', { type: 'text', name: 'approvedBy', required: 'required', autocomplete: 'name', value: remembered() });
  const decision = el('select', { name: 'decision' },
    ...DECISIONS.map((d) => el('option', { value: d, text: DECISION_LABELS[d] || d })));
  const when = el('input', { type: 'datetime-local', name: 'approvedAt', required: 'required', value: localNow() });
  const notes = el('textarea', { name: 'notes', rows: '4', placeholder: 'What you checked, and anything the publisher must change or know.' });
  const status = el('p', { class: 'tool-approval-busy', 'aria-live': 'polite' });
  const button = el('button', { type: 'submit', class: 'tool-download', text: 'Record the decision and download the PDF' });
  const form = el('form', { class: 'tool-approval-form' },
    el('label', {}, 'Approver', name),
    el('label', {}, 'Decision', decision),
    el('label', {}, 'Date and time', when),
    el('label', {}, 'Notes', notes),
    button, status);
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    button.disabled = true;
    status.textContent = 'Writing the approval into the PDF...';
    try {
      await onSubmit({ approvedBy: name.value, decision: decision.value, approvedAt: new Date(when.value).toISOString(), notes: notes.value });
      remember(name.value.trim());
      status.textContent = '';
    } catch (err) {
      status.textContent = `Not written: ${err.message}`;
      button.disabled = false;
    }
  });
  return form;
}

async function auditFile(file, resultsEl, dropzoneEl, busyEl) {
  if (!/\.pdf$/i.test(file.name) && file.type !== 'application/pdf') {
    renderError(resultsEl, 'Drop a PDF. The auditor records approvals in PDF files only.');
    return;
  }
  busyEl.textContent = 'Reading the PDF...';
  busyEl.hidden = false;
  let bytes;
  let existing;
  let sha;
  try {
    bytes = new Uint8Array(await file.arrayBuffer());
    sha = await sha256Hex(bytes);
    existing = await readApproval(bytes);
  } catch (err) {
    busyEl.hidden = true;
    renderError(resultsEl, `This PDF cannot be approved here: ${err.message}`);
    return;
  }
  busyEl.hidden = true;
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));

  const another = el('button', { type: 'button', class: 'tool-download tool-inspect-another', text: 'Audit another PDF' });
  another.addEventListener('click', () => reset(resultsEl, dropzoneEl));

  const outcome = el('div', { class: 'tool-approval-outcome', 'aria-live': 'polite' });
  const form = approvalForm(async (input) => {
    const result = await approvePdf(bytes, input);
    const back = await readApproval(result.bytes);
    if (!back || !back.bytesMatch || back.changedAfter) throw new Error('the written file did not read back as approved; nothing was downloaded');
    download(result.bytes, file.name);
    form.hidden = true;
    outcome.replaceChildren(
      approvalPanel(back, 'Decision recorded'),
      el('p', { text: `${file.name} has downloaded with the decision inside it. Its first ${bytes.length} bytes are the file you reviewed, unchanged; the decision was appended after them. Publish the downloaded file.` }),
      ...result.warnings.map((w) => el('p', { class: 'tool-approval-status is-warn', text: w })),
    );
  });

  resultsEl.replaceChildren(
    el('h2', { id: 'results-heading', text: file.name }),
    el('p', { class: 'tool-approval-meta', text: `${sizeLabel(bytes.length)} - SHA-256 ${sha}` }),
    existing ? approvalPanel(existing, 'This PDF already records a decision') : el('p', { text: 'This PDF records no decision yet.' }),
    el('iframe', { class: 'tool-approval-preview', src: previewUrl, title: `Preview of ${file.name}` }),
    el('h3', { text: existing ? 'Record a new decision' : 'Record a decision' }),
    el('p', { text: 'Read the document in the preview first. The decision covers exactly the bytes shown here.' }),
    form,
    outcome,
    el('p', {}, another),
  );
  resultsEl.hidden = false;
  dropzoneEl.hidden = true;
}

function init() {
  const dropzone = document.querySelector('[data-pdf-auditor-dropzone]');
  const input = document.querySelector('[data-pdf-auditor-input]');
  const resultsEl = document.querySelector('[data-pdf-auditor-results]');
  const busyEl = document.querySelector('[data-pdf-auditor-busy]');
  if (!dropzone || !input || !resultsEl || !busyEl) return;

  input.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) auditFile(file, resultsEl, dropzone, busyEl);
    input.value = '';
  });
  ['dragenter', 'dragover'].forEach((ev) => dropzone.addEventListener(ev, (e) => {
    e.preventDefault();
    dropzone.classList.add('is-dragover');
  }));
  ['dragleave', 'drop'].forEach((ev) => dropzone.addEventListener(ev, (e) => {
    e.preventDefault();
    dropzone.classList.remove('is-dragover');
  }));
  dropzone.addEventListener('drop', (e) => {
    const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) auditFile(file, resultsEl, dropzone, busyEl);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
