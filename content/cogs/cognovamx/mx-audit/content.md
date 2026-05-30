---
# cog v1 spec=https://mx.allabout.network/cog.html runtime=https://mx.allabout.network/cog-runtime.html
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "mx-audit"
version: "1.15.0"
description: "Comprehensive web audit — crawl pages, analyse accessibility, performance, SEO, and AI agent suitability, then generate a partnership-ready executive report."

created: 2026-02-14
modified: 2026-05-30

author: Tom Cranstoun

mx:
  contentType: action-doc
  purpose: "Orchestrate a comprehensive web audit: crawl, analyse accessibility / performance / SEO / AI-agent suitability, infill the report skeleton, run readability and verification gates, and render the PDF deliverable."
  stability: stable
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: published
  x-mx-riskLevel: medium
  actionType: hybrid
  x-mx-contextProvides:
    - "End-to-end audit pipeline contract: phases, env vars, output layout under mx-outputs/audit/"
    - "Embedded scripted block (mx-exec embedded id mx-audit-script) and the descriptive SOP for the LLM-driven repair pass"
    - "hostSlug derivation rules that keep multilingual audits in sibling folders"
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/mx-audit.cog.md

  x-mx-category: mx-sales
  partOf: mx-os
  refersTo: [cog-unified-spec, mx-principles]
  buildsOn: [what-is-a-cog, building-action-docs]
  tags: [audit, web-audit, site, website, domain, accessibility, wcag, performance, seo, ai-agents, llms-txt, sales-enablement, partnership, white-label, report-generation]

  audience: agents
  readingLevel: advanced

  x-mx-execute:
    runtime: runbook
    command: mx audit
    actions:
      - name: audit
        description: Run the full audit pipeline — crawl, analyse, inspect, verify, generate report
        usage: |
          Run all actions in sequence: recon → crawl → analyse → inspect → check-discovery → verify-claims → select-template → generate-report → lint → generate-pdf → post-pdf-cross-check → summary.
          This is the primary workflow. It produces a complete executive report from a URL.
          CRITICAL: The verify-claims step runs BEFORE report generation. Never publish discovery claims without evidence.
          COG-ONLY STEP: post-pdf-cross-check runs only when an agent walks this cog. It is deliberately absent from scripts/audit-pipeline.js, npm run audit:full, and the @embedded:mx-audit-script bash block. The scripted path stops at generate-pdf → summary.
        inputs:
          - name: url
            type: string
            required: true
            description: "Client website URL to audit (must include https://)"
          - name: max-pages
            type: number
            required: false
            description: "Maximum pages to crawl (default: 9). Use -1 for unlimited (audit every URL the sitemap declares)."
        outputs:
          - name: report-path
            type: string
            description: "Path to the generated report file"
          - name: summary
            type: object
            description: "Key scores, template used, verification status"

      - name: recon
        description: Pre-inference data collection — gather all raw data before AI analysis
        usage: |
          Run the standalone bash script to collect all reconnaissance data.
          This is the FIRST step — gather data cheaply with curl, then feed it to the AI.

          Script: scripts/mx-audit-recon.sh

          Run it:
            bash scripts/mx-audit-recon.sh <URL> [--slug NAME] [--max-pages N]

          What it collects:
          1. robots.txt — crawler permissions and sitemap location
          2. llms.txt — AI agent discovery file (root and .well-known)
          3. sitemap.xml — page index for URL discovery
          4. Homepage HTML — full DOM for analysis
          5. HTTP headers — security headers, redirects, server info
          6. Page HTML — up to max-pages from sitemap
          7. Meta extraction — title, description, OG tags, JSON-LD, headings
          8. Security headers — extracted for quick reference

          Output: /tmp/mx-reginald/audit/{slug}/{date}/
          Manifest: /tmp/mx-reginald/audit/{slug}/{date}/manifest.yaml

          The manifest is the AI's entry point. Read it first. It lists every
          collected file with status, size, and description.

          After recon completes:
          - Read manifest.yaml to understand what was collected
          - Read meta-extract.txt for a quick overview
          - Read security-headers.txt for security posture
          - Read homepage.html for deep DOM analysis
          - Read individual pages for site-wide patterns

          This separates data gathering (deterministic, cheap) from analysis
          (AI inference, expensive). Cut compute, not context.
        inputs:
          - name: url
            type: string
            required: true
            description: "Website URL to audit"
          - name: slug
            type: string
            required: false
            description: "Client slug for directory naming (default: derived from domain)"
          - name: max-pages
            type: number
            required: false
            description: "Max pages to fetch from sitemap (default: 9). Use -1 for unlimited."
        outputs:
          - name: output-dir
            type: string
            description: "Path to collected data directory"
          - name: manifest
            type: string
            description: "Path to manifest.yaml"

      - name: crawl
        description: Run the automated web audit suite against a URL
        usage: |
          1. Validate URL format (must start with https://)
          2. Create output directory: mx-crm/outreach/YYYY-MM-DD/
          3. Extract client name from domain (e.g. dotfusion.com → dotfusion)

          4. Run the audit (cache preserved, staleness checked per-URL):
             npm run audit:start -- -s [URL] -c [MAX_PAGES] --no-recursive

          5. Wait for completion (2-5 minutes typical for the default 9 pages;
             scales linearly with `-c [MAX_PAGES]`). For any run beyond ~10
             pages, prefer launching the audit in the background and watching
             the log with a streaming monitor so the assistant stays
             responsive instead of blocking on a single foreground call.

             Recommended pattern (Claude Code Bash + Monitor tools):
               - Run the crawl with `run_in_background: true`, teeing stdout
                 to the **standard log path**:
                 `/tmp/mx-audit-<client-slug>.log`. Always use this path —
                 do not improvise per-run filenames. See the standard
                 output paths section below.
               - Attach a Monitor to
                 `tail -F /tmp/mx-audit-<client-slug>.log`
                 piped through `grep --line-buffered` for the lines that
                 matter (phase transitions, per-page `Analysis completed`,
                 `Performance analysis completed`, error classes, and the
                 final summary). Coverage rule: include the failure
                 signatures (`Error`, `FAIL`, `Killed`) in the same
                 alternation so a crash never looks like silence.
               - Suppress repeats of known recoverable per-page errors
                 (e.g. `scorePageSpeed: performanceMetrics is required`)
                 in the user-facing narration once the pattern is
                 established; record the count for the gap report instead.

          6. Verify results in mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/ (the audit derives hostSlug from the -s URL as hostname plus path-segments):
             - results.json — complete analysis data
             - executive_summary.md — overall scores
             - accessibility_report.csv — WCAG compliance (Pa11y)
             - llm_general_suitability.csv — AI agent compatibility
             - seo_scores.csv — SEO metrics
             - image_optimization.csv — image analysis
             - performance_metrics.csv — load times, FCP, CLS
             - security_report.csv — security headers
             - content_quality.csv — content analysis

          7. Read ALL result files and extract key metrics:

             Performance: average load time, FCP, CLS, overall score (0-100)
             Accessibility: total WCAG AA errors by page, critical issues, colour contrast, ARIA, alt text
             AI Agent Suitability: served HTML score, rendered HTML score, main/nav/Schema.org/Open Graph presence
             SEO: title optimisation, meta descriptions, image alt text percentage, structured data
             Image Optimisation: total images, lazy loading, alt text, width/height attributes, formats (PNG/JPG/WebP)
             If non-WebP images detected: note format and gently suggest WebP conversion as an optimisation opportunity (25-90% smaller). Do not flag SVGs or images under 5KB.

          CRITICAL: Cache is preserved by default — staleness checked per-URL. Only use --force-delete-cache when explicitly requested.
          CRITICAL: Always use --no-recursive to limit crawling scope.
        inputs:
          - name: url
            type: string
            required: true
            description: "URL to audit"
          - name: max-pages
            type: number
            required: false
            description: "Page limit (default: 9). Use -1 for unlimited."
        outputs:
          - name: results
            type: object
            description: "All metrics extracted from audit result files"

      - name: inspect
        description: Manual HTML verification via curl + Read — supplements automated findings
        usage: |
          Skip this action if the URL ends with .xml (sitemap files).

          **Do NOT use WebFetch.** WebFetch delegates to a small, fast model that truncates HTML
          and hallucinates tag absence. Use curl to fetch raw HTML, then Read + analyse directly.

          1. Extract homepage URL:
             - Read mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/results.json (derive hostSlug from the audited URL: hostname plus path-segments)
             - Use the first URL from results
             - OR extract base domain from sitemap URL if provided

          2. Fetch HTML with curl:

             curl -sL -o /tmp/audit-manual-homepage.html -w "%{http_code}" \
               -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
               -H "Accept: text/html,application/xhtml+xml" \
               "[URL]"

          3. Read the fetched HTML file with the Read tool and analyse it directly.
             You are the AI — read the actual HTML source. Check for:

             DOM Structure:
                - Heading hierarchy (H1-H6 presence, order, nesting)
                - Multiple H1s or skipped heading levels?
                - Semantic landmarks (main, header, footer, nav, aside, article, section)
                - Empty structural elements?

             Metadata:
                - Does html tag have lang attribute?
                - Character encoding declared?
                - Viewport properly configured?
                - Open Graph, Twitter Card, MX carrier tags, Schema.org JSON-LD

             Accessibility:
                - Navigation structure and skip links
                - Form accessibility (labels, fieldsets, ARIA, autocomplete attributes)
                - Interactive elements (proper button/link usage, ARIA states)
                - Keyboard navigation support

             Code Quality:
                - Redundant ARIA on semantic elements (e.g. nav with role=navigation)
                - Semantic violations (divs instead of buttons/links)
                - Heading structure issues
                - Inline CSS or JavaScript

             Positive Patterns:
                - Well-implemented accessibility features
                - Good semantic structure
                - Proper ARIA usage
                - Image optimisation (lazy loading, responsive, WebP)

             For each finding: quote actual HTML from the source, provide recommended fix,
             note WCAG violation codes, user impact, AI agent impact.

          4. For large HTML files, use targeted curl+grep to verify specific tags:

             curl -sL "[URL]" | grep -i 'name="mx:' | head -20
             curl -sL "[URL]" | grep -i 'property="og:' | head -10
             curl -sL "[URL]" | grep -i 'name="twitter:' | head -10

          5. Structure findings into categories:
             - critical: WCAG Level A violations with code examples and fixes
             - highPriority: WCAG Level AA violations
             - medium: enhancement opportunities
             - positivePatterns: well-implemented features with code examples

          6. Error handling:
             - curl returns 403: use pages from recon step, or note bot blocking
             - Homepage not found: try {baseURL}/index.html, then {baseURL}/, then skip
             - Non-HTML content: detect Content-Type, skip verification
             - Duplicates Pa11y findings: cross-reference and enhance, do not duplicate
        inputs:
          - name: homepage-url
            type: string
            required: true
            description: "Homepage URL to inspect"
        outputs:
          - name: manual-findings
            type: object
            description: "Structured manual verification findings (critical, highPriority, medium, positivePatterns)"

      - name: check-discovery
        description: Check llms.txt and robots.txt at the domain root
        usage: |
          1. Fetch [URL]/llms.txt
             - If found: analyse structure and content quality
             - If 404: note as missing — this is an opportunity, not a failure

             Context for reports: llms.txt is an emerging standard for AI agent discovery.
             Adoption is growing as MX practices spread. Early implementation provides
             first-mover advantage. Standard documented at https://llmstxt.org.

          2. Fetch [URL]/robots.txt
             - Analyse directives: User-agent, Disallow, Allow, Sitemap
             - Check for overly restrictive rules blocking agents
             - Identify AI bot restrictions (GPTBot, ChatGPT-User, etc.)
             - Note sitemap URL and any www/non-www inconsistencies
        inputs:
          - name: url
            type: string
            required: true
            description: "Base URL to check"
        outputs:
          - name: llms-txt
            type: object
            description: "llms.txt analysis (found, content, quality)"
          - name: robots-txt
            type: object
            description: "robots.txt analysis (directives, restrictions, sitemap)"

      - name: verify-claims
        description: Test discovery claims before making them — never say "invisible" without evidence
        usage: |
          CONTEXT: This action exists because of the Dotfusion lesson (February 2026).
          The audit measured technical readiness (no Schema.org, no structured data)
          and the report claimed the site was "invisible to AI agents." The client
          tested the same query and came up first. Technical readiness scores and
          actual discoverability are different things. Never conflate them.

          For each discovery claim the report would make, verify it:

          1. Identify the primary search query for this client:
             - "[industry] [service] in [location]" (e.g. "headless CMS agency in Toronto")
             - "[company name] [primary service]"
             - The query a CMO or buyer would actually type

          2. Test the claim using WebSearch:
             - Search for the identified query
             - Check whether the client appears in results
             - Note their position (first page, first result, absent)

          3. Apply the verification result:

             IF client appears prominently:
                → DO NOT claim they are "invisible" or "undiscoverable"
                → Instead: "Your site ranks well for [query] today. Structured data
                  and llms.txt would strengthen that position as AI agents become
                  a larger share of discovery traffic."

             IF client does not appear:
                → Frame as opportunity, not failure: "For the query [query],
                  structured data would improve visibility as AI-driven discovery
                  grows alongside traditional search."

             IF verification fails (WebSearch unavailable):
                → DO NOT make discovery claims at all
                → Report technical readiness scores only
                → Note: "Discovery impact not verified — scores reflect technical
                  readiness for AI agents, not current search ranking."

          4. Record verification results for the generate-report action:
             - query tested
             - result (found/not-found/verification-failed)
             - position if found
             - recommended framing language

          RULE: Technical readiness ≠ discoverability. A site can score 55/100 on
          AI agent suitability and still rank first for its primary query. The audit
          measures what the site provides to AI agents (structured data, semantic
          HTML, llms.txt). It does not measure how well search engines or AI
          assistants already know the brand. Report both facts. Never assume one
          from the other.
        inputs:
          - name: client-name
            type: string
            required: true
            description: "Client name for search queries"
          - name: industry
            type: string
            required: true
            description: "Client industry/service category"
          - name: location
            type: string
            required: false
            description: "Client location if relevant"
          - name: audit-results
            type: object
            required: true
            description: "Scores from the crawl action"
        outputs:
          - name: verification
            type: object
            description: "Query tested, result, position, recommended framing"

      - name: select-template
        description: Choose the appropriate report template based on audit data quality
        usage: |
          Decision tree:

          IF robots.txt quality score = 0 OR robots.txt content missing:
             → Use manual template
             → Reason: "robots.txt unavailable or invalid"

          ELSE IF pages analysed < 3:
             → Use manual template
             → Reason: "limited audit scope"

          ELSE IF Pa11y/performance/SEO/LLM metrics incomplete:
             → Use manual template
             → Reason: "incomplete automated metrics"

          ELSE:
             → Use automated template
             → Reason: "full automated audit data available"

          Template paths:
          - Automated: mx-crm/outreach/web-audit-suite-template.md
          - Manual: mx-crm/outreach/2026-01-23/manual-report-template.md

          Automated template: 610 lines, [BRACKET_NOTATION] placeholders, business-focused executive report.
          Manual template: 339 lines, technical audit format, for single-page or limited-data audits.
        outputs:
          - name: template-type
            type: string
            description: "'manual' or 'automated'"
          - name: template-reason
            type: string
            description: "Why this template was selected"
          - name: template-path
            type: string
            description: "Full path to the selected template"

      - name: generate-report
        description: Fill the template with audit data, manual findings, and business context
        usage: |
          1. Read the selected template file

          2. Extract client information:
             - Client name: derive from domain
             - Client slug: lowercase (e.g. dotfusion)
             - Date: today (YYYY-MM-DD)
             - Report ID: [SLUG]-WEB-AUDIT-[YYYYMMDD]

          3. Fill placeholders — replace all [BRACKET_NOTATION] with actual data:
             - [CLIENT_NAME], [DATE], [CLIENT_SHORT_NAME]
             - [PERFORMANCE_SCORE], [A11Y_SCORE], [SEO_SCORE], [LLM_SCORE]
             - [NUMBER_OF_ISSUES], [ELEVATOR_PITCH]
             - [CLIENT_CONTEXT] — research the client (web search if needed)

          4. Integrate manual verification findings:
             - Insert code examples from inspect action into relevant priority sections
             - Add "Manual Verification" subsections with specific HTML and fixes
             - Add positive patterns to "What's Working Well" section

          5. Add llms.txt and robots.txt analysis to appendices

          6. Add YAML frontmatter:
             title, author, created, client, client-slug, client-url, report-id,
             report-type, audit-tool, audit-date, description, tags, scores,
             pages-analysed, images-analysed, engagement-options, version, confidential

          7. Research and customise business context:
             - Client industry and target audience
             - Competitive landscape
             - Tone: B2B (compliance/risk), B2C (UX/discovery), SaaS (innovation), Publishing (discoverability)

          8. Priority classification:
             - Priority 1: scores 0-30 or critical compliance
             - Priority 2: scores 30-70 or high impact
             - Priority 3: scores 70-90 or enhancement opportunities

          9. Engagement options (adjust based on client size):
             - Foundation: £12k-£28k (4-6 weeks)
             - Comprehensive: £35k-£65k (8-12 weeks)
             - Strategic: £60k-£90k initial + £5k-£10k/month

          10. Apply partnership tone throughout:
              - Lead with strengths: What's working well section BEFORE opportunities
              - Frame constructively: "patterns identified" not "violations found"
              - Educational approach: Teach the reader, demonstrate expertise
              - Partnership positioning: Collaboration not criticism

              REFERENCE: Complete partnership reporting guidelines at
              mx-canon/mx-maxine-lives/manuals/manual-partnership-reporting.cog.md

              Example transformation:
              ❌ "349 WCAG AA violations create legal risk"
              ✅ "349 accessibility patterns identified represent exactly the
                 remediation services your clients need"

          11. Remove ALL template instructions, HTML comments, and unfilled placeholders

          CRITICAL: Never send a report with [PLACEHOLDERS] unfilled.
          CRITICAL: Always remove instruction blocks from templates.
          CRITICAL: Always research actual competitors — never guess.
          CRITICAL: Always use partnership tone — opens conversations, not price objections.
        inputs:
          - name: template-path
            type: string
            required: true
            description: "Path to the selected template"
          - name: audit-results
            type: object
            required: true
            description: "All metrics from the crawl action"
          - name: manual-findings
            type: object
            required: false
            description: "Manual verification findings from the inspect action"
          - name: discovery
            type: object
            required: false
            description: "llms.txt and robots.txt analysis"
        outputs:
          - name: report-content
            type: string
            description: "Complete report markdown ready to write"

      - name: write-and-lint
        description: Write the report file and validate markdown
        usage: |
          1. Construct filename: [client-slug]-report.md
          2. Full path: mx-crm/outreach/YYYY-MM-DD/[client-slug]-report.md
          3. Write the complete report

          4. Lint with project config:
             npx markdownlint -c .markdownlint-cli2.jsonc [report-path]

          5. Fix any linting errors
          6. Re-run lint to verify clean
        inputs:
          - name: report-content
            type: string
            required: true
            description: "The complete report markdown"
          - name: output-path
            type: string
            required: true
            description: "Where to write the report"
        outputs:
          - name: report-path
            type: string
            description: "Path to the written report"
          - name: lint-status
            type: string
            description: "'clean' or list of remaining issues"

      - name: check-coherence
        description: Last-mile deterministic check for cross-section contradictions
        usage: |
          Runs check-report-coherence.js against the final rendered markdown
          AND every JSON sidecar in the results dir. Catches the failure
          modes that slip past the per-section gates:

          1. Numeric impossibility — e.g. "N page(s) exceed M KB threshold"
             when no audited page reaches M KB.
          2. Per-page vs aggregate mismatch — Appendix A column all 0 while
             headline says 90/100 (the column reads the wrong field).
          3. WAF-blocked probe surfacing — any probe sidecar with HTTP 429
             or 503 responses gets named explicitly so verdicts that say
             "Indeterminate" disclose the cause.
          4. Image format inventory closure — PNG + JPEG + WebP + SVG +
             Other must sum to the stated total; gap-flag when narrative
             names fewer formats than the data carries.
          5. Headline-vs-Audit-Scores consistency — Executive Summary
             scorecard and Summary of Findings Audit Scores must report
             the same number for every shared dimension.
          6. Placeholder leak backstop — single-letter [N] / [X] / [%]
             tokens that escape the multi-char regex of the earlier
             template-leak gate.

          Findings are written to audit_errors.json. The regenerate-error-
          section step downstream picks them up automatically and the
          always-produce-PDF rule (below) surfaces them at the front of
          the deliverable PDF. The gate does NOT block PDF generation by
          itself — the architecture is "ship the PDF with the error section
          visible" rather than "block until clean".

          The gate is deterministic — no LLM, no network calls. Runs in
          under 5 seconds on a 12-page audit.
        inputs:
          - name: report-path
            type: string
            required: true
            description: "Path to the rendered markdown report"
          - name: results-dir
            type: string
            required: true
            description: "Per-host results directory containing the JSON sidecars"
        outputs:
          - name: coherence-status
            type: string
            description: "'clean' or count of findings recorded to audit_errors.json"

      - name: generate-pdf
        description: Generate client-ready PDF from the audit report
        usage: |
          After lint passes, generate PDF:

          1. Run: mx.pdf.sh [report-path]
          2. Output goes to: mx-outputs/pdf/[client-slug]-report.pdf
          3. All YAML metadata is embedded in PDF properties

          RULE: ALWAYS RUN TO PDF, AND EVERY PDF IS GATED.

          The PDF is the client-facing deliverable; the markdown report
          is an intermediate artefact. The audit is not complete until
          the PDF exists on disk. Do not stop short of PDF generation
          for any reason other than the user explicitly passing
          --phase1-only or --no-gates (which are dev-only flags that
          deliberately skip Phase 3 and therefore produce NO PDF).

          Every PDF that lands on disk has visibly passed the full gate
          suite — gates 0a, 0b, 0d, 0e, 0p, 1, 2, 3, 4, 4b (coherence),
          and 4c (eight extracted: image-claims, pa11y-consistency,
          table-logic, marker-reachability, platform-claims, url-dedup,
          recommendation-consistency, attribution-consistency). There
          is no un-gated PDF path in this pipeline. If a code path ever
          produced a PDF without running the full gate suite, that
          would be a substrate bug, not an optional optimisation.

          If PDF generation fails, do NOT report success. The
          always-produce-PDF architecture means a failed audit still
          produces a deliverable: the gates record findings to
          audit_errors.json and continue, and the regenerator writes
          a sibling sidecar `<basename>-findings.md` carrying every
          finding for the human reviewer to read before sign-off. The
          report PDF itself stays client-facing. If even the PDF or
          sidecar cannot be produced, surface the failure prominently
          and stop — never report partial success when the deliverable
          is missing.
        inputs:
          - name: report-path
            type: string
            required: true
            description: "Path to the linted markdown report"
        outputs:
          - name: pdf-path
            type: string
            description: "Path to the generated PDF (or null if generation failed)"

      - name: post-pdf-cross-check
        description: Cog-only final inference pass — re-read the published md, audit every claim against the cache, surface drift to Tom in a summary. Never rewrites the md or PDF.
        usage: |
          AFTER the PDF lands on disk and BEFORE the summary action, an LLM
          (not a script) re-reads the published markdown report and audits
          the claims it makes against the cached evidence the audit
          collected.

          This is a COG-ONLY step. It must not be added to
          scripts/audit-pipeline.js, npm run audit:full, or the
          @embedded:mx-audit-script bash block at the bottom of this cog.
          It runs only when an agent walks this cog through the SOP path
          and reaches this action. The scripted path stops at
          generate-pdf → summary.

          Why it's here. The deterministic verifier (verify-claims and
          scripts/verify-audit-report.js) confirms that every numeric
          claim matches a source CSV and every fenced HTML snippet
          matches cached HTML. The fierce-critic and llm-judgment passes
          catch stylistic drift, internal contradictions inside known
          rubric categories, and cross-section recommendation mismatches.
          What none of those catch is a substantive claim that is
          locally well-formed and locally well-cited but globally
          contradicts what the cache actually shows — a positive claim
          about a feature the cache reveals missing, a negative claim
          about something the cache shows present, an overpromise about
          remediation, a tone that asserts where the evidence is partial.
          That class of drift needs a reader, not a regex.

          Procedure.
          1. Read the linted markdown at the path generate-pdf rendered
             from. The PDF is downstream — the md is the source of truth
             for the words on the page.

          2. For each substantive claim in the report — both POSITIVE
             (the site DOES X / has Y / scores Z) and NEGATIVE (the site
             DOES NOT X / lacks Y / is missing Z) — locate the
             corroborating evidence in the per-domain cache:
               mx-outputs/audit/<hostSlug>/.cache/served/<hash>.html
               mx-outputs/audit/<hostSlug>/.cache/decoded/<hash>.html
               mx-outputs/audit/<hostSlug>/.cache/rendered/<hash>.html
               mx-outputs/audit/<hostSlug>/.cache/body/<hash>.html
               mx-outputs/audit/<hostSlug>/.cache/origin/platform.json
               mx-outputs/audit/<hostSlug>/.cache/origin/wellknown.json
             Use the URL → cache-hash mapping in the delivery's .infill/
             folder (audit_log.csv / audit_pages.csv) to find the right
             cache file for the page the claim references.

          3. When the cache is ambiguous, stale, or silent on the
             specific attribute the report claims, fetch live and
             compare:
               curl -sSL -A "Mozilla/5.0 (mx-audit cross-check)" \
                 -D /tmp/mx-audit-headers.txt \
                 -o /tmp/mx-audit-body.html \
                 <url>
             Read /tmp/mx-audit-headers.txt and /tmp/mx-audit-body.html
             and judge what the live response actually shows against
             what the report claims. Note any divergence between the
             cached fetch and the live fetch — the site may have moved
             on since the audit ran, in which case the report is not
             wrong but the cache is stale.

          4. Specifically look for four classes of issue:
             - INACCURACY — the report says X, the cache or live
               response shows not-X (a positive claim the evidence
               contradicts, or a negative claim the evidence refutes).
             - CONTRADICTION — two passages in the same report disagree
               (e.g. the executive summary says structured data is
               present but a later section says it is missing, or one
               section calls a finding High priority and another calls
               it Low).
             - MISSTATEMENT — the phrasing implies a stronger or weaker
               position than the evidence supports. Overpromise on
               remediation, undersell on something already present,
               assert where the evidence is partial, hedge where the
               evidence is firm.
             - UNVERIFIABLE — the report makes a specific claim that no
               cache file and no live curl can confirm or refute. This
               is a soft finding for the human reviewer, not a
               correction.

          5. Produce a SUMMARY addressed to Tom by name. Print it to
             the terminal — do NOT write it to disk. Format:

               ## Post-PDF cross-check — <client-slug> — <YYYY-MM-DD>

               Tom,

               Report: <md path>
               PDF:    <pdf path>
               Cache:  mx-outputs/audit/<hostSlug>/.cache

               Inaccuracies: N
                 - <claim, location in md, evidence from cache, suggested correction>

               Contradictions: N
                 - <passage A vs passage B, which one the cache supports>

               Misstatements: N
                 - <claim, why it overstates or understates, evidence>

               Unverifiable: N
                 - <claim, what evidence would settle it>

               Curl checks performed: N
                 - <url, what was checked, divergence from cache (if any)>

               Verdict: <Clean — no further issues found | Review recommended — N findings above>

          Hard rules — read before acting.
          - Do NOT rewrite the markdown. Do NOT regenerate the PDF.
          - Do NOT touch audit_errors.json, the sidecars, the manifest,
            or any other published artefact. This pass is read-only
            against the deliverable.
          - The summary lives in the terminal, not on disk. If Tom
            wants it persisted he will ask.
          - This pass is ADVISORY. If it finds issues, Tom reviews the
            list and decides whether to re-run the audit, hand-patch
            the report, or ship as-is. The PDF has already passed every
            mechanical gate; this is one last human-style read.
          - Same discovery-phase discipline applies: a claim an LLM
            "knows" but cannot point at evidence for is NOT a finding.
            Drop it or move it to the Unverifiable bucket.
        inputs:
          - name: report-path
            type: string
            required: true
            description: "Path to the linted markdown report that generate-pdf rendered from"
          - name: cache-dir
            type: string
            required: true
            description: "Per-domain cache root, mx-outputs/audit/<hostSlug>/.cache"
          - name: pdf-path
            type: string
            required: false
            description: "Path to the generated PDF (for citing in the summary header)"
        outputs:
          - name: cross-check-summary
            type: string
            description: "Markdown summary addressed to Tom, printed to the terminal. Never written to disk by this action."

      - name: summary
        description: Report completion status to the user
        usage: |
          Present a summary:
          - Template used: [type] — [reason]
          - Audit completed: [N] pages analysed
          - Manual verification: [completed/skipped/failed]
          - Report generated: [path]
          - PDF generated: [pdf-path] (or "failed — regenerate with /mx-create-pdf")
          - Key findings: Performance, Accessibility (issues count), SEO, AI Agent Suitability
          - Engagement options: price range
          - Full audit results: mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/
          - Quality trend: read mx-outputs/audit/<hostSlug>/.history.jsonl for prior-run finding counts

          RELEASE CRITERION: severity model in audit_errors.json is
          error / warn / info (legacy blocker / warning normalise to
          error / warn on read). 'error' is reserved for I/O or
          structural failures (file missing, malformed JSON) and is
          rare; 'warn' is the default for rule violations; 'info' is
          tone observations only. The PDF always ships (always-produce-
          PDF rule). When the run records ANY error-severity entry, do
          not call this a successful delivery — the operator must be
          told the deliverable carries an unresolved structural issue.
          Phrase the summary as "PDF produced with N error finding(s)
          — review before sending to client". When only warn / info
          findings are present, the deliverable is clean to ship; the
          findings sit at the top of the report under "Audit gate
          findings for human review" for the reviewer's sign-off.

  quality:
    semantic: true

  x-mx-convergence: true
  x-mx-accessibility: true
  runbook: "mx exec mx-audit <https-url> [--max-pages N | -1 for unlimited] [--force-delete-cache] [--client SLUG] [--date YYYY-MM-DD]"
