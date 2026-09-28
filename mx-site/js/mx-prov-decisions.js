// mx-prov-decisions.js - the Decisions panel of the shared provenance UI.
//
// A step written by recordDecision() (mx-reginald/lib/provenance.js) carries a
// `decision` block: the state it judged by hash, the question and its labels,
// the probabilities, the bar and the action class it was set for, what happened
// next, where a router sent the task, and who confirmed. This panel lists those
// steps and the volume line a router needs: how many decisions, how many
// escalated, how many were acted on below the bar, how many await confirmation,
// and the routed spend by target.
//
// Re-exported from mx-prov-chain.js and called by every surface that calls
// buildChain (the MX Inspector's evidence-chain view and the blog demo overlay),
// so the two cannot drift: the inspector-parity rule in
// scripts/cogs/live-provenance-demo.cog.md. Styled by css/mx-prov-chain.css.
//
// It shows the RECORDED verdict. The publisher's pre-push Gate 128 re-derives
// every verdict from the facts through mx-reginald/lib/decision-logic.cjs, and
// the panel says so rather than implying the browser checked it. Values come
// from arbitrary files, so everything is written with textContent via el().
//
// @mx:contentType script
// @mx:status active
// @mx:partOf mx-os

import { el } from './mx-dom.js';

// The verdict word carries the meaning; the class adds a redundant visual cue.
const VERDICT_TONE = {
  acted: 'ok',
  'escalated-confirmed': 'ok',
  escalated: 'ok',
  'escalated-awaiting': 'warn',
  'acted-below-bar': 'fail',
  inconsistent: 'fail',
  incomplete: 'fail',
};

const pct = (v) => (typeof v === 'number' && Number.isFinite(v) ? `${(v * 100).toFixed(1)}%` : '-');

/** The steps of a parsed provenance record that carry a decision block. */
export function decisionSteps(parsed) {
  return ((parsed && Array.isArray(parsed.steps)) ? parsed.steps : [])
    .filter((s) => s && s.decision && typeof s.decision === 'object');
}

function decisionRow(step) {
  const d = step.decision;
  const v = d.verdict || {};
  const question = (d.question && (d.question.id || d.question.text)) || '-';
  const who = d.confirmation && d.confirmation.by
    ? `${d.confirmation.by}${d.confirmation.outcome ? ` (${d.confirmation.outcome})` : ''}`
    : '-';
  const tone = VERDICT_TONE[v.state] || 'fail';
  return el('tr', {},
    el('td', { text: question }),
    el('td', { text: d.decision == null ? 'none' : String(d.decision) }),
    el('td', { text: pct(d.confidence) }),
    el('td', { text: `${pct(d.bar)} ${d.actionClass || ''}`.trim() }),
    el('td', { text: d.disposition || '-' }),
    el('td', { text: d.route && d.route.to ? d.route.to : '-' }),
    el('td', { text: who }),
    el('td', { class: `mx-prov-verdict mx-prov-verdict-${tone}`, text: v.state || 'no verdict' }));
}

/** The one-line volume view over a set of decision steps. */
export function volumeText(steps) {
  const ds = steps.map((s) => s.decision);
  const escalated = ds.filter((d) => d.disposition && d.disposition !== 'act').length;
  const state = (d) => d.verdict && d.verdict.state;
  const below = ds.filter((d) => state(d) === 'acted-below-bar').length;
  const awaiting = ds.filter((d) => state(d) === 'escalated-awaiting').length;
  const spend = {};
  for (const d of ds) {
    if (!d.route || !d.route.to) continue;
    const usd = d.route.cost && typeof d.route.cost.usd === 'number' ? d.route.cost.usd : 0;
    spend[d.route.to] = (spend[d.route.to] || 0) + usd;
  }
  const parts = [
    `${ds.length} decision(s)`,
    `${pct(ds.length ? escalated / ds.length : 0)} escalated`,
    `${below} acted below the bar`,
    `${awaiting} awaiting confirmation`,
  ];
  const spendText = Object.entries(spend).map(([to, usd]) => `${to} $${usd.toFixed(4)}`).join(', ');
  if (spendText) parts.push(`routed spend: ${spendText}`);
  return parts.join(' - ');
}

/**
 * The Decisions panel for a parsed provenance record, or null when the record
 * carries no decision steps.
 */
export function buildDecisions(parsed) {
  const steps = decisionSteps(parsed);
  if (!steps.length) return null;
  const head = el('tr', {}, ...['Question', 'Answer', 'Confidence', 'Bar', 'Then', 'Routed to', 'Confirmed by', 'Recorded verdict']
    .map((h) => el('th', { scope: 'col', text: h })));
  const table = el('table', { class: 'mx-prov-decisions-table' },
    el('caption', { class: 'mx-prov-sr', text: 'Decisions recorded in this provenance chain' }),
    el('thead', {}, head),
    el('tbody', {}, ...steps.map(decisionRow)));
  return el('section', { class: 'mx-prov-decisions', 'aria-label': 'Decisions' },
    el('h4', { class: 'mx-prov-decisions-h', text: 'Decisions' }),
    el('p', { class: 'mx-prov-decisions-hint', text: 'Each row is a decider call: what it was asked, how sure it was, the bar set for that kind of action, and what happened next. The state and prompt are recorded by hash, never raw. These are the recorded verdicts; the publisher\'s pre-push check re-derives each one from the facts in its row.' }),
    el('p', { class: 'mx-prov-decisions-volume', text: volumeText(steps) }),
    el('div', { class: 'mx-prov-decisions-scroll' }, table));
}
