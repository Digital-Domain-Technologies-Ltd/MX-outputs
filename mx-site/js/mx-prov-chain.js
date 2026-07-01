// mx-prov-chain.js - the shared, accessible AI-provenance chain component.
//
// A single source of truth for the interactive provenance trail, rendered the
// same way wherever it appears: the in-page blog demo overlay (mx-provenance-demo.js)
// and the standalone MX Inspector tool (provenance-explorer.js) both import
// buildChain from here, so the two can never drift - the same discipline the
// detection core (mx-inspector-core.js) already applies to inspection.
//
// The chain is a WAI-ARIA Tabs pattern: each provenance step is a node
// (role=tab); the detail region (role=tabpanel) shows the selected step in full.
// Click / Enter / Space / arrow keys operate it; one tab-stop (roving tabindex).
// Every value comes from an arbitrary file, so every value is written with
// textContent (via the `el` helper), never innerHTML.
//
// @mx:contentType script
// @mx:status active
// @mx:partOf mx-os

export function el(tag, attrs = {}, ...kids) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null) continue;
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else node.setAttribute(k, v);
  }
  for (const kid of kids) {
    if (kid == null) continue;
    node.appendChild(typeof kid === 'string' ? document.createTextNode(kid) : kid);
  }
  return node;
}

// Any human involvement in a step (Gate-47 semantics): a human either acted or
// oversaw. Used for the two-party summary and the human-intervention label.
export function isHumanStep(s) {
  return !!(s && ((s.humanIntervention && s.humanIntervention !== 'none') || s.agent === 'human-committed'));
}

// Who AUTHORED the step - the actor, for node colour. A human authored it when a
// person committed it, overrode, halted, or reviewed after the fact. review-before
// means the AI acted under a human's prior approval, so the actor is the AI.
function isHumanAuthored(s) {
  if (!s) return false;
  if (s.agent === 'human-committed') return true;
  const hi = s.humanIntervention;
  return hi === 'override' || hi === 'halted' || hi === 'review-after';
}

// A short role badge for a step, so the chain reads as a Human-in-Command flow
// (attached / verified / caught a flaw / fixed). The stepId is the deterministic
// signal and is tested first: a catch step's prose names the correction it directed
// and a fix step's prose names the flaw it repaired, so intent alone is ambiguous.
function roleFromText(t, order) {
  for (const [re, label] of order) if (re.test(t)) return label;
  return null;
}
function stepRole(s) {
  const id = (s.stepId || '').toLowerCase();
  const byId = roleFromText(id, [
    [/caught|flaw/, 'caught a flaw'],
    [/correct|fixed|fix|repair/, 'fixed it'],
    [/review|verif/, 'verified'],
    [/author|attach|creat|enrich/, 'attached'],
  ]);
  if (byId) return byId;
  const byIntent = roleFromText((s.intent || '').toLowerCase(), [
    [/correct|fixed|fix\b|repair/, 'fixed it'],
    [/caught|flaw|found|mislocat/, 'caught a flaw'],
    [/review|verif/, 'verified'],
    [/attach|created|enrich|author/, 'attached'],
  ]);
  return byIntent || (isHumanStep(s) ? 'checked' : 'acted');
}

// The provenance trail as an accessible WAI-ARIA Tabs chain: each step is a node
// (role=tab); the detail region (role=tabpanel) shows the selected step in full.
// Click / Enter / Space / arrow keys operate it; one tab-stop (roving tabindex).
export function buildChain(parsed) {
  const steps = (parsed && parsed.steps) || [];
  if (!steps.length) return null;
  const wrap = el('div', { class: 'mx-prov-chainwrap' });
  const tablist = el('div', { class: 'mx-prov-chain', role: 'tablist', 'aria-label': 'AI provenance trail' });
  const panel = el('div', { class: 'mx-prov-detail', id: 'mx-prov-detail', role: 'tabpanel', tabindex: '0' });
  const nodes = steps.map((s, i) => {
    const human = isHumanAuthored(s);
    const node = el('button', {
      class: `mx-prov-node ${human ? 'mx-prov-node-human' : 'mx-prov-node-ai'}`,
      type: 'button', role: 'tab', id: `mx-prov-node-${i}`,
      'aria-selected': 'false', 'aria-controls': 'mx-prov-detail', tabindex: '-1',
    },
      el('span', { class: 'mx-prov-node-agent', text: s.agent || 'agent' }),
      el('span', { class: 'mx-prov-node-role', text: stepRole(s) }));
    node._step = s;
    tablist.appendChild(node);
    return node;
  });

  const select = (idx, moveFocus) => {
    nodes.forEach((n, i) => {
      const sel = i === idx;
      n.setAttribute('aria-selected', sel ? 'true' : 'false');
      n.tabIndex = sel ? 0 : -1;
      n.classList.toggle('mx-prov-node-selected', sel);
    });
    const s = nodes[idx]._step;
    const hasHi = !!(s.humanIntervention && s.humanIntervention !== 'none');
    panel.setAttribute('aria-labelledby', nodes[idx].id);
    panel.textContent = '';
    panel.appendChild(el('p', { class: 'mx-prov-detail-head' },
      el('strong', { text: s.agent || 'agent' }),
      el('span', { class: 'mx-prov-detail-role', text: ` · ${stepRole(s)}` }),
      hasHi ? el('span', { class: 'mx-prov-step-hi', text: ` (human intervention: ${s.humanIntervention})` }) : null));
    if (s.intent) panel.appendChild(el('p', { class: 'mx-prov-detail-intent', text: s.intent }));
    const meta = [];
    if (s.outcome) meta.push(`outcome: ${s.outcome}`);
    if (s.timestamp) { const d = new Date(s.timestamp); if (!isNaN(d)) meta.push(d.toLocaleString()); }
    if (meta.length) panel.appendChild(el('p', { class: 'mx-prov-detail-meta', text: meta.join('  ·  ') }));
    if (moveFocus) nodes[idx].focus();
  };

  tablist.addEventListener('keydown', (e) => {
    const cur = nodes.findIndex((n) => n.tabIndex === 0);
    let next = cur;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (cur + 1) % nodes.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (cur - 1 + nodes.length) % nodes.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = nodes.length - 1;
    else return;
    e.preventDefault();
    select(next, true);
  });
  nodes.forEach((n, i) => n.addEventListener('click', () => select(i, true)));

  // Default to the human-caught-flaw node so the aha lands: the file's own record
  // shows a human catching an AI error and it being fixed.
  let def = steps.findIndex((s) => /caught|flaw|mislocat/.test(`${s.intent || ''} ${s.stepId || ''}`.toLowerCase()));
  if (def < 0) def = 0;
  select(def, false);

  wrap.appendChild(tablist);
  wrap.appendChild(panel);
  return wrap;
}
