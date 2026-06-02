// background.js — service worker for MX: LLM View.
//
// When the user clicks the extension icon, this worker:
//   1. Fetches the current tab's URL with Accept: text/markdown
//   2. Injects a script into the tab that replaces the entire page
//      with what the server returned — so the viewport shows exactly
//      what a markdown-preferring LLM agent would receive.
//
// No cookies are sent. The request is unauthenticated, matching what
// an external LLM agent would send on a cold fetch.

const TIMEOUT_MS = 8000;
const MAX_BODY_CHARS = 100_000;

chrome.action.onClicked.addListener(async (tab) => {
  const url = tab && tab.url;
  if (!url || /^(chrome|edge|about|data|javascript):/.test(url)) return;

  const result = await fetchAsMarkdown(url);

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: renderMarkdownView,
    args: [result],
  });
});

async function fetchAsMarkdown(url) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      headers: { 'Accept': 'text/markdown, text/plain;q=0.9, */*;q=0.1' },
      redirect: 'follow',
      signal: controller.signal,
    });
    clearTimeout(t);

    const contentType = response.headers.get('content-type') || '';
    const finalUrl = response.url;

    let body = await response.text();
    const byteCount = body.length;
    let truncated = false;
    if (body.length > MAX_BODY_CHARS) {
      body = body.slice(0, MAX_BODY_CHARS);
      truncated = true;
    }

    return { status: response.status, contentType, finalUrl,
             redirected: finalUrl !== url, body, truncated, byteCount };
  } catch (e) {
    clearTimeout(t);
    return {
      error: e.name === 'AbortError'
        ? `Request timed out after ${TIMEOUT_MS / 1000} seconds.`
        : e.message,
    };
  }
}

// ---------------------------------------------------------------------------
// renderMarkdownView — runs inside the active tab via scripting.executeScript.
// Must be completely self-contained: no imports, no references to outer scope.
// ---------------------------------------------------------------------------

