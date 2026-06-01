// popup.js — orchestrator for the MX Readiness Inspector popup.
//
// Sequence on popup open:
//   1. Find the active tab.
//   2. Inject content.js to inspect the DOM, get per-section findings.
//   3. Ask the background service worker to probe the origin's discovery
//      files (/llms.txt, /robots.txt, /AI-USAGE.json, etc.).
//   4. Compute the deterministic readiness score from the combined
//      findings (one weight table, transparent maths).
//   5. Ask Chrome's on-device Gemini Nano (the LanguageModel global) for a
//      brief summary of where the page stands. Graceful fallback
//      if the model is unavailable.
//   6. Render. Tabs filter the findings list by section.

const SECTIONS = [
  { id: 'mx-governance',   label: 'MX' },
  { id: 'ai-disclosure',   label: 'AI' },
  { id: 'discovery-links', label: 'Links' },
  { id: 'origin-discovery', label: 'Origin' },
  { id: 'structured-data', label: 'Data' },
  { id: 'open-graph',      label: 'OG' },
  { id: 'accessibility',   label: 'A11y' },
  { id: 'provenance',      label: 'Prov' },
];

const SCORE_WEIGHTS = {
  pass: 1,
  warn: 0.5,
  info: 0.5,
  fail: 0,
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// Module state. The buttons and clipboard formatting reach into these.
let allFindings = [];
let activeSection = 'mx-governance';
let currentPageInfo = null;
let currentScore = null;
let currentSummary = null;

async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

async function inspectDom(tab) {
  const results = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js'],
  });
  // executeScript on a function returns the result of the last expression;
  // a file injection returns the result of the file's last statement. The
  // IIFE in content.js evaluates to the findings object.
  return results?.[0]?.result || { url: tab.url, title: tab.title || '', findings: [], inspectedAt: new Date().toISOString() };
}

function inspectOrigin(pageUrl) {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: 'inspect-origin', pageUrl }, (resp) => {
      if (chrome.runtime.lastError || !resp || !resp.ok) {
        resolve([]);
      } else {
        resolve(resp.findings || []);
      }
    });
  });
}

function computeScore(findings) {
  if (!findings.length) return { value: 0, band: 'fail' };
  // Equal-weight average over all findings, scaled to 0-100.
  const total = findings.reduce((s, f) => s + (SCORE_WEIGHTS[f.status] ?? 0), 0);
  const value = Math.round(100 * total / findings.length);
  const band = value >= 75 ? 'pass' : value >= 50 ? 'warn' : 'fail';
  return { value, band };
}

function renderHeader(pageInfo) {
  $('#page-url').textContent = pageInfo.url || pageInfo.title || '(unknown URL)';
}

function renderSummary({ score, summaryText, summarySource }) {
  const scoreEl = $('#score-value');
  scoreEl.textContent = score.value;
  scoreEl.classList.remove('score-pass', 'score-warn', 'score-fail');
  scoreEl.classList.add(`score-${score.band}`);
  $('#summary-text').textContent = summaryText;
  $('#summary-source').textContent = summarySource;
}

function renderFindings() {
  const container = $('#findings');
  const filtered = allFindings.filter((f) => f.section === activeSection);
  if (!filtered.length) {
    container.innerHTML = `<p class="placeholder">No ${activeSection} findings.</p>`;
    return;
  }
  container.innerHTML = filtered.map((f) => {
    const evidenceText = f.evidence == null
      ? ''
      : typeof f.evidence === 'string' || typeof f.evidence === 'number' || typeof f.evidence === 'boolean'
      ? String(f.evidence)
      : JSON.stringify(f.evidence, null, 2);
    return `
      <article class="finding">
        <div class="finding-head">
          <span class="status-pill ${f.status}">${f.status}</span>
          <span class="finding-label">${escapeHtml(f.label)}</span>
        </div>
        <div class="finding-detail">${escapeHtml(f.detail)}</div>
        ${evidenceText ? `<pre class="finding-evidence">${escapeHtml(evidenceText)}</pre>` : ''}
      </article>
    `;
  }).join('');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function wireTabs() {
  for (const btn of $$('.tab')) {
    btn.addEventListener('click', () => {
      activeSection = btn.dataset.section;
      $$('.tab').forEach((b) => b.classList.toggle('active', b === btn));
      renderFindings();
    });
  }
}

// Toolbar --------------------------------------------------------------

function wireToolbar() {
  const copyBtn = $('#btn-copy');

  copyBtn.addEventListener('click', async () => {
    const text = formatForClipboard();
    try {
      await navigator.clipboard.writeText(text);
      const originalLabel = copyBtn.textContent;
      copyBtn.textContent = 'Copied';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = originalLabel;
        copyBtn.classList.remove('copied');
      }, 1200);
    } catch (e) {
      copyBtn.textContent = 'Copy failed';
      setTimeout(() => { copyBtn.textContent = 'Copy results'; }, 1500);
    }
  });
}

