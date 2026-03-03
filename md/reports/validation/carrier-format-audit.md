---
title: "Carrier Format Compliance Audit"
description: "Audit of HTML, JS, CSS, and shell script files against field-dictionary v4.0 Sections 12.1-12.9"
author: "Maxine (automated)"
created: 2026-03-03
modified: 2026-03-03
version: "1.0"

mx:
  status: active
  contentType: report
  reportType: audit
  tags: [carrier-format, compliance, metadata, audit]
---

# Carrier Format Compliance Audit

**Generated:** 2026-03-03
**Spec version:** field-dictionary.cog.md v4.0
**Sections audited:** 12.1-12.9

---

## Executive Summary

| Carrier | Total | Compliant | Partial | Missing | Generated | Score |
|---------|-------|-----------|---------|---------|-----------|-------|
| Shell (.sh) | 88 | 61 | 0 | 26 | 1 | 70% |
| JavaScript (.js) | 173 | 11 | 20 | 142 | 0 | 6% |
| HTML (.html) | 148 | 5 | 92 | 1 | 50 | 5% |
| CSS (.css) | 62 | 0 | 14 | 2 | 46 | 0% |
| **Total** | **471** | **77** | **126** | **171** | **97** | **21%** |

---

## Compliance by Category

| Category | Total | Compliant | Partial | Missing |
|----------|-------|-----------|---------|---------|
| Source files | 344 | 70 | 125 | 149 |
| Test files | 21 | 4 | 0 | 17 |
| Reference implementations | 9 | 3 | 1 | 5 |
| Generated outputs | 97 | 0 | 0 | 15 |

---

## Compliance by Directory

### datalake/ (93 files, 0% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| assets/presentations/historical/members-call-21-jan-26/talk-slides.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| assets/presentations/maxine-vision-deck/maxine-slides.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| assets/presentations/template/talk-adobe.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| assets/presentations/template/talk-slides.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| publications/mx-books/mx-appendices/web/appendix-a.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix-b.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix-c.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix-d.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix-e.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix-f.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix-g.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix-h.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix-i.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix-index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix-j.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix-k.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix-l.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/appendix.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| publications/mx-books/mx-appendices/web/back-cover.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/book-product-page.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| publications/mx-books/mx-appendices/web/book-product-page.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/book.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/faq.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/for-reviewers.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| publications/mx-books/mx-appendices/web/for-reviewers.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/news.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/404.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/about.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/article.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/author.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/blog-post.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/checkout.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/collection.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/consulting.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/contact.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/css/styles.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| publications/mx-books/mx-appendices/web/site/event.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/faq.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/js/common.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| publications/mx-books/mx-appendices/web/site/login.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/portfolio.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/pricing.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/privacy.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/product.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/sales.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/search.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/team.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-appendices/web/site/testimonials.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/script.js | javascript | source | missing | no | no | No structured metadata found |
| publications/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/style.css | css | source | missing | no | no | No structured metadata found |
| publications/mx-books/mx-code-examples/agent-friendly-starter-kit/good/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/agent-friendly-starter-kit/good/style.css | css | source | missing | no | no | No structured metadata found |
| publications/mx-books/mx-code-examples/examples/delegation-management-ui.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/eal-delegation-worker.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| publications/mx-books/mx-code-examples/examples/html-examples/components/data-tables.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/components/dialog-modal.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/components/pricing-display.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/ecommerce/order-confirmation.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/ecommerce/product-page.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/ecommerce/shipping-options.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/ecommerce/shopping-cart.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/forms/disabled-button.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/forms/multi-step-wizard.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/forms/validation-form.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/navigation/breadcrumbs.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/navigation/filters.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/navigation/search-results.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/state/authentication.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/state/error-display.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/html-examples/state/loading-state.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/examples/monitoring/analytics-tracking.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| publications/mx-books/mx-code-examples/examples/monitoring/server-log-analysis.sh | shell | source | missing | no | no | No structured metadata found |
| publications/mx-books/mx-code-examples/examples/nextjs/dynamic-query-index.js | javascript | source | missing | no | no | No structured metadata found |
| publications/mx-books/mx-code-examples/examples/nextjs/next.config.js | javascript | source | missing | no | no | No structured metadata found |
| publications/mx-books/mx-code-examples/examples/static-site/generate-index.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| publications/mx-books/mx-code-examples/examples/validation/verify-ai-production.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| publications/mx-books/mx-code-examples/examples/validation/verify-ai-simple.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| publications/mx-books/mx-codex/web/appendix-a.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-codex/web/appendix-b.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-codex/web/appendix-c.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-codex/web/appendix-d.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-codex/web/appendix-e.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-codex/web/appendix-f.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-codex/web/appendix-g.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-codex/web/appendix-h.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-codex/web/appendix-i.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-codex/web/appendix-index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-codex/web/appendix-j.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-codex/web/appendix-k.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-codex/web/appendix-l.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |

