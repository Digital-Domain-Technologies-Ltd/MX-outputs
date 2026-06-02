// popup.js — orchestrator for MX: LLM View.
// Gets the current tab URL, asks the background worker to re-fetch it
// with Accept: text/markdown, then renders what the server returned.

(async () => {
  const elUrl      = document.getElementById('page-url');
  const elLoading  = document.getElementById('loading');
  const elError    = document.getElementById('error');
  const elResult   = document.getElementById('result');
  const elStatus   = document.getElementById('http-status');
  const elCType    = document.getElementById('content-type');
  const elVerdict  = document.getElementById('verdict');
  const elRedirect = document.getElementById('redirect-notice');
  const elCounts   = document.getElementById('counts');
  const elBody     = document.getElementById('body-content');
  const elCopy     = document.getElementById('btn-copy');

  // ── 1. Get current tab ──────────────────────────────────────

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = tab?.url || '';

  elUrl.textContent = url || '(no URL)';
  elUrl.title = url;

  if (!url || url.startsWith('chrome://') || url.startsWith('chrome-extension://') || url.startsWith('about:') || url.startsWith('edge://')) {
    showError('Cannot fetch internal browser pages.');
    return;
  }

  // ── 2. Fetch with Accept: text/markdown ─────────────────────

  let result;
  try {
    result = await chrome.runtime.sendMessage({ action: 'fetchAsMarkdown', url });
  } catch (e) {
    showError(`Extension error: ${e.message}`);
    return;
  }

  if (!result || result.error) {
    showError(result?.error || 'Unknown error from background worker.');
    return;
  }

  // ── 3. Render ───────────────────────────────────────────────

  renderResult(result, url);

  function renderResult(r, originalUrl) {
    elLoading.classList.add('hidden');
    elResult.classList.remove('hidden');

    // HTTP status badge
    elStatus.textContent = r.status;
    if (r.status >= 200 && r.status < 300) {
      elStatus.className = 'badge badge-pass';
    } else if (r.status >= 400) {
      elStatus.className = 'badge badge-fail';
    } else {
      elStatus.className = 'badge badge-warn';
    }

    // Content-type badge (strip charset and params for display)
    const fullCt = r.contentType || '(none)';
    const ctBase = fullCt.split(';')[0].trim().toLowerCase();
    elCType.textContent = ctBase || '(none)';
    elCType.title = fullCt;

    // Negotiation verdict: did the server honour the Accept header?
    let verdictText, verdictClass;
    if (ctBase === 'text/markdown') {
      verdictText = 'markdown served';
      verdictClass = 'status-pill pass';
    } else if (ctBase === 'text/plain') {
      verdictText = 'plain text';
      verdictClass = 'status-pill pass';
    } else if (ctBase === 'text/html' || ctBase === 'application/xhtml+xml') {
      verdictText = 'html returned';
      verdictClass = 'status-pill fail';
    } else if (ctBase === '(none)' || ctBase === '') {
      verdictText = 'no content-type';
      verdictClass = 'status-pill warn';
    } else {
      verdictText = 'other type';
      verdictClass = 'status-pill warn';
    }
    elVerdict.textContent = verdictText;
    elVerdict.className = verdictClass;

    // Redirect notice
    if (r.redirected && r.finalUrl && r.finalUrl !== originalUrl) {
      elRedirect.textContent = `Redirected to: ${r.finalUrl}`;
      elRedirect.classList.remove('hidden');
    }

    // Counts
    const lineCount = r.body ? (r.body.match(/\n/g) || []).length + 1 : 0;
    let countsText = `${r.byteCount.toLocaleString()} chars · ${lineCount.toLocaleString()} lines`;
    if (r.truncated) countsText += ' · truncated at 100,000 chars';
    elCounts.textContent = countsText;

    // Body
    elBody.textContent = r.body || '';

    // Show copy button
    elCopy.classList.remove('hidden');
    elCopy.addEventListener('click', () => {
      navigator.clipboard.writeText(r.body || '').then(() => {
        elCopy.textContent = 'Copied';
        elCopy.classList.add('copied');
        setTimeout(() => {
          elCopy.textContent = 'Copy body';
          elCopy.classList.remove('copied');
        }, 1800);
      }).catch(() => {
        elCopy.textContent = 'Copy failed';
        setTimeout(() => { elCopy.textContent = 'Copy body'; }, 1800);
      });
    });
  }

  function showError(msg) {
    elLoading.classList.add('hidden');
    elError.textContent = msg;
    elError.classList.remove('hidden');
  }
})();
