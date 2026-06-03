// popup.js — orchestrator for the MX Readiness Inspector popup.
//
// Sequence on popup open:
//   1. Find the active tab.
//   2. Inject content.js to inspect the DOM, get per-section findings.
//   3. Ask the background service worker to probe the origin's discovery
//      files (/llms.txt, /robots.txt, /AI-USAGE.json, etc.).
//   4. Compute the deterministic readiness score from the combined
//      findings (one weight table, transparent maths).
//   5. Ask the best available language model for a brief summary:
//        a. Browser on-device model (Chrome Gemini Nano or Edge Phi-Silica
//           on Copilot+ PCs running Windows).
//        b. Local Ollama instance at 127.0.0.1:11434 — automatic fallback
//           when the browser model is absent (e.g. Edge on macOS).
//      Graceful no-model message if neither is reachable.
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

// Served HTML: fetch raw page from background and parse with DOMParser -----------

function fetchServedHtml(url) {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: 'fetch-served-html', url }, (resp) => {
      if (chrome.runtime.lastError || !resp) resolve({ error: 'no response' });
      else resolve(resp);
    });
  });
}

// Mirror of content.js inspection checks — runs on any Document object.
// Used for the served (pre-JS) HTML perspective.
function inspectDocument(doc, baseUrl) {
  const findings = [];
  const add = (section, id, label, status, detail, evidence) =>
    findings.push({ section, id, label, status, detail, evidence: evidence ?? null });

  const mc  = (n) => doc.querySelector(`meta[name="${n}"]`)?.getAttribute('content') || null;
  const mcp = (p) => doc.querySelector(`meta[property="${p}"]`)?.getAttribute('content') || null;
  const lh  = (r) => doc.querySelector(`link[rel="${r}"]`)?.getAttribute('href') || null;

  // 1. MX governance
  const mxCog = doc.querySelector('meta[name="mx:cog"]')?.getAttribute('content') || null;
  add('mx-governance', 'mx-cog', 'MX magic-header meta (mx:cog)',
    mxCog ? 'pass' : 'fail',
    mxCog ? 'mx:cog present.' : 'No <meta name="mx:cog"> present.',
    mxCog);

  const mxStatus = mc('mx:status'), mxContentType = mc('mx:contentType'), mxAudience = mc('mx:audience');
  const hasTrip = mxStatus && mxContentType && mxAudience;
  add('mx-governance', 'mx-triplet', 'Governance triplet',
    hasTrip ? 'pass' : (mxStatus || mxContentType || mxAudience ? 'warn' : 'fail'),
    hasTrip ? `status="${mxStatus}", contentType="${mxContentType}", audience="${mxAudience}".`
            : 'Governance triplet incomplete.',
    { status: mxStatus, contentType: mxContentType, audience: mxAudience });

  const aiAssistance = mc('mx:aiAssistance'), aiEditable = mc('mx:aiEditable'), contentPolicy = mc('mx:contentPolicy');
  add('mx-governance', 'mx-ai-policy', 'AI policy hints',
    (aiAssistance || aiEditable || contentPolicy) ? 'pass' : 'warn',
    (aiAssistance || aiEditable || contentPolicy) ? 'AI policy hints present.' : 'No AI policy hints.',
    { aiAssistance, aiEditable, contentPolicy });

  // 2. AI disclosure
  const aiDiscl = mc('ai-disclosure');
  const validVals = ['none', 'ai-assisted', 'ai-generated', 'autonomous'];
  add('ai-disclosure', 'wicg-disclosure', 'WICG AI-disclosure meta',
    (aiDiscl && validVals.includes(aiDiscl)) ? 'pass' : aiDiscl ? 'warn' : 'fail',
    aiDiscl ? `"${aiDiscl}"` : 'No <meta name="ai-disclosure">.',
    aiDiscl);

  let jsonLdObjects = [];
  for (const block of doc.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      const p = JSON.parse(block.textContent);
      jsonLdObjects.push(...(Array.isArray(p) ? p : (p['@graph'] ? p['@graph'] : [p])));
    } catch (_) {}
  }
  const dst = jsonLdObjects.map((o) => o.digitalSourceType).find((v) => typeof v === 'string');
  add('ai-disclosure', 'iptc-source-type', 'IPTC digitalSourceType in JSON-LD',
    dst && dst.startsWith('https://cv.iptc.org/') ? 'pass' : dst ? 'warn' : 'fail',
    dst ? `"${dst}"` : 'No digitalSourceType in JSON-LD.',
    dst);

  // 3. Discovery links
  const llmsTxt = lh('llms-txt');
  add('discovery-links', 'link-llms-txt', '<link rel="llms-txt">',
    llmsTxt ? 'pass' : 'warn', llmsTxt ? `→ ${llmsTxt}` : 'No <link rel="llms-txt">.', llmsTxt);

  const aiUsage = lh('ai-usage');
  add('discovery-links', 'link-ai-usage', '<link rel="ai-usage">',
    aiUsage ? 'pass' : 'warn', aiUsage ? `→ ${aiUsage}` : 'No <link rel="ai-usage">.', aiUsage);

  const canonical = lh('canonical');
  const normBase = (baseUrl || '').split('#')[0].split('?')[0];
  const normCan  = (canonical || '').split('#')[0].split('?')[0];
  add('discovery-links', 'canonical', '<link rel="canonical">',
    canonical ? (normCan === normBase ? 'pass' : 'warn') : 'fail',
    canonical ? (normCan === normBase ? 'Canonical matches URL.' : `Canonical: "${canonical}".`) : 'No canonical.',
    canonical);

  const sitemap = lh('sitemap');
  add('discovery-links', 'sitemap', '<link rel="sitemap">',
    sitemap ? 'pass' : 'info', sitemap ? `→ ${sitemap}` : 'No <link rel="sitemap">.', sitemap);

  // 4. Structured data
  add('structured-data', 'jsonld-present', 'JSON-LD blocks',
    jsonLdObjects.length ? 'pass' : 'fail',
    jsonLdObjects.length ? `${jsonLdObjects.length} JSON-LD object(s).` : 'No JSON-LD.',
    jsonLdObjects.length);
  const jsonLdTypes = jsonLdObjects.map((o) => o['@type']).filter(Boolean);
  add('structured-data', 'jsonld-types', 'Schema.org @type coverage',
    jsonLdTypes.length ? 'pass' : 'warn',
    jsonLdTypes.length ? `Types: ${jsonLdTypes.flat().join(', ')}.` : 'No @type fields.',
    jsonLdTypes);

  // 5. Open Graph + Twitter
  const og = {
    type: mcp('og:type'), title: mcp('og:title'), description: mcp('og:description'),
    url: mcp('og:url'), image: mcp('og:image'), site_name: mcp('og:site_name'), locale: mcp('og:locale'),
  };
  const ogN = Object.values(og).filter(Boolean).length;
  add('open-graph', 'og-completeness', 'Open Graph completeness',
    ogN >= 5 ? 'pass' : ogN >= 3 ? 'warn' : 'fail', `${ogN}/7 OG fields.`, og);

  const tw = { card: mc('twitter:card'), title: mc('twitter:title'),
               description: mc('twitter:description'), image: mc('twitter:image') };
  const twN = Object.values(tw).filter(Boolean).length;
  add('open-graph', 'twitter-card', 'Twitter Card completeness',
    twN >= 3 ? 'pass' : twN >= 1 ? 'warn' : 'fail', `${twN}/4 Twitter Card fields.`, tw);

  // 6. Accessibility
  const htmlLang = doc.documentElement?.getAttribute('lang') || null;
  add('accessibility', 'html-lang', '<html lang="…">',
    htmlLang ? 'pass' : 'fail', htmlLang ? `lang="${htmlLang}".` : 'No lang attribute.', htmlLang);

  const skipLink = doc.querySelector('a.skip-link, a[href="#main"], a[href="#content"]');
  add('accessibility', 'skip-link', 'Skip-to-main link',
    skipLink ? 'pass' : 'warn', skipLink ? 'Skip link present.' : 'No skip link.', skipLink?.getAttribute('href') || null);

  const imgs = Array.from(doc.querySelectorAll('img'));
  const missingAlt = imgs.filter((i) => !i.hasAttribute('alt'));
  const altCov = imgs.length ? Math.round(100 * (imgs.length - missingAlt.length) / imgs.length) : 100;
  add('accessibility', 'img-alt', 'Image alt coverage',
    altCov === 100 ? 'pass' : altCov >= 80 ? 'warn' : 'fail',
    imgs.length ? `${altCov}% of ${imgs.length} images have alt.` : 'No images.',
    { total: imgs.length, missing: missingAlt.length });

  const inputs = Array.from(doc.querySelectorAll('input, select, textarea'))
    .filter((el) => !['hidden','submit','button','reset'].includes(el.type));
  const labelled = inputs.filter((el) =>
    el.hasAttribute('aria-label') || el.hasAttribute('aria-labelledby') || el.hasAttribute('title') ||
    (el.id && doc.querySelector(`label[for="${el.id}"]`)) || el.closest('label') !== null
  );
  const lblCov = inputs.length ? Math.round(100 * labelled.length / inputs.length) : 100;
  add('accessibility', 'form-labels', 'Form-control labelling',
    inputs.length === 0 ? 'info' : lblCov === 100 ? 'pass' : lblCov >= 80 ? 'warn' : 'fail',
    inputs.length ? `${lblCov}% of ${inputs.length} controls labelled.` : 'No form controls.',
    { total: inputs.length, labelled: labelled.length });

  // 7. Provenance
  const headHtml = doc.head?.innerHTML || '';
  const hasFm = headHtml.includes('MX-SOURCE-FRONTMATTER:START');
  const hasProv = headHtml.includes('xmp:ProvenanceAiPayload') || headHtml.includes('mx:x-mx-provenance');
  add('provenance', 'source-yaml', 'Embedded source-YAML frontmatter',
    hasFm ? 'pass' : 'info', hasFm ? 'MX-SOURCE-FRONTMATTER markers present.' : 'No frontmatter markers.', hasFm);
  add('provenance', 'provenance-payload', 'Provenance payload reference',
    hasProv ? 'pass' : 'info', hasProv ? 'Provenance payload present.' : 'No provenance payload.', hasProv);

  return findings;
}