### mx-audit/ (80 files, 0% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| .cache/rendered/182ccedb33a9e03fbf1079b209da1a31.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| .cache/served/182ccedb33a9e03fbf1079b209da1a31.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| index.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/bulk-audit.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/collectors/llmCollector.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/config/defaults.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/config/env.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/config/options.js | javascript | source | missing | no | no | No structured metadata found |
| src/config/scoringWeights.js | javascript | source | missing | no | no | No structured metadata found |
| src/config/validation.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/core/AuditContext.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/main.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/reporters/llmFeedback.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/scorers/llmScorer.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/accessibilityReport.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/browserPool.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/caching.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/contentMetrics.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/csvFormatter.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/executionHelpers.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/historicalComparison.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/linkAnalyzer.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/llmMetrics.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/llmsTxtParser.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/mediaMetrics.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/metricsCommon.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/metricsUpdater.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/networkUtils.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/pa11yRunner.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/pageAnalyzer.js | javascript | source | missing | no | no | No structured metadata found |
| src/utils/pageAnalyzerHelpers.js | javascript | source | missing | no | no | No structured metadata found |
| src/utils/pageTypeDetector.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/patternExtraction.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/performanceAnalyzer.js | javascript | source | missing | no | no | No structured metadata found |
| src/utils/rateLimiter.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/reports.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/reportUtils/accessibilityAnalysis.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/reportUtils/contentAnalysis.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/reportUtils/dashboardGenerator.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/reportUtils/executiveSummary.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/reportUtils/formatUtils.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/reportUtils/imageAnalysis.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/reportUtils/linkAnalysis.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/reportUtils/llmReports.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/reportUtils/reportGenerators.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/reportUtils/schemaReports.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/reportUtils/securityAnalysis.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/results.js | javascript | source | missing | no | no | No structured metadata found |
| src/utils/robotsCompliance.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/robotsFetcher.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/robotsTxtParser.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/schemaAnalysis.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/schemaValidator.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/schemaVersion.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/seoScoring.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/setup.js | javascript | source | missing | no | no | No structured metadata found |
| src/utils/shutdownHandler.js | javascript | source | missing | no | no | No structured metadata found |
| src/utils/sitemap.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/sitemapParser.js | javascript | source | missing | no | no | No structured metadata found |
| src/utils/sitemapUtils.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/technicalMetrics.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/technologyDetection.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/urlMetrics.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/urlProcessor.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| src/utils/urlUtils.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| test/formatUtils.test.js | javascript | test | missing | no | no | No structured metadata found |
| test/goldenMaster.test.js | javascript | test | missing | no | no | No structured metadata found |
| test/helpers/assertions.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test/helpers/mockResults.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test/integration/pipeline.test.js | javascript | test | missing | no | no | No structured metadata found |
| test/setup.js | javascript | test | missing | no | no | No structured metadata found |
| test/utils/browserPool.test.js | javascript | test | missing | no | no | No structured metadata found |
| test/utils/dynamicContent.test.js | javascript | test | missing | no | no | No structured metadata found |
| test/utils/historicalComparison.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test/utils/llmMetrics.test.js | javascript | test | missing | no | no | No structured metadata found |
| test/utils/llmsQuality.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test/utils/patternExtraction.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test/utils/rateLimiter.test.js | javascript | test | missing | no | no | No structured metadata found |
| test/utils/robotsQuality.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test/utils/sitemap.test.js | javascript | test | missing | no | no | No structured metadata found |