---

```bash @embedded:mx-audit-script
#!/bin/bash
# mx-audit — run the full scripted audit pipeline end-to-end.
#
# By default this wrapper executes EVERY scripted phase in one invocation:
#   Phase 1  recon → crawl → access → served-vs-rendered gap        (mechanical)
#   Phase 2  deterministic report generation (--report mode)         (mechanical)
#   Phase 3  six gates + PDF (--gates mode)                          (mechanical)
#
# It does not stop half-way. If any phase exits non-zero the script reports
# exactly which phase failed, where the partial outputs live, and the exact
# resume command. The LLM-driven path (Option B — using /audit-scores,
# /audit-discovery, /audit-report skills in Claude Code for higher-quality
# narrative) is the ONLY non-scripted surface; opt into it explicitly with
# --phase1-only and the script will print those commands and stop.

set -euo pipefail

URL=""
PAGES=""
FORCE_FRESH=""
CLIENT=""
DATE=""
MODE="full"          # full | phase1-only | report-only | gates-only
SKIP_GATES=0

while [ $# -gt 0 ]; do
  case "$1" in
    -h|--help)
      cat <<HELP
Usage: mx exec mx-audit <https-url> [options]

Run the full scripted audit pipeline against a URL: Phase 1 (recon + crawl
+ access), Phase 2 (deterministic report), Phase 3 (six gates + PDF). All
three phases run in one invocation by default — no half-way stops.

Options:
  --max-pages N              Audit up to N HTML content pages (default: 10).
                             The crawl cap is automatically widened by 2 to
                             absorb non-HTML discovery files (llms.txt,
                             llms-full.txt, agents.md, agent-card.json) that
                             would otherwise eat into the content-page count.
                             Use -1 for unlimited (audit every URL the sitemap
                             declares); the buffer is skipped in that case and
                             -1 is passed straight to the crawler.
  --pages N                  Alias for --max-pages.
  --force-delete-cache       Delete mx-outputs/audit/<hostSlug>/.cache/ before
                             crawling.
  --force-fresh              Alias for --force-delete-cache.
  --client SLUG              Override the client slug (default: derived from host).
  --date YYYY-MM-DD          Override the report date (default: today, UTC).

  --phase1-only              Stop after Phase 1; print the LLM-driven Option B
                             commands (/audit-scores, /audit-discovery,
                             /audit-report) for an operator to drive Phase 2
                             interactively in Claude Code.
  --no-gates                 Run Phases 1 + 2; skip the gates + PDF step.

  --gates <report.md> [args] Skip Phases 1+2; run Phase 3 only against an
                             existing report. Pass-through to
                             scripts/audit-pipeline.js --gates.
  --report <hostSlug>        Skip Phase 1; run Phase 2 only. Requires existing
                             results in mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/.
                             Pass-through to scripts/audit-pipeline.js --report.
                             Refuses to generate a report when Phase 1 audited
                             fewer than 3 pages — pass --allow-thin to opt in to
                             a single-page audit. See "Phase 1 sanity gate" below.
  --allow-thin               Lower the Phase 1 sanity gate from 3 pages to 1.
                             Off by default: a sub-3-page result usually means
                             stale sitemap cache, WAF block, or sitemap empty
                             after filters. Pass this flag explicitly when
                             auditing a single landing page is the intent.

  -h, --help                 Show this help.

Examples:
  mx exec mx-audit https://example.com --max-pages 100 --force-delete-cache
  mx exec mx-audit https://example.com --phase1-only       # operator drives Phase 2 by hand
  mx exec mx-audit --gates mx-crm/outreach/2026-05-04/example-report.md
HELP
      exit 0
      ;;
    --gates)
      # Pass-through to gates-only mode. Everything after --gates is forwarded.
      shift
      MODE="gates-only"
      GATES_ARGS=("$@")
      break
      ;;
    --report)
      # Pass-through to report-only mode (deterministic report from existing results).
      shift
      MODE="report-only"
      REPORT_ARGS=("$@")
      break
      ;;
    --phase1-only)
      MODE="phase1-only"; shift ;;
    --no-gates)
      SKIP_GATES=1; shift ;;
    --max-pages|--pages)
      PAGES="$2"; shift 2 ;;
    --force-delete-cache|--force-fresh)
      FORCE_FRESH="--force-fresh"; shift ;;
    --client)
      CLIENT="$2"; shift 2 ;;
    --date)
      DATE="$2"; shift 2 ;;
    https://*|http://*)
      URL="$1"; shift ;;
    *)
      echo "mx-audit: unknown argument: $1" >&2
      echo "Run 'mx exec mx-audit --help' for usage." >&2
      exit 2
      ;;
  esac
done

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
PIPELINE="$REPO_ROOT/scripts/audit-pipeline.js"

if [ ! -f "$PIPELINE" ]; then
  echo "mx-audit: pipeline script not found at $PIPELINE" >&2
  exit 1
fi

cd "$REPO_ROOT"

# ── Sub-modes that bypass the full pipeline ──────────────────────────────────
if [ "$MODE" = "gates-only" ]; then
  exec node "$PIPELINE" --gates "${GATES_ARGS[@]}"
fi
if [ "$MODE" = "report-only" ]; then
  exec node "$PIPELINE" --report "${REPORT_ARGS[@]}"
fi

# ── Full pipeline modes require <url> ────────────────────────────────────────
if [ -z "$URL" ]; then
  echo "mx-audit: missing required <https-url> argument." >&2
  echo "Run 'mx exec mx-audit --help' for usage." >&2
  exit 2
fi

# Derive defaults so report/gates paths can be computed up front.
# HOST is the bare hostname for display ("Host: www.dkd.de").
# HOST_SLUG encodes hostname + URL path-segments so /de/ and /en/ audits
# land in separate folders instead of overwriting each other:
#   https://www.dkd.de/        → HOST_SLUG=www.dkd.de
#   https://www.dkd.de/de/     → HOST_SLUG=www.dkd.de-de
#   https://www.dkd.de/de/blog → HOST_SLUG=www.dkd.de-de-blog
HOST=$(node -e "console.log(new URL(process.argv[1]).hostname)" "$URL")
HOST_SLUG=$(node -e '
  const u = new URL(process.argv[1]);
  const segs = u.pathname.split("/").filter(Boolean)
    .map(s => s.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, ""))
    .filter(Boolean);
  console.log(segs.length ? `${u.hostname}-${segs.join("-")}` : u.hostname);
' "$URL")
CLIENT_DEFAULT=$(echo "$HOST_SLUG" | tr '.' '-')
[ -z "$CLIENT" ] && CLIENT="$CLIENT_DEFAULT"
[ -z "$DATE" ]   && DATE=$(date -u +%Y-%m-%d)

DELIVERY_DIR="$REPO_ROOT/mx-outputs/audit/$DATE/$HOST_SLUG"
REPORT_PATH="$DELIVERY_DIR/$CLIENT-report.md"
RESULTS_DIR="$DELIVERY_DIR/.infill"
PDF_PATH="$DELIVERY_DIR/$CLIENT-report.pdf"

print_summary() {
  # Two-arg version. First arg is the PDF path (or a status string when
  # the PDF was not produced — e.g. "(skipped)"). Second arg is the gate
  # disposition: "ok" / "blockers:N" / "skipped:reason". The second arg
  # is optional; when omitted the function falls back to the historic
  # "PDF status only" output, which only happens on the legacy
  # --phase1-only / --no-gates skip paths where Phase 3 didn't run.
  local pdf_status="$1"
  local gate_disposition="${2:-skipped:no-gates-ran}"
  echo
  echo "──────────────────────────────────────────────────────────────"
  echo "mx-audit summary"
  echo "──────────────────────────────────────────────────────────────"
  echo "URL:       $URL"
  echo "Host:      $HOST"
  echo "Client:    $CLIENT"
  echo "Date:      $DATE"
  echo "Results:   $RESULTS_DIR"
  echo "Report:    $REPORT_PATH"
  echo "PDF:       $pdf_status"
  echo
  case "$gate_disposition" in
    ok)
      echo "Gates: all passed. PDF is the final deliverable."
      ;;
    blockers:*)
      local count="${gate_disposition#blockers:}"
      echo "Gates: ran, but $count blocker finding(s) recorded. The PDF still rendered"
      echo "per the always-produce-PDF rule, with findings in the error section at"
      echo "the front. Review $RESULTS_DIR/audit_errors.json before delivery."
      ;;
    skipped:*)
      local reason="${gate_disposition#skipped:}"
      echo "Gates: NOT RUN ($reason). No deliverable-quality PDF was produced."
      echo "Run the full pipeline to ship: mx exec mx-audit --gates $REPORT_PATH"
      ;;
  esac
}

# ── Phase 1 ──────────────────────────────────────────────────────────────────
echo "▶ Phase 1: recon → crawl → access ($HOST)"
P1_ARGS=("$URL")
[ -n "$PAGES" ]       && P1_ARGS+=("--pages" "$PAGES")
[ -n "$FORCE_FRESH" ] && P1_ARGS+=("$FORCE_FRESH")
P1_ARGS+=("--client" "$CLIENT" "--date" "$DATE")

if ! node "$PIPELINE" "${P1_ARGS[@]}"; then
  echo "✗ Phase 1 failed. No report or PDF produced." >&2
  echo "  Resume with: mx exec mx-audit $URL --max-pages ${PAGES:-10}${FORCE_FRESH:+ --force-delete-cache} --client $CLIENT --date $DATE" >&2
  exit 1
fi

if [ "$MODE" = "phase1-only" ]; then
  print_summary "(not produced)" "skipped:--phase1-only"
  echo
  echo "Phase 1 complete. Run Phase 2 interactively in Claude Code, then:"
  echo "  mx exec mx-audit --gates $REPORT_PATH"
  exit 0
fi

# ── Phase 2 ──────────────────────────────────────────────────────────────────
echo
echo "▶ Phase 2: deterministic report generation"
if ! node "$PIPELINE" --report "$HOST_SLUG" --client "$CLIENT" --date "$DATE"; then
  echo "✗ Phase 2 failed. Phase 1 results survive at $RESULTS_DIR." >&2
  if [ "${MX_AUDIT_LLM_PROVIDER:-ollama}" = "ollama" ]; then
    echo "  Likely cause: the local Ollama daemon is not reachable at ${OLLAMA_HOST:-http://127.0.0.1:11434}." >&2
    echo "  Pass 2's prose-rewrite step calls the local model (default ${MX_AUDIT_OLLAMA_MODEL:-gpt-oss:20b})." >&2
    echo "  Fix: start Ollama and pull the model, then re-run:" >&2
    echo "    ollama serve   # in another shell" >&2
    echo "    ollama pull ${MX_AUDIT_OLLAMA_MODEL:-gpt-oss:20b}" >&2
    echo "    mx exec mx-audit --report $HOST_SLUG --client $CLIENT --date $DATE" >&2
    echo "  Or skip the deterministic Pass 2 and drive Phase 2 in Claude Code:" >&2
    echo "    mx exec mx-audit $URL --phase1-only" >&2
  elif [ -z "${ANTHROPIC_API_KEY:-}" ]; then
    echo "  Likely cause: MX_AUDIT_LLM_PROVIDER=anthropic but ANTHROPIC_API_KEY is not set." >&2
    echo "  Pass 2's prose-rewrite step needs the key to fill REWRITE blocks." >&2
    echo "  Fix: export ANTHROPIC_API_KEY=... and re-run, or unset MX_AUDIT_LLM_PROVIDER to use local Ollama:" >&2
    echo "    mx exec mx-audit --report $HOST_SLUG --client $CLIENT --date $DATE" >&2
    echo "  Or skip the deterministic Pass 2 and drive Phase 2 in Claude Code:" >&2
    echo "    mx exec mx-audit $URL --phase1-only" >&2
  else
    echo "  Resume Phase 2 with: mx exec mx-audit --report $HOST_SLUG --client $CLIENT --date $DATE" >&2
  fi
  exit 1
fi

if [ ! -f "$REPORT_PATH" ]; then
  echo "✗ Phase 2 finished but the final report markdown was not written:" >&2
  echo "    $REPORT_PATH" >&2
  if [ "${MX_AUDIT_LLM_PROVIDER:-ollama}" = "ollama" ]; then
    echo "  Likely cause: the local Ollama daemon is not reachable at ${OLLAMA_HOST:-http://127.0.0.1:11434}." >&2
    echo "  The Pass 2 prose rewrite calls the local model to fill REWRITE blocks;" >&2
    echo "  without a reachable daemon the run aborts before the final markdown is written." >&2
    echo "  Fix: start Ollama and pull the model, then re-run:" >&2
    echo "    ollama serve   # in another shell" >&2
    echo "    ollama pull ${MX_AUDIT_OLLAMA_MODEL:-gpt-oss:20b}" >&2
    echo "    mx exec mx-audit --report $HOST_SLUG --client $CLIENT --date $DATE" >&2
    echo "  Or skip the deterministic Pass 2 and drive Phase 2 in Claude Code:" >&2
    echo "    mx exec mx-audit $URL --phase1-only" >&2
  elif [ -z "${ANTHROPIC_API_KEY:-}" ]; then
    echo "  Likely cause: MX_AUDIT_LLM_PROVIDER=anthropic but ANTHROPIC_API_KEY is not set." >&2
    echo "  The Pass 2 prose rewrite needs it to fill REWRITE blocks; without it the" >&2
    echo "  run aborts before the final markdown is written." >&2
    echo "  Fix: export ANTHROPIC_API_KEY=... and re-run, or unset MX_AUDIT_LLM_PROVIDER to use local Ollama:" >&2
    echo "    mx exec mx-audit --report $HOST_SLUG --client $CLIENT --date $DATE" >&2
    echo "  Or skip the deterministic Pass 2 and drive Phase 2 in Claude Code:" >&2
    echo "    mx exec mx-audit $URL --phase1-only" >&2
  else
    echo "  Inspect Phase 2 stdout for the actual write path / failure cause." >&2
  fi
  exit 1
fi

if [ "$SKIP_GATES" = "1" ]; then
  print_summary "(not produced)" "skipped:--no-gates"
  exit 0
fi

# ── Phase 3 ──────────────────────────────────────────────────────────────────
echo
echo "▶ Phase 3: full gate suite + PDF"
GATES_RUN_ARGS=("--gates" "$REPORT_PATH" "--results" "$RESULTS_DIR")

if ! node "$PIPELINE" "${GATES_RUN_ARGS[@]}"; then
  echo "✗ Phase 3 failed. Markdown report survives at $REPORT_PATH." >&2
  echo "  Inspect gate sidecars in mx-crm/outreach/$DATE/ to see which gate fired." >&2
  echo "  Resume Phase 3 with: mx exec mx-audit --gates $REPORT_PATH" >&2
  print_summary "(Phase 3 failed — see sidecars)" "skipped:phase-3-failed"
  exit 1
fi

# Count error-severity findings recorded by the gate suite. The always-produce-PDF
# rule means gates record-and-continue, so a non-zero error count is survivable
# but the operator needs to know about it before delivery. Severity model:
# error = I/O / structural failure (rare), warn = rule violation (default),
# info = tone observation. Legacy 'blocker' entries normalise to 'error' on read.
ERROR_COUNT=0
if [ -f "$RESULTS_DIR/audit_errors.json" ]; then
  ERROR_COUNT=$(node -e "try { const r = JSON.parse(require('fs').readFileSync('$RESULTS_DIR/audit_errors.json','utf8')); const norm = (s) => s === 'blocker' ? 'error' : s === 'warning' ? 'warn' : s; process.stdout.write(String((r.errors||[]).filter(e => norm(e.severity) === 'error').length)); } catch { process.stdout.write('0'); }" 2>/dev/null || echo "0")
fi

if [ -f "$PDF_PATH" ]; then
  if [ "$ERROR_COUNT" -gt 0 ]; then
    print_summary "$PDF_PATH" "errors:$ERROR_COUNT"
  else
    print_summary "$PDF_PATH" "ok"
  fi
else
  print_summary "(Phase 3 succeeded but PDF not at expected path; check Phase 3 stdout)" "skipped:pdf-not-found"
fi
```