function formatForClipboard() {
  const lines = [];
  lines.push(`MX Readiness Inspection`);
  if (currentPageInfo) {
    if (currentPageInfo.title) lines.push(`Title: ${currentPageInfo.title}`);
    lines.push(`URL: ${currentPageInfo.url}`);
    lines.push(`Inspected: ${currentPageInfo.inspectedAt || new Date().toISOString()}`);
  }
  lines.push(`Score: ${currentScore?.value ?? '--'}/100 (${currentScore?.band ?? 'n/a'})`);
  if (currentSummary) {
    lines.push('');
    lines.push(`Summary (${currentSummary.source}):`);
    lines.push(currentSummary.text);
  }
  lines.push('');
  lines.push('---');
  lines.push('');
  for (const section of SECTIONS) {
    const items = allFindings.filter((f) => f.section === section.id);
    if (!items.length) continue;
    lines.push(`== ${section.label} (${section.id}) ==`);
    for (const f of items) {
      lines.push(`[${f.status.toUpperCase()}] ${f.label}`);
      lines.push(`  ${f.detail}`);
      if (f.evidence != null) {
        const ev = typeof f.evidence === 'string' || typeof f.evidence === 'number' || typeof f.evidence === 'boolean'
          ? String(f.evidence)
          : JSON.stringify(f.evidence);
        lines.push(`  Evidence: ${ev}`);
      }
    }
    lines.push('');
  }
  return lines.join('\n');
}

// On-device language-model integration --------------------------------
//
// Tries browser on-device Prompt API. Chrome and Edge expose an on-device
// model under different globals. We feature-detect each surface and use the
// first that exposes a working .create():
//
//   self.LanguageModel              — WICG-aligned global.
//                                      Chrome 131+, Edge 138+ on
//                                      Copilot+ PCs.
//   self.ai.languageModel           — Chrome origin-trial namespace.
//   self.ai.assistant               — Edge's earlier Prompt API
//                                      surface (Phi-Silica on
//                                      Copilot+ PCs).
//   self.chrome.aiOriginTrial.*     — Chrome legacy.
//
// Returns { text, source } so the renderer is single-pathed. If no browser
// model is available, shows a note explaining how to enable it.

const SYSTEM_PROMPT =
  'You are an MX-readiness reviewer. MX is a metadata standard that helps machines (LLMs, agents, automation) understand and act on web content. A page is MX-capable when it carries mx: governance meta tags, declares its AI authoring policy, serves discovery files like /llms.txt and /AI-USAGE.json, exposes structured data, and meets accessibility floors. Reply briefly with the verdict, the strongest signal you see, and the most impactful single fix.';

function buildUserPrompt(pageInfo, findings, score) {
  const compact = compactFindings(findings, score);
  return `Page: ${pageInfo.title || pageInfo.url}\nURL: ${pageInfo.url}\nDeterministic readiness score: ${score.value}/100.\n\nFindings (status:label):\n${compact}\n\nSummarise briefly. Reply with the summary only.`;
}

async function generateSummary(pageInfo, findings, score) {
  const browser = await tryBrowserModel(pageInfo, findings, score);
  if (browser) return browser;
  return {
    text: 'Score ' + score.value + '/100. No browser on-device model is available. See browser setup instructions at chrome://extensions.',
    source: 'fallback (no model available)',
  };
}

