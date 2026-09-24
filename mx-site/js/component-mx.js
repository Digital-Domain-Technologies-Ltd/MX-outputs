// component-mx.js - the MX component library for the site.
//
// The MX Component Standard (mx-canon/ssot/papers/mx-component-standard.md)
// names the unit in which an MX-described object reaches a reader: a card, a
// badge, a panel, an inspector view. This module renders those components from
// a plain object of MX fields so the human sees the metadata and an agent parsing
// the DOM reads the same values. Every renderer:
//
//   - builds DOM through the shared el() helper (textContent, never innerHTML);
//   - sets data-mx-component="<kind>" on its root;
//   - mirrors each field it shows as a data-mx-<field> attribute (the kebab form
//     of the dictionary name: displayMode -> data-mx-display-mode);
//   - reports each trust signal on its own (attestation, currency, freshness,
//     corroboration) and never a combined score;
//   - conveys a state in text before any styling token or motion.
//
// The component family's fields are core MX (Appendix M section 22.AA). The
// page-level reader, readPageMetadata(), reuses the inspector core's HTML
// extractor so the tool and the page parse a <head> the same way.
//
// @mx:contentType script
// @mx:status active
// @mx:partOf mx-os
// @mx:purpose Render the MX Component Standard's components from MX fields, mirrored into the DOM for agents.

import { el } from './mx-dom.js';
import { extractHtmlMx, extractProvenanceFromCarrier } from './mx-inspector-core.js';

export const COMPONENT_KINDS = Object.freeze([
  'provenanceBadge', 'objectCard', 'relationshipLine', 'verificationPanel',
  'narrativeLayer', 'gridMount', 'signalBar', 'objectInspector',
]);

export const TRUST_SIGNALS = Object.freeze(['attestation', 'currency', 'freshness', 'corroboration']);

export const RELATIONSHIP_FIELDS = Object.freeze([
  'buildsOn', 'derivedFrom', 'partOf', 'supersedes', 'supersededBy', 'refersTo', 'relatedTo',
]);

const IDENTITY_FIELDS = ['title', 'description', 'canonicalUri', 'version', 'created', 'modified', 'type'];
const PROVENANCE_FIELDS = ['authorship', 'generatedBy', 'provenanceUri', 'author', 'responsiblePerson'];
const TRUST_FIELDS = ['attestation', 'integritySignature', 'trustLevel', 'corroboratedBy', 'contestedBy'];
const REUSE_FIELDS = ['license', 'contentPolicy', 'attribution', 'aiUsageDeclarationUri', 'status', 'validationStatus', 'expires'];

// ── Helpers ────────────────────────────────────────────────

