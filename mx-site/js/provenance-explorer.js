// MX Provenance Explorer - the "Explore" tab of the MX Inspector.
//
// Browser-only. This module never imports the detection core
// (mx-inspector-core.js) and never touches pdf.js. It renders a parsed
// AI-governance provenance object (the same shape as a .provenance.ai.json
// sidecar) as a browsable node list plus a detail panel, so a reader can walk
// the evidence chain step by step without opening raw JSON.
//
// The object arrives one way: the inspector shell (mx-inspector.js) dispatches a
// `mx:provenance` CustomEvent after it finds a parseable provenance chain in the
// dropped file, whatever the carrier (PDF XMP, a decorated raster/SVG/HTML page,
// or a bare `.provenance.ai.json` which is the chain itself). Everything is read
// locally in the browser; nothing leaves the machine.
//
// Values come from arbitrary files, so every value is written with textContent
// (never innerHTML). The DOM is built with the small `h` helper below.

// ── DOM helper ─────────────────────────────────────────────
function h(tag, props, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (v == null) continue;
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k === 'dataset') Object.assign(node.dataset, v);
    else node.setAttribute(k, v);
  }
  for (const child of children.flat()) {
    if (child == null || child === false) continue;
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  }
  return node;
}

// ── Status mapping ─────────────────────────────────────────
const OUTCOME_STATUS = { pass: 'pass', warn: 'warn', fail: 'fail', skipped: 'skipped' };

function statusFor(outcome) {
  return OUTCOME_STATUS[String(outcome || '').toLowerCase()] || 'info';
}

const HASH_KEY = /(sha|hash)/i;

// ── State ──────────────────────────────────────────────────
let container = null;
let currentData = null;
let currentSource = '';
let selectedId = null;

// ── Node model ─────────────────────────────────────────────
function runInfo(parsed) {
  const keys = ['schemaVersion', 'auditId', 'operator', 'target', 'startedAt', 'lastWriteAt', 'lastRunAt', 'runRevision', 'companion', 'frameworksCited'];
  const out = {};
  for (const k of keys) {
    if (parsed[k] !== undefined && parsed[k] !== null) out[k] = parsed[k];
  }
  return out;
}

function buildNodes(parsed) {
  const nodes = [];

  nodes.push({ id: 'run', label: 'Run', sublabel: `schema ${parsed.schemaVersion || '?'}`, status: 'info', data: runInfo(parsed) });

  if (parsed.provenance && typeof parsed.provenance === 'object') {
    const b = parsed.provenance;
    const sub = [b.branch, b.commit && b.commit.shortSha].filter(Boolean).join(' @ ');
    nodes.push({ id: 'build', label: 'Build environment', sublabel: sub, status: 'info', data: b });
  }

  const parties = Array.isArray(parsed.parties) ? parsed.parties : [];
  if (parties.length) {
    nodes.push({ id: 'parties', label: 'Parties', sublabel: `${parties.length}`, status: 'info', data: parties });
  }

  if (parsed.responsiblePerson && typeof parsed.responsiblePerson === 'object') {
    nodes.push({ id: 'rp', label: 'Responsible person', sublabel: parsed.responsiblePerson.name || '', status: 'info', data: parsed.responsiblePerson });
  }

  const frameworks = Array.isArray(parsed.frameworks) ? parsed.frameworks : [];
  if (frameworks.length) {
    nodes.push({ id: 'frameworks', label: 'Frameworks', sublabel: `${frameworks.length}`, status: 'info', data: frameworks });
  }

  const steps = Array.isArray(parsed.steps) ? parsed.steps : [];
  steps.forEach((s, i) => {
    nodes.push({
      id: `step-${i}`,
      label: s.stepId || `step ${i + 1}`,
      sublabel: s.agent || '',
      status: statusFor(s.outcome),
      data: s,
    });
  });

  return nodes;
}

// ── Value rendering (recursive) ────────────────────────────
function renderHash(value) {
  const span = h('span', { class: 'prov-scalar prov-hash', text: String(value), title: 'Click to copy', role: 'button', tabindex: '0' });
  const copy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(String(value)).catch(() => {});
    span.classList.add('is-copied');
    setTimeout(() => span.classList.remove('is-copied'), 900);
  };
  span.addEventListener('click', copy);
  span.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      copy();
    }
  });
  return span;
}