# The MX Web Audit

Run a comprehensive web audit and generate a partnership-ready executive report. From URL to deliverable in one workflow.

---

## Architectural rule — agents discover, scripts deliver

The web-audit suite is the only place in the MX system where agents are permitted, and the rule is binding. Pages on the open web are too varied for every check to be enumerated up front, so the audit suite uses agents in the discovery phase. The pattern is:

> Run the agent. Observe its runs. Log every step. Instrument until the behaviour is understood. Convert the steady-state behaviour into a deterministic script. Add a small LLM-judgement pass at the end only where a genuinely human-style verdict is required.

Anything an agent does the same way more than twice becomes code. Production paths run deterministic scripts; agents are exploration tools that find what those scripts should do, not what they should keep doing.

Concretely, this cog's three phases reflect the rule:

- **Phase 1** (recon, crawl, access) is fully deterministic shell + Node. No agent invocation.
- **Phase 2** has two modes. The default is the deterministic report generator (CSV/JSON lookup into a template). The opt-in Option B uses an agent in Claude Code to author higher-quality narrative — this is the discovery surface, not the production surface, and any pattern that earns its keep there is expected to migrate back into the deterministic generator.
- **Phase 3** runs deterministic mechanical gates first, then two stylistic gates (fierce critic and LLM-judgement) that call the model from inside their own scripts and run for a single iteration in warn mode. The LLM-judgement step is the small, bounded judgement pass at the end the rule allows for, used because tone is genuinely qualitative, not because the deterministic verifier could not run.

