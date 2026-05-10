---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "mx-audit"
version: "1.10.0"
description: "Comprehensive web audit — crawl pages, analyse accessibility, performance, SEO, and AI agent suitability, then generate a partnership-ready executive report."

created: 2026-02-14
modified: 2026-05-08

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: published
  x-mx-riskLevel: medium
  actionType: hybrid
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
          Run all actions in sequence: recon → crawl → analyse → inspect → check-discovery → verify-claims → select-template → generate-report → lint → generate-pdf → summary.
          This is the primary workflow. It produces a complete executive report from a URL.
          CRITICAL: The verify-claims step runs BEFORE report generation. Never publish discovery claims without evidence.
        inputs:
          - name: url
            type: string
            required: true
            description: "Client website URL to audit (must include https://)"
          - name: max-pages
            type: number
            required: false
            description: "Maximum pages to crawl (default: 9)"
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

          Output: /tmp/mx-audit/{slug}/{date}/
          Manifest: /tmp/mx-audit/{slug}/{date}/manifest.yaml

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
            description: "Max pages to fetch from sitemap (default: 9)"
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

          6. Verify results in mx-audit/results/<hostname>/ (the audit derives hostname from the -s URL):
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
            description: "Page limit (default: 9)"
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
             - Read mx-audit/results/<hostname>/results.json (derive hostname from the audited URL)
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

      - name: generate-pdf
        description: Generate client-ready PDF from the audit report
        usage: |
          After lint passes, generate PDF:

          1. Run: mx.pdf.sh [report-path]
          2. Output goes to: mx-outputs/pdf/[client-slug]-report.pdf
          3. All YAML metadata is embedded in PDF properties

          If PDF generation fails, log the error but do NOT block the workflow.
          The markdown report is the primary deliverable; PDF is a convenience output.
          The user can regenerate later with /mx-create-pdf.
        inputs:
          - name: report-path
            type: string
            required: true
            description: "Path to the linted markdown report"
        outputs:
          - name: pdf-path
            type: string
            description: "Path to the generated PDF (or null if generation failed)"

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
          - Full audit results: mx-audit/results/<hostname>/

  quality:
    semantic: true

  x-mx-convergence: true
  x-mx-accessibility: true
  runbook: "mx exec mx-audit <https-url> [--max-pages N] [--force-delete-cache] [--client SLUG] [--date YYYY-MM-DD]"
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
  --max-pages N              Crawl up to N pages (default: pipeline default = 10).
  --pages N                  Alias for --max-pages.
  --force-delete-cache       Delete mx-audit/.cache/<host>/ before crawling.
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
  --report <host>            Skip Phase 1; run Phase 2 only. Requires
                             existing results in mx-audit/results/<host>/.
                             Pass-through to scripts/audit-pipeline.js --report.

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
HOST=$(node -e "console.log(new URL(process.argv[1]).hostname)" "$URL")
[ -z "$CLIENT" ] && CLIENT=$(echo "$HOST" | tr '.' '-')
[ -z "$DATE" ]   && DATE=$(date -u +%Y-%m-%d)

REPORT_PATH="$REPO_ROOT/mx-crm/outreach/$DATE/$CLIENT-report.md"
RESULTS_DIR="$REPO_ROOT/mx-audit/domains/$HOST/results"
PDF_PATH="$REPO_ROOT/mx-outputs/pdf/outreach/$DATE/$CLIENT-report.pdf"