function renderValue(value, keyHint) {
  if (value === null || value === undefined) {
    return h('span', { class: 'prov-scalar prov-null', text: 'null' });
  }

  if (Array.isArray(value)) {
    if (!value.length) return h('span', { class: 'prov-scalar prov-empty', text: '[ ] empty' });
    const open = value.length <= 6 ? '' : null;
    const details = h('details', { class: 'prov-tree', open });
    details.appendChild(h('summary', { text: `${value.length} item(s)` }));
    value.forEach((item, i) => {
      details.appendChild(h('div', { class: 'prov-tree-row' },
        h('span', { class: 'prov-key', text: `[${i}]` }),
        renderValue(item),
      ));
    });
    return details;
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value);
    if (!entries.length) return h('span', { class: 'prov-scalar prov-empty', text: '{ } empty' });
    const dl = h('dl', { class: 'prov-dl' });
    for (const [k, v] of entries) {
      dl.appendChild(h('dt', { text: k }));
      dl.appendChild(h('dd', {}, renderValue(v, k)));
    }
    return dl;
  }

  if (typeof value === 'string' && value.length >= 16 && keyHint && HASH_KEY.test(keyHint)) {
    return renderHash(value);
  }

  return h('span', { class: 'prov-scalar', text: String(value) });
}

// ── Pieces ─────────────────────────────────────────────────
function sourceBar() {
  const schema = currentData.schemaVersion || 'unknown';
  const stepCount = Array.isArray(currentData.steps) ? currentData.steps.length : 0;
  const op = currentData.operator || (currentData.responsiblePerson && currentData.responsiblePerson.name) || '';
  const meta = `schema ${schema} - ${stepCount} step(s)${op ? ` - ${op}` : ''}`;
  return h('div', { class: 'prov-sourcebar' },
    h('span', { class: 'prov-source-name', text: currentSource }),
    h('span', { class: 'prov-source-meta', text: meta }),
  );
}

function legend() {
  const items = [['pass', 'Pass'], ['warn', 'Warn'], ['fail', 'Fail'], ['skipped', 'Skipped'], ['info', 'Info']];
  return h('div', { class: 'prov-legend' },
    ...items.map(([s, lbl]) => h('span', { class: 'prov-legend-item' },
      h('span', { class: `prov-dot is-${s}` }),
      lbl,
    )),
  );
}

function emptyState() {
  return h('div', { class: 'prov-empty-state' },
    h('p', { text: 'No provenance loaded yet.' }),
    h('p', { text: 'Drop an asset that carries an embedded provenance chain, or a .provenance.ai.json, and it appears here.' }),
  );
}

function detailFor(node) {
  return h('div', {},
    h('div', { class: 'prov-detail-head' },
      h('span', { class: `prov-node-status is-${node.status}`, text: node.status }),
      h('h3', { class: 'prov-detail-title', text: node.label }),
    ),
    renderValue(node.data, null),
  );
}

function explorerBody() {
  const nodes = buildNodes(currentData);
  const list = h('div', { class: 'prov-nodelist' });
  const detail = h('div', { class: 'prov-detail', 'aria-live': 'polite' });
  const buttons = new Map();

  function select(node) {
    selectedId = node.id;
    for (const [id, btn] of buttons) btn.classList.toggle('is-selected', id === node.id);
    detail.replaceChildren(detailFor(node));
  }

  for (const node of nodes) {
    const btn = h('button', { type: 'button', class: `prov-node is-${node.status}` },
      h('span', { class: `prov-node-status is-${node.status}`, text: node.status }),
      h('span', { class: 'prov-node-label', text: node.label }),
      node.sublabel ? h('span', { class: 'prov-node-sub', text: node.sublabel }) : null,
    );
    btn.addEventListener('click', () => select(node));
    buttons.set(node.id, btn);
    list.appendChild(btn);
  }

  const grid = h('div', { class: 'prov-grid' }, list, detail);
  const initial = nodes.find((n) => n.id === selectedId) || nodes[0];
  if (initial) select(initial);

  return h('div', {}, legend(), grid);
}

// ── Render orchestration ───────────────────────────────────
function render() {
  container.replaceChildren();
  if (!currentData) {
    container.appendChild(emptyState());
    return;
  }
  container.appendChild(sourceBar());
  container.appendChild(explorerBody());
}

function load(source, parsed) {
  currentData = parsed;
  currentSource = source;
  selectedId = null;
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
