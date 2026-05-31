// content.js — page reader for the MX Comprehension Probe.
//
// Runs in the page context via chrome.scripting.executeScript. It assembles
// the payload a machine can read off this page and returns it. The IIFE
// evaluates to that payload object, which executeScript hands back to the
// popup.
//
// MX-AGNOSTIC BY DESIGN. This reader does not look for MX, score MX, or
// require any MX field. It collects, in one pass, everything a machine sees:
//
//   - the visible rendered text (what a reader sees on screen),
//   - any embedded structured data (JSON-LD), verbatim,
//   - the page's machine-readable meta tags,
//   - any embedded source-frontmatter comment.
//
// A page that carries provenance, authorship, and review metadata hands the
// model a rich payload; a page that carries none hands it bare prose. The
// reader treats both identically. That is the whole point: MX has to win on
// what it puts on the page, not because the tool went looking for it.

(function readPage() {
  const MAX_CHARS = 12000; // keep the prompt inside a small model's budget

  const title = document.title || '';
  const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

  // Visible rendered text of the main content. innerText respects CSS
  // visibility, so content hidden in collapsed tabs/accordions or off-screen
  // is excluded — which is exactly what a reader (and a naive agent) gets.
  const mainEl = document.querySelector('main, article') || document.body;
  const visibleText = (mainEl.innerText || '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  // Embedded structured data (JSON-LD), verbatim.
  const ldBlocks = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
    .map((s) => (s.textContent || '').trim())
    .filter(Boolean);

  // Machine-readable meta tags. We keep the descriptive and governance-bearing
  // ones and drop viewport/theme-colour noise; no MX-specific gate, just a
  // relevance filter so the prompt stays readable.
  const machineMeta = Array.from(document.querySelectorAll('meta[name]'))
    .map((m) => ({ name: m.getAttribute('name') || '', content: m.getAttribute('content') || '' }))
    .filter((m) => /^(mx:|ai-disclosure|author|description|dc\.|dcterms\.|article:)/i.test(m.name));

  // Embedded source-frontmatter comment, if the page carries one.
  const headHtml = document.head ? document.head.innerHTML : '';
  let frontmatter = '';
  const fmMatch = headHtml.match(/MX-SOURCE-FRONTMATTER:START([\s\S]*?)MX-SOURCE-FRONTMATTER:END/);
  if (fmMatch) {
    frontmatter = fmMatch[1].replace(/<!--/g, '').replace(/-->/g, '').trim();
  }

  const parts = [];
  parts.push(`PAGE TITLE: ${title || '(none)'}`);
  parts.push(`META DESCRIPTION: ${metaDesc || '(none)'}`);
  parts.push('');
  parts.push('VISIBLE TEXT:');
  parts.push(visibleText || '(no visible text found)');
  parts.push('');
  parts.push('EMBEDDED STRUCTURED DATA (JSON-LD):');
  parts.push(ldBlocks.length ? ldBlocks.join('\n\n') : '(none found)');
  parts.push('');
  parts.push('MACHINE-READABLE META TAGS:');
  parts.push(machineMeta.length ? machineMeta.map((m) => `${m.name} = ${m.content}`).join('\n') : '(none found)');
  parts.push('');
  parts.push('EMBEDDED SOURCE FRONTMATTER:');
  parts.push(frontmatter || '(none found)');

  let payload = parts.join('\n');
  const truncated = payload.length > MAX_CHARS;
  if (truncated) payload = payload.slice(0, MAX_CHARS) + '\n…[truncated to fit the model context budget]';

  return {
    url: location.href,
    title,
    payload,
    payloadChars: payload.length,
    truncated,
    counts: {
      visibleTextChars: visibleText.length,
      jsonLdBlocks: ldBlocks.length,
      machineMetaTags: machineMeta.length,
      hasFrontmatter: Boolean(frontmatter),
    },
  };
})();
