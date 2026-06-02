// content.js — DOM inspection for MX-readiness.
//
// Runs in the page context via chrome.scripting.executeScript. Pure DOM
// inspection; no fetches (those happen in the background service worker
// with host_permissions). Returns a structured findings object the popup
// renders and Gemini Nano summarises.
//
// Sections, mirroring the audit's MX-readiness inputs:
//   1. mx-governance   — mx:cog meta + governance triplet + ai policy
//   2. ai-disclosure   — WICG ai-disclosure + IPTC digitalSourceType
//   3. discovery-links — rel="llms-txt", rel="ai-usage", canonical, sitemap
//   4. structured-data — JSON-LD presence + @type + AI/MX-related fields
//   5. open-graph      — og:* and twitter:* completeness
//   6. accessibility   — html lang, skip link, image alt coverage, form labels
//   7. provenance      — embedded source-YAML HTML comment markers
//
// Each finding is { id, label, status: 'pass' | 'warn' | 'fail' | 'info', detail, evidence }.

(function inspectDom() {
  const head = document.head;
  const findings = [];

  // Helpers --------------------------------------------------------------

  const metaByName = (n) => document.querySelector(`meta[name="${n}"]`);
  const metaByProperty = (p) => document.querySelector(`meta[property="${p}"]`);
  const metaContent = (n) => metaByName(n)?.getAttribute('content') || null;
  const metaPropContent = (p) => metaByProperty(p)?.getAttribute('content') || null;
  const linkByRel = (r) => document.querySelector(`link[rel="${r}"]`);

  const add = (section, id, label, status, detail, evidence) => {
    findings.push({ section, id, label, status, detail, evidence: evidence ?? null });
  };

  // 1. MX governance -----------------------------------------------------

  const mxCog = metaByName('mx:cog')?.getAttribute('content') || null;
  add('mx-governance', 'mx-cog',
    'MX magic-header meta (mx:cog)',
    mxCog ? 'pass' : 'fail',
    mxCog
      ? 'Page identifies as an MX-aware HTML carrier; the value points consumers at the cog spec and runtime URLs.'
      : 'No <meta name="mx:cog"> present. The page does not identify itself as an MX-aware HTML carrier.',
    mxCog);

  const mxStatus = metaContent('mx:status');
  const mxContentType = metaContent('mx:contentType');
  const mxAudience = metaContent('mx:audience');
  const hasGovernanceTriplet = mxStatus && mxContentType && mxAudience;
  add('mx-governance', 'mx-triplet',
    'Governance triplet (mx:status + mx:contentType + mx:audience)',
    hasGovernanceTriplet ? 'pass' : (mxStatus || mxContentType || mxAudience ? 'warn' : 'fail'),
    hasGovernanceTriplet
      ? `Triplet complete. status="${mxStatus}", contentType="${mxContentType}", audience="${mxAudience}".`
      : 'The triplet that lets a machine route the page (status, content type, audience) is incomplete.',
    { status: mxStatus, contentType: mxContentType, audience: mxAudience });

  const aiAssistance = metaContent('mx:aiAssistance');
  const aiEditable = metaContent('mx:aiEditable');
  const contentPolicy = metaContent('mx:contentPolicy');
  const hasAnyAiPolicy = aiAssistance || aiEditable || contentPolicy;
  add('mx-governance', 'mx-ai-policy',
    'AI policy hints (mx:aiAssistance / mx:aiEditable / mx:contentPolicy)',
    hasAnyAiPolicy ? 'pass' : 'warn',
    hasAnyAiPolicy
      ? 'Page declares at least one AI-policy hint a machine can read before acting.'
      : 'No AI-policy hints present. An agent reading this page has to default to its own policy.',
    { aiAssistance, aiEditable, contentPolicy });

  // 2. AI disclosure -----------------------------------------------------

  const aiDisclosure = metaContent('ai-disclosure');
  const validDisclosureValues = ['none', 'ai-assisted', 'ai-generated', 'autonomous'];
  const aiDisclosureValid = aiDisclosure && validDisclosureValues.includes(aiDisclosure);
  add('ai-disclosure', 'wicg-disclosure',
    'WICG AI-disclosure meta (ai-disclosure)',
    aiDisclosureValid ? 'pass' : (aiDisclosure ? 'warn' : 'fail'),
    aiDisclosureValid
      ? `Page declares "${aiDisclosure}" per WICG ai-content-disclosure.`
      : aiDisclosure
      ? `Value "${aiDisclosure}" is not one of the WICG vocabulary terms (none, ai-assisted, ai-generated, autonomous).`
      : 'No <meta name="ai-disclosure"> tag. A machine cannot tell whether the page was authored, ai-assisted, or ai-generated.',
    aiDisclosure);

  let jsonLdObjects = [];
  let jsonLdParseError = null;
  for (const block of document.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      const parsed = JSON.parse(block.textContent);
      const arr = Array.isArray(parsed) ? parsed : (parsed['@graph'] ? parsed['@graph'] : [parsed]);
      jsonLdObjects.push(...arr);
    } catch (e) {
      jsonLdParseError = e.message;
    }
  }

  const digitalSourceType = jsonLdObjects
    .map((o) => o.digitalSourceType)
    .find((v) => typeof v === 'string');
  const isIptcIri = (v) => typeof v === 'string' && v.startsWith('https://cv.iptc.org/newscodes/digitalsourcetype/');
  add('ai-disclosure', 'iptc-source-type',
    'IPTC digitalSourceType in JSON-LD',
    isIptcIri(digitalSourceType) ? 'pass' : (digitalSourceType ? 'warn' : 'fail'),
    isIptcIri(digitalSourceType)
      ? `JSON-LD carries IPTC IRI "${digitalSourceType}".`
      : digitalSourceType
      ? `JSON-LD has digitalSourceType "${digitalSourceType}" but it is not an IPTC IRI form.`
      : 'No digitalSourceType in JSON-LD. The IPTC pair to the WICG ai-disclosure is missing.',
    digitalSourceType);

  // 3. Discovery links (in head) ----------------------------------------

  const llmsTxtLink = linkByRel('llms-txt')?.getAttribute('href') || null;
  add('discovery-links', 'link-llms-txt',
    '<link rel="llms-txt">',
    llmsTxtLink ? 'pass' : 'warn',
    llmsTxtLink
      ? `Discovery link present → ${llmsTxtLink}.`
      : 'No <link rel="llms-txt"> in <head>. Agents have to guess the URL.',
    llmsTxtLink);

  const aiUsageLink = linkByRel('ai-usage')?.getAttribute('href') || null;
  add('discovery-links', 'link-ai-usage',
    '<link rel="ai-usage">',
    aiUsageLink ? 'pass' : 'warn',
    aiUsageLink
      ? `Discovery link present → ${aiUsageLink}.`
      : 'No <link rel="ai-usage"> in <head>. The publisher AI declaration is not advertised.',
    aiUsageLink);

  const canonical = linkByRel('canonical')?.getAttribute('href') || null;
  const canonicalMatches = canonical && location.href.split('#')[0].split('?')[0] === canonical.split('#')[0].split('?')[0];
  add('discovery-links', 'canonical',
    '<link rel="canonical">',
    canonical ? (canonicalMatches ? 'pass' : 'warn') : 'fail',
    canonical
      ? canonicalMatches
        ? `Canonical matches current URL.`
        : `Canonical is "${canonical}" but the current URL is different. Either the page is a duplicate or the canonical is wrong.`
      : 'No <link rel="canonical">. A machine cannot tell which URL is authoritative.',
    canonical);

  const sitemapLink = linkByRel('sitemap')?.getAttribute('href') || null;
  add('discovery-links', 'sitemap',
    '<link rel="sitemap">',
    sitemapLink ? 'pass' : 'info',
    sitemapLink ? `Sitemap declared → ${sitemapLink}.` : 'No <link rel="sitemap"> in <head>. Agents fall back to /sitemap.xml.',
    sitemapLink);

  // 4. Structured data --------------------------------------------------

  add('structured-data', 'jsonld-present',
    'JSON-LD blocks',
    jsonLdObjects.length ? 'pass' : 'fail',
    jsonLdParseError
      ? `JSON-LD present but failed to parse: ${jsonLdParseError}`
      : jsonLdObjects.length
      ? `${jsonLdObjects.length} JSON-LD object(s) detected.`
      : 'No JSON-LD on the page. Schema.org structured data is absent.',
    jsonLdObjects.length || 0);

  const jsonLdTypes = jsonLdObjects.map((o) => o['@type']).filter(Boolean);
  add('structured-data', 'jsonld-types',
    'Schema.org @type coverage',
    jsonLdTypes.length ? 'pass' : 'warn',
    jsonLdTypes.length
      ? `Types declared: ${jsonLdTypes.flat().join(', ')}.`
      : 'JSON-LD present but no @type fields.',
    jsonLdTypes);

  // 5. Open Graph + Twitter ---------------------------------------------

  const og = {
    type: metaPropContent('og:type'),
    title: metaPropContent('og:title'),
    description: metaPropContent('og:description'),
    url: metaPropContent('og:url'),
    image: metaPropContent('og:image'),
    site_name: metaPropContent('og:site_name'),
    locale: metaPropContent('og:locale'),
  };
  const ogCount = Object.values(og).filter(Boolean).length;
  add('open-graph', 'og-completeness',
    'Open Graph completeness',
    ogCount >= 5 ? 'pass' : ogCount >= 3 ? 'warn' : 'fail',
    ogCount >= 5
      ? `${ogCount}/7 OG fields present. Strong social-graph signal.`
      : `${ogCount}/7 OG fields. Below the recommended floor (5/7).`,
    og);

  const tw = {
    card: metaContent('twitter:card'),
    title: metaContent('twitter:title'),
    description: metaContent('twitter:description'),
    image: metaContent('twitter:image'),
  };
  const twCount = Object.values(tw).filter(Boolean).length;
  add('open-graph', 'twitter-card',
    'Twitter Card completeness',
    twCount >= 3 ? 'pass' : twCount >= 1 ? 'warn' : 'fail',
    `${twCount}/4 Twitter Card fields present.`,
    tw);

  // 6. Accessibility quick wins -----------------------------------------

  const htmlLang = document.documentElement.getAttribute('lang') || null;
  add('accessibility', 'html-lang',
    '<html lang="…">',
    htmlLang ? 'pass' : 'fail',
    htmlLang ? `Document language declared as "${htmlLang}".` : 'No lang attribute on <html>. Assistive tech and machines cannot determine the document language.',
    htmlLang);

  const skipLink = document.querySelector('a.skip-link, a[href="#main"], a[href="#content"]');
  add('accessibility', 'skip-link',
    'Skip-to-main link',
    skipLink ? 'pass' : 'warn',
    skipLink ? `Skip link present (href="${skipLink.getAttribute('href')}").` : 'No skip link found. Keyboard users must tab through the header on every page load.',
    skipLink?.getAttribute('href') || null);

  const imgs = Array.from(document.images);
  const imgsMissingAlt = imgs.filter((i) => !i.hasAttribute('alt'));
  const altCoverage = imgs.length ? Math.round(100 * (imgs.length - imgsMissingAlt.length) / imgs.length) : 100;
  add('accessibility', 'img-alt',
    'Image alt coverage',
    altCoverage === 100 ? 'pass' : altCoverage >= 80 ? 'warn' : 'fail',
    imgs.length
      ? `${altCoverage}% of ${imgs.length} <img> tags have an alt attribute.`
      : 'No images on the page.',
    { total: imgs.length, missing: imgsMissingAlt.length });

  const inputs = Array.from(document.querySelectorAll('input, select, textarea'))
    .filter((el) => el.type !== 'hidden' && el.type !== 'submit' && el.type !== 'button' && el.type !== 'reset');
  const labelled = inputs.filter((el) => {
    if (el.hasAttribute('aria-label') || el.hasAttribute('aria-labelledby') || el.hasAttribute('title')) return true;
    if (el.id && document.querySelector(`label[for="${el.id}"]`)) return true;
    return el.closest('label') !== null;
  });
  const labelCoverage = inputs.length ? Math.round(100 * labelled.length / inputs.length) : 100;
  add('accessibility', 'form-labels',
    'Form-control labelling',
    inputs.length === 0 ? 'info' : labelCoverage === 100 ? 'pass' : labelCoverage >= 80 ? 'warn' : 'fail',
    inputs.length
      ? `${labelCoverage}% of ${inputs.length} form controls have an accessible name.`
      : 'No form controls on the page.',
    { total: inputs.length, labelled: labelled.length });

  // 7. Provenance markers -----------------------------------------------

  const headHtml = head.innerHTML;
  const hasFrontmatterMarker = headHtml.includes('MX-SOURCE-FRONTMATTER:START');
  const hasProvenancePayload = headHtml.includes('xmp:ProvenanceAiPayload')
    || headHtml.includes('mx:x-mx-provenance');
  add('provenance', 'source-yaml',
    'Embedded source-YAML frontmatter',
    hasFrontmatterMarker ? 'pass' : 'info',
    hasFrontmatterMarker
      ? 'Page <head> carries a verbatim copy of the source markdown frontmatter inside an HTML comment, per the MX carrier convention.'
      : 'No MX-SOURCE-FRONTMATTER markers in <head>. Downstream tools must reconstruct frontmatter from per-field meta tags.',
    hasFrontmatterMarker);

  add('provenance', 'provenance-payload',
    'Provenance payload reference',
    hasProvenancePayload ? 'pass' : 'info',
    hasProvenancePayload
      ? 'Page references a provenance payload (AI sidecar or XMP-embedded chain).'
      : 'No provenance payload markers detected on the page.',
    hasProvenancePayload);

  // ---------------------------------------------------------------------

  return {
    url: location.href,
    title: document.title,
    contentType: document.contentType || 'text/html',
    isLlmViewPage: document.title.startsWith('LLM View — '),
    findings,
    inspectedAt: new Date().toISOString(),
  };
})();
