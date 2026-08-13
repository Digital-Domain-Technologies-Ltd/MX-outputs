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
import { isHumanStep, isHumanAuthored, stepRole, stepCategory, catClass } from './mx-prov-logic.js';

export { el };          // re-exported so callers that build their own DOM share one helper
export { isHumanStep }; // re-exported for the demo overlay's two-party summary

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

// Fill the detail tabpanel with the RECORD's own identity - the root walk
// point that precedes the steps: what this evidence chain is, whose it is,
// which schema governs it, and where it was built.
function fillRootDetail(panel, parsed, labelId) {
  panel.setAttribute('aria-labelledby', labelId);
  panel.textContent = '';
  panel.appendChild(el('p', { class: 'mx-prov-detail-head' },
    el('strong', { text: 'The record' }),
    el('span', { class: 'mx-prov-detail-role', text: ' · root · what this evidence chain is' })));
  const lines = [];
  if (parsed.$schema) lines.push(`schema: ${parsed.$schema}`);
  if (parsed.schemaVersion) lines.push(`schema version: ${parsed.schemaVersion}`);
  if (parsed.auditId) lines.push(`audit: ${parsed.auditId}`);
  if (parsed.target) lines.push(`target: ${parsed.target}`);
  const op = parsed.operator || (parsed.responsiblePerson && parsed.responsiblePerson.name) || '';
  if (op) lines.push(`operator: ${op}`);
  if (parsed.startedAt) { const d = new Date(parsed.startedAt); if (!isNaN(d)) lines.push(`started: ${d.toLocaleString()}`); }
  if (Number.isInteger(parsed.runRevision)) lines.push(`run revision: ${parsed.runRevision}`);
  if (Array.isArray(parsed.parties) && parsed.parties.length) {
    lines.push(`parties: ${parsed.parties.map((p) => p.name || p.role || 'unnamed').join(', ')}`);
  }
  if (Array.isArray(parsed.frameworks) && parsed.frameworks.length) lines.push(`frameworks catalogued: ${parsed.frameworks.length}`);
  const commit = parsed.provenance && parsed.provenance.commit
    && (parsed.provenance.commit.shortSha || parsed.provenance.commit.sha);
  if (commit) lines.push(`built at commit: ${commit}`);
  if (parsed.companion) lines.push(`deterministic companion: ${parsed.companion}`);
  for (const t of lines) panel.appendChild(el('p', { class: 'mx-prov-detail-meta', text: t }));
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

  // The ROOT walk point: the record itself - its schema, audit identity,
  // operator, and build origin - stands first in the flow, before any step.
  // A chain read from the root reads the way a regulator reads it: what IS
  // this record, then what happened under it.
  const rootBlob = el('button', {
    class: 'mx-prov-blob mx-prov-blob-root',
    type: 'button', role: 'tab', id: 'mx-prov-node-root',
    'aria-selected': 'false', 'aria-controls': 'mx-prov-detail', tabindex: '-1',
  },
    el('span', { class: 'mx-prov-blob-dot', 'aria-hidden': 'true', text: '▣' }),
    el('span', { class: 'mx-prov-blob-body' },
      el('span', { class: 'mx-prov-blob-agent', text: 'The record' }),
      el('span', { class: 'mx-prov-cat mx-prov-cat-root', text: 'Root' }),
      el('span', { class: 'mx-prov-blob-role', text: `schema ${parsed.schemaVersion || 'unknown'}` }),
      (parsed.auditId || parsed.target)
        ? el('span', { class: 'mx-prov-blob-topic', text: parsed.auditId || parsed.target })
        : null));
  tablist.appendChild(rootBlob);

  const stepNodes = steps.map((s, i) => {
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
  const nodes = [rootBlob, ...stepNodes];

  const select = (idx, moveFocus) => {
    nodes.forEach((n, i) => {
      const sel = i === idx;
      n.setAttribute('aria-selected', sel ? 'true' : 'false');
      n.tabIndex = sel ? 0 : -1;
      n.classList.toggle('mx-prov-blob-selected', sel);
    });
    const stepIdx = idx - 1; // nodes[0] is the root; steps and anchors are 0-based
    if (idx === 0) {
      fillRootDetail(panel, parsed, rootBlob.id);
    } else {
      fillDetail(panel, nodes[idx]._step, nodes[idx].id);
    }
    stepAnchors.forEach((a, i) => { if (a) a.classList.toggle('mx-prov-json-hit', i === stepIdx); });
    const behavior = prefersReducedMotion() ? 'auto' : 'smooth';
    if (idx === 0) {
      // The root's home in the JSON tree is the top of the record.
      if (jsonRoot.scrollTo) jsonRoot.scrollTo({ top: 0, behavior });
    } else {
      const anchor = stepAnchors[stepIdx];
      if (anchor && anchor.scrollIntoView) {
        anchor.scrollIntoView({ behavior, block: 'nearest' });
      }
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

  // The walk starts at the root: what this record IS comes before what
  // happened under it. The human-caught-flaw aha is one arrow-key away.
  select(0, false);

  flow.appendChild(tablist);
  flow.appendChild(panel);
  popper.appendChild(flow);
  popper.appendChild(jsonRoot);
  return popper;
}
