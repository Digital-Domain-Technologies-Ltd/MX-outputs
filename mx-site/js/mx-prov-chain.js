// mx-prov-chain.js - the shared, accessible AI-provenance popper.
//
// A single source of truth for the interactive provenance trail, rendered the
// same way wherever it appears: the in-page blog demo overlay (mx-provenance-demo.js)
// and the standalone MX Inspector tool (provenance-explorer.js) both import
// buildChain from here, so the two can never drift.
//
// The popper has two panels. Left: a flow of node "blobs", one per step, coloured
// by actor (AI/agent vs human) with a shape cue so colour is never the only signal,
// each tagged with a category chip (AI action / Human intervention / Approval) and
// its role (attached / verified / caught a flaw / fixed it). Hover, keyboard focus,
// or a tap grows the blob to reveal the step's topic; the authoritative detail also
// lands in one role=tabpanel region for assistive tech. Right: the whole record as a
// collapsible JSON tree (mx-json-tree.js) that scrolls to and highlights the active
// step's object. The blobs are a WAI-ARIA tablist (roving tabindex, arrow keys);
// prefers-reduced-motion turns off the grow and the smooth scroll.
//
// @mx:contentType script
// @mx:status active
// @mx:partOf mx-os

import { el } from './mx-dom.js';
import { buildJsonTree } from './mx-json-tree.js';

export { el }; // re-exported so callers that build their own DOM share one helper

// Any human involvement in a step (Gate-47 semantics): a human either acted or
// oversaw. Used for the two-party summary and the human-intervention label.
export function isHumanStep(s) {
  return !!(s && ((s.humanIntervention && s.humanIntervention !== 'none') || s.agent === 'human-committed'));
}

// Who AUTHORED the step - the actor, for blob colour. A human authored it when a
// person committed it, overrode, halted, or reviewed after the fact. review-before
// means the AI acted under a human's prior approval, so the actor is the AI.
function isHumanAuthored(s) {
  if (!s) return false;
  if (s.agent === 'human-committed') return true;
  const hi = s.humanIntervention;
  return hi === 'override' || hi === 'halted' || hi === 'review-after';
}

// A short role badge for a step. The stepId is the deterministic signal and is
// tested first: a catch step's prose names the correction it directed and a fix
// step's prose names the flaw it repaired, so intent alone is ambiguous.
function roleFromText(t, order) {
  for (const [re, label] of order) if (re.test(t)) return label;
  return null;
}
function stepRole(s) {
  const id = (s.stepId || '').toLowerCase();
  const byId = roleFromText(id, [
    [/caught|flaw/, 'caught a flaw'],
    [/correct|fixed|fix|repair/, 'fixed it'],
    [/publish|released?/, 'published'],
    [/review|verif/, 'verified'],
    [/author|attach|creat|enrich/, 'attached'],
  ]);
  if (byId) return byId;
  const byIntent = roleFromText((s.intent || '').toLowerCase(), [
    [/correct|fixed|fix\b|repair/, 'fixed it'],
    [/caught|flaw|found|mislocat/, 'caught a flaw'],
    [/publish|released\b/, 'published'],
    [/review|verif/, 'verified'],
    [/attach|created|enrich|author/, 'attached'],
  ]);
  return byIntent || (isHumanStep(s) ? 'checked' : 'acted');
}

// The three-way category shown beside a blob, derived honestly from the record.
// A human taking control (override/halted) or catching a flaw is Human intervention;
// a human verifying or reviewing after is Approval; an AI actor otherwise is an
// AI action (so an agent attaching and an agent fixing both read AI action).
function stepCategory(s) {
  const hi = s.humanIntervention;
  if (hi === 'override' || hi === 'halted') return 'Human intervention';
  const role = stepRole(s);
  if (isHumanAuthored(s) && role === 'caught a flaw') return 'Human intervention';
  if (role === 'verified' || hi === 'review-after') return 'Approval';
  return 'AI action';
}
function catClass(cat) {
  if (cat === 'Human intervention') return 'human';
  if (cat === 'Approval') return 'approval';
  return 'ai';
}