The boundary against the REGINALD core stays firm: this suite may use agents under the rule above; the REGINALD core (cog-validator, signing engine, verification path, registry index) may not, ever, under any circumstance. New audit features must justify in the cog header why they cannot be a deterministic script with an optional judgement pass. A reviewer who sees an unjustified agent step is expected to reject the change.

---

## What This Does

This action-doc codifies the audit pipeline that produces executive reports for business development and partnership outreach.

The pipeline runs **three scripted phases end-to-end in one invocation by default** — `mx exec mx-audit <url>` does not stop half-way:

| Phase | What happens | Underlying entry point |
| --- | --- | --- |
| 1. Mechanical recon + crawl + access | egress check → well-known probe → results clear → sitemap discovery → crawler (`npm run audit:start`) → error-page test → agent-access test → served-vs-rendered gap check → slowest-page re-probe (3 cache-busted GETs against the slowest URL and a median-load URL; writes `slowest-page-perf.json` with a verdict the Server Response Stability section renders verbatim) | `node scripts/audit-pipeline.js <url>` |
| 2. Deterministic report generation | reads Phase 1 results + cached HTML; fills the template's placeholders deterministically (CSV/JSON lookup); writes the markdown report | `node scripts/audit-pipeline.js --report <host>` |
| 3. Mechanical gates + PDF | template-coverage → tone → render → leak → deterministic verifier → fierce critic → LLM-judgment → PDF | `node scripts/audit-pipeline.js --gates <report.md>` |

