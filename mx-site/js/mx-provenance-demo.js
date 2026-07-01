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

const SEP = ' – '; // en-dash separator, built at runtime (never an em-dash literal in source)

function el(tag, attrs = {}, ...kids) {
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

let overlay = null;
let lastFocused = null;

function onKeydown(e) {
  if (e.key === 'Escape') closeOverlay();
}

function closeOverlay() {
  if (!overlay) return;
  overlay.remove();
  overlay = null;
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

function buildSteps(parsed) {
  const steps = (parsed && parsed.steps) || [];
  if (!steps.length) return null;
  const list = el('ol', { class: 'mx-prov-steps' });
  for (const s of steps) {
    list.appendChild(el('li', { class: 'mx-prov-step' },
      el('strong', { class: 'mx-prov-step-agent', text: s.agent || 'unknown agent' }),
      s.intent ? document.createTextNode(SEP + s.intent) : null,
      s.outcome ? el('span', { class: 'mx-prov-step-outcome', text: ` [${s.outcome}]` }) : null));
  }
  return list;
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
  document.addEventListener('keydown', onKeydown);
  close.focus();
  return body;
}

function renderResult(body, url, findings, classification) {
  const parsed = findings && findings.provenance && findings.provenance.parsed;
  const rp = parsed && (parsed.responsiblePerson || (parsed.parties && parsed.parties[0]));
  const tier = (classification && classification.tier) || 'unknown';
  body.textContent = '';

  body.appendChild(el('p', { class: 'mx-prov-lead' },
    'Everything below was read from the file itself, live, in your browser. Nothing was uploaded. This is the author photo on this page (',
    el('code', { text: url }), ').'));

  body.appendChild(el('p', { class: `mx-prov-tier mx-prov-tier-${tier}` },
    'Readiness tier: ', el('strong', { text: String(tier).toUpperCase() })));

  body.appendChild(el('h3', { class: 'mx-prov-h', text: 'What a machine reads' }));
  body.appendChild(buildEvidence(classification));

  const steps = buildSteps(parsed);
  if (steps) {
    body.appendChild(el('h3', { class: 'mx-prov-h', text: 'The AI provenance trail (embedded in the image)' }));
    body.appendChild(steps);
    if (rp && rp.name) {
      body.appendChild(el('p', { class: 'mx-prov-rp' },
        'Accountable person: ', el('strong', { text: rp.name }),
        rp.organisation ? `, ${rp.organisation}` : ''));
    }
  } else {
    body.appendChild(el('p', { class: 'mx-prov-note', text: 'No embedded provenance trail was found in this file.' }));
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
    renderResult(body, url, out.findings, out.classification);
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