/** The data-attribute name for a dictionary field: displayMode -> display-mode, barState.value -> bar-state-value. */
export function dataName(field) {
  return String(field)
    .replace(/^x-mx-/, 'x-')
    .replace(/[.[\]]+/g, '-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function isPresent(v) {
  if (v === null || v === undefined) return false;
  if (typeof v === 'string') return v.trim() !== '';
  if (Array.isArray(v)) return v.length > 0;
  return true;
}

/** A field's value as text, the same text a human reads and an agent parses. */
export function valueText(v) {
  if (!isPresent(v)) return '';
  if (Array.isArray(v)) return v.map(valueText).filter(Boolean).join(', ');
  if (typeof v === 'object') {
    if (typeof v.name === 'string') return v.name;
    return JSON.stringify(v);
  }
  return String(v);
}

function mirror(node, field, value) {
  if (!isPresent(value)) return node;
  node.setAttribute(`data-mx-${dataName(field)}`, valueText(value));
  return node;
}

function root(kind, tag, extraClass) {
  return el(tag, {
    class: ['mxc', `mxc-${dataName(kind)}`, extraClass].filter(Boolean).join(' '),
    'data-mx-component': kind,
  });
}

function list(items) {
  return items.map(valueText).filter(Boolean);
}

function definitionList(pairs, cls) {
  const dl = el('dl', { class: cls || 'mxc-fields' });
  for (const [label, value, field] of pairs) {
    if (!isPresent(value)) continue;
    const dt = el('dt', { text: label });
    const dd = el('dd');
    if (typeof value === 'string' && /^https?:\/\//.test(value)) {
      dd.appendChild(el('a', { href: value, rel: 'noopener', text: value }));
    } else {
      dd.textContent = valueText(value);
    }
    if (field) dd.setAttribute('data-mx-field', field);
    dl.appendChild(dt);
    dl.appendChild(dd);
  }
  return dl;
}

// ── Trust signals ──────────────────────────────────────────

/**
 * The four trust signals, each answered on its own. Attestation and currency
 * are read from the object; freshness is a registry property and is reported
 * as not checked unless the caller supplies it; corroboration counts the
 * authoritative sources the object declares, with contested claims named.
 */
export function trustSignals(obj = {}, opts = {}) {
  const corroborated = list([].concat(obj['corroboratedBy'] || []));
  const contested = list([].concat(obj['contestedBy'] || []));
  let attestation = 'not declared';
  if (isPresent(obj.attestation)) attestation = `attested (${valueText(obj.attestation)})`;
  else if (isPresent(obj.integritySignature)) attestation = 'signed, attestation not declared';
  let currency = 'not declared';
  if (isPresent(obj.supersededBy)) currency = `superseded by ${valueText(obj.supersededBy)}`;
  else if (isPresent(obj.version)) currency = `version ${valueText(obj.version)}`;
  let corroboration = 'none declared';
  if (corroborated.length) corroboration = `${corroborated.length} source(s): ${corroborated.join(', ')}`;
  if (contested.length) corroboration += `; contested by ${contested.length}: ${contested.join(', ')}`;
  return {
    attestation,
    currency,
    freshness: isPresent(opts.freshness) ? String(opts.freshness) : 'not checked (a registry property)',
    corroboration,
  };
}

function signalsList(signals, node) {
  const dl = el('dl', { class: 'mxc-signals' });
  for (const name of TRUST_SIGNALS) {
    node.setAttribute(`data-mx-signal-${name}`, signals[name]);
    dl.appendChild(el('dt', { text: name }));
    dl.appendChild(el('dd', { text: signals[name] }));
  }
  return dl;
}

// ── Components ─────────────────────────────────────────────

/** Provenance badge: origin, trust, and verification state, each signal one interaction away at most. */
export function provenanceBadge(obj = {}, opts = {}) {
  const displayMode = opts.displayMode || obj.displayMode || 'compact';
  const node = root('provenanceBadge', 'div', `is-${displayMode}`);
  mirror(node, 'displayMode', displayMode);
  mirror(node, 'authorship', obj.authorship);
  mirror(node, 'generatedBy', obj.generatedBy);
  mirror(node, 'verificationChanged', obj.verificationChanged);
  mirror(node, 'icon', obj.icon);

  const head = el('p', { class: 'mxc-badge-head' });
  head.appendChild(el('span', { class: 'mxc-badge-label', text: 'Provenance' }));
  head.appendChild(el('span', {
    class: 'mxc-badge-authorship',
    text: isPresent(obj.authorship) ? `authorship: ${valueText(obj.authorship)}` : 'authorship: not declared',
  }));
  if (isPresent(obj.generatedBy)) head.appendChild(el('span', { class: 'mxc-badge-generated', text: `generated by ${valueText(obj.generatedBy)}` }));
  node.appendChild(head);

  const signals = trustSignals(obj, opts);
  const details = el('details', { class: 'mxc-badge-signals' });
  if (displayMode === 'expanded') details.setAttribute('open', '');
  details.appendChild(el('summary', { text: 'Trust signals, reported separately' }));
  details.appendChild(signalsList(signals, node));
  if (isPresent(obj.verificationChanged)) {
    details.appendChild(el('p', { class: 'mxc-badge-changed', text: `Verification state last changed ${valueText(obj.verificationChanged)}` }));
  }
  if (isPresent(obj.provenanceUri)) {
    details.appendChild(el('p', {}, el('a', { href: obj.provenanceUri, rel: 'noopener', text: 'Open the full provenance record' })));
  }
  node.appendChild(details);
  return node;
}

/** Object card: title, summary, identity, a provenance badge, and the declared actions, the same list for both audiences. */
export function objectCard(obj = {}, opts = {}) {
  const node = root('objectCard', 'article');
  mirror(node, 'canonicalUri', obj.canonicalUri);
  mirror(node, 'type', obj.type);
  mirror(node, 'version', obj.version);
  mirror(node, 'preview', obj.preview);

  const title = valueText(obj.title) || opts.fallbackTitle || 'Untitled object';
  const h = el('h3', { class: 'mxc-card-title' });
  if (isPresent(obj.canonicalUri)) h.appendChild(el('a', { href: obj.canonicalUri, rel: 'noopener', text: title }));
  else h.textContent = title;
  node.appendChild(h);
  if (isPresent(obj.description)) node.appendChild(el('p', { class: 'mxc-card-summary', 'data-mx-field': 'description', text: valueText(obj.description) }));
  if (isPresent(obj.preview)) node.appendChild(el('img', { class: 'mxc-card-preview', src: obj.preview, alt: `Preview of ${title}`, loading: 'lazy' }));

  node.appendChild(definitionList([
    ['Canonical URI', obj.canonicalUri, 'canonicalUri'],
    ['Type', obj.type, 'type'],
    ['Version', obj.version, 'version'],
    ['Created', obj.created, 'created'],
    ['Modified', obj.modified, 'modified'],
    ['Author', obj.author, 'author'],
  ]));

  if (opts.badge !== false) node.appendChild(provenanceBadge(obj, opts));

  const actions = Array.isArray(obj.actions) ? obj.actions : [];
  if (actions.length) {
    const ul = el('ul', { class: 'mxc-actions', 'aria-label': 'Actions' });
    for (const a of actions) {
      if (!a || !a.name) continue;
      const li = el('li');
      const withheld = list([].concat(a.withheldFrom || []));
      li.setAttribute('data-mx-action', a.name);
      if (isPresent(a.target)) li.setAttribute('data-mx-action-target', String(a.target));
      if (isPresent(a.verifiability)) li.setAttribute('data-mx-action-verifiability', String(a.verifiability));
      if (withheld.length) li.setAttribute('data-mx-action-withheld-from', withheld.join(','));
      if (withheld.includes('humans')) {
        li.className = 'mxc-action-withheld';
        li.appendChild(el('span', { text: `${a.name}: offered to ${withheld.length === 1 ? 'agents' : 'other audiences'} only` }));
      } else if (isPresent(a.target) && /^https?:\/\//.test(String(a.target))) {
        // A link keeps the target reachable without script; the page may still
        // attach an in-page handler by the same data-mx-action-button name.
        li.appendChild(el('a', { class: 'tool-download', href: a.target, rel: 'noopener', 'data-mx-action-button': a.name, text: a.label || a.name }));
      } else {
        li.appendChild(el('button', { type: 'button', class: 'tool-download', 'data-mx-action-button': a.name, text: a.label || a.name }));
      }
      ul.appendChild(li);
    }
    node.appendChild(ul);
    mirror(node, 'actions', actions.map((a) => a && a.name));
  }
  return node;
}

/** Relationship line: one directed relationship, its type, and whether it was declared or inferred. */
export function relationshipLine(from, field, to, opts = {}) {
  if (!RELATIONSHIP_FIELDS.includes(field)) throw new Error(`relationshipLine: "${field}" is not a relationship field`);
  const node = root('relationshipLine', 'p', opts.inferred ? 'is-inferred' : 'is-declared');
  mirror(node, 'relationshipField', field);
  mirror(node, 'inferred', opts.inferred === true);
  mirror(node, 'visualWeight', opts.visualWeight || (opts.inferred ? 'token:mx-line-inferred' : 'token:mx-line-declared'));
  node.appendChild(el('span', { class: 'mxc-rel-from', text: valueText(from) }));
  node.appendChild(el('span', { class: 'mxc-rel-field', text: ` ${field} ` }));
  const target = valueText(to);
  if (/^https?:\/\//.test(target)) node.appendChild(el('a', { class: 'mxc-rel-to', href: target, rel: 'noopener', text: target }));
  else node.appendChild(el('span', { class: 'mxc-rel-to', text: target }));
  if (opts.inferred) {
    mirror(node, 'finalConfidence', opts.finalConfidence);
    mirror(node, 'confidenceMethod', opts.confidenceMethod);
    const conf = isPresent(opts.finalConfidence) ? ` (inferred, confidence ${valueText(opts.finalConfidence)})` : ' (inferred)';
    node.appendChild(el('span', { class: 'mxc-rel-note', text: conf }));
  } else {
    node.appendChild(el('span', { class: 'mxc-rel-note', text: ' (declared by the publisher)' }));
  }
  return node;
}

/** Verification panel: the trail, each step attributed and timestamped, the outcome, and the trust signals. */
export function verificationPanel(obj = {}, opts = {}) {
  const node = root('verificationPanel', 'section');
  node.setAttribute('aria-label', 'Verification');
  mirror(node, 'verificationSummary', obj.verificationSummary);
  mirror(node, 'finalConfidence', obj.finalConfidence);
  mirror(node, 'confidenceMethod', obj.confidenceMethod);
  mirror(node, 'verificationChanged', obj.verificationChanged);

  node.appendChild(el('h3', { text: opts.heading || 'Verification' }));
  if (isPresent(obj.verificationSummary)) node.appendChild(el('p', { class: 'mxc-verification-summary', text: valueText(obj.verificationSummary) }));

  const steps = Array.isArray(obj.verificationSteps) ? obj.verificationSteps : [];
  if (steps.length) {
    const ol = el('ol', { class: 'mxc-steps' });
    for (const s of steps) {
      if (!s) continue;
      const li = el('li', { class: `is-${s.outcome || 'skipped'}` });
      if (isPresent(s.timestamp)) li.setAttribute('data-mx-step-timestamp', String(s.timestamp));
      if (isPresent(s.agent)) li.setAttribute('data-mx-step-agent', String(s.agent));
      if (isPresent(s.method)) li.setAttribute('data-mx-step-method', String(s.method));
      li.setAttribute('data-mx-step-outcome', String(s.outcome || 'skipped'));
      li.appendChild(el('span', { class: 'mxc-step-outcome', text: String(s.outcome || 'skipped').toUpperCase() }));
      li.appendChild(el('span', { class: 'mxc-step-method', text: ` ${valueText(s.method) || 'step'}` }));
      li.appendChild(el('span', { class: 'mxc-step-agent', text: ` by ${valueText(s.agent) || 'unknown agent'}` }));
      if (isPresent(s.timestamp)) li.appendChild(el('span', { class: 'mxc-step-time', text: ` at ${valueText(s.timestamp)}` }));
      if (isPresent(s.detail)) li.appendChild(el('span', { class: 'mxc-step-detail', text: `: ${valueText(s.detail)}` }));
      ol.appendChild(li);
    }
    node.appendChild(ol);
  } else {
    node.appendChild(el('p', { class: 'mxc-steps-none', text: 'No verification steps recorded.' }));
  }

  if (isPresent(obj.finalConfidence)) {
    const method = isPresent(obj.confidenceMethod) ? ` (${valueText(obj.confidenceMethod)})` : '';
    node.appendChild(el('p', { class: 'mxc-confidence', text: `Confidence in this trail: ${valueText(obj.finalConfidence)}${method}` }));
  }
  const wrap = el('div', { class: 'mxc-panel-signals' });
  wrap.appendChild(el('h4', { text: 'Trust signals, each on its own' }));
  wrap.appendChild(signalsList(trustSignals(obj, opts), node));
  node.appendChild(wrap);
  return node;
}

/** Signal bar: one bound field and its value, stated in text; a styling token and optional motion on top. */
export function signalBar(field, value, opts = {}) {
  const node = root('signalBar', 'div', opts.styleToken ? `is-${dataName(String(opts.styleToken).replace(/^token:/, ''))}` : '');
  node.setAttribute('role', 'status');
  mirror(node, 'barState.field', field);
  mirror(node, 'barState.value', value);
  mirror(node, 'styleToken', opts.styleToken);
  mirror(node, 'pulse', opts.pulse === true);
  node.appendChild(el('span', { class: 'mxc-bar-field', text: `${field}: ` }));
  node.appendChild(el('span', { class: 'mxc-bar-value', text: valueText(value) || 'not declared' }));
  return node;
}

/** Narrative layer: a human-facing cue beside a component, never in place of its metadata. */
export function narrativeLayer(cue, narrativeContext, opts = {}) {
  const node = root('narrativeLayer', 'aside');
  node.setAttribute('aria-label', opts.label || 'Editorial note');
  mirror(node, 'cue', cue);
  mirror(node, 'narrativeContext', narrativeContext);
  if (isPresent(opts.heading)) node.appendChild(el('h3', { text: String(opts.heading) }));
  if (isPresent(cue)) node.appendChild(el('p', { class: 'mxc-cue', text: String(cue) }));
  if (isPresent(narrativeContext)) {
    node.appendChild(el('p', {}, el('a', { class: 'tool-pivot-cta', href: narrativeContext, text: opts.contextLabel || 'Read the fuller context' })));
  }
  return node;
}

/** Grid mount: components laid out from declared constraints, so position carries no meaning the metadata does not. */
export function gridMount(items = [], opts = {}) {
  const node = root('gridMount', 'div');
  const unit = opts.gridUnit || '8px';
  mirror(node, 'gridUnit', unit);
  mirror(node, 'snapPoints', opts.snapPoints);
  if (Array.isArray(opts.layoutConstraints) && opts.layoutConstraints.length) {
    node.setAttribute('data-mx-layout-constraints', JSON.stringify(opts.layoutConstraints));
  }
  node.style.setProperty('--mxc-grid-unit', unit);
  for (const item of items) if (item) node.appendChild(item);
  return node;
}

/** The default inspector sections for an object: identity, provenance, trust, relationships, reuse, then the rest. */
export function defaultSections(obj = {}) {
  const named = [
    { name: 'identity', fields: IDENTITY_FIELDS },
    { name: 'provenance', fields: PROVENANCE_FIELDS },
    { name: 'trust', fields: TRUST_FIELDS },
    { name: 'relationships', fields: RELATIONSHIP_FIELDS },
    { name: 'reuse', fields: REUSE_FIELDS },
  ];
  const taken = new Set(named.flatMap((s) => s.fields));
  const rest = Object.keys(obj).filter((k) => !taken.has(k) && isPresent(obj[k])).sort();
  if (rest.length) named.push({ name: 'other', fields: rest });
  return named;
}

/** The inspector's export: the object's fields grouped by section, always carrying canonicalUri. */
export function inspectorExport(obj = {}, sections) {
  const groups = {};
  for (const s of sections || defaultSections(obj)) {
    const group = {};
    for (const f of s.fields || []) if (isPresent(obj[f])) group[f] = obj[f];
    if (Object.keys(group).length) groups[s.name] = group;
  }
  return {
    canonicalUri: isPresent(obj.canonicalUri) ? obj.canonicalUri : null,
    exportedAt: new Date().toISOString(),
    inspectorSections: (sections || defaultSections(obj)).map((s) => s.name),
    sections: groups,
  };
}

/** Object inspector: every field the object carries, grouped, in a stable order, with a machine-readable export. */
export function objectInspector(obj = {}, opts = {}) {
  const sections = Array.isArray(opts.inspectorSections) && opts.inspectorSections.length ? opts.inspectorSections : defaultSections(obj);
  const node = root('objectInspector', 'section');
  node.setAttribute('aria-label', 'Object inspector');
  mirror(node, 'canonicalUri', obj.canonicalUri);
  mirror(node, 'inspectorSections', sections.map((s) => s.name));
  node.appendChild(el('h3', { text: opts.heading || 'Every field this object carries' }));
  let shown = 0;
  for (const s of sections) {
    const pairs = (s.fields || []).filter((f) => isPresent(obj[f])).map((f) => [f, obj[f], f]);
    if (!pairs.length) continue;
    const sec = el('div', { class: 'mxc-inspector-section', 'data-mx-inspector-section': s.name });
    sec.appendChild(el('h4', { text: s.name }));
    sec.appendChild(definitionList(pairs, 'mxc-fields mxc-fields-mono'));
    node.appendChild(sec);
    shown += pairs.length;
  }
  if (!shown) node.appendChild(el('p', { class: 'mxc-inspector-empty', text: 'This object declares no MX fields.' }));
  const exportBtn = el('button', { type: 'button', class: 'tool-download', 'data-mx-action-button': 'export-inspection', text: 'Export as JSON' });
  node.appendChild(el('p', {}, exportBtn));
  node.mxExport = () => inspectorExport(obj, sections);
  return node;
}

// ── Page reader ────────────────────────────────────────────

/**
 * The metadata the current page declares: the mx:* meta tags and the
 * MX-SOURCE-FRONTMATTER block (through the inspector core's HTML extractor, so
 * the tool and the page read a head the same way), the embedded provenance
 * record when the page carries one, and every JSON-LD block that parses.
 */
export function readPageMetadata(doc = typeof document !== 'undefined' ? document : null) {
  if (!doc || !doc.documentElement) return { fields: {}, provenance: null, jsonLd: [] };
  const html = doc.documentElement.outerHTML;
  const fields = extractHtmlMx(html);
  const prov = extractProvenanceFromCarrier({ carrier: 'html', text: html });
  const jsonLd = [];
  for (const s of doc.querySelectorAll('script[type="application/ld+json"]')) {
    try { jsonLd.push(JSON.parse(s.textContent)); } catch { /* an unparseable block is reported by the served-HTML gate, not here */ }
  }
  return { fields, provenance: prov && prov.parsed ? prov.parsed : null, jsonLd };
}

/** Replace a container's content with the given components. */
export function render(container, components = []) {
  if (!container) return container;
  container.textContent = '';
  for (const c of components) if (c) container.appendChild(c);
  return container;
}