All three phases are deterministic shell + Node. The two stylistic gates inside Phase 3 (fierce critic, LLM-judgment) call the model from inside their own scripts, not from the operator's conversation, and run for a single iteration in warn mode so they cannot block indefinitely. Failures are reported with the exact resume command, see "Failure handling" below.

### Optional: LLM-driven Phase 2 (Option B — opt-in)

The deterministic Phase 2 produces a complete, gate-passing report. For higher-quality narrative copy (custom elevator pitch, hand-written recommendations, researched competitive context) an operator can opt out of the deterministic report and drive Phase 2 with the LLM skills. Two forms:

```bash
# B1: automated sub-agent driver (one command, no copy-paste)
npm run audit:full -- https://example.com --pages 100

# B2: manual / interactive (operator drives Claude Code between phases)
mx exec mx-audit https://example.com --phase1-only
# script then prints the /audit-scores, /audit-discovery, /audit-report
# commands; operator runs them in Claude Code
mx exec mx-audit --gates mx-crm/outreach/<DATE>/<slug>-report.md
```

B1 invokes `scripts/audit-llm-phase2.js` which runs the three "mechanical" skills (audit-scores, audit-discovery, audit-access) as single-shot Anthropic SDK calls (skill body as system prompt, Phase 1 outputs in the user message, structured output via a `submit_skill_output` tool). The fourth skill, audit-report, is delegated to a headless `claude -p` session because its narrative work depends on the full skill-orchestration code path. Each step records to the report's `.provenance.ai.json` sidecar via the Reginald primitive. Requires `ANTHROPIC_API_KEY` in the environment and the `claude` CLI on `PATH`.

Both forms are non-scripted in the sense that an LLM is in the loop; B1 still runs as one shell command.