### mx-canon/ (82 files, 35% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| _template/deliverables/landing-page.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| mx-maxine-lives/communications/blogs/html/allabout/about.claude.code.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/about.claude.sonnet.4.5.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/about.microsoft.copilot.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/about.tom.cranstoun.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/ai-assistant-side-notices.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/claude-joins-mx-community.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/data-sovereignty.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/designing-workflows-for-humans-and-machines.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/designing-workflows-for-humans-and-machines.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/machine-experience-adding-metadata.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/mx-a-new-role.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/mx-contribution-guidelines.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/mx-manifesto.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/shared-mx.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/allabout/what-is-machine-experience.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/about.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/about.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/accessibility-ai-convergence.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/accessibility-ai-convergence.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/benefits-of-mx.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/benefits-of-mx.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/common-mistakes.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/common-mistakes.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/contact.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/contact.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/content-that-manages-itself.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/content-that-manages-itself.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/explicit-over-implicit.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/explicit-over-implicit.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/implementation-examples.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/implementation-examples.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/index.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/key-principles.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/key-principles.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/our-approach.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/our-approach.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/our-services.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/our-services.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/principles-changed-how-i-build.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/principles-changed-how-i-build.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/what-is-mx.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/what-is-mx.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/why-mx-matters.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/codex/why-mx-matters.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/lifecycle/principles-changed-how-i-build.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/lifecycle/principles-changed-how-i-build.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/outputs/designing-workflows-for-humans-and-machines-from-a.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/outputs/designing-workflows-for-humans-and-machines.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/ready-to-publish/mx-principles-menu.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| mx-maxine-lives/communications/ready-to-publish/mx-principles-menu.html | html | source | compliant | yes | yes |  |
| mx-maxine-lives/tests/test-route-decorator.sh | shell | test | compliant | yes | yes |  |
| mx-os/deliverables/mx-script-inspect.sh | shell | source | compliant | yes | yes |  |
| mx-os/deliverables/mx-script-template.sh | shell | source | compliant | yes | yes |  |
| mx-the-gathering/deliverables/allabout-the-gathering.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| mx-the-gathering/deliverables/landing-page.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| mx-the-gathering/reference-implementations/los-granainos/audit/capture-site.js | javascript | reference | missing | no | no | Missing: @version or @author, @mx:* tags |
| mx-the-gathering/reference-implementations/los-granainos/los-granainos-mx-reference.cog.html | html | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/los-granainos/los-granainos-single-lang.cog.html | html | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/templates/audit-system/enhanced-audit.js | javascript | reference | missing | no | no | Missing: @version or @author, @mx:* tags |
| mx-the-gathering/reference-implementations/templates/audit-system/lib/asset-cacher.js | javascript | reference | missing | no | no | Missing: @version or @author, @mx:* tags |
| mx-the-gathering/reference-implementations/templates/audit-system/lib/css-analyzer.js | javascript | reference | missing | no | no | Missing: @version or @author, @mx:* tags |
| mx-the-gathering/reference-implementations/templates/audit-system/lib/dom-extractor.js | javascript | reference | missing | no | no | Missing: @version or @author, @mx:* tags |
| mx-the-gathering/reference-implementations/templates/audit-system/test-audit/cached-css/d1cac4acd82d137c.css-2e6dc29c.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/test-audit/cached-html/index-e760d848.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/bio.css-9ef85c7c.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/blogroll.css-378fbd30.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/fonts.css-691072c6.css | css | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/footer.css-936251f1.css | css | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/fragment.css-8c5c3371.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/header.css-6a41cd1c.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/index.css-f185f710.css | css | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/lazy-styles.css-6488549a.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/returntotop.css-7de9e92f.css | css | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/styles.css-99f489f8.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-html/content-creator-guide-to-document-authoring-with-e-9cda3259.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/index-redirect-template.html | html | reference | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| mx-the-gathering/reference-implementations/templates/n-lang-business-template.cog.html | html | reference | compliant | yes | yes |  |
| mx-the-gathering/web/about.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| mx-the-gathering/web/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| mx-the-gathering/web/shared-gathering.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |

### mx-crm/ (5 files, 0% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| dotfusion/data/about.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| dotfusion/data/assets/css/styles.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| dotfusion/data/contact.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| dotfusion/data/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| dotfusion/data/our-work.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |

### mx-maxine-app/ (28 files, 4% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| backend/ai-router.js | javascript | source | missing | no | no | No structured metadata found |
| backend/api.js | javascript | source | missing | no | no | No structured metadata found |
| backend/index.js | javascript | source | missing | no | no | No structured metadata found |
| backend/qr-encode.js | javascript | source | missing | no | no | No structured metadata found |
| backend/server.js | javascript | source | missing | no | no | No structured metadata found |
| backend/websocket.js | javascript | source | missing | no | no | No structured metadata found |
| dashboard/app.js | javascript | source | missing | no | no | No structured metadata found |
| dashboard/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| dashboard/style.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| demo/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| demo/restaurant.html | html | source | compliant | yes | yes |  |
| demo/server.js | javascript | source | missing | no | no | No structured metadata found |
| main.js | javascript | source | missing | no | no | No structured metadata found |
| preload.js | javascript | source | missing | no | no | No structured metadata found |
| pwa/app.js | javascript | source | missing | no | no | No structured metadata found |
| pwa/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| pwa/jsQR.js | javascript | source | missing | no | no | No structured metadata found |
| pwa/style.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| pwa/sw.js | javascript | source | missing | no | no | No structured metadata found |
| scripts/generate-icons.js | javascript | source | missing | no | no | No structured metadata found |
| src/css/app-shell.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| src/css/dialogue.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| src/css/mx-brand.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| src/css/sidebar.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| src/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| src/js/app.js | javascript | source | missing | no | no | No structured metadata found |
| src/splash.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| test/joymaker.test.js | javascript | test | missing | no | no | No structured metadata found |

### mx-outputs/ (35 files, 0% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| html/audit/baselines/2026-02-21-08-34-14/hub-content-mx-reference-implementations-_templates-bilingual-business-template/cached-html/bilingual-business-template.cog.html-4f6e9d81.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/hub-content-mx-reference-implementations-_templates-single-language-business-template/cached-html/single-language-business-template.cog.html-4c0b71a6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/hub-content-mx-reference-implementations-los-granainos-los-granainos-mx-reference/cached-html/los-granainos-mx-reference.cog.html-ce17f0b3.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/hub-content-mx-reference-implementations-los-granainos-los-granainos-single-lang/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/hub-content-mx-reference-implementations-los-granainos-los-granainos-single-lang/cached-html/los-granainos-single-lang.cog.html-d66ca05b.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-en-index/cached-css/index.cog.css-1c46d859.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-en-index/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-en-index/cached-html/index.cog.html-18a0da03.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-es-index/cached-css/index.cog.css-9e897b23.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-es-index/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-es-index/cached-html/index.cog.html-c5d6272f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-index/cached-css/index.cog.css-b56fe14e.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-index/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-index/cached-html/index.cog.html-2d34f548.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/hub-content-mx-reference-implementations-_templates-bilingual-business-template/cached-html/bilingual-business-template.cog.html-83bec80f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/hub-content-mx-reference-implementations-_templates-single-language-business-template/cached-html/single-language-business-template.cog.html-818e8234.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/hub-content-mx-reference-implementations-los-granainos-los-granainos-mx-reference/cached-html/los-granainos-mx-reference.cog.html-9a736047.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/hub-content-mx-reference-implementations-los-granainos-los-granainos-single-lang/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/hub-content-mx-reference-implementations-los-granainos-los-granainos-single-lang/cached-html/los-granainos-single-lang.cog.html-fb939029.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-en-index/cached-css/index.cog.css-baaffb13.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-en-index/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-en-index/cached-html/index.cog.html-a1f2e46a.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-es-index/cached-css/index.cog.css-8d3ec45a.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-es-index/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-es-index/cached-html/index.cog.html-37db841c.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-index/cached-css/index.cog.css-98fcb324.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-index/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-index/cached-html/index.cog.html-36f999f0.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| html/blogs/mx/content-that-manages-itself.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/blogs/mx/content-that-manages-itself.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/blogs/mx/principles-changed-how-i-build.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/blogs/mx/principles-changed-how-i-build.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/books/chapters/chapter-00-what-are-ai-agents.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/books/codex/mx-codex.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| scripts/generate-index.sh | shell | generated | generated-needs-update | no | no | Generated file — requires generator update |

