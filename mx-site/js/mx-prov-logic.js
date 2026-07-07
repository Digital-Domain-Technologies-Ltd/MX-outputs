// mx-prov-logic.js - the pure, DOM-free classification logic for the provenance
// popper. Extracted from mx-prov-chain.js so it can be unit-tested in Node without
// a browser, and so any surface that needs the same Human-in-Command reading of a
// step (actor, role, category) shares one source. No document, no DOM.
//
// The reading is mechanical, honest to the record, and the same everywhere:
//  - isHumanStep: any human involvement (Gate-47 semantics - acted or oversaw).
//  - isHumanAuthored: WHO authored the step (the actor, for blob colour).
//  - stepRole: a short badge, stepId-first then intent.
//  - stepCategory: the three-way chip (AI action / Human intervention / Approval).
//
// @mx:contentType script
// @mx:status active
// @mx:partOf mx-os

// Any human involvement in a step: a human either acted or oversaw. Used for the
// two-party summary and the human-intervention label.
export function isHumanStep(s) {
  return !!(s && ((s.humanIntervention && s.humanIntervention !== 'none') || s.agent === 'human-committed'));
}

// Who AUTHORED the step - the actor, for blob colour. A human authored it when a
// person committed it, overrode, halted, or reviewed after the fact. review-before
// means the AI acted under a human's prior approval, so the actor is the AI.
export function isHumanAuthored(s) {
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
export function stepRole(s) {
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
export function stepCategory(s) {
  const hi = s.humanIntervention;
  if (hi === 'override' || hi === 'halted') return 'Human intervention';
  const role = stepRole(s);
  if (isHumanAuthored(s) && role === 'caught a flaw') return 'Human intervention';
  if (role === 'verified' || hi === 'review-after') return 'Approval';
  return 'AI action';
}

export function catClass(cat) {
  if (cat === 'Human intervention') return 'human';
  if (cat === 'Approval') return 'approval';
  return 'ai';
}