function renderMarkdownView(result) {
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  if (result.error) {
    document.open();
    document.write('<!DOCTYPE html><html><head><meta charset="UTF-8">'
      + '<title>MX: LLM View — Error</title>'
      + '<style>body{font-family:sans-serif;padding:2rem;color:#b91c1c;background:#fff}'
      + 'h1{margin-bottom:.75rem}p{margin-bottom:.5rem}</style></head><body>'
      + '<h1>MX: LLM View — fetch error</h1>'
      + '<p>' + esc(result.error) + '</p>'
      + '<p style="color:#4b5563;font-size:.875rem">The request was made with '
      + '<code>Accept: text/markdown</code> and no session cookies.</p>'
      + '</body></html>');
    document.close();
    return;
  }

  const ct = result.contentType || '';
  const ctBase = ct.split(';')[0].trim().toLowerCase();

  let verdictText, verdictBg, verdictFg;
  if (ctBase === 'text/markdown' || ctBase === 'text/plain') {
    verdictText = 'markdown served';
    verdictBg = '#dcfce7';
    verdictFg = '#15803d';
  } else if (ctBase === 'text/html' || ctBase === 'application/xhtml+xml') {
    verdictText = 'html returned — server did not negotiate';
    verdictBg = '#fee2e2';
    verdictFg = '#b91c1c';
  } else if (!ctBase) {
    verdictText = 'no content-type';
    verdictBg = '#fef3c7';
    verdictFg = '#b45309';
  } else {
    verdictText = 'other type';
    verdictBg = '#fef3c7';
    verdictFg = '#b45309';
  }

  const statusColor = result.status >= 200 && result.status < 300
    ? '#15803d' : result.status >= 400 ? '#b91c1c' : '#b45309';

  const lineCount = result.body ? (result.body.match(/\n/g) || []).length + 1 : 0;
  const counts = (result.byteCount || 0).toLocaleString() + ' chars · '
    + lineCount.toLocaleString() + ' lines'
    + (result.truncated ? ' · truncated at 100,000 chars' : '');

  const redirectNote = result.redirected && result.finalUrl
    ? '<p style="font-family:monospace;font-size:11px;color:#b45309;margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'
      + 'Redirected to: ' + esc(result.finalUrl) + '</p>'
    : '';

  const bodyHtml = result.body
    ? '<pre id="llm-body">' + esc(result.body) + '</pre>'
    : '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#6b7280;font-style:italic">No response body.</div>';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>LLM View — ${esc(ctBase || 'unknown')} — ${esc((result.finalUrl || '').replace(/https?:\/\//, '').slice(0, 60))}</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --ink: #111827; --ink-soft: #4b5563; --paper: #ffffff; --paper-soft: #f9fafb;
    --rule: #e5e7eb; --accent: #4f46e5;
    --font: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --mono: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  @media (prefers-color-scheme: dark) {
    :root { --ink: #f3f4f6; --ink-soft: #9ca3af; --paper: #111827;
            --paper-soft: #1f2937; --rule: #374151; --accent: #a5b4fc; }
  }
  html, body { height: 100%; }
  body { font-family: var(--font); color: var(--ink); background: var(--paper);
         display: flex; flex-direction: column; }
  .bar { background: var(--paper-soft); border-bottom: 1px solid var(--rule);
         padding: 10px 16px; flex: 0 0 auto; }
  .bar-title { font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px; }
  .bar-url { font-family: var(--mono); font-size: 11px; color: var(--ink-soft);
             overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-bottom: 6px; }
  .badges { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .badge-label { font-size: 10px; font-weight: 700; text-transform: uppercase;
                 letter-spacing: .07em; color: var(--ink-soft); }
  .badge { padding: 2px 7px; border-radius: 4px; font-family: var(--mono);
           font-size: 11px; font-weight: 600; border: 1px solid var(--rule);
           background: var(--paper-soft); }
  .pill { padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: .05em;
          background: ${verdictBg}; color: ${verdictFg}; }
  .counts { font-size: 11px; color: var(--ink-soft); padding: 5px 16px;
            border-bottom: 1px solid var(--rule); flex: 0 0 auto; background: var(--paper); }
  .body-area { flex: 1 1 auto; overflow: auto; background: var(--paper-soft); }
  pre { margin: 0; padding: 16px; font-family: var(--mono); font-size: 12px;
        line-height: 1.55; white-space: pre-wrap; word-break: break-all;
        color: var(--ink); min-height: 100%; }
  .copy-btn { float: right; padding: 4px 10px; font-size: 11px; font-weight: 600;
              font-family: var(--font); color: var(--accent); background: transparent;
              border: 1px solid var(--accent); border-radius: 4px; cursor: pointer;
              transition: background .12s, color .12s; }
  .copy-btn:hover { background: var(--accent); color: var(--paper); }
  .copy-btn.copied { background: #dcfce7; color: #15803d; border-color: #15803d; }
  .note { font-size: 10px; color: var(--ink-soft); font-style: italic; }
</style>
</head>
<body>
<header class="bar">
  <div class="bar-title">MX: LLM View</div>
  <div class="bar-url" title="${esc(result.finalUrl || '')}">${esc(result.finalUrl || '')}</div>
  <div class="badges">
    <span class="badge-label">HTTP</span>
    <span class="badge" style="color:${statusColor}">${esc(String(result.status))}</span>
    <span class="badge-label">Type</span>
    <span class="badge" title="${esc(ct)}">${esc(ctBase || '(none)')}</span>
    <span class="pill">${esc(verdictText)}</span>
  </div>
  ${redirectNote}
</header>
<div class="counts">
  <button class="copy-btn" id="copy-btn">Copy body</button>
  ${esc(counts)}
  &nbsp;&middot;&nbsp;
  <span class="note">fetched without session cookies &middot; Accept: text/markdown &middot; use browser back to return</span>
</div>
<div class="body-area">${bodyHtml}</div>
<script>
  document.getElementById('copy-btn').addEventListener('click', function() {
    var pre = document.getElementById('llm-body');
    if (!pre) return;
    navigator.clipboard.writeText(pre.textContent).then(function() {
      var btn = document.getElementById('copy-btn');
      btn.textContent = 'Copied';
      btn.classList.add('copied');
      setTimeout(function() { btn.textContent = 'Copy body'; btn.classList.remove('copied'); }, 1800);
    });
  });
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
      var pre = document.getElementById('llm-body');
      if (pre) {
        var sel = window.getSelection(), range = document.createRange();
        range.selectNodeContents(pre);
        sel.removeAllRanges();
        sel.addRange(range);
        e.preventDefault();
      }
    }
  });
</script>
</body>
</html>`;

  document.open();
  document.write(html);
  document.close();
}