### mx-reginald/ (20 files, 0% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| scripts/cog-registry/query.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| scripts/link-checker/check.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/link-checker/llms-txt.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/llms-txt/generate.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/llms-txt/validate.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/metadata/extract.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/metadata/validate.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/mx-cog.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/mx-run.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| scripts/pricing/validate.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/readability/analyze.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/robots-txt/ai-stance.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/robots-txt/analyze.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/schema/extract.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/schema/validate.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/semantic-html/outline.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/semantic-html/validate.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/sitemap/analyze.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/validate-cog/check.sh | shell | source | missing | no | no | No structured metadata found |
| scripts/validate-cogs.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |

### scripts/ (124 files, 53% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| add-mx-metadata-to-manuals.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| appendix-nav-header.html | html | source | missing | no | no | No structured metadata found |
| audit-carrier-compliance.js | javascript | source | compliant | yes | yes |  |
| audit-html-baseline.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit-html-compare.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit-html-patterns.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| bin/mx-shell-integration.sh | shell | source | compliant | yes | yes |  |
| bin/mx.ai.sh | shell | source | compliant | yes | yes |  |
| bin/mx.backup.sh | shell | source | compliant | yes | yes |  |
| bin/mx.changelog.sh | shell | source | compliant | yes | yes |  |
| bin/mx.cleanup.sh | shell | source | compliant | yes | yes |  |
| bin/mx.collab.sh | shell | source | compliant | yes | yes |  |
| bin/mx.colours.sh | shell | source | compliant | yes | yes |  |
| bin/mx.deps.sh | shell | source | compliant | yes | yes |  |
| bin/mx.display.sh | shell | source | compliant | yes | yes |  |
| bin/mx.env.sh | shell | source | compliant | yes | yes |  |
| bin/mx.find.sh | shell | source | compliant | yes | yes |  |
| bin/mx.git.sh | shell | source | compliant | yes | yes |  |
| bin/mx.health.sh | shell | source | compliant | yes | yes |  |
| bin/mx.inspect.sh | shell | source | compliant | yes | yes |  |
| bin/mx.ip.sh | shell | source | compliant | yes | yes |  |
| bin/mx.jq.sh | shell | source | compliant | yes | yes |  |
| bin/mx.kill.sh | shell | source | compliant | yes | yes |  |
| bin/mx.ls.sh | shell | source | compliant | yes | yes |  |
| bin/mx.man.sh | shell | source | compliant | yes | yes |  |
| bin/mx.metadata.sh | shell | source | compliant | yes | yes |  |
| bin/mx.note.sh | shell | source | compliant | yes | yes |  |
| bin/mx.ports.sh | shell | source | compliant | yes | yes |  |
| bin/mx.run.sh | shell | source | compliant | yes | yes |  |
| bin/mx.scaffold.sh | shell | source | compliant | yes | yes |  |
| bin/mx.sh | shell | source | compliant | yes | yes |  |
| bin/mx.shell.sh | shell | source | compliant | yes | yes |  |
| bin/mx.status.sh | shell | source | compliant | yes | yes |  |
| bin/mx.sync.sh | shell | source | compliant | yes | yes |  |
| bin/mx.timer.sh | shell | source | compliant | yes | yes |  |
| bin/mx.tools.sh | shell | source | compliant | yes | yes |  |
| bin/mx.update.sh | shell | source | compliant | yes | yes |  |
| bin/mx.vscode.sh | shell | source | compliant | yes | yes |  |
| bin/mx.what.git.sh | shell | source | compliant | yes | yes |  |
| bin/mx.whatsup.sh | shell | source | compliant | yes | yes |  |
| bin/mx.workspace.sh | shell | source | compliant | yes | yes |  |
| blog-publish.sh | shell | source | compliant | yes | yes |  |
| blog-qa.sh | shell | source | compliant | yes | yes |  |
| blog-status.sh | shell | source | compliant | yes | yes |  |
| changelog-trim.sh | shell | source | compliant | yes | yes |  |
| check-submodules.sh | shell | source | compliant | yes | yes |  |
| cleanup-extensions.sh | shell | source | compliant | yes | yes |  |
| cog-field-rules.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| cog-tools.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| cogify.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| compare-backup-hashes.sh | shell | source | missing | no | no | No structured metadata found |
| embed-pdf-metadata.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| enhance-appendix-html.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| generate-appendix-html.sh | shell | source | missing | no | no | No structured metadata found |
| generate-content-html.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| generate-document-pdf.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| generate-illustrations.sh | shell | source | compliant | yes | yes |  |
| generate-sitemap.js | javascript | source | compliant | yes | yes |  |
| git-hooks/install-hooks.sh | shell | source | compliant | yes | yes |  |
| git-hooks/install-mx-hooks.sh | shell | source | compliant | yes | yes |  |
| git-hooks/mx-watch-lib.sh | shell | source | compliant | yes | yes |  |
| git-hooks/mx/add-new-repo.sh | shell | source | missing | no | no | No structured metadata found |
| git-hooks/mx/enhance-from-readme.js | javascript | source | compliant | yes | yes |  |
| git-hooks/mx/index-yaml-attributes.js | javascript | source | compliant | yes | yes |  |
| git-hooks/mx/migrate-mx-yaml.js | javascript | source | partial | no | yes | Missing: @version or @author |
| git-hooks/mx/mx-effective.js | javascript | source | compliant | yes | yes |  |
| git-hooks/mx/mx-yaml-generator.js | javascript | source | compliant | yes | yes |  |
| git-hooks/mx/mx-yaml-templates.js | javascript | source | partial | no | yes | Missing: @version or @author |
| git-hooks/mx/onboard-repo.sh | shell | source | missing | no | no | No structured metadata found |
| install-hooks.sh | shell | source | missing | no | no | No structured metadata found |
| lib/html-audit-utils.js | javascript | source | partial | no | yes | Missing: @version or @author |
| lint-md-all.js | javascript | source | compliant | yes | yes |  |
| migrate-to-v1.sh | shell | source | compliant | yes | yes |  |
| mode-lib.sh | shell | source | compliant | yes | yes |  |
| mx-about-recon.sh | shell | source | compliant | yes | yes |  |
| mx-audit-recon.sh | shell | source | compliant | yes | yes |  |
| mx-audit.js | javascript | source | partial | no | yes | Missing: @version or @author |
| mx-nav-server/lib/scanner.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| mx-nav-server/lib/search.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| mx-nav-server/public/app.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| mx-nav-server/public/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| mx-nav-server/server.js | javascript | source | compliant | yes | yes |  |
| mx-pdf.sh | shell | source | compliant | yes | yes |  |
| mx-rename-tracker.js | javascript | source | partial | no | yes | Missing: @version or @author |
| mx-show.sh | shell | source | compliant | yes | yes |  |
| mx-spell.sh | shell | source | compliant | yes | yes |  |
| mx-validator.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| mx/enhance-from-readme.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| mx/mx-compliance.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| mx/mx-effective.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| mx/mx-yaml-generator.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| onboard-team-member.sh | shell | source | compliant | yes | yes |  |
| organize-think-content.js | javascript | source | compliant | yes | yes |  |
| parse-mxignore.js | javascript | source | compliant | yes | yes |  |
| preprocess-ascii-to-svg.js | javascript | source | compliant | yes | yes |  |
| qr-code-generator/config/urls.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| qr-code-generator/examples/basic-usage.sh | shell | source | missing | no | no | No structured metadata found |
| qr-code-generator/lib/error-handler.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| qr-code-generator/lib/formatter.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| qr-code-generator/lib/logo-embedder.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| qr-code-generator/lib/qr-engine.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| qr-code-generator/lib/validator.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| qr-code-generator/public/app.js | javascript | source | missing | no | no | No structured metadata found |
| qr-code-generator/public/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| qr-code-generator/public/style.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| qr-code-generator/qr-generator.js | javascript | source | partial | no | yes | Missing: @version or @author |
| qr-code-generator/server.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| reference-tools/check-parity.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| reference-tools/deploy-multilingual.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| reference-tools/generate-multilingual.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| reference-tools/generate-sitemap.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| reference-tools/sync-assets.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| reference-tools/validate-multilingual.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| reginald-static-gen.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| registry-add.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| registry-query.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| registry-update.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| registry-validate.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| rename-prompting-to-runbook.sh | shell | source | compliant | yes | yes |  |
| rewrite-runbook-values.sh | shell | source | compliant | yes | yes |  |
| route-sync.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| validate-action-cogs.sh | shell | source | missing | no | no | No structured metadata found |
| validate-cog-yaml.sh | shell | source | missing | no | no | No structured metadata found |
| validate-demo.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |

### tests/ (4 files, 75% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| test-illustrations.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-mx-scaffold.sh | shell | test | compliant | yes | yes |  |
| test-mx-shell.sh | shell | test | compliant | yes | yes |  |
| test-mx-tools.sh | shell | test | compliant | yes | yes |  |

---

## Generated Files Needing Generator Updates

These files are generated outputs that lack MX metadata.
They require changes to the generator scripts, not manual edits.

| File | Carrier | Generator (estimated) |
|------|---------|----------------------|
| mx-canon/mx-the-gathering/reference-implementations/templates/audit-system/test-audit/cached-html/index-e760d848.html | html | unknown |
| mx-canon/mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/fonts.css-691072c6.css | css | unknown |
| mx-canon/mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/footer.css-936251f1.css | css | unknown |
| mx-canon/mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/index.css-f185f710.css | css | unknown |
| mx-canon/mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/returntotop.css-7de9e92f.css | css | unknown |
| mx-canon/mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-html/content-creator-guide-to-document-authoring-with-e-9cda3259.html | html | unknown |
| mx-outputs/html/audit/baselines/2026-02-21-08-34-14/hub-content-mx-reference-implementations-los-granainos-los-granainos-single-lang/cached-html/los-granainos-single-lang.cog.html-d66ca05b.html | html | pandoc / build scripts |
| mx-outputs/html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-en-index/cached-html/index.cog.html-18a0da03.html | html | pandoc / build scripts |
| mx-outputs/html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-es-index/cached-html/index.cog.html-c5d6272f.html | html | pandoc / build scripts |
| mx-outputs/html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-index/cached-html/index.cog.html-2d34f548.html | html | pandoc / build scripts |
| mx-outputs/html/audit/baselines/2026-02-21-08-34-46/hub-content-mx-reference-implementations-los-granainos-los-granainos-single-lang/cached-html/los-granainos-single-lang.cog.html-fb939029.html | html | pandoc / build scripts |
| mx-outputs/html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-en-index/cached-html/index.cog.html-a1f2e46a.html | html | pandoc / build scripts |
| mx-outputs/html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-es-index/cached-html/index.cog.html-37db841c.html | html | pandoc / build scripts |
| mx-outputs/html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-index/cached-html/index.cog.html-36f999f0.html | html | pandoc / build scripts |
| mx-outputs/scripts/generate-index.sh | shell | build scripts |