// Fill the single detail tabpanel with a step's full record (the accessible,
// no-hover baseline; the visual grow-to-reveal on the blob mirrors the topic).
function fillDetail(panel, s, labelId) {
  const hasHi = !!(s.humanIntervention && s.humanIntervention !== 'none');
  panel.setAttribute('aria-labelledby', labelId);
  panel.textContent = '';
  panel.appendChild(el('p', { class: 'mx-prov-detail-head' },
    el('strong', { text: s.agent || 'agent' }),
    el('span', { class: 'mx-prov-detail-role', text: ` · ${stepCategory(s)} · ${stepRole(s)}` }),
    hasHi ? el('span', { class: 'mx-prov-step-hi', text: ` (human intervention: ${s.humanIntervention})` }) : null));
  if (s.intent) panel.appendChild(el('p', { class: 'mx-prov-detail-intent', text: s.intent }));
  const meta = [];
  if (s.outcome) meta.push(`outcome: ${s.outcome}`);
  if (s.timestamp) { const d = new Date(s.timestamp); if (!isNaN(d)) meta.push(d.toLocaleString()); }
  if (meta.length) panel.appendChild(el('p', { class: 'mx-prov-detail-meta', text: meta.join('  ·  ') }));
}

function prefersReducedMotion() {
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

// The provenance trail as an accessible two-panel popper. Left: blob flow (tablist)
// plus a detail tabpanel. Right: the JSON tree. Click / Enter / Space / tap / arrow
// keys operate the blobs; selecting one fills the detail and scrolls the JSON tree
// to that step's object.
export function buildChain(parsed) {
  const steps = (parsed && parsed.steps) || [];
  if (!steps.length) return null;

  const popper = el('div', { class: 'mx-prov-popper' });
  const flow = el('div', { class: 'mx-prov-flow' });
  const tablist = el('div', { class: 'mx-prov-blobs', role: 'tablist', 'aria-label': 'AI provenance trail' });
  const panel = el('div', { class: 'mx-prov-detail', id: 'mx-prov-detail', role: 'tabpanel', tabindex: '0' });

  const { root: jsonRoot, stepAnchors } = buildJsonTree(parsed);
  jsonRoot.classList.add('mx-prov-json');

  const nodes = steps.map((s, i) => {
    const human = isHumanAuthored(s);
    const cat = stepCategory(s);
    const blob = el('button', {
      class: `mx-prov-blob ${human ? 'mx-prov-blob-human' : 'mx-prov-blob-ai'}`,
      type: 'button', role: 'tab', id: `mx-prov-node-${i}`,
      'aria-selected': 'false', 'aria-controls': 'mx-prov-detail', tabindex: '-1',
    },
      el('span', { class: 'mx-prov-blob-dot', 'aria-hidden': 'true', text: human ? '◇' : '◆' }),
      el('span', { class: 'mx-prov-blob-body' },
        el('span', { class: 'mx-prov-blob-agent', text: s.agent || 'agent' }),
        el('span', { class: `mx-prov-cat mx-prov-cat-${catClass(cat)}`, text: cat }),
        el('span', { class: 'mx-prov-blob-role', text: stepRole(s) }),
        s.intent ? el('span', { class: 'mx-prov-blob-topic', text: s.intent }) : null));
    blob._step = s;
    tablist.appendChild(blob);
    return blob;
  });

  const select = (idx, moveFocus) => {
    nodes.forEach((n, i) => {
      const sel = i === idx;
      n.setAttribute('aria-selected', sel ? 'true' : 'false');
      n.tabIndex = sel ? 0 : -1;
      n.classList.toggle('mx-prov-blob-selected', sel);
    });
    fillDetail(panel, nodes[idx]._step, nodes[idx].id);
    stepAnchors.forEach((a, i) => { if (a) a.classList.toggle('mx-prov-json-hit', i === idx); });
    const anchor = stepAnchors[idx];
    if (anchor && anchor.scrollIntoView) {
      anchor.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'nearest' });
    }
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

  // Default to the human-caught-flaw step so the aha lands: the file's own record
  // shows a human catching an AI error and it being fixed.
  let def = steps.findIndex((s) => /caught|flaw|mislocat/.test(`${s.intent || ''} ${s.stepId || ''}`.toLowerCase()));
  if (def < 0) def = 0;
  select(def, false);

  flow.appendChild(tablist);
  flow.appendChild(panel);
  popper.appendChild(flow);
  popper.appendChild(jsonRoot);
  return popper;
}
