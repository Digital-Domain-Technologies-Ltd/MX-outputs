// background.js — service worker that handles the origin-level discovery
// fetches the audit pipeline runs for every audited page:
//   /llms.txt
//   /llms-full.txt
//   /robots.txt
//   /AI-USAGE.json
//   /agent-card.json
//   /sitemap.xml
//
// The fetches happen here (not in the popup or content script) so they
// inherit the host_permissions grant declared in manifest.json and bypass
// the per-page CORS rules. Each fetch is HEAD where the file's existence
// is what matters; GET where the body needs to be inspected (robots.txt
// for agent restrictions, AI-USAGE.json for shape validity).

const TIMEOUT_MS = 4000;

async function probe(url, { method = 'GET' } = {}) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const r = await fetch(url, { method, signal: controller.signal, redirect: 'follow' });
    clearTimeout(t);
    const status = r.status;
    const ok = r.ok;
    let body = null;
    if (ok && method === 'GET') {
      try { body = await r.text(); } catch (e) { body = null; }
    }
    return { url, status, ok, body, error: null };
  } catch (e) {
    clearTimeout(t);
    return { url, status: 0, ok: false, body: null, error: e.name === 'AbortError' ? 'timeout' : e.message };
  }
}

async function inspectOrigin(pageUrl) {
  const origin = new URL(pageUrl).origin;
  const llmsTxt = await probe(`${origin}/llms.txt`);
  const llmsFull = await probe(`${origin}/llms-full.txt`);
  const robots = await probe(`${origin}/robots.txt`);
  const aiUsage = await probe(`${origin}/AI-USAGE.json`);
  const agentCard = await probe(`${origin}/agent-card.json`);
  const sitemap = await probe(`${origin}/sitemap.xml`, { method: 'HEAD' });

  // Derive findings -----------------------------------------------------

  const findings = [];
  const add = (id, label, status, detail, evidence) =>
    findings.push({ section: 'origin-discovery', id, label, status, detail, evidence: evidence ?? null });

  add('llms-txt',
    '/llms.txt',
    llmsTxt.ok ? 'pass' : 'fail',
    llmsTxt.ok
      ? 'Origin serves /llms.txt — the curated agent-readable index.'
      : `Origin does not serve /llms.txt (status ${llmsTxt.status}${llmsTxt.error ? ', ' + llmsTxt.error : ''}).`,
    { status: llmsTxt.status, bytes: llmsTxt.body?.length || 0 });

  add('llms-full-txt',
    '/llms-full.txt',
    llmsFull.ok ? 'pass' : 'info',
    llmsFull.ok
      ? 'Origin serves /llms-full.txt — the full machine-readable corpus.'
      : `Origin does not serve /llms-full.txt (status ${llmsFull.status}).`,
    { status: llmsFull.status, bytes: llmsFull.body?.length || 0 });

  // robots.txt analysis: present, no broad disallow for AI agents.
  let robotsVerdict = { status: 'fail', detail: 'No robots.txt served.' };
  if (robots.ok) {
    const body = (robots.body || '').toLowerCase();
    const blocksAi = /user-agent:\s*(gptbot|claudebot|googlebot-extended|chatgpt-user|perplexitybot|ccbot|anthropic-ai|googleother|amazonbot)[\s\S]{0,200}?disallow:\s*\//.test(body);
    const referencesAiTxt = body.includes('ai.txt');
    robotsVerdict = {
      status: blocksAi ? 'warn' : 'pass',
      detail: blocksAi
        ? 'robots.txt serves, but at least one AI/agent user-agent is disallowed from the root.'
        : `robots.txt serves and does not disallow common agent user-agents at the root${referencesAiTxt ? ' (and references /ai.txt)' : ''}.`,
    };
  }
  add('robots-txt', '/robots.txt', robotsVerdict.status, robotsVerdict.detail,
    { status: robots.status, bytes: robots.body?.length || 0 });

  // AI-USAGE.json — presence + JSON-validity + key fields.
  let aiUsageVerdict = { status: 'fail', detail: 'No /AI-USAGE.json served.' };
  if (aiUsage.ok) {
    try {
      const parsed = JSON.parse(aiUsage.body);
      const hasDisclosure = parsed && (parsed.disclosure || parsed.aiDisclosure);
      const hasPublisher = parsed && (parsed.publisher || parsed.organization);
      aiUsageVerdict = {
        status: hasDisclosure ? 'pass' : 'warn',
        detail: hasDisclosure
          ? `AI-USAGE.json valid; declares an AI disclosure block${hasPublisher ? ' and a publisher block' : ''}.`
          : 'AI-USAGE.json valid JSON but has no recognised disclosure block.',
      };
    } catch (e) {
      aiUsageVerdict = { status: 'warn', detail: `AI-USAGE.json served but invalid JSON (${e.message}).` };
    }
  }
  add('ai-usage-json', '/AI-USAGE.json', aiUsageVerdict.status, aiUsageVerdict.detail,
    { status: aiUsage.status });

  // agent-card.json — A2A discovery document.
  let agentCardVerdict = { status: 'info', detail: 'No /agent-card.json served (A2A discovery absent; not required for non-agent sites).' };
  if (agentCard.ok) {
    try {
      const parsed = JSON.parse(agentCard.body);
      agentCardVerdict = {
        status: 'pass',
        detail: `/agent-card.json valid (${parsed.name || parsed['@id'] || 'unnamed'}).`,
      };
    } catch (e) {
      agentCardVerdict = { status: 'warn', detail: `/agent-card.json served but invalid JSON.` };
    }
  }
  add('agent-card', '/agent-card.json', agentCardVerdict.status, agentCardVerdict.detail,
    { status: agentCard.status });

  add('sitemap',
    '/sitemap.xml',
    sitemap.ok ? 'pass' : 'warn',
    sitemap.ok
      ? 'Origin serves /sitemap.xml.'
      : `Origin does not serve /sitemap.xml (status ${sitemap.status}).`,
    { status: sitemap.status });

  return findings;
}

const SERVED_HTML_TIMEOUT_MS = 6000;

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === 'inspect-origin') {
    inspectOrigin(msg.pageUrl)
      .then((findings) => sendResponse({ ok: true, findings }))
      .catch((e) => sendResponse({ ok: false, error: e.message }));
    return true;
  }
  if (msg.type === 'fetch-served-html') {
    fetchServedHtml(msg.url)
      .then((result) => sendResponse(result))
      .catch((e) => sendResponse({ error: e.message }));
    return true;
  }
});

async function fetchServedHtml(url) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), SERVED_HTML_TIMEOUT_MS);
  try {
    const r = await fetch(url, {
      headers: { 'Accept': 'text/html,application/xhtml+xml,*/*;q=0.8' },
      redirect: 'follow',
      signal: controller.signal,
    });
    clearTimeout(t);
    const html = r.ok ? await r.text() : null;
    return { ok: r.ok, status: r.status, contentType: r.headers.get('content-type') || '', html, finalUrl: r.url };
  } catch (e) {
    clearTimeout(t);
    return { ok: false, error: e.name === 'AbortError' ? 'Timed out fetching served HTML.' : e.message };
  }
}