async function tryBrowserModel(pageInfo, findings, score) {
  const candidates = [
    { name: 'LanguageModel',                vendor: 'Chrome/Edge (WICG)',     get: () => self.LanguageModel },
    { name: 'ai.languageModel',             vendor: 'Chrome',                 get: () => self.ai?.languageModel },
    { name: 'ai.assistant',                 vendor: 'Edge (Phi-Silica)',      get: () => self.ai?.assistant },
    { name: 'chrome.aiOriginTrial.languageModel', vendor: 'Chrome (legacy)',  get: () => self.chrome?.aiOriginTrial?.languageModel },
  ];

  let ModelClass = null;
  let chosen = null;
  for (const c of candidates) {
    try {
      const cls = c.get();
      if (cls && typeof cls.create === 'function') { ModelClass = cls; chosen = c; break; }
    } catch (_) { /* keep walking the chain */ }
  }

  // No browser surface exposed at all. Return null so caller knows.
  if (!ModelClass) return null;

  let availability = 'available';
  try {
    if (typeof ModelClass.availability === 'function') availability = await ModelClass.availability();
    else if (typeof ModelClass.capabilities === 'function') {
      const caps = await ModelClass.capabilities();
      availability = caps?.available || 'available';
    }
  } catch (_) { /* assume available */ }

  // Model surface exists but the runtime says it's not ready (downloading,
  // unsupported hardware). Return null so caller can show a message.
  if (availability === 'unavailable' || availability === 'no') return null;

  let session;
  try {
    session = await ModelClass.create({
      initialPrompts: [{ role: 'system', content: SYSTEM_PROMPT }],
    });
  } catch (e) {
    // Edge's older ai.assistant.create() rejects unknown options; retry plain.
    try {
      session = await ModelClass.create({});
    } catch (e2) {
      return {
        text: `Score ${score.value}/100. Could not start a ${chosen.vendor} session (${e2.message || e.message}).`,
        source: `fallback (${chosen.vendor} session error)`,
      };
    }
  }

  try {
    const out = await session.prompt(buildUserPrompt(pageInfo, findings, score));
    session.destroy?.();
    return { text: out.trim(), source: `${chosen.vendor} (on-device)` };
  } catch (e) {
    session.destroy?.();
    return {
      text: `Score ${score.value}/100. ${chosen.vendor} raised: ${e.message}`,
      source: `fallback (${chosen.vendor} prompt error)`,
    };
  }
}

function compactFindings(findings, score) {
  // Cap to ~30 lines to keep the prompt inside Nano's context budget.
  const order = { fail: 0, warn: 1, info: 2, pass: 3 };
  return findings
    .slice()
    .sort((a, b) => (order[a.status] - order[b.status]))
    .slice(0, 30)
    .map((f) => `${f.status}:${f.label}`)
    .join('\n');
}

// Boot -----------------------------------------------------------------

async function main() {
  wireTabs();
  wireToolbar();
  const tab = await getActiveTab();
  if (!tab || !tab.url
      || tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://')
      || tab.url.startsWith('edge://') || tab.url.startsWith('about:')) {
    $('#page-url').textContent = '(browser internal page; MX inspection skipped)';
    $('#summary-text').textContent = 'Open a regular web page (http: or https:) to inspect.';
    $('#summary-source').textContent = '';
    return;
  }

  renderHeader({ url: tab.url });

  let domPayload;
  try {
    domPayload = await inspectDom(tab);
  } catch (e) {
    $('#summary-text').textContent = `Could not inspect the page (${e.message}). The page may block content-script injection.`;
    return;
  }

  currentPageInfo = domPayload;

  // Show DOM findings immediately while origin probes run.
  allFindings = domPayload.findings.slice();
  renderFindings();
  currentScore = computeScore(allFindings);
  renderSummary({
    score: currentScore,
    summaryText: 'DOM findings ready. Probing origin discovery files…',
    summarySource: '',
  });

  // Add origin-discovery findings as they come back.
  const originFindings = await inspectOrigin(domPayload.url);
  allFindings = allFindings.concat(originFindings);
  renderFindings();
  currentScore = computeScore(allFindings);
  renderSummary({
    score: currentScore,
    summaryText: 'Combining DOM + origin signals. Asking the on-device model for a summary…',
    summarySource: '',
  });

  // Ask the on-device model to summarise the findings.
  const summary = await generateSummary(currentPageInfo, allFindings, currentScore);
  currentSummary = summary;
  renderSummary({
    score: currentScore,
    summaryText: summary.text,
    summarySource: summary.source,
  });
}

main();