### Inspect a generated PDF's AI evidence chain

The final PDF carries the full `.provenance.ai.json` body inside its XMP metadata (`mx.pdf.sh` embeds it via `inject-mx-xmp.sh`). Extract it without leaving the shell:

```bash
# Whole chain, pretty-printed
npm run audit:provenance -- <report>.pdf

# Step count
npm run audit:provenance -- <report>.pdf '.steps | length'

# Per-step verdict summary
npm run audit:provenance -- <report>.pdf '.steps[] | {stepId, agent, outcome}'

# Audit identity + companion file pointer
npm run audit:provenance -- <report>.pdf '.auditId, .target, .companion'
```

The helper at [`scripts/bin/mx.audit.provenance.sh`](../bin/mx.audit.provenance.sh) wraps `exiftool -b -XMP-mx:ProvenanceAiPayload <pdf> | jq <filter>`. The `-b` flag is mandatory; without it exiftool prepends a label and jq fails to parse at column 11. For an auditor outside this repo, the raw exiftool command is the portable form.

### How to run it

```bash
# Default — full pipeline end-to-end (Phase 1 + 2 + 3, ~3–10 minutes for 100 pages)
mx exec mx-audit https://example.com --max-pages 100 --force-delete-cache

# Audit every URL the sitemap declares (no cap)
mx exec mx-audit https://example.com --max-pages -1

# Stop after Phase 1 if you want to drive Phase 2 with the LLM skills
mx exec mx-audit https://example.com --phase1-only

# Re-run gates against an existing report (e.g. after manual edits)
mx exec mx-audit --gates mx-crm/outreach/<DATE>/<slug>-report.md

# Re-run deterministic report against existing Phase 1 results
mx exec mx-audit --report <hostSlug> --client <slug> --date <YYYY-MM-DD>

# Re-run the report for a deliberate single-page audit (lower the 3-page sanity gate)
mx exec mx-audit --report <hostSlug> --allow-thin --client <slug> --date <YYYY-MM-DD>
```

`--force-delete-cache` (alias `--force-fresh`) is only needed when the operator explicitly wants the per-host cache wiped before crawling. Default behaviour preserves the cache and checks freshness per-URL.

### Phase 1 sanity gate

`--report` mode reads `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/audit_averages.json` before generating anything. The averages file is written only when at least one page was successfully audited, so its absence (or a `pagesAudited` value below 3) is a strong signal that the crawl returned too thin a result set to support site-wide claims.

The default minimum is 3 pages. When the count falls below that, the report stage refuses to run and stderr names the four likely causes — stale sitemap URL cache, WAF block during the crawl, sitemap empty after path/locale filters, or a deliberately single-page audit — with the exact remediation command for each. Pass `--allow-thin` to lower the gate to 1 page when the single-page audit is the intent (landing-page assessments, paid-traffic LP teardowns). The gate prevents the blank-report failure mode where Phase 1 completed cleanly but produced only the entry URL.

### Failure handling

If any phase exits non-zero the wrapper:

1. Reports which phase failed and where partial outputs survive (`mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/`, `mx-crm/outreach/<DATE>/`).
2. Prints the exact resume command (`mx exec mx-audit --report …` or `mx exec mx-audit --gates …`) so the operator can pick up from the failed step rather than re-running the whole audit.
3. Prints a summary table of paths and a reminder that the LLM Option B is available if the deterministic Phase 2 keeps tripping a gate.

The wrapper never proceeds to Phase 2 if Phase 1 failed, never proceeds to Phase 3 if Phase 2 failed. There is no silent half-way state.

---

## Why This Exists

The web audit is the first conversation in a partnership. It demonstrates what CogNovaMX can see that others miss. The automated tooling provides breadth (hundreds of images, dozens of pages, multiple metric categories). The manual inspection provides depth (specific code examples, WCAG violation codes, recommended fixes). The template provides structure (business context, engagement options, professional presentation).

Before this cog existed, the workflow lived in a Claude Code skill. The skill was 670 lines of step-by-step instructions. It worked, but it was platform-specific. This cog captures the same workflow in a format any AI agent can execute — Claude Code, ChatGPT, or any future platform that reads action-docs.

The instructions are the program. You are the runtime.

---

## LLM Provider (local-first, regulated-safe)

Every LLM-driven step in this audit runs against a **local Ollama model by default**. The prose-rewrite, repair, fierce-critic, LLM-judgment, provenance-gap, and attribution passes never send the client's report prose, page content, or findings to an external inference API unless an operator explicitly opts out. This is the posture regulated industries (banking, insurance, health, public sector) require: the audit can run fully air-gapped, and no client data leaves the operator's own infrastructure.

The single chokepoint is [`mx-reginald/audit/lib/llm-client.js`](../../mx-reginald/audit/lib/llm-client.js). Every script calls `createLlmClient()` (a drop-in for the Anthropic SDK surface the scripts use) and `resolveModel()` rather than instantiating a provider SDK directly. The client translates the Anthropic Messages request shape into Ollama's native `/api/chat` request and translates the response back, so adding the provider required no change to any prompt or call site.

Configuration (all optional; defaults are regulated-safe):

| Variable | Default | Purpose |
|----------|---------|---------|
| `MX_AUDIT_LLM_PROVIDER` | `ollama` | `ollama` keeps every call local. `anthropic` is the explicit opt-out for non-regulated work (requires `ANTHROPIC_API_KEY`). |
| `OLLAMA_HOST` | `http://127.0.0.1:11434` | Base URL of the local Ollama daemon. |
| `MX_AUDIT_OLLAMA_MODEL` | `gpt-oss:20b` | Default local model. Must be tool-calling capable (repair, judgment, fierce-critic, provenance-gap all use function-calling). Override per run with `--model <id>`. |
| `MX_AUDIT_LLM_NUM_CTX` | `32768` | Ollama context-window override. Default 32k is generous enough for the largest Pass-2 rewrite block we have seen (>6k tokens) and still fits in memory on a 64GB MacBook. Lower it on memory-constrained hardware. |
| `MX_REWRITE_CONCURRENCY` | `1` (Ollama) / `4` (Anthropic) | Parallelism for Pass 2 prose rewrites. Local 20B-class models at 32k context dropped sockets even at 2-way pressure on a 64GB Mac, so the Ollama default is serial (1); Anthropic has no such constraint. Wall-time cost is real but the alternative is silent `[REWRITE FAILED]` markers in the deliverable. Override per run with `--concurrency N`. |
| `OLLAMA_API_KEY` | (none) | Optional bearer token for a guarded Ollama proxy. |

Setup for a local run: `ollama serve` (start the daemon), then `ollama pull gpt-oss:20b` (or your chosen model). Warm the model with one small completion before launching the pipeline if you can — a cold first load can take ~30s and overlap with the first rewrite calls. A `--model` flag passed to the pipeline that names a non-Claude model is treated as a local model id and passed through verbatim; a `claude-*` default is mapped to the configured local model so the existing pipeline invocations need no edit.