print_summary() {
  local pdf_status="$1"
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
  echo "Not scripted (operator may opt in for higher-quality copy):"
  echo "  /audit-scores    $URL"
  echo "  /audit-discovery $URL"
  echo "  /audit-report    $URL"
  echo "  Then re-run gates: mx exec mx-audit --gates $REPORT_PATH"
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
  print_summary "(Phase 3 skipped — --phase1-only set)"
  echo
  echo "Phase 1 complete. Run Phase 2 interactively in Claude Code, then:"
  echo "  mx exec mx-audit --gates $REPORT_PATH"
  exit 0
fi

# ── Phase 2 ──────────────────────────────────────────────────────────────────
echo
echo "▶ Phase 2: deterministic report generation"
if ! node "$PIPELINE" --report "$HOST" --client "$CLIENT" --date "$DATE"; then
  echo "✗ Phase 2 failed. Phase 1 results survive at $RESULTS_DIR." >&2
  if [ -z "${ANTHROPIC_API_KEY:-}" ]; then
    echo "  Likely cause: ANTHROPIC_API_KEY is not set. The deterministic Pass 2" >&2
    echo "  fills mechanical placeholders, but Pass 2's prose-rewrite step needs" >&2
    echo "  the key to fill REWRITE blocks (elevator pitch, narrative paragraphs)." >&2
    echo "  Fix: export ANTHROPIC_API_KEY=... and re-run:" >&2
    echo "    mx exec mx-audit --report $HOST --client $CLIENT --date $DATE" >&2
    echo "  Or skip the deterministic Pass 2 and drive Phase 2 in Claude Code:" >&2
    echo "    mx exec mx-audit $URL --phase1-only" >&2
  else
    echo "  Resume Phase 2 with: mx exec mx-audit --report $HOST --client $CLIENT --date $DATE" >&2
  fi
  exit 1
fi

if [ ! -f "$REPORT_PATH" ]; then
  echo "✗ Phase 2 finished but the final report markdown was not written:" >&2
  echo "    $REPORT_PATH" >&2
  if [ -z "${ANTHROPIC_API_KEY:-}" ]; then
    echo "  Likely cause: ANTHROPIC_API_KEY is not set. The Pass 2 prose rewrite" >&2
    echo "  needs it to fill REWRITE blocks; without it the run aborts before" >&2
    echo "  the final markdown is written." >&2
    echo "  Fix: export ANTHROPIC_API_KEY=... and re-run:" >&2
    echo "    mx exec mx-audit --report $HOST --client $CLIENT --date $DATE" >&2
    echo "  Or skip the deterministic Pass 2 and drive Phase 2 in Claude Code:" >&2
    echo "    mx exec mx-audit $URL --phase1-only" >&2
  else
    echo "  Inspect Phase 2 stdout for the actual write path / failure cause." >&2
  fi
  exit 1
fi

if [ "$SKIP_GATES" = "1" ]; then
  print_summary "(Phase 3 skipped — --no-gates set)"
  exit 0
fi

# ── Phase 3 ──────────────────────────────────────────────────────────────────
echo
echo "▶ Phase 3: six gates + PDF"
GATES_RUN_ARGS=("--gates" "$REPORT_PATH" "--results" "$RESULTS_DIR")

if ! node "$PIPELINE" "${GATES_RUN_ARGS[@]}"; then
  echo "✗ Phase 3 failed. Markdown report survives at $REPORT_PATH." >&2
  echo "  Inspect gate sidecars in mx-crm/outreach/$DATE/ to see which gate fired." >&2
  echo "  Resume Phase 3 with: mx exec mx-audit --gates $REPORT_PATH" >&2
  print_summary "(Phase 3 failed — see sidecars)"
  exit 1
fi

if [ -f "$PDF_PATH" ]; then
  print_summary "$PDF_PATH"
else
  print_summary "(Phase 3 succeeded but PDF not at expected path; check Phase 3 stdout)"
fi
```

# The MX Web Audit

Run a comprehensive web audit and generate a partnership-ready executive report. From URL to deliverable in one workflow.

---

## What This Does

This action-doc codifies the audit pipeline that produces executive reports for business development and partnership outreach.

The pipeline runs **three scripted phases end-to-end in one invocation by default** — `mx exec mx-audit <url>` does not stop half-way:

| Phase | What happens | Underlying entry point |
| --- | --- | --- |
| 1. Mechanical recon + crawl + access | egress check → well-known probe → results clear → sitemap discovery → crawler (`npm run audit:start`) → error-page test → agent-access test → served-vs-rendered gap check | `node scripts/audit-pipeline.js <url>` |
| 2. Deterministic report generation | reads Phase 1 results + cached HTML; fills the template's placeholders deterministically (CSV/JSON lookup); writes the markdown report | `node scripts/audit-pipeline.js --report <host>` |
| 3. Mechanical gates + PDF | template-coverage → tone → render → leak → deterministic verifier → fierce critic → LLM-judgment → PDF | `node scripts/audit-pipeline.js --gates <report.md>` |

All three phases are deterministic shell + Node. The two stylistic gates inside Phase 3 (fierce critic, LLM-judgment) call the model from inside their own scripts, not from the operator's conversation, and auto-degrade to warn mode after three rounds so they cannot block indefinitely. Failures are reported with the exact resume command — see "Failure handling" below.

### Optional: LLM-driven Phase 2 (Option B — opt-in)

The deterministic Phase 2 produces a complete, gate-passing report. For higher-quality narrative copy (custom elevator pitch, hand-written recommendations, researched competitive context) an operator can opt out of the deterministic report and drive Phase 2 in Claude Code instead:

```bash
mx exec mx-audit https://example.com --phase1-only
# script then prints the /audit-scores, /audit-discovery, /audit-report
# commands; operator runs them in Claude Code
mx exec mx-audit --gates mx-crm/outreach/<DATE>/<slug>-report.md
```

This is the **only non-scripted surface** in the workflow. Everything else runs as one shell command.

### How to run it

```bash
# Default — full pipeline end-to-end (Phase 1 + 2 + 3, ~3–10 minutes for 100 pages)
mx exec mx-audit https://example.com --max-pages 100 --force-delete-cache

# Stop after Phase 1 if you want to drive Phase 2 with the LLM skills
mx exec mx-audit https://example.com --phase1-only

# Re-run gates against an existing report (e.g. after manual edits)
mx exec mx-audit --gates mx-crm/outreach/<DATE>/<slug>-report.md

# Re-run deterministic report against existing Phase 1 results
mx exec mx-audit --report <host> --client <slug> --date <YYYY-MM-DD>
```

`--force-delete-cache` (alias `--force-fresh`) is only needed when the operator explicitly wants the per-host cache wiped before crawling. Default behaviour preserves the cache and checks freshness per-URL.

### Failure handling

If any phase exits non-zero the wrapper:

1. Reports which phase failed and where partial outputs survive (`mx-audit/results/<host>/`, `mx-crm/outreach/<DATE>/`).
2. Prints the exact resume command (`mx exec mx-audit --report …` or `mx exec mx-audit --gates …`) so the operator can pick up from the failed step rather than re-running the whole audit.
3. Prints a summary table of paths and a reminder that the LLM Option B is available if the deterministic Phase 2 keeps tripping a gate.

The wrapper never proceeds to Phase 2 if Phase 1 failed, never proceeds to Phase 3 if Phase 2 failed. There is no silent half-way state.

---

## Why This Exists

The web audit is the first conversation in a partnership. It demonstrates what CogNovaMX can see that others miss. The automated tooling provides breadth (hundreds of images, dozens of pages, multiple metric categories). The manual inspection provides depth (specific code examples, WCAG violation codes, recommended fixes). The template provides structure (business context, engagement options, professional presentation).

Before this cog existed, the workflow lived in a Claude Code skill. The skill was 670 lines of step-by-step instructions. It worked, but it was platform-specific. This cog captures the same workflow in a format any AI agent can execute — Claude Code, ChatGPT, or any future platform that reads action-docs.

The instructions are the program. You are the runtime.

---

## The Three Stages

### Stage 1: Automated Analysis

The MX Web Audit Suite (`mx-audit/`) crawls the target site and produces CSV and JSON result files. Pa11y handles accessibility. Custom analysers handle SEO, performance, security, AI agent compatibility, and image optimisation.

**Key command:**

```bash
npm run audit:start -- -s https://example.com -c 9 --no-recursive
```

**Result files:** `mx-audit/results/<hostname>/` (one directory per audited site)

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
9. **Stylistic gates self-repair** — Gates 6 and 7 run automatically in a loop: each gate writes its findings to a sidecar, `repair-report.js` patches the report, and the gates re-run. The loop runs up to three iterations; after three the pipeline proceeds to PDF with any remaining findings logged in the sidecars for human review.
10. **Report output paths** — when Phase 3 completes, surface the full absolute path for both the markdown report and the PDF.

## LLM Attribution Sample (opt-in, 2026-05-04)

Two new pipeline steps optionally call real LLM agents and judge the report against their evidence:

- **Step 2.5 — Collector** (`mx-audit/scripts/collect-llm-attribution.js`). For each prompt the site's published content positions itself to win, calls each agent with an API key set (Anthropic / OpenAI / Perplexity / Gemini) and records whether the audited site appears in the agent's response, with cited sources. Writes `<report>-llm-attribution.json` next to the report. Prompt source priority: `--prompts <file.json>` (verbatim), then a fenced ```prompts block in the report markdown, then the inline phrase "the categories the site is positioned to win — A, B, C —", then blog post titles from `pages-audited.csv`.
- **Step 4.5 — Contradiction judge** (`mx-audit/scripts/audit-llm-attribution-judge.js`). Runs after the fierce-critic gate. Compares the report prose against the sidecar evidence and flags contradictions: claiming "no agent surfaces the site" when ≥1 agent did; claiming "tested ChatGPT and Perplexity" when those agents were skipped due to missing API keys; claiming a citation source the agents did not actually cite; mention rates that disagree with the sidecar by more than 10 percentage points. Threshold defaults to `warn` (advisory).

**Wiring:** Both steps are off by default. Pass `--enable-attribution` (or set `ENABLE_LLM_ATTRIBUTION=1`) to `audit-pipeline.js --gates` to opt in. Each agent runs only when its API key environment variable is set: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `PPLX_API_KEY` (or `PERPLEXITY_API_KEY`), `GOOGLE_API_KEY` (or `GEMINI_API_KEY`). Agents without keys are silently skipped — no row in the sidecar, no row in the report. Pass `--strict-attribution` to make judge contradictions block the PDF instead of producing a warning.

**One prompt per agent by default.** `--max-prompts` defaults to 1. MX is still emerging; most agents will not yet surface the site for any query, so a single carefully-chosen prompt is enough signal and N × M API calls (N prompts × M agents) is wasted spend. Operator can override with `--max-prompts N` when investigating multiple categories.

**Silent-when-quiet rule.** The `LLM Attribution Sample` section only renders in the report when at least one agent surfaces the site for at least one prompt. Zero mentions across every agent → entire section stripped, no table, no observations, no header. We are waiting for MX to catch on; until then the report stays quiet on attribution evidence rather than carrying a "we asked, the site did not appear" row in every audit. When the first mention lands, the section appears automatically.

**Report integration:** the new `LLM Attribution Sample` section sits between AI Attribution and Agent Reading Pipeline in `web-audit-suite-template.md`. Block (R) in `infill-report.js` reads the sidecar and writes three sub-blocks (intro, prompts table, agent matrix, observations) — or strips the entire section if no agent ran. The sample is one moment in time on one set of queries, directional rather than definitive.

---

## Gates (scripted) and the 3-iteration repair loop

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
| 6 | Fierce critic | `scripts/audit-fierce-critic.js` | self-repair loop (≤3 iterations) | Stylistic problems within sections — leaked boilerplate, uncited industry claims, internal contradictions, scope overreach, overpromise, hollow recommendations, voice drift, fabricated specificity |
| 7 | LLM-judgment | `scripts/audit-llm-judgment.js` | self-repair loop (≤3 iterations) | Cross-section consistency — priorities/ROI/engagement disagreeing on order or membership, tone drift between sections, sample-vs-total overreach, hedged-vs-asserted imbalance |
| 8 | PDF | `scripts/mx-create-pdf.js` (via `mx.pdf.sh`) | strict | The PDF actually builds with tagged structure |

Gates 1–5 and 8 stay strict forever — they catch factual errors that should never ship.

Gates 6 and 7 run as a self-contained repair loop: each gate writes findings to a sidecar (`<report>-fierce-critic.json` / `<report>-llm-judgment.json`), then `mx-audit/scripts/repair-report.js` reads the sidecar and uses Claude to make the minimum necessary edits to the report to address each finding. The loop then re-runs both gates to verify the repair. This continues until both gates are clean or the iteration cap (3) is reached.

Round counters persist at `<report>-fierce-rounds.json` and `<report>-llm-rounds.json` next to the report. After three iterations, the pipeline proceeds to PDF with any remaining findings logged in the sidecars for human review. Delete the round files to reset.

---

## Discovery-File Parsing (`agent-card.json` and friends)

The well-known probe (`mx-audit/bin/check-wellknown.js`) does more than presence-checking. When a `.well-known/*.json` path returns 200, the collector parses the body and writes the structured contents into the sidecar so the report can render real values, not N/A.

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

The infill handler (`mx-audit/bin/infill-report.js` block I) reads the profile and fills the report's "agent-card.json (A2A)" table with the real `name + description`, `capabilities` list, `endpoint URL`, and `securitySchemes` (or "None declared (open access)" when the schemes array is empty). When the card is present but the sidecar lacks a profile (older audits captured before this collector update), the table renders "Inspect manually" rather than silently saying N/A. The absent-branch keeps its existing "No / N/A" fill.

This pattern generalises: any future `.well-known/*.json` path can grow a per-protocol profile builder by following the `buildAgentCardProfile` shape.

### Other discovery files (present-only listing)

The well-known probe in `mx-audit/bin/check-wellknown.js` covers a wide catalogue of paths an AI agent or crawler might check (currently 41), grouped by category:

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
| Recon data (manifest + raw fetches) | `/tmp/mx-audit/<client-slug>/<YYYY-MM-DD>/` |
| Raw audit results (current run) | `mx-audit/results/<hostname>/` |
| Raw audit results (versioned archive) | `mx-audit/results/<hostname>/archive/<YYYY-MM-DDTHH-MM-SS>/` |
| HTML cache (served / decoded / rendered) | `mx-audit/.cache/<hostname>/{served,decoded,rendered,body}/` |
| Origin caches (platform.json, wellknown.json) | `mx-audit/.cache/origin/<hostname>/` |
| Final markdown report | `mx-crm/outreach/<YYYY-MM-DD>/<client-slug>-report.md` |
| Placeholder manifest | `mx-crm/outreach/<YYYY-MM-DD>/<client-slug>-manifest.json` |
| Verification report | `mx-crm/outreach/<YYYY-MM-DD>/<client-slug>-report-verification.json` |
| Fierce-critic report | `mx-crm/outreach/<YYYY-MM-DD>/<client-slug>-report-fierce-critic.json` |
| LLM-judgment report | `mx-crm/outreach/<YYYY-MM-DD>/<client-slug>-report-llm-judgment.json` |
| Final PDF | `mx-outputs/pdf/outreach/<YYYY-MM-DD>/<client-slug>-report.pdf` |

`<client-slug>` = lowercase, kebab-cased domain (e.g.
`mx-allabout-network` for `mx.allabout.network`). `<hostname>` = the
hostname extracted with `new URL(entryUrl).hostname` (no port, no path).
`<YYYY-MM-DD>` = today, UTC.

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
