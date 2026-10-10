/**
 * snippets.js - builds the paste-ready fix for each self-check finding, and the
 * complete <head> block the head-snippet tool page offers.
 *
 * One file runs in Node (require) and in the browser (window.MXSnippets), so
 * the CLI, the worker, the audit suite and the served tool page generate the
 * same text. The served copy, mx-site/js/mx-snippets.js, is held byte-identical
 * to this file by tests/test-mx-site-check.js.
 *
 * Every MX meta name is camelCase. Values come from the site itself where the
 * check found them; where a value must be the owner's choice, the snippet
 * carries a plain placeholder in square brackets.
 *
 * @mx:category mx-site-check
 * @mx:status active
 * @mx:contentType script
 * @mx:tags site-check, fixes, snippets, browser
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.MXSnippets = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function json(obj) {
    return JSON.stringify(obj, null, 2).replace(/</g, '\\u003c');
  }

  function originOf(url) {
    try { return new URL(url).origin; } catch (e) { return ''; }
  }

  function ldScript(obj) {
    return '<script type="application/ld+json">\n' + json(obj) + '\n</script>';
  }

  function webPageLd(ctx) {
    var node = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: ctx.title || '[Page title]',
      url: ctx.url,
      inLanguage: ctx.lang || 'en',
      dateModified: ctx.today || '[YYYY-MM-DD]',
    };
    if (ctx.description) node.description = ctx.description;
    if (ctx.organisation) node.publisher = { '@type': 'Organization', name: ctx.organisation, url: originOf(ctx.url) };
    return node;
  }

  /**
   * An llms.txt wrapped as a minimal HTML page (Agent Directory Discovery
   * Level 1): the text kept verbatim and escaped inside <pre>, a canonical
   * link to the bare file, and explicit permission to index.
   */
  function llmsWrapper(text, title, canonical) {
    return '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>' + esc(title) + '</title>\n'
      + '<meta name="robots" content="index, follow">\n'
      + (canonical ? '<link rel="canonical" href="' + esc(canonical) + '">\n' : '')
      + '</head>\n<body>\n<main>\n<pre class="llms-txt">' + esc(text) + '</pre>\n</main>\n</body>\n</html>';
  }

  /** An edge function that serves an existing plain llms.txt as an HTML page. */
  var LLMS_WORKER = [
    '// Cloudflare Worker: serve /llms.txt as text/html so Common Crawl indexes it.',
    'export default {',
    '  async fetch(request) {',
    '    const url = new URL(request.url);',
    '    if (url.pathname !== \'/llms.txt\') return fetch(request);',
    '    const text = await (await fetch(request)).text();',
    '    const safe = text.replace(/&/g, \'&amp;\').replace(/</g, \'&lt;\').replace(/>/g, \'&gt;\');',
    '    const html = \'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>llms.txt</title>\'',
    '      + \'<meta name="robots" content="index, follow">\'',
    '      + \'<link rel="canonical" href="\' + url.origin + \'/llms.txt">\'',
    '      + \'</head><body><main><pre class="llms-txt">\' + safe + \'</pre></main></body></html>\';',
    '    return new Response(html, { headers: { \'content-type\': \'text/html; charset=utf-8\' } });',
    '  },',
    '};',
  ].join('\n');

  /**
   * Fix builders, keyed by finding id. Each returns {lang, where, snippet}.
   * ctx: {url, title, description, lang, organisation, author, today,
   *       pages: [{url, title, description}], blocked: [{token, owner}]}
   */
  var FIXES = {
    'title-missing': function (ctx) {
      return { lang: 'html', where: 'head', snippet: '<title>[What this page is about] | ' + esc(ctx.organisation || '[Site name]') + '</title>' };
    },
    'description-missing': function () {
      return { lang: 'html', where: 'head', snippet: '<meta name="description" content="[One sentence that says what this page offers and who it is for.]">' };
    },
    'lang-missing': function (ctx) {
      return { lang: 'html', where: 'html', snippet: '<html lang="' + esc(ctx.lang || 'en') + '">' };
    },
    'canonical-missing': function (ctx) {
      return { lang: 'html', where: 'head', snippet: '<link rel="canonical" href="' + esc(ctx.url) + '">' };
    },
    'jsonld-missing': function (ctx) {
      return { lang: 'html', where: 'head', snippet: ldScript(webPageLd(ctx)) };
    },
    'jsonld-invalid': function (ctx) {
      return { lang: 'html', where: 'head', snippet: '<!-- Replace the structured-data block that does not parse with valid JSON, for example: -->\n' + ldScript(webPageLd(ctx)) };
    },
    'author-missing': function (ctx) {
      var who = esc(ctx.author || ctx.organisation || '[Person or team responsible]');
      return { lang: 'html', where: 'head', snippet: '<meta name="author" content="' + who + '">\n<meta name="mx:author" content="' + who + '">' };
    },
    'modified-date-missing': function (ctx) {
      var day = esc(ctx.today || '[YYYY-MM-DD]');
      return { lang: 'html', where: 'head', snippet: '<meta name="mx:modified" content="' + day + '">\n<!-- and in the page\'s JSON-LD: "dateModified": "' + day + '" -->' };
    },
    'license-missing': function () {
      return { lang: 'html', where: 'head', snippet: '<meta name="mx:license" content="[SPDX id, for example CC-BY-4.0 or proprietary]">\n<link rel="license" href="[URL of your licence or terms]">' };
    },
    'content-policy-missing': function () {
      return { lang: 'html', where: 'head', snippet: '<!-- One of: summaries-allowed, full-extraction-allowed, extract-with-attribution, no-extraction, restricted -->\n<meta name="mx:contentPolicy" content="extract-with-attribution">\n<meta name="mx:attribution" content="required">' };
    },
    'h1-missing': function (ctx) {
      return { lang: 'html', where: 'body', snippet: '<h1>' + esc(ctx.title || '[Main heading of the page]') + '</h1>' };
    },
    'main-missing': function () {
      return { lang: 'html', where: 'body', snippet: '<main>\n  <!-- the page\'s own content, without navigation, header or footer -->\n</main>' };
    },
    'img-alt-missing': function () {
      return { lang: 'html', where: 'body', snippet: '<img src="..." alt="[What the image shows, in one short phrase]">\n<!-- a purely decorative image takes an empty alt: alt="" -->' };
    },
    'js-only-content': function (ctx) {
      return { lang: 'html', where: 'body', snippet: '<main>\n  <h1>' + esc(ctx.title || '[Main heading]') + '</h1>\n  <p>[The page\'s key content, sent as HTML from the server rather than drawn by a script.]</p>\n</main>' };
    },
    'robots-missing': function (ctx) {
      return { lang: 'robots', where: '/robots.txt', snippet: 'User-agent: *\nAllow: /\n\nSitemap: ' + originOf(ctx.url) + '/sitemap.xml' };
    },
    'robots-blocks-all': function (ctx) {
      return { lang: 'robots', where: '/robots.txt', snippet: '# Replace "Disallow: /" under User-agent: * with:\nUser-agent: *\nAllow: /\n\nSitemap: ' + originOf(ctx.url) + '/sitemap.xml' };
    },
    'robots-blocks-search': function (ctx) {
      var lines = (ctx.blocked || []).map(function (b) { return 'User-agent: ' + b.token + '\nAllow: /'; });
      return { lang: 'robots', where: '/robots.txt', snippet: lines.join('\n\n') || 'User-agent: Googlebot\nAllow: /' };
    },
    'robots-blocks-shared-dataset': function () {
      return { lang: 'robots', where: '/robots.txt', snippet: '# Remove the Disallow line for CCBot, or replace the group with:\nUser-agent: CCBot\nAllow: /' };
    },
    'robots-blocks-assistant': function (ctx) {
      var lines = (ctx.blocked || []).map(function (b) { return 'User-agent: ' + b.token + '\nAllow: /'; });
      return { lang: 'robots', where: '/robots.txt', snippet: '# Only if you want these assistants to read the site:\n' + lines.join('\n\n') };
    },
    'sitemap-missing': function (ctx) {
      var urls = (ctx.pages && ctx.pages.length ? ctx.pages : [{ url: ctx.url }]).map(function (p) {
        return '  <url><loc>' + esc(p.url) + '</loc>' + (ctx.today ? '<lastmod>' + esc(ctx.today) + '</lastmod>' : '') + '</url>';
      });
      return { lang: 'xml', where: '/sitemap.xml', snippet: '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.join('\n') + '\n</urlset>' };
    },
    'llms-missing': function (ctx) {
      var pages = ctx.pages && ctx.pages.length ? ctx.pages : [{ url: ctx.url, title: ctx.title, description: ctx.description }];
      var list = pages.map(function (p) {
        return '- [' + (p.title || p.url) + '](' + p.url + ')' + (p.description ? ': ' + p.description : '');
      });
      var name = ctx.organisation || ctx.title || '[Site name]';
      var text = '# ' + name + '\n\n> ' + (ctx.description || '[One sentence that says what this site offers.]') + '\n\n## Pages\n\n' + list.join('\n');
      return { lang: 'html', where: 'llms-txt', snippet: llmsWrapper(text, name, originOf(ctx.url) + '/llms.txt') };
    },
    'llms-not-html': function () {
      return { lang: 'javascript', where: 'edge', snippet: LLMS_WORKER };
    },
    'llms-not-in-sitemap': function (ctx) {
      return { lang: 'xml', where: '/sitemap.xml', snippet: '<url><loc>' + esc(originOf(ctx.url)) + '/llms.txt</loc></url>' };
    },
    'llms-not-linked': function () {
      return { lang: 'html', where: 'head', snippet: '<link rel="llms-txt" href="/llms.txt">' };
    },
  };

  function fixFor(id, ctx) {
    var build = FIXES[id];
    return build ? build(ctx || {}) : null;
  }

  /**
   * A complete <head> block from the head-snippet form.
   * form: {title, description, url, lang, organisation, author, modified,
   *        license, contentPolicy, attribution, aiTraining, type}
   */
  function buildHead(form) {
    var f = form || {};
    var lines = [];
    lines.push('<meta charset="utf-8">');
    lines.push('<meta name="viewport" content="width=device-width, initial-scale=1">');
    if (f.title) lines.push('<title>' + esc(f.title) + (f.organisation ? ' | ' + esc(f.organisation) : '') + '</title>');
    if (f.description) lines.push('<meta name="description" content="' + esc(f.description) + '">');
    if (f.url) lines.push('<link rel="canonical" href="' + esc(f.url) + '">');
    if (f.author) lines.push('<meta name="author" content="' + esc(f.author) + '">');
    var mx = [
      ['author', f.author],
      ['modified', f.modified],
      ['license', f.license],
      ['contentPolicy', f.contentPolicy],
      ['attribution', f.attribution],
      ['aiTraining', f.aiTraining],
    ];
    mx.forEach(function (pair) {
      if (pair[1]) lines.push('<meta name="mx:' + pair[0] + '" content="' + esc(pair[1]) + '">');
    });
    var node = {
      '@context': 'https://schema.org',
      '@type': f.type === 'Article' ? 'Article' : 'WebPage',
    };
    if (f.type === 'Article') node.headline = f.title || ''; else node.name = f.title || '';
    if (f.description) node.description = f.description;
    if (f.url) node.url = f.url;
    node.inLanguage = f.lang || 'en';
    if (f.modified) node.dateModified = f.modified;
    if (f.author) node.author = { '@type': 'Person', name: f.author };
    if (f.organisation) node.publisher = { '@type': 'Organization', name: f.organisation, url: originOf(f.url) || undefined };
    if (f.license) node.license = f.license;
    lines.push(ldScript(node));
    return '<!-- Put lang="' + esc(f.lang || 'en') + '" on the <html> element. -->\n' + lines.join('\n');
  }

  return { esc: esc, FIXES: FIXES, fixFor: fixFor, buildHead: buildHead, ids: Object.keys(FIXES) };
}));