---

## Gap Analysis

### Shell (.sh)

- **61** fully compliant (Layer 1 + Layer 2)
- **0** partially compliant (native metadata but no MX identity)
- **26** missing all metadata

**Files missing all metadata:**

- datalake/publications/mx-books/mx-code-examples/examples/monitoring/server-log-analysis.sh
- mx-reginald/scripts/link-checker/check.sh
- mx-reginald/scripts/link-checker/llms-txt.sh
- mx-reginald/scripts/llms-txt/generate.sh
- mx-reginald/scripts/llms-txt/validate.sh
- mx-reginald/scripts/metadata/extract.sh
- mx-reginald/scripts/metadata/validate.sh
- mx-reginald/scripts/mx-cog.sh
- mx-reginald/scripts/pricing/validate.sh
- mx-reginald/scripts/readability/analyze.sh
- mx-reginald/scripts/robots-txt/ai-stance.sh
- mx-reginald/scripts/robots-txt/analyze.sh
- mx-reginald/scripts/schema/extract.sh
- mx-reginald/scripts/schema/validate.sh
- mx-reginald/scripts/semantic-html/outline.sh
- mx-reginald/scripts/semantic-html/validate.sh
- mx-reginald/scripts/sitemap/analyze.sh
- mx-reginald/scripts/validate-cog/check.sh
- scripts/compare-backup-hashes.sh
- scripts/generate-appendix-html.sh
- ... and 6 more

