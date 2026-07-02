// mx-provenance-demo.js - in-page live AI-provenance demo overlay.
//
// Progressive enhancement. A link marked with data-mx-inspect="<url>" is, without
// JS, an ordinary link to the standalone MX Inspector (its href). With JS, a click
// instead fetches the named asset from the same origin, runs the shared inspector
// core (mx-inspector-core.js - the exact code the standalone tool and the CLI run)
// over its bytes, and shows the MX metadata and AI provenance trail that are
// embedded inside the file, in an overlay on the current page. Nothing is uploaded:
// the fetch is same-origin and the parse is local.
//
// @mx:contentType script
// @mx:status active
// @mx:partOf mx-os

import { inspectCarrier, detectCarrierFromName } from './mx-inspector-core.js';
import { el, isHumanStep, buildChain } from './mx-prov-chain.js';

const SEP = ' – '; // en-dash separator, built at runtime (never an em-dash literal in source)

let overlay = null;
let lastFocused = null;
let inerted = []; // background elements we made inert on open, to restore on close

// Focusable elements inside the dialog panel, for the Tab-wrap fallback.
function focusable(root) {
  return [...root.querySelectorAll('a[href],button,input,select,textarea,[tabindex]')]
    .filter((e) => !e.hasAttribute('disabled') && e.tabIndex !== -1 && e.offsetParent !== null);
}

function onKeydown(e) {
  if (!overlay) return;
  if (e.key === 'Escape') { closeOverlay(); return; }
  if (e.key !== 'Tab') return;
  // Focus-wrap fallback: keep Tab within the dialog even where `inert` is
  // unsupported. `inert` on the background is the primary containment.
  const panel = overlay.querySelector('.mx-prov-panel');
  const items = focusable(panel);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

// Make everything behind the dialog inert (out of focus order AND the a11y tree),
// so a screen-reader and keyboard focus stay confined to the modal. This is the
// standard modal fix; without it the background remains reachable behind the overlay.
function inertBackground() {
  inerted = [];
  for (const child of Array.from(document.body.children)) {
    if (child === overlay) continue;
    if (!child.hasAttribute('inert')) { child.setAttribute('inert', ''); child.setAttribute('aria-hidden', 'true'); inerted.push(child); }
  }
}
function restoreBackground() {
  for (const child of inerted) { child.removeAttribute('inert'); child.removeAttribute('aria-hidden'); }
  inerted = [];
}

function closeOverlay() {
  if (!overlay) return;
  overlay.remove();
  overlay = null;
  restoreBackground();
  document.removeEventListener('keydown', onKeydown);
  if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
}

function buildEvidence(classification) {
  const list = el('ul', { class: 'mx-prov-evidence' });
  const evidence = (classification && classification.evidence) || [];
  for (const ev of evidence) {
    list.appendChild(el('li', { class: `mx-prov-ev mx-prov-ev-${ev.status || 'info'}` },
      el('span', { class: 'mx-prov-ev-label', text: ev.label || '' }),
      ev.detail ? el('span', { class: 'mx-prov-ev-detail', text: ev.detail }) : null));
  }
  return list;
}

// Two-party summary: which agent attached the trail, which human checked it.
function twoPartySummary(parsed) {
  const steps = (parsed && parsed.steps) || [];
  const ai = steps.find((s) => s.agent && s.agent.toLowerCase() !== 'deterministic' && !isHumanStep(s));
  const human = steps.find(isHumanStep);
  if (ai && human) return `${ai.agent} attached this AI provenance trail. ${human.agent} reviewed and verified it.`;
  return null;
}

function openOverlay(title) {
  lastFocused = document.activeElement;
  const panel = el('div', { class: 'mx-prov-panel', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Live AI provenance demo' });
  const close = el('button', { class: 'mx-prov-close', type: 'button', 'aria-label': 'Close' }, '×');
  close.addEventListener('click', closeOverlay);
  const body = el('div', { class: 'mx-prov-body' }, el('p', { class: 'mx-prov-status', text: 'Reading the file…' }));
  panel.appendChild(close);
  panel.appendChild(el('h2', { class: 'mx-prov-title', text: title }));
  panel.appendChild(body);
  overlay = el('div', { class: 'mx-prov-overlay' }, panel);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); });
  document.body.appendChild(overlay);
  inertBackground();
  document.addEventListener('keydown', onKeydown);
  close.focus();
  return body;
}