// Diff tab ---------------------------------------------------------------

async function openDiffTab(diffData) {
  await chrome.storage.session.set({ mxReadinessDiff: diffData });
  chrome.tabs.create({ url: chrome.runtime.getURL('diff.html') });
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

function showNoticeBanner(msg) {
  const el = $('#notice-banner');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
}

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

function browserSetupHint() {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  const isEdge = ua.includes('Edg/');
  const isMac = ua.includes('Macintosh');
  if (isEdge && isMac) {
    return 'Edge on macOS does not support on-device models (Phi-Silica requires Windows on a Copilot+ PC). Use Chrome on this Mac instead and enable the model at chrome://flags/#prompt-api-for-gemini-nano.';
  }
  if (isEdge) {
    return 'Enable the on-device model at edge://flags/#language-model-api (requires a Copilot+ PC running Windows).';
  }
  return 'Enable the on-device model at chrome://flags/#prompt-api-for-gemini-nano, then download the model at chrome://components.';
}

const OLLAMA_HOST = 'http://127.0.0.1:11434';
const OLLAMA_DEFAULT_MODELS = ['gpt-oss:20b', 'llama3.2', 'llama3.1', 'mistral', 'phi3'];

async function tryOllamaModel(pageInfo, findings, score) {
  // Probe which models are available; pick the first preferred match or the
  // first model in the list. Returns null if Ollama is not reachable.
  let model;
  try {
    const res = await fetch(`${OLLAMA_HOST}/api/tags`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) return null;
    const data = await res.json();
    const names = (data.models || []).map((m) => m.model);
    model = OLLAMA_DEFAULT_MODELS.find((m) => names.includes(m)) || names[0];
    if (!model) return null;
  } catch (_) {
    return null;
  }

  try {
    const res = await fetch(`${OLLAMA_HOST}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        stream: false,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user',   content: buildUserPrompt(pageInfo, findings, score) },
        ],
      }),
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const text = data.message?.content?.trim();
    if (!text) return null;
    return { text, source: `Ollama (${model}, local)` };
  } catch (_) {
    return null;
  }
}

async function generateSummary(pageInfo, findings, score) {
  const browser = await tryBrowserModel(pageInfo, findings, score);
  if (browser) return browser;
  const ollama = await tryOllamaModel(pageInfo, findings, score);
  if (ollama) return ollama;
  return {
    text: 'Score ' + score.value + '/100. No on-device model available. ' + browserSetupHint() + ' Or start Ollama locally (ollama serve) for an automatic fallback.',
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

  // Launch served-HTML fetch in parallel with DOM inspection.
  const servedPromise = fetchServedHtml(tab.url);

  let domPayload;
  try {
    domPayload = await inspectDom(tab);
  } catch (e) {
    $('#summary-text').textContent = `Could not inspect the page (${e.message}). The page may block content-script injection.`;
    return;
  }

  // Detect non-HTML or LLM View replacement — use served HTML as the primary
  // source when the current DOM is not the actual page content.
  const useServedAsPrimary = domPayload.isLlmViewPage
    || (domPayload.contentType && !domPayload.contentType.startsWith('text/html'));

  currentPageInfo = domPayload;

  if (!useServedAsPrimary) {
    // Normal path: show DOM findings immediately while served HTML loads.
    allFindings = domPayload.findings.slice();
    renderFindings();
    currentScore = computeScore(allFindings);
    renderSummary({
      score: currentScore,
      summaryText: 'DOM findings ready. Fetching served HTML and probing origin…',
      summarySource: '',
    });
  } else {
    const reason = domPayload.isLlmViewPage
      ? 'LLM View is active — inspecting the served HTML at this URL instead.'
      : `Non-HTML content type (${domPayload.contentType}) — inspecting the served HTML instead.`;
    showNoticeBanner(reason);
    renderSummary({ score: { value: '--', band: 'fail' }, summaryText: 'Fetching served HTML…', summarySource: '' });
  }

  // Wait for served HTML, parse, run inspection.
  const servedResult = await servedPromise;
  let servedFindings = [];
  if (servedResult.html && !servedResult.error) {
    try {
      const parser = new DOMParser();
      const servedDoc = parser.parseFromString(servedResult.html, 'text/html');
      servedFindings = inspectDocument(servedDoc, servedResult.finalUrl || tab.url);
    } catch (_) {}
  }

  if (useServedAsPrimary && servedFindings.length) {
    // Replace DOM findings with served findings as the primary view.
    allFindings = servedFindings;
    renderFindings();
    currentScore = computeScore(allFindings);
    renderSummary({
      score: currentScore,
      summaryText: 'Served HTML inspected. Probing origin discovery files…',
      summarySource: '',
    });
    // currentPageInfo.url stays as tab.url so origin probes target the right origin.
  }

  // Wire the diff button — enabled whenever we have both rendered and served findings.
  const diffBtn = $('#btn-diff');
  if (diffBtn && servedFindings.length && domPayload.findings.length) {
    diffBtn.disabled = false;
    diffBtn.addEventListener('click', () => {
      openDiffTab({
        url: tab.url,
        checkedAt: new Date().toISOString(),
        servedStatus: servedResult.status,
        servedContentType: servedResult.contentType || '',
        served: servedFindings,
        rendered: domPayload.findings,
      });
    });
  }

  // Origin discovery probes.
  const originFindings = await inspectOrigin(
    (useServedAsPrimary ? servedResult.finalUrl : domPayload.url) || tab.url
  );
  allFindings = (useServedAsPrimary ? servedFindings : domPayload.findings).concat(originFindings);
  renderFindings();
  currentScore = computeScore(allFindings);
  renderSummary({
    score: currentScore,
    summaryText: 'Combining signals. Asking the on-device model for a summary…',
    summarySource: '',
  });

  // On-device model summary.
  const summary = await generateSummary(currentPageInfo, allFindings, currentScore);
  currentSummary = summary;
  renderSummary({
    score: currentScore,
    summaryText: summary.text,
    summarySource: summary.source,
  });
}

main();