### JavaScript (.js)

- **11** fully compliant (Layer 1 + Layer 2)
- **20** partially compliant (native metadata but no MX identity)
- **142** missing all metadata

**Files missing all metadata:**

- datalake/publications/mx-books/mx-appendices/web/site/js/common.js
- datalake/publications/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/script.js
- datalake/publications/mx-books/mx-code-examples/examples/eal-delegation-worker.js
- datalake/publications/mx-books/mx-code-examples/examples/monitoring/analytics-tracking.js
- datalake/publications/mx-books/mx-code-examples/examples/nextjs/dynamic-query-index.js
- datalake/publications/mx-books/mx-code-examples/examples/nextjs/next.config.js
- datalake/publications/mx-books/mx-code-examples/examples/static-site/generate-index.js
- datalake/publications/mx-books/mx-code-examples/examples/validation/verify-ai-production.js
- datalake/publications/mx-books/mx-code-examples/examples/validation/verify-ai-simple.js
- mx-audit/index.js
- mx-audit/src/bulk-audit.js
- mx-audit/src/collectors/llmCollector.js
- mx-audit/src/config/defaults.js
- mx-audit/src/config/env.js
- mx-audit/src/config/options.js
- mx-audit/src/config/scoringWeights.js
- mx-audit/src/config/validation.js
- mx-audit/src/core/AuditContext.js
- mx-audit/src/main.js
- mx-audit/src/reporters/llmFeedback.js
- ... and 122 more

### HTML (.html)

- **5** fully compliant (Layer 1 + Layer 2)
- **92** partially compliant (native metadata but no MX identity)
- **1** missing all metadata

**Files missing all metadata:**

- scripts/appendix-nav-header.html

### CSS (.css)

- **0** fully compliant (Layer 1 + Layer 2)
- **14** partially compliant (native metadata but no MX identity)
- **2** missing all metadata

**Files missing all metadata:**

- datalake/publications/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/style.css
- datalake/publications/mx-books/mx-code-examples/agent-friendly-starter-kit/good/style.css

---

## Remediation Priorities

### Priority 1 — Source files in scripts/ and mx-canon/

High-value, hand-maintained files that should be exemplars of carrier format compliance.

**65 files** need attention.

### Priority 2 — Generator updates

**15 generated files** need their generators updated to emit MX metadata.

### Priority 3 — Submodule source files

**96 files** in submodules need attention (requires separate commits).

### Priority 4 — Test and example files

**17 files** — lower priority, not customer-facing.

---

*Carrier Format Compliance Audit — field-dictionary.cog.md v4.0. Design for both.*