function renderResult(body, url, findings, classification, parsedOverride, source) {
  const parsed = parsedOverride || (findings && findings.provenance && findings.provenance.parsed);
  const rp = parsed && (parsed.responsiblePerson || (parsed.parties && parsed.parties[0]));
  const tier = (classification && classification.tier) || 'unknown';
  body.textContent = '';

  body.appendChild(el('p', { class: 'mx-prov-lead' },
    'Everything below was read live in your browser. Nothing was uploaded. This is the author photo on this page (',
    el('code', { text: url }), ').'));

  const summary = twoPartySummary(parsed);
  if (summary) body.appendChild(el('p', { class: 'mx-prov-summary', text: summary }));

  body.appendChild(el('p', { class: `mx-prov-tier mx-prov-tier-${tier}` },
    'Readiness tier: ', el('strong', { text: String(tier).toUpperCase() })));

  body.appendChild(el('h3', { class: 'mx-prov-h', text: 'What a machine reads' }));
  body.appendChild(buildEvidence(classification));

  const chain = buildChain(parsed);
  if (chain) {
    const heading = source === 'companion'
      ? 'The AI provenance trail (this file’s companion record)'
      : 'The AI provenance trail (embedded in the image)';
    body.appendChild(el('h3', { class: 'mx-prov-h', text: heading }));
    body.appendChild(el('p', { class: 'mx-prov-hint', text: 'Click a step in the chain to read its record.' }));
    body.appendChild(chain);
    if (rp && rp.name) {
      body.appendChild(el('p', { class: 'mx-prov-rp' },
        'Accountable person: ', el('strong', { text: rp.name }),
        rp.organisation ? `, ${rp.organisation}` : ''));
    }
  } else {
    body.appendChild(el('p', { class: 'mx-prov-note', text: 'No provenance trail was found for this file.' }));
  }

  const actions = el('p', { class: 'mx-prov-actions' },
    el('a', { class: 'cta-button', href: 'https://mx.allabout.network/tools/mx-inspector.html' }, 'Inspect your own files'),
    el('a', { class: 'mx-prov-contact', href: 'https://mx.allabout.network/about/contact.html' }, 'Every company needs this in their CMS. Talk to CogNovaMX.'));
  body.appendChild(actions);
}

async function runDemo(url, title) {
  const body = openOverlay(title || 'Live AI provenance');
  try {
    const carrier = detectCarrierFromName(url) || 'raster';
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`could not fetch the file (${res.status})`);
    let out;
    if (carrier === 'raster') {
      const bytes = new Uint8Array(await res.arrayBuffer());
      out = inspectCarrier({ carrier, filename: url.split('/').pop(), bytes });
    } else {
      const text = await res.text();
      out = inspectCarrier({ carrier, filename: url.split('/').pop(), text });
    }
    // Reliability: the trail is embedded in the image XMP, but a very large
    // payload can defeat an in-browser parse. If no steps came back, fall back
    // to the file's companion provenance record (served alongside the asset),
    // which is always intact. Same evidence, guaranteed to render.
    let parsedOverride = null;
    let source = 'embedded';
    const embeddedSteps = out.findings && out.findings.provenance
      && out.findings.provenance.parsed && out.findings.provenance.parsed.steps;
    if (!embeddedSteps || !embeddedSteps.length) {
      const sidecarUrl = url.replace(/\.[^./]+$/, '') + '.provenance.ai.json';
      try {
        const sres = await fetch(sidecarUrl, { cache: 'no-store' });
        if (sres.ok) {
          const json = await sres.json();
          if (json && Array.isArray(json.steps) && json.steps.length) {
            parsedOverride = json;
            source = 'companion';
          }
        }
      } catch (_) { /* leave parsedOverride null; renderResult shows the no-trail note */ }
    }
    renderResult(body, url, out.findings, out.classification, parsedOverride, source);
  } catch (err) {
    body.textContent = '';
    body.appendChild(el('p', { class: 'mx-prov-error', role: 'alert' },
      'Could not read the file live: ', String(err && err.message ? err.message : err),
      '. You can still ', el('a', { href: 'https://mx.allabout.network/tools/mx-inspector.html' }, 'open the full inspector'), '.'));
  }
}

function init() {
  const triggers = document.querySelectorAll('[data-mx-inspect]');
  triggers.forEach((t) => {
    t.addEventListener('click', (e) => {
      const url = t.getAttribute('data-mx-inspect');
      if (!url) return;
      e.preventDefault();
      runDemo(url, t.getAttribute('data-mx-inspect-title'));
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