**Gate 0-rewrite (rewrite-failure surface).** Pass 2 inserts `[REWRITE FAILED after N attempts: <reason>]` literals when the LLM call exhausts its retries (transient socket drops, HTTP 5xx, context overflow, cold-start fetch failures). Gate 0-rewrite runs first in Phase 3, scans the report markdown for those markers, and records each one as a `severity: 'error'` finding in `audit_errors.json` with line numbers and a deduped reason summary. The findings sidecar (and therefore the PDF's diagnostic surface) lists every rewrite failure once, with remediation hints — no need to grep the body for hidden errors.

---

## The Three Stages

### Stage 1: Automated Analysis

The MX Web Audit Suite (`mx-reginald/audit/`) crawls the target site and produces CSV and JSON result files. Pa11y handles accessibility. Custom analysers handle SEO, performance, security, AI agent compatibility, and image optimisation.

**Key command:**

```bash
npm run audit:start -- -s https://example.com -c 9 --no-recursive
```

**Result files:** `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/` (one directory per audited site)

| File | What it measures |
| --- | --- |
| `results.json` | Complete analysis data |
| `executive_summary.md` | Overall scores |
| `accessibility_report.csv` | WCAG compliance (Pa11y) |
| `llm_general_suitability.csv` | AI agent compatibility |
| `seo_scores.csv` | SEO metrics |
| `image_optimization.csv` | Image analysis |
| `performance_metrics.csv` | Load times, FCP, CLS |
| `security_report.csv` | Security headers |
| `content_quality.csv` | Content analysis |

### Stage 2: Manual HTML Verification

curl fetches the raw homepage HTML into a temp file, which the AI agent reads directly with the Read tool. This approach replaces WebFetch, which delegated analysis to a small model that truncated HTML and hallucinated tag absence. Reading the actual HTML source catches patterns that automated tools miss: placeholder-only forms, redundant ARIA, semantic violations, heading hierarchy gaps, and positive patterns worth highlighting.

The manual findings include current HTML code and recommended fixes with WCAG violation codes. These specific examples make the report credible — they demonstrate that someone (or something) actually read the markup.

### Stage 3: Template-Based Report Generation

Two templates, selected by data quality:

| Template | When | Path |
| --- | --- | --- |
| Automated | Full metrics, 3+ pages, robots.txt available | `mx-crm/outreach/web-audit-suite-template.md` |
| Manual | Limited data, blocked crawling, single page | `mx-crm/outreach/2026-01-23/manual-report-template.md` |

Templates use `[BRACKET_NOTATION]` placeholders filled with actual audit data. Business context is researched and customised per client.

---

## Output

The pipeline produces a single markdown file:

```
mx-crm/outreach/YYYY-MM-DD/[client-slug]-report.md
```

The report includes:

- YAML frontmatter with all scores, metadata, and engagement options
- Executive summary with key scores table
- Priority-classified findings (0-30 critical, 30-70 high impact, 70-90 enhancement)
- Manual verification code examples with recommended fixes
- Business case with competitive context
- Engagement options (three tiers, £12k-£90k+)
- Appendices: methodology, robots.txt, llms.txt, discovered URLs

---

## The Dotfusion Lesson

In February 2026, the first audit report was sent to Chris Bryce (Dotfusion CEO). Two problems surfaced:

**The accuracy problem.** The audit measured technical readiness — no Schema.org, no structured data, no llms.txt — and scored AI agent suitability at 55/100. The report then claimed: "When a CMO asks an AI assistant to find a headless CMS agency in Toronto, your website is effectively invisible." Chris tested the query. Dotfusion came up first.

Technical readiness and discoverability are different measurements. A well-known brand with strong backlinks and years of content can rank highly despite having zero structured data. The audit measures what the site provides to AI agents. It does not measure what AI agents already know about the brand. The `verify-claims` action was added to prevent this mistake from recurring.

**The tone problem.** The report used language like "credibility gap that competitors can exploit," "contradiction of your sales pitch," and "deal-breaking objection." Chris's feedback: "too negative." The report read like an attack, not a partnership conversation. Chris is an advisory board member and potential founding partner, not a cold prospect.

The lesson is permanent: every report must be warm and professional. Frame findings as opportunities. Lead with strengths. Position gaps as service offerings that the client (or their clients) needs. The audit demonstrates MX capabilities — it does not grade the recipient.

**Complete Partnership Reporting Framework:**

For comprehensive tone guidance, examples, and language transformation tables, see:

- **Manual:** [`mx-canon/mx-maxine-lives/manuals/manual-partnership-reporting.cog.md`](../../MX-Maxine-Lives/manuals/manual-partnership-reporting.cog.md)
  - 4 pillars: Strengths First, Opportunity Framing, Educational, Partnership Positioning
  - Language transformation guide (critical → partnership)
  - Writing checklist and anti-patterns
  - Examples gallery: Dotfusion, ArriveFirst, Boye & Co reports

- **Template:** [`mx-canon/ssot/templates/partnership-report.md`](../../../mx-reference-implementations/_templates/partnership-report-template.md)
  - Complete structure with YAML frontmatter
  - Example text for every section
  - Engagement options framework

---

## For AI Agents

When a user asks you to audit a website:

1. **Read this action-doc** fresh — it is the single source of truth.
2. **Run Phase 1 with the embedded script**: `mx exec mx-audit <url> [--max-pages N] [--force-delete-cache]`. Do not invent your own crawl invocation.
3. **Only pass `--force-delete-cache`** when the user explicitly asks for a fresh fetch. Default behaviour preserves the per-host cache and checks freshness per-URL.
4. **Always research the client** before filling the report — generic reports are obvious and unhelpful.
5. **Always verify discovery claims** — search for the client's primary query before writing "invisible" or "undiscoverable".
6. **Never leave placeholders** — every `[BRACKET]` must be replaced with real data.
7. **Warm and professional tone** — the report starts a partnership conversation, not an argument.
8. **Run Phase 3 with the embedded script**: `mx exec mx-audit --gates <report.md>`. The script runs all eight gates (template-coverage → tone → render → leak → deterministic verifier → fierce critic → LLM-judgment → PDF) in order. Do not run individual gate scripts by hand — they share a results layout the coordinator manages.
9. **Stylistic gates feed the unified repair** - Gates 6 and 7 (and the voice/scope gates) each write findings to a sidecar; after every gate has run, `repair-report-unified.js` applies one consolidated pass (Layer 1 deterministic substitutions, then a single tool-use call to the configured LLM — local Ollama `gpt-oss:20b` by default, Anthropic Haiku 4.5 when `MX_AUDIT_LLM_PROVIDER=anthropic` — that returns `{find, replace}` patches for the residue). The pre-2026-05-27 three-call sequence (repair-report, voice-scope, final) was retired here.
10. **Report output paths** — when Phase 3 completes, surface the full absolute path for both the markdown report and the PDF.

## LLM Attribution Sample (opt-in, 2026-05-04)

Two new pipeline steps optionally call real LLM agents and judge the report against their evidence:

- **Step 2.5 — Collector** (`mx-reginald/audit/scripts/collect-llm-attribution.js`). For each prompt the site's published content positions itself to win, calls the configured agent and records whether the audited site appears in the agent's response, with cited sources. In the regulated-default Ollama mode only the local model is queried (no external network); in the Anthropic-provider opt-out each external agent with an API key set (Anthropic / OpenAI / Perplexity / Gemini) runs. This step collects public information about the audited site; it never surfaces locally-held confidential content. Writes `<report>-llm-attribution.json` next to the report. Prompt source priority: `--prompts <file.json>` (verbatim), then a fenced ```prompts block in the report markdown, then the inline phrase "the categories the site is positioned to win — A, B, C —", then blog post titles from `pages-audited.csv`.
- **Step 4.5 — Contradiction judge** (`mx-reginald/audit/scripts/audit-llm-attribution-judge.js`). Runs after the fierce-critic gate. Compares the report prose against the sidecar evidence and flags contradictions: claiming "no agent surfaces the site" when ≥1 agent did; claiming "tested ChatGPT and Perplexity" when those agents were skipped due to missing API keys; claiming a citation source the agents did not actually cite; mention rates that disagree with the sidecar by more than 10 percentage points. Threshold defaults to `warn` (advisory).

**Wiring:** Both steps are off by default. Pass `--enable-attribution` (or set `ENABLE_LLM_ATTRIBUTION=1`) to `audit-pipeline.js --gates` to opt in. In the default Ollama provider mode the local model runs with no key required. In the Anthropic-provider opt-out (`MX_AUDIT_LLM_PROVIDER=anthropic`) each external agent runs only when its API key environment variable is set: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `PPLX_API_KEY` (or `PERPLEXITY_API_KEY`), `GOOGLE_API_KEY` (or `GEMINI_API_KEY`). Agents without keys are silently skipped — no row in the sidecar, no row in the report. Pass `--strict-attribution` to make judge contradictions block the PDF instead of producing a warning.

**One prompt per agent by default.** `--max-prompts` defaults to 1. MX is still emerging; most agents will not yet surface the site for any query, so a single carefully-chosen prompt is enough signal and N × M API calls (N prompts × M agents) is wasted spend. Operator can override with `--max-prompts N` when investigating multiple categories.

**Silent-when-quiet rule.** The `LLM Attribution Sample` section only renders in the report when at least one agent surfaces the site for at least one prompt. Zero mentions across every agent → entire section stripped, no table, no observations, no header. We are waiting for MX to catch on; until then the report stays quiet on attribution evidence rather than carrying a "we asked, the site did not appear" row in every audit. When the first mention lands, the section appears automatically.

**Report integration:** the new `LLM Attribution Sample` section sits between AI Attribution and Agent Reading Pipeline in `web-audit-suite-template.md`. Block (R) in `infill-report.js` reads the sidecar and writes three sub-blocks (intro, prompts table, agent matrix, observations) — or strips the entire section if no agent ran. The sample is one moment in time on one set of queries, directional rather than definitive.

---

## Gates (scripted) and the single-pass repair

All gates run inside Phase 3 — invoke them with:

```bash
mx exec mx-audit --gates mx-crm/outreach/<DATE>/<slug>-report.md
```

Behind the scenes that pass-through calls `node scripts/audit-pipeline.js --gates`, which in turn runs each gate as a standalone Node script in this fixed order:

| # | Gate | Script | Mode | What it catches |
| --- | --- | --- | --- | --- |
| 1 | Template coverage | `scripts/check-template-coverage.js` | strict | Unfilled `[PLACEHOLDER]` tokens |
| 2 | Tone | `scripts/check-tone.js` | strict | Banned crisis-framing language |
| 3 | HTML render | `scripts/check-render.js` | strict | Markdown that breaks Pandoc/PDF rendering |
| 4 | Template leak | `scripts/check-template-leak.js` | strict | Verbatim instruction blocks copied from the template |
| 5 | Deterministic verifier | `scripts/verify-audit-report.js` | strict | Numeric claims that disagree with source CSVs / `site_profile.json`, broken URLs, snippets that do not match cached HTML |
| 5p | Provenance-gap | `mx-reginald/audit/scripts/check-report-provenance-gap.js` | strict (P-2 demoteable via `--warn-year-swap`) | Reads `provenance_gap.json` written in Collect Step 8b. P-1 fails on self-promotional listicles (own-host position-one in a "Top N" page). P-2 fails on year-swap refreshes (title year ≥ 2 years ahead of JSON-LD `dateModified`). P-3 fails on templated stamp-out clusters that share DOM skeleton + body shingles and have zero third-party citations, with `Product`/`Offer` clusters excluded. P-4 warns on deprecated FAQ/Q&A markup. Any page contributing to a P-1 or P-3 blocker has its MX Readiness Level capped at Discoverable in the report's readiness table. |
| 6 | Fierce critic | `scripts/audit-fierce-critic.js` | single-pass repair | Stylistic problems within sections - leaked boilerplate, uncited industry claims, internal contradictions, scope overreach, overpromise, hollow recommendations, voice drift, fabricated specificity |
| 7 | LLM-judgment | `scripts/audit-llm-judgment.js` | single-pass repair | Cross-section consistency - priorities/ROI/engagement disagreeing on order or membership, tone drift between sections, sample-vs-total overreach, hedged-vs-asserted imbalance |
| 8 | PDF | `scripts/mx-create-pdf.js` (via `mx.pdf.sh`) | strict | The PDF actually builds with tagged structure |

Gates 1–5, 5p, and 8 stay strict forever — they catch factual errors that should never ship.

Gates 6 and 7 write findings to a sidecar (`<report>-fierce-critic.json` / `<report>-llm-judgment.json`) and the consolidated unified repair pass below handles them. The earlier per-round LLM rewrite (`repair-report.js` invoked once per gate) was retired 2026-05-27: a single `repair-report-unified.js` call now consumes every sidecar in one tool-use exchange with the configured LLM (local Ollama `gpt-oss:20b` by default, Anthropic Haiku 4.5 when `MX_AUDIT_LLM_PROVIDER=anthropic`), after a deterministic substitution pass that resolves the mechanical findings without any LLM cost.

---

## Discovery-File Parsing (`agent-card.json` and friends)

The well-known probe (`mx-reginald/audit/bin/check-wellknown.js`) does more than presence-checking. When a `.well-known/*.json` path returns 200, the collector parses the body and writes the structured contents into the sidecar so the report can render real values, not N/A.

Specifically for `/.well-known/agent-card.json` (the A2A protocol service card), the sidecar carries an `agentCard` profile alongside the presence row:

| Sidecar field | Source |
| --- | --- |
| `validJson` | `JSON.parse` succeeded |
| `name` / `description` / `url` / `version` | top-level A2A fields |
| `provider` | `provider.organization` (or `provider.name`) and `provider.url` |
| `capabilities` | keys of `card.capabilities` whose value is not `false` |
| `skillCount` / `skills[]` | length and first ten entries of `card.skills`, each with `id` / `name` / `description` |
| `securitySchemes` | keys of `card.securitySchemes` |
| `defaultInputModes` / `defaultOutputModes` | top-level arrays |
| `raw` | full body capped at 100 KB for offline replay |

The infill handler (`mx-reginald/audit/bin/infill-report.js` block I) reads the profile and fills the report's "agent-card.json (A2A)" table with the real `name + description`, `capabilities` list, `endpoint URL`, and `securitySchemes` (or "None declared (open access)" when the schemes array is empty). When the card is present but the sidecar lacks a profile (older audits captured before this collector update), the table renders "Inspect manually" rather than silently saying N/A. The absent-branch keeps its existing "No / N/A" fill.

This pattern generalises: any future `.well-known/*.json` path can grow a per-protocol profile builder by following the `buildAgentCardProfile` shape.

### Other discovery files (present-only listing)

The well-known probe in `mx-reginald/audit/bin/check-wellknown.js` covers a wide catalogue of paths an AI agent or crawler might check (currently 41), grouped by category:

- **AI / LLM discovery**: `/ai.txt`, `/.well-known/llms.txt`, `/.well-known/ai-plugin.json`, `/.well-known/agent-card.json`, `/.well-known/agents.json`, `/agents.json`, `/.well-known/mcp-server-card.json`, `/.well-known/api-catalog.json`
- **Identity / authentication / cryptography**: `/.well-known/openid-configuration`, `/.well-known/oauth-authorization-server` (RFC 8414), `/.well-known/oauth-protected-resource` (RFC 9728), `/.well-known/jwks.json`, `/.well-known/did.json` (W3C DID Web), `/.well-known/atproto-did` (Bluesky), `/.well-known/passkey-endpoints`, `/.well-known/openpgpkey/policy`
- **Privacy**: `/.well-known/gpc.json` (Global Privacy Control), `/.well-known/dnt`, `/.well-known/dnt-policy.txt`
- **Federation / fediverse**: `/.well-known/host-meta`, `/.well-known/host-meta.json`, `/.well-known/webfinger` (RFC 7033), `/.well-known/matrix/client`, `/.well-known/matrix/server`, `/.well-known/nodeinfo`
- **Mobile / web-app**: `/.well-known/assetlinks.json` (Android), `/.well-known/apple-app-site-association` (iOS), `/manifest.json` (PWA)
- **Calendar / contact**: `/.well-known/caldav`, `/.well-known/carddav` (RFC 6764)
- **Certificate / TLS**: `/.well-known/acme-challenge/` (RFC 8555 — usually transient during cert issuance)
- **API discovery**: `/.well-known/api-catalog` (RFC 9727 canonical), `/.well-known/api-catalog.json` (alternative seen in the wild)
- **IoT / device provisioning**: `/.well-known/brski` (RFC 8995), `/.well-known/cmp` (RFC 9483), `/.well-known/coap` (RFC 7252), `/.well-known/core` (RFC 6690)
- **Operational / governance**: `/.well-known/security.txt` (RFC 9116), `/.well-known/change-password` (RFC 9018), `/.well-known/mta-sts.txt`, `/humans.txt`, `/carbon.txt`

The report renders a single auto-built "Other discovery files detected" section (`SECTION:OTHER_WELLKNOWN` in the template, block I.5 in `infill-report.js`) that lists every probed path with `present === true` excluding the ones with their own dedicated section above (`/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`, `/.well-known/llms.txt`, `/.well-known/agent-card.json`). Ratified standards lead the table; vendor-protocol entries trail with a `*(vendor)*` suffix.

Each row carries a **Quality** column built by `assessQuality(spec, body, contentType, contentLength)` that emits a one-line verdict per present path:

- JSON paths: `valid JSON, N KB` / `valid JSON but empty object` / `JSON parse failed — body is not valid JSON`
- Text paths: `text body, N non-empty line(s), M KB` / `text body, only N byte(s) — likely placeholder` for suspiciously small bodies
- Other content types: `200 OK, N KB` / `present but zero bytes`

This catches implementation gaps the per-protocol parsers don't — an `agent-card.json` that returns valid JSON but is empty, a `security.txt` with two placeholder lines, a `caldav` endpoint serving HTML.

**Silent on individual missing paths, but never on the registry itself**: each probed-but-missing path is dropped from the table (the report does not enumerate every absent file). However, the section *always* renders an IANA Well-Known URIs registry pointer (`https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml`) at the bottom — when extras are present the pointer follows the table; when zero extras are present the section renders a single sentence saying nothing extra was detected followed by the pointer. This way a reader who sees a thin section knows where to look up the full catalogue without us having to ship every IANA entry as a noisy "missing" row.

Adding a new path is a one-line edit to the `PATHS` array — the probe, the quality verdict, and the present-only listing pick it up automatically.

---

## Standard Output Paths (canonical — do not improvise)

Every action in this pipeline writes to a fixed, predictable location.
Always use these paths exactly. Never invent per-run filenames.

| Artefact | Path |
| --- | --- |
| Live crawl log (background+monitor) | `/tmp/mx-audit-<client-slug>.log` |
| Pipeline coordinator log | `/tmp/mx-audit-pipeline-<client-slug>.log` |
| Recon data (manifest + raw fetches) | `/tmp/mx-reginald/audit/<client-slug>/<YYYY-MM-DD>/` |
| Raw audit results (current run) | `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/` |
| Raw audit results (versioned archive) | `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/archive/<YYYY-MM-DDTHH-MM-SS>/` |
| Template + scoring-methodology snapshot (provenance) | `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/.infill/<template-basename>.md`, `scoring-methodology.json` |
| HTML cache (served / decoded / rendered) | `mx-outputs/audit/<hostSlug>/.cache/{served,decoded,rendered,body}/` |
| Origin caches (platform.json, wellknown.json) | `mx-outputs/audit/<hostSlug>/.cache/origin/` |
| Peer-benchmark dataset | `mx-outputs/audit/.benchmarks/peer-scores.json` |
| Final delivery folder (client-facing) | `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/` |
| Final markdown report | `mx-crm/outreach/<YYYY-MM-DD>/<client-slug>-report.md` |
| Placeholder manifest | `mx-crm/outreach/<YYYY-MM-DD>/<client-slug>-manifest.json` |
| Verification report | `mx-crm/outreach/<YYYY-MM-DD>/<client-slug>-report-verification.json` |
| Fierce-critic report | `mx-crm/outreach/<YYYY-MM-DD>/<client-slug>-report-fierce-critic.json` |
| LLM-judgment report | `mx-crm/outreach/<YYYY-MM-DD>/<client-slug>-report-llm-judgment.json` |
| Final PDF | `mx-outputs/audit/<YYYY-MM-DD>/<hostSlug>/<client-slug>-report.pdf` |

`<client-slug>` = lowercase, kebab-cased domain (e.g.
`mx-allabout-network` for `mx.allabout.network`). `<hostSlug>` = the
path-aware host key: `new URL(entryUrl).hostname` plus the URL's path
segments joined by hyphens (`https://www.dkd.de/` keys `www.dkd.de`,
`https://www.dkd.de/de/` keys `www.dkd.de-de`, `https://www.dkd.de/en/blog/`
keys `www.dkd.de-en-blog`). Multilingual audits get sibling folders
instead of colliding. `<YYYY-MM-DD>` = today, UTC.

If a downstream tool (regen-report, gates, PDF) cannot find an artefact
at the path above, the fix is to re-run the producing step at the
standard path, never to write the artefact somewhere else.

**Output Reporting Principle:** When the generate-report action completes and writes the audit report, always report the full absolute path of the created file. This enables traceability and makes it easy to locate the deliverable.

Example:

```
✓ Web audit report generated successfully

Output:
  Report: /Users/tom/Documents/MX/MX-hub/mx-crm/outreach/2026-02-17/dotfusion-report.md
  PDF:    /Users/tom/Documents/MX/MX-hub/mx-outputs/pdf/dotfusion-report.pdf

Summary:
  Template: automated (full metrics available)
  Pages analysed: 9
  Performance: 78/100
  Accessibility: 23 issues
  AI Agent Suitability: 55/100
  Engagement options: see report
```

Not just "report saved to outreach/2026-02-17/" — the full absolute path from root.

---

## The Rules

1. **Cache preserved.** The cache checks freshness per-URL and detects poisoned content. Only use `--force-delete-cache` when explicitly requested.

2. **Manual verification is not optional.** Unless the URL is a sitemap XML, run the inspect action. The code examples are what make the report credible.

3. **Research the client.** Use web search if needed. Industry, competitors, target audience. A generic report is a wasted opportunity.

4. **Remove all template artefacts.** No `[PLACEHOLDERS]`, no HTML comments, no instruction blocks in the final report.

5. **Lint is the last step.** The report must pass `npx markdownlint -c .markdownlint-cli2.jsonc` before delivery.

6. **Verify before you claim.** Never write "invisible to AI agents" or "undiscoverable" without testing the actual search query first. Technical readiness scores measure what the site provides to machines. They do not measure whether the brand is already well known. A site can score 55/100 on AI suitability and still rank first for its primary query. Report both facts honestly.

7. **Warm and professional tone.** The report is the first conversation in a partnership. It must read as collaborative and respectful, never confrontational. The reader is a potential partner, not a target.

   **Never use:**
   - "credibility gap" / "competitive liability" / "deal-breaking objection"
   - "competitors can exploit" / "contradiction of your sales pitch"
   - "raises questions about the quality you deliver"
   - Any framing that positions the client's site as an embarrassment

   **Always use:**
   - "opportunity" / "enhancement" / "foundation for improvement"
   - "industry-wide pattern" (not "your specific failure")
   - "what clients are asking agencies to address" (service opportunity framing)
   - Lead with what works well before identifying gaps

8. **Opportunity framing, not crisis framing.** Reports position findings as market opportunities and service packages, not attacks on the client's competence. Frame every technical gap as a service that the client (or their clients) needs. The audit demonstrates MX capabilities. It does not grade the client.

---

*Crawl it. Inspect it. Template it. Deliver it. The audit is the program. You are the runtime.*
