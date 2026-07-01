// mx-json-tree.js - the shared collapsible JSON-tree renderer for the provenance UI.
//
// Renders a parsed provenance record (or any JSON object) as a browsable,
// collapsible tree. The popper (mx-prov-chain.js) shows it in the right panel and
// scrolls to and highlights a step's object as the reader moves along the chain;
// the standalone MX Inspector tool renders the same tree. One Source: this is the
// single tree renderer, shared with hash-value click-to-copy.
//
// Values come from an arbitrary file, so every value is written with textContent
// (via el), never innerHTML.
//
// @mx:contentType script
// @mx:status active
// @mx:partOf mx-os

import { el } from './mx-dom.js';

const HASH_KEY = /(sha|hash)/i;

// A long hash-like string becomes a click-to-copy chip.
function renderHash(value) {
  const span = el('span', { class: 'mx-json-hash', text: String(value), title: 'Click to copy', role: 'button', tabindex: '0' });
  const copy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(String(value)).catch(() => {});
    span.classList.add('is-copied');
    setTimeout(() => span.classList.remove('is-copied'), 900);
  };
  span.addEventListener('click', copy);
  span.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copy(); }
  });
  return span;
}

// Recursively render a value: arrays and objects as collapsible nodes, scalars as
// text, long *sha*/*hash* strings as copy chips.
function renderValue(value, keyHint) {
  if (value === null || value === undefined) {
    return el('span', { class: 'mx-json-scalar mx-json-null', text: 'null' });
  }
  if (Array.isArray(value)) {
    if (!value.length) return el('span', { class: 'mx-json-scalar mx-json-empty', text: '[ ] empty' });
    const details = el('details', { class: 'mx-json-node', open: value.length <= 8 ? '' : null });
    details.appendChild(el('summary', { text: `${value.length} item(s)` }));
    value.forEach((item, i) => {
      details.appendChild(el('div', { class: 'mx-json-row' },
        el('span', { class: 'mx-json-key', text: `[${i}]` }),
        renderValue(item)));
    });
    return details;
  }
  if (typeof value === 'object') {
    const entries = Object.entries(value);
    if (!entries.length) return el('span', { class: 'mx-json-scalar mx-json-empty', text: '{ } empty' });
    const dl = el('dl', { class: 'mx-json-dl' });
    for (const [k, v] of entries) {
      dl.appendChild(el('dt', { class: 'mx-json-key', text: k }));
      dl.appendChild(el('dd', {}, renderValue(v, k)));
    }
    return dl;
  }
  if (typeof value === 'string' && value.length >= 16 && keyHint && HASH_KEY.test(keyHint)) {
    return renderHash(value);
  }
  return el('span', { class: 'mx-json-scalar', text: String(value) });
}

// Render the whole record as a collapsible tree. Returns the root element plus an
// anchor per step object (stepAnchors[i] is the DOM element for steps[i]), so the
// caller can scroll to and highlight steps[i] when the reader selects that blob.
export function buildJsonTree(record) {
  const stepAnchors = [];
  const root = el('div', { class: 'mx-json-tree', tabindex: '0', role: 'region', 'aria-label': 'Raw provenance record' });
  const rec = record || {};
  const dl = el('dl', { class: 'mx-json-dl' });
  for (const [k, v] of Object.entries(rec)) {
    dl.appendChild(el('dt', { class: 'mx-json-key', text: k }));
    if (k === 'steps' && Array.isArray(v)) {
      const details = el('details', { class: 'mx-json-node', open: '' });
      details.appendChild(el('summary', { text: `${v.length} step(s)` }));
      v.forEach((step, i) => {
        const stepEl = el('div', { class: 'mx-json-row mx-json-step', id: `mx-json-step-${i}` },
          el('span', { class: 'mx-json-key', text: `[${i}]` }),
          renderValue(step));
        stepAnchors[i] = stepEl;
        details.appendChild(stepEl);
      });
      dl.appendChild(el('dd', {}, details));
    } else {
      dl.appendChild(el('dd', {}, renderValue(v, k)));
    }
  }
  root.appendChild(dl);
  return { root, stepAnchors };
}
