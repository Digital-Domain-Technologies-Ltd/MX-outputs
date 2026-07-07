// MX Provenance Explorer - the "Explore" surface of the MX Inspector tool.
//
// Browser-only. This module never imports the detection core (mx-inspector-core.js)
// and never touches pdf.js. It renders a parsed AI-governance provenance object
// (the shape of a .provenance.ai.json sidecar) as the shared accessible popper:
// the same node-blob flow and live JSON tree the blog demo overlay shows, from the
// one shared component (mx-prov-chain.js), so the tool and the overlay cannot drift.
//
// The object arrives one way: the inspector shell (mx-inspector.js) dispatches a
// `mx:provenance` CustomEvent after it finds a parseable provenance chain in the
// dropped file, whatever the carrier (PDF XMP, a decorated raster/SVG/HTML page, or
// a bare `.provenance.ai.json` which is the chain itself). Everything is read
// locally in the browser; nothing leaves the machine.
//
// Values come from arbitrary files, so every value is written with textContent (via
// the shared el helper), never innerHTML.

import { buildChain } from './mx-prov-chain.js';
import { el } from './mx-dom.js';

// ── State ──────────────────────────────────────────────────
let container = null;
let currentData = null;
let currentSource = '';

// ── Pieces ─────────────────────────────────────────────────
function sourceBar() {
  const schema = currentData.schemaVersion || 'unknown';
  const stepCount = Array.isArray(currentData.steps) ? currentData.steps.length : 0;
  const op = currentData.operator || (currentData.responsiblePerson && currentData.responsiblePerson.name) || '';
  const meta = `schema ${schema} - ${stepCount} step(s)${op ? ` - ${op}` : ''}`;
  return el('div', { class: 'prov-sourcebar' },
    el('span', { class: 'prov-source-name', text: currentSource }),
    el('span', { class: 'prov-source-meta', text: meta }));
}

function emptyState() {
  return el('div', { class: 'prov-empty-state' },
    el('p', { text: 'No provenance loaded yet.' }),
    el('p', { text: 'Drop an asset that carries an embedded provenance chain, or a .provenance.ai.json, and it appears here.' }));
}

// ── Render orchestration ───────────────────────────────────
function render() {
  container.replaceChildren();
  if (!currentData) {
    container.appendChild(emptyState());
    return;
  }
  container.appendChild(sourceBar());
  const chain = buildChain(currentData);
  if (chain) {
    container.appendChild(el('p', { class: 'prov-chain-hint', text: 'Click a step to walk the flow: an agent attaches, a human checks. The record on the right scrolls to each step.' }));
    container.appendChild(chain);
  }
}

function load(source, parsed) {
  currentData = parsed;
  currentSource = source;
  render();
}

// ── Init ───────────────────────────────────────────────────
function init() {
  container = document.querySelector('[data-prov-explorer]');
  if (!container) return;
  render();
  document.addEventListener('mx:provenance', (e) => {
    if (e.detail && e.detail.parsed) {
      load(e.detail.source || 'embedded provenance', e.detail.parsed);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
