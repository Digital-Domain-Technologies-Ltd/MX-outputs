// background.js — service worker that re-fetches the current page with
// Accept: text/markdown so the popup can show what a markdown-preferring
// LLM would actually receive.
//
// The fetch happens here (not in the popup) so it inherits the
// host_permissions grant in manifest.json and can reach any URL.
// No cookies are sent — the request is unauthenticated, matching what
// an external LLM agent would send on a cold fetch.

const TIMEOUT_MS = 8000;
const MAX_BODY_CHARS = 100_000;

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.action === 'fetchAsMarkdown') {
    fetchAsMarkdown(msg.url)
      .then(result => sendResponse(result))
      .catch(e => sendResponse({ error: e.message }));
    return true; // keep channel open for async response
  }
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

    return {
      status: response.status,
      contentType,
      finalUrl,
      redirected: finalUrl !== url,
      body,
      truncated,
      byteCount,
    };
  } catch (e) {
    clearTimeout(t);
    return {
      error: e.name === 'AbortError'
        ? `Request timed out after ${TIMEOUT_MS / 1000} seconds.`
        : e.message,
    };
  }
}
