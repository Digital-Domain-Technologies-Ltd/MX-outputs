---
title: "Carrier Format Compliance Audit"
description: "Audit of HTML, JS, CSS, and shell script files against field-dictionary v4.0 Sections 12.1-12.9"
author: "Maxine (automated)"
created: 2026-06-09
modified: 2026-06-09
version: "1.0"

mx:
  status: active
  contentType: report
  reportType: audit
  tags: [carrier-format, compliance, metadata, audit]
---

# Carrier Format Compliance Audit

**Generated:** 2026-06-09
**Spec version:** fields-data.yaml (Appendix M §17)
**Sections audited:** 12.1-12.9

---

## Executive Summary

| Carrier | Total | Compliant | Partial | Missing | Generated | Score |
|---------|-------|-----------|---------|---------|-----------|-------|
| Shell (.sh) | 113 | 102 | 5 | 3 | 3 | 93% |
| JavaScript (.js) | 775 | 424 | 128 | 191 | 32 | 57% |
| HTML (.html) | 1536 | 412 | 22 | 153 | 949 | 70% |
| CSS (.css) | 248 | 174 | 16 | 4 | 54 | 90% |
| **Total** | **2672** | **1112** | **171** | **351** | **1038** | **68%** |

---

## Compliance by Category

| Category | Total | Compliant | Partial | Missing |
|----------|-------|-----------|---------|---------|
| Source files | 1512 | 1054 | 169 | 289 |
| Test files | 113 | 49 | 2 | 62 |
| Reference implementations | 9 | 9 | 0 | 0 |
| Generated outputs | 1038 | 0 | 0 | 265 |

---

## Compliance by Directory

### allaboutv2/ (411 files, 92% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| 404.html | html | source | compliant | yes | yes |  |
| agentsetup.sh | shell | source | compliant | yes | yes |  |
| assets/index-DMC9YjsP.css | css | source | compliant | yes | yes |  |
| assets/index-UbQ-77Ai.js | javascript | source | compliant | yes | yes |  |
| bio.html | html | source | compliant | yes | yes |  |
| blocks/3dcube/3dcube.css | css | source | compliant | yes | yes |  |
| blocks/3dcube/3dcube.js | javascript | source | compliant | yes | yes |  |
| blocks/3dcube/test.css | css | source | compliant | yes | yes |  |
| blocks/3dcube/test.html | html | source | compliant | yes | yes |  |
| blocks/accordion/accordion.css | css | source | compliant | yes | yes |  |
| blocks/accordion/accordion.js | javascript | source | compliant | yes | yes |  |
| blocks/accordion/test.css | css | source | compliant | yes | yes |  |
| blocks/accordion/test.html | html | source | compliant | yes | yes |  |
| blocks/bio/bio.css | css | source | compliant | yes | yes |  |
| blocks/bio/bio.js | javascript | source | compliant | yes | yes |  |
| blocks/bio/test.css | css | source | compliant | yes | yes |  |
| blocks/bio/test.html | html | source | compliant | yes | yes |  |
| blocks/bloglist/bloglist.css | css | source | compliant | yes | yes |  |
| blocks/bloglist/bloglist.js | javascript | source | compliant | yes | yes |  |
| blocks/bloglist/test.css | css | source | compliant | yes | yes |  |
| blocks/bloglist/test.html | html | source | compliant | yes | yes |  |
| blocks/blogroll/blogroll.css | css | source | compliant | yes | yes |  |
| blocks/blogroll/blogroll.js | javascript | source | compliant | yes | yes |  |
| blocks/blogroll/test.css | css | source | compliant | yes | yes |  |
| blocks/blogroll/test.html | html | source | compliant | yes | yes |  |
| blocks/cards/cards.css | css | source | compliant | yes | yes |  |
| blocks/cards/cards.js | javascript | source | compliant | yes | yes |  |
| blocks/cards/test.css | css | source | compliant | yes | yes |  |
| blocks/cards/test.html | html | source | compliant | yes | yes |  |
| blocks/centreblock/centreblock.css | css | source | compliant | yes | yes |  |
| blocks/centreblock/centreblock.js | javascript | source | compliant | yes | yes |  |
| blocks/centreblock/test.css | css | source | compliant | yes | yes |  |
| blocks/centreblock/test.html | html | source | compliant | yes | yes |  |
| blocks/code-expander/code-expander.css | css | source | compliant | yes | yes |  |
| blocks/code-expander/code-expander.js | javascript | source | compliant | yes | yes |  |
| blocks/code-expander/test.css | css | source | compliant | yes | yes |  |
| blocks/code-expander/test.html | html | source | compliant | yes | yes |  |
| blocks/columns/columns.css | css | source | compliant | yes | yes |  |
| blocks/columns/columns.js | javascript | source | compliant | yes | yes |  |
| blocks/columns/test.css | css | source | compliant | yes | yes |  |
| blocks/columns/test.html | html | source | compliant | yes | yes |  |
| blocks/comment/comment.css | css | source | compliant | yes | yes |  |
| blocks/comment/comment.js | javascript | source | compliant | yes | yes |  |
| blocks/comment/test.css | css | source | compliant | yes | yes |  |
| blocks/comment/test.html | html | source | compliant | yes | yes |  |
| blocks/counter/counter.css | css | source | compliant | yes | yes |  |
| blocks/counter/counter.js | javascript | source | compliant | yes | yes |  |
| blocks/counter/test.css | css | source | compliant | yes | yes |  |
| blocks/counter/test.html | html | source | compliant | yes | yes |  |
| blocks/dam/dam.css | css | source | compliant | yes | yes |  |
| blocks/dam/dam.js | javascript | source | compliant | yes | yes |  |
| blocks/dam/test.css | css | source | compliant | yes | yes |  |
| blocks/dam/test.html | html | source | compliant | yes | yes |  |
| blocks/dashboard/dashboard.css | css | source | compliant | yes | yes |  |
| blocks/dashboard/dashboard.js | javascript | source | compliant | yes | yes |  |
| blocks/dashboard/test.css | css | source | compliant | yes | yes |  |
| blocks/dashboard/test.html | html | source | compliant | yes | yes |  |
| blocks/dfs/dfs.css | css | source | compliant | yes | yes |  |
| blocks/dfs/dfs.js | javascript | source | compliant | yes | yes |  |
| blocks/dfs/test.css | css | source | compliant | yes | yes |  |
| blocks/dfs/test.html | html | source | compliant | yes | yes |  |
| blocks/dps/dps.css | css | source | compliant | yes | yes |  |
| blocks/dps/dps.js | javascript | source | compliant | yes | yes |  |
| blocks/dps/test.css | css | source | compliant | yes | yes |  |
| blocks/dps/test.html | html | source | compliant | yes | yes |  |
| blocks/dynamic/dynamic.css | css | source | compliant | yes | yes |  |
| blocks/dynamic/dynamic.js | javascript | source | compliant | yes | yes |  |
| blocks/dynamic/test.css | css | source | compliant | yes | yes |  |
| blocks/dynamic/test.html | html | source | compliant | yes | yes |  |
| blocks/embed/embed.css | css | source | compliant | yes | yes |  |
| blocks/embed/embed.js | javascript | source | compliant | yes | yes |  |
| blocks/embed/test.css | css | source | compliant | yes | yes |  |
| blocks/embed/test.html | html | source | compliant | yes | yes |  |
| blocks/floating-alert/floating-alert.css | css | source | compliant | yes | yes |  |
| blocks/floating-alert/floating-alert.js | javascript | source | compliant | yes | yes |  |
| blocks/floating-alert/test.css | css | source | compliant | yes | yes |  |
| blocks/floating-alert/test.html | html | source | compliant | yes | yes |  |
| blocks/footer/footer.css | css | source | compliant | yes | yes |  |
| blocks/footer/footer.js | javascript | source | compliant | yes | yes |  |
| blocks/footer/test.css | css | source | compliant | yes | yes |  |
| blocks/footer/test.html | html | source | compliant | yes | yes |  |
| blocks/fortunecookie/fortunecookie.css | css | source | compliant | yes | yes |  |
| blocks/fortunecookie/fortunecookie.js | javascript | source | compliant | yes | yes |  |
| blocks/fortunecookie/test.css | css | source | compliant | yes | yes |  |
| blocks/fortunecookie/test.html | html | source | compliant | yes | yes |  |
| blocks/fragment/fragment.css | css | source | compliant | yes | yes |  |
| blocks/fragment/fragment.js | javascript | source | compliant | yes | yes |  |
| blocks/fragment/test.css | css | source | compliant | yes | yes |  |
| blocks/fragment/test.html | html | source | compliant | yes | yes |  |
| blocks/grid/grid.css | css | source | compliant | yes | yes |  |
| blocks/grid/grid.js | javascript | source | compliant | yes | yes |  |
| blocks/grid/test.css | css | source | compliant | yes | yes |  |
| blocks/grid/test.html | html | source | compliant | yes | yes |  |
| blocks/header/header.css | css | source | compliant | yes | yes |  |
| blocks/header/header.js | javascript | source | compliant | yes | yes |  |
| blocks/header/test.css | css | source | compliant | yes | yes |  |
| blocks/header/test.html | html | source | compliant | yes | yes |  |
| blocks/helloworld/helloworld.css | css | source | compliant | yes | yes |  |
| blocks/helloworld/helloworld.js | javascript | source | compliant | yes | yes |  |
| blocks/helloworld/test.css | css | source | compliant | yes | yes |  |
| blocks/helloworld/test.html | html | source | compliant | yes | yes |  |
| blocks/hero/hero.css | css | source | compliant | yes | yes |  |
| blocks/hero/hero.js | javascript | source | compliant | yes | yes |  |
| blocks/hero/test.css | css | source | compliant | yes | yes |  |
| blocks/hero/test.html | html | source | compliant | yes | yes |  |
| blocks/index/index.css | css | source | compliant | yes | yes |  |
| blocks/index/index.js | javascript | source | compliant | yes | yes |  |
| blocks/index/test.css | css | source | compliant | yes | yes |  |
| blocks/index/test.html | html | source | compliant | yes | yes |  |
| blocks/inline-svg/inline-svg.css | css | source | compliant | yes | yes |  |
| blocks/inline-svg/inline-svg.js | javascript | source | compliant | yes | yes |  |
| blocks/inline-svg/test.css | css | source | compliant | yes | yes |  |
| blocks/inline-svg/test.html | html | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/ipynb-viewer.css | css | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/ipynb-viewer.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/overlay/footer.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/overlay/navigation-state.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/overlay/renderers/markdown-renderer.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/overlay/renderers/notebook-renderer.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/overlay/toolbar.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/overlay/unified-overlay.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/test.css | css | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/test.html | html | source | compliant | yes | yes |  |
| blocks/markdown/markdown.css | css | source | compliant | yes | yes |  |
| blocks/markdown/markdown.js | javascript | source | compliant | yes | yes |  |
| blocks/markdown/test.css | css | source | compliant | yes | yes |  |
| blocks/markdown/test.html | html | source | compliant | yes | yes |  |
| blocks/modal/modal.css | css | source | compliant | yes | yes |  |
| blocks/modal/modal.js | javascript | source | compliant | yes | yes |  |
| blocks/modal/test.css | css | source | compliant | yes | yes |  |
| blocks/modal/test.html | html | source | compliant | yes | yes |  |
| blocks/overlay/overlay.css | css | source | compliant | yes | yes |  |
| blocks/overlay/overlay.js | javascript | source | compliant | yes | yes |  |
| blocks/overlay/test.css | css | source | compliant | yes | yes |  |
| blocks/overlay/test.html | html | source | compliant | yes | yes |  |
| blocks/quote/quote.css | css | source | compliant | yes | yes |  |
| blocks/quote/quote.js | javascript | source | compliant | yes | yes |  |
| blocks/quote/test.css | css | source | compliant | yes | yes |  |
| blocks/quote/test.html | html | source | compliant | yes | yes |  |
| blocks/raw/raw.css | css | source | compliant | yes | yes |  |
| blocks/raw/raw.js | javascript | source | compliant | yes | yes |  |
| blocks/raw/test.css | css | source | compliant | yes | yes |  |
| blocks/raw/test.html | html | source | compliant | yes | yes |  |
| blocks/react-slide-builder/react-slide-builder.css | css | source | compliant | yes | yes |  |
| blocks/react-slide-builder/react-slide-builder.js | javascript | source | compliant | yes | yes |  |
| blocks/react-slide-builder/test.css | css | source | compliant | yes | yes |  |
| blocks/react-slide-builder/test.html | html | source | compliant | yes | yes |  |
| blocks/remove-icon-styles/remove-icon-styles.css | css | source | compliant | yes | yes |  |
| blocks/remove-icon-styles/remove-icon-styles.js | javascript | source | compliant | yes | yes |  |
| blocks/remove-icon-styles/test.css | css | source | compliant | yes | yes |  |
| blocks/remove-icon-styles/test.html | html | source | compliant | yes | yes |  |
| blocks/returntotop/returntotop.css | css | source | compliant | yes | yes |  |
| blocks/returntotop/returntotop.js | javascript | source | compliant | yes | yes |  |
| blocks/returntotop/test.css | css | source | compliant | yes | yes |  |
| blocks/returntotop/test.html | html | source | compliant | yes | yes |  |
| blocks/search/search.css | css | source | compliant | yes | yes |  |
| blocks/search/search.js | javascript | source | compliant | yes | yes |  |
| blocks/search/test.css | css | source | compliant | yes | yes |  |
| blocks/search/test.html | html | source | compliant | yes | yes |  |
| blocks/shoelace-card/shoelace-card.css | css | source | compliant | yes | yes |  |
| blocks/shoelace-card/shoelace-card.js | javascript | source | compliant | yes | yes |  |
| blocks/shoelace-card/test.css | css | source | compliant | yes | yes |  |
| blocks/shoelace-card/test.html | html | source | compliant | yes | yes |  |
| blocks/shoelace-card/test2.html | html | source | compliant | yes | yes |  |
| blocks/shoelace/shoelace.css | css | source | compliant | yes | yes |  |
| blocks/shoelace/shoelace.js | javascript | source | compliant | yes | yes |  |
| blocks/shoelace/test.css | css | source | compliant | yes | yes |  |
| blocks/shoelace/test.html | html | source | compliant | yes | yes |  |
| blocks/showcaser/showcaser.css | css | source | compliant | yes | yes |  |
| blocks/showcaser/showcaser.js | javascript | source | compliant | yes | yes |  |
| blocks/showcaser/test.css | css | source | compliant | yes | yes |  |
| blocks/showcaser/test.html | html | source | compliant | yes | yes |  |
| blocks/slide-builder/slide-builder.css | css | source | compliant | yes | yes |  |
| blocks/slide-builder/slide-builder.js | javascript | source | compliant | yes | yes |  |
| blocks/slide-builder/test.css | css | source | compliant | yes | yes |  |
| blocks/slide-builder/test.html | html | source | compliant | yes | yes |  |
| blocks/spectrum-card/spectrum-card.css | css | source | compliant | yes | yes |  |
| blocks/spectrum-card/spectrum-card.js | javascript | source | compliant | yes | yes |  |
| blocks/spectrum-card/test.css | css | source | compliant | yes | yes |  |
| blocks/spectrum-card/test.html | html | source | compliant | yes | yes |  |
| blocks/table/table.css | css | source | compliant | yes | yes |  |
| blocks/table/table.js | javascript | source | compliant | yes | yes |  |
| blocks/table/test.css | css | source | compliant | yes | yes |  |
| blocks/table/test.html | html | source | compliant | yes | yes |  |
| blocks/tabs/tabs.css | css | source | compliant | yes | yes |  |
| blocks/tabs/tabs.js | javascript | source | compliant | yes | yes |  |
| blocks/tabs/test.css | css | source | compliant | yes | yes |  |
| blocks/tabs/test.html | html | source | compliant | yes | yes |  |
| blocks/tags/tags.css | css | source | compliant | yes | yes |  |
| blocks/tags/tags.js | javascript | source | compliant | yes | yes |  |
| blocks/tags/test.css | css | source | compliant | yes | yes |  |
| blocks/tags/test.html | html | source | compliant | yes | yes |  |
| blocks/text/test.css | css | source | compliant | yes | yes |  |
| blocks/text/test.html | html | source | compliant | yes | yes |  |
| blocks/text/text.css | css | source | compliant | yes | yes |  |
| blocks/text/text.js | javascript | source | compliant | yes | yes |  |
| blocks/video/test.css | css | source | compliant | yes | yes |  |
| blocks/video/test.html | html | source | compliant | yes | yes |  |
| blocks/video/video.css | css | source | compliant | yes | yes |  |
| blocks/video/video.js | javascript | source | compliant | yes | yes |  |
| blocks/view-myblog/test.css | css | source | compliant | yes | yes |  |
| blocks/view-myblog/test.html | html | source | compliant | yes | yes |  |
| blocks/view-myblog/view-myblog.css | css | source | compliant | yes | yes |  |
| blocks/view-myblog/view-myblog.js | javascript | source | compliant | yes | yes |  |
| blocks/vue-slide-builder/test.css | css | source | compliant | yes | yes |  |
| blocks/vue-slide-builder/test.html | html | source | compliant | yes | yes |  |
| blocks/vue-slide-builder/vue-slide-builder.css | css | source | compliant | yes | yes |  |
| blocks/vue-slide-builder/vue-slide-builder.js | javascript | source | compliant | yes | yes |  |
| build/spectrum-card/dist/spectrum-card.js | javascript | source | compliant | yes | yes |  |
| build/spectrum-card/spectrum-card.js | javascript | source | compliant | yes | yes |  |
| build/spectrum-card/test.css | css | source | compliant | yes | yes |  |
| build/spectrum-card/test.html | html | source | compliant | yes | yes |  |
| build/spectrum-card/vite.config.js | javascript | source | compliant | yes | yes |  |
| cloudflare/files/cloudflare-worker.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| cloudflare/files/cloudflare-worker.test.js | javascript | test | compliant | yes | yes |  |
| cloudflare/files/reginald/db/ai-attribution-usage.js | javascript | source | compliant | yes | yes |  |
| cloudflare/files/reginald/db/ai-visits.js | javascript | source | compliant | yes | yes |  |
| cloudflare/files/reginald/db/aliveness.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/db/audit.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/db/downloads.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/db/publishers.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/db/subscriptions.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/db/tokens.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/handlers/ai-attribution-dashboard.js | javascript | source | compliant | yes | yes |  |
| cloudflare/files/reginald/handlers/ai-attribution.js | javascript | source | compliant | yes | yes |  |
| cloudflare/files/reginald/handlers/book-checkout.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/handlers/books.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/handlers/lead-capture.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/handlers/publisher-aliveness.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/handlers/publisher-analytics.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/handlers/publisher-cogs.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/handlers/register.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/handlers/status.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/handlers/stripe-webhook.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/handlers/subscribe.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/handlers/token-rotate.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/lib/ai-attribution-hosts.js | javascript | source | compliant | yes | yes |  |
| cloudflare/files/reginald/lib/aliveness.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/lib/ga4-connector.js | javascript | source | compliant | yes | yes |  |
| cloudflare/files/reginald/lib/lead-capture.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/lib/mailerlite.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/lib/resend.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/lib/responses.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/lib/token.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/lib/validation.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/middleware/auth.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/middleware/stripe-verify.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/reginald/stripe/client.js | javascript | source | partial | no | yes | Missing: @version or @author |
| cloudflare/files/test-local-html.js | javascript | source | compliant | yes | yes |  |
| cloudflare/files/test-markdown-for-agents.js | javascript | source | compliant | yes | yes |  |
| cloudflare/files/vitest.config.js | javascript | source | compliant | yes | yes |  |
| cloudflare/test-rendered.css | css | source | compliant | yes | yes |  |
| cloudflare/test-rendered.html | html | source | compliant | yes | yes |  |
| cloudflare/test.css | css | source | compliant | yes | yes |  |
| cloudflare/test.html | html | source | compliant | yes | yes |  |
| config/config.js | javascript | source | compliant | yes | yes |  |
| ddt-site/index.html | html | source | compliant | yes | yes |  |
| ddt-site/styles.css | css | source | partial | yes | no | Missing: @mx:* tags |
| demo/cognovamx/about.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/about.html | html | source | compliant | yes | yes |  |
| demo/cognovamx/accessibility-ai-convergence.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/accessibility-ai-convergence.html | html | source | compliant | yes | yes |  |
| demo/cognovamx/benefits-of-mx.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/benefits-of-mx.html | html | source | compliant | yes | yes |  |
| demo/cognovamx/common-mistakes.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/common-mistakes.html | html | source | compliant | yes | yes |  |
| demo/cognovamx/contact.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/contact.html | html | source | compliant | yes | yes |  |
| demo/cognovamx/explicit-over-implicit.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/explicit-over-implicit.html | html | source | compliant | yes | yes |  |
| demo/cognovamx/implementation-examples.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/implementation-examples.html | html | source | compliant | yes | yes |  |
| demo/cognovamx/index.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/index.html | html | source | compliant | yes | yes |  |
| demo/cognovamx/key-principles.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/key-principles.html | html | source | compliant | yes | yes |  |
| demo/cognovamx/our-approach.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/our-approach.html | html | source | compliant | yes | yes |  |
| demo/cognovamx/our-services.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/our-services.html | html | source | compliant | yes | yes |  |
| demo/cognovamx/what-is-mx.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/what-is-mx.html | html | source | compliant | yes | yes |  |
| demo/cognovamx/why-mx-matters.css | css | source | compliant | yes | yes |  |
| demo/cognovamx/why-mx-matters.html | html | source | compliant | yes | yes |  |
| demo/conference/assets/script.js | javascript | source | compliant | yes | yes |  |
| demo/conference/assets/style.css | css | source | compliant | yes | yes |  |
| demo/conference/conference.css | css | source | compliant | yes | yes |  |
| demo/conference/de/index.cog.html | html | source | compliant | yes | yes |  |
| demo/conference/en/index.cog.html | html | source | compliant | yes | yes |  |
| demo/conference/index.html | html | source | compliant | yes | yes |  |
| demo/dotfusion/about.html | html | source | compliant | yes | yes |  |
| demo/dotfusion/assets/css/styles.css | css | source | compliant | yes | yes |  |
| demo/dotfusion/contact.html | html | source | compliant | yes | yes |  |
| demo/dotfusion/index.html | html | source | compliant | yes | yes |  |
| demo/dotfusion/our-work.html | html | source | compliant | yes | yes |  |
| demo/lpc/about.html | html | source | compliant | yes | yes |  |
| demo/lpc/assets/css/styles.css | css | source | compliant | yes | yes |  |
| demo/lpc/contact.html | html | source | compliant | yes | yes |  |
| demo/lpc/index.html | html | source | compliant | yes | yes |  |
| demo/lpc/reviews.html | html | source | compliant | yes | yes |  |
| demo/lpc/services/business-stationery.html | html | source | compliant | yes | yes |  |
| demo/lpc/services/design-branding.html | html | source | compliant | yes | yes |  |
| demo/lpc/services/event-stationery.html | html | source | compliant | yes | yes |  |
| demo/lpc/services/garment-printing.html | html | source | compliant | yes | yes |  |
| demo/lpc/services/index.html | html | source | compliant | yes | yes |  |
| demo/lpc/services/marketing-materials.html | html | source | compliant | yes | yes |  |
| demo/lpc/services/online-merch-shops.html | html | source | compliant | yes | yes |  |
| demo/lpc/services/web-services.html | html | source | compliant | yes | yes |  |
| demo/media219/assets/css/styles.css | css | source | compliant | yes | yes |  |
| demo/media219/contact.html | html | source | compliant | yes | yes |  |
| demo/media219/index.html | html | source | compliant | yes | yes |  |
| demo/media219/work.html | html | source | compliant | yes | yes |  |
| demo/salva/assets/script.js | javascript | source | compliant | yes | yes |  |
| demo/salva/assets/style.css | css | source | compliant | yes | yes |  |
| demo/salva/en/index.html | html | source | compliant | yes | yes |  |
| demo/salva/es/index.html | html | source | compliant | yes | yes |  |
| demo/salva/index.html | html | source | compliant | yes | yes |  |
| demo/salva/salva.css | css | source | compliant | yes | yes |  |
| faq.css | css | source | compliant | yes | yes |  |
| faq.html | html | source | compliant | yes | yes |  |
| googleec3acd01d043bece.html | html | source | missing | no | no | No structured metadata found |
| head.html | html | source | missing | no | no | No structured metadata found |
| index.css | css | source | compliant | yes | yes |  |
| index.html | html | source | compliant | yes | yes |  |
| insert-variables.sh | shell | source | compliant | yes | yes |  |
| lottery.html | html | source | compliant | yes | yes |  |
| navigator.html | html | source | compliant | yes | yes |  |
| plusplus/block-party/dom-helpers.js | javascript | source | compliant | yes | yes |  |
| plusplus/block-party/ffetch.js | javascript | source | compliant | yes | yes |  |
| plusplus/plugins/experimentation/.eslintrc.js | javascript | source | compliant | yes | yes |  |
| plusplus/plugins/experimentation/src/index.js | javascript | source | compliant | yes | yes |  |
| plusplus/plugins/experimentation/src/preview.css | css | source | compliant | yes | yes |  |
| plusplus/plugins/experimentation/src/preview.js | javascript | source | compliant | yes | yes |  |
| plusplus/plugins/experimentation/src/ued.js | javascript | source | compliant | yes | yes |  |
| plusplus/plugins/expressions/src/expressions.js | javascript | source | compliant | yes | yes |  |
| plusplus/plugins/expressions/src/expressions.test.js | javascript | test | compliant | yes | yes |  |
| plusplus/src/adobe-metadata.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/clientConfig.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/clientExpressions.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/debugPanel.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/externalImage.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/jsonHandler.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/reModelDom.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/accordion/accordion.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/accordion/accordion.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/bio/bio.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/bio/bio.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/carousel/carousel.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/carousel/carousel.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/centreblock/centreblock.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/centreblock/centreblock.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/comment/comment.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/comment/comment.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/dashboard/dashboard.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/dashboard/dashboard.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/dynamic/dynamic.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/dynamic/dynamic.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/embed/embed.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/embed/embed.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/fragment/fragment.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/fragment/fragment.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/index/index.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/index/index.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/modal/modal.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/modal/modal.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/quote/quote.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/quote/quote.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/returntotop/returntotop.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/returntotop/returntotop.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/search/search.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/search/search.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/table/table.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/table/table.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/tabs/tabs.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/tabs/tabs.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/tags/tags.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/tags/tags.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/text/text.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/text/text.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/video/video.css | css | source | compliant | yes | yes |  |
| plusplus/src/samples/blocks/video/video.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/scripts/delayed.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/samples/scripts/scripts.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/siteConfig.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/test.js | javascript | source | compliant | yes | yes |  |
| plusplus/src/variables.js | javascript | source | compliant | yes | yes |  |
| scripts/aem.js | javascript | source | compliant | yes | yes |  |
| scripts/check-sitemap.js | javascript | source | missing | no | no | No structured metadata found |
| scripts/delayed.js | javascript | source | compliant | yes | yes |  |
| scripts/generate-mx-handbook-sitemap.js | javascript | source | compliant | yes | yes |  |
| scripts/homepage-tabs.js | javascript | source | compliant | yes | yes |  |
| scripts/ipynb-helpers.js | javascript | source | compliant | yes | yes |  |
| scripts/scripts.js | javascript | source | compliant | yes | yes |  |
| scripts/sync-blog-content.js | javascript | source | compliant | yes | yes |  |
| server.html | html | source | compliant | yes | yes |  |
| server.js | javascript | source | compliant | yes | yes |  |
| static/css/slide-builder-main.css | css | source | compliant | yes | yes |  |
| static/js/slide-builder-main.js | javascript | source | compliant | yes | yes |  |
| styles/fonts.css | css | source | compliant | yes | yes |  |
| styles/homepage.css | css | source | compliant | yes | yes |  |
| styles/lazy-styles.css | css | source | compliant | yes | yes |  |
| styles/pages/404.css | css | source | compliant | yes | yes |  |
| styles/pages/bio.css | css | source | compliant | yes | yes |  |
| styles/pages/lottery.css | css | source | compliant | yes | yes |  |
| styles/pages/server-docs.css | css | source | compliant | yes | yes |  |
| styles/styles.css | css | source | compliant | yes | yes |  |
| TEST-TWO.css | css | source | compliant | yes | yes |  |
| TEST-TWO.html | html | source | compliant | yes | yes |  |
| tools/sidekick/library.html | html | source | compliant | yes | yes |  |
| tools/sidekick/sidekick.css | css | source | compliant | yes | yes |  |
| vue-slides.html | html | source | compliant | yes | yes |  |

### audit-data/ (20 files, 20% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| domains/allabout.network/cache/decoded/67ae145a47ec93ac7e9352c6b83d59dd.html | html | source | compliant | yes | yes |  |
| domains/allabout.network/cache/served/67ae145a47ec93ac7e9352c6b83d59dd.html | html | source | compliant | yes | yes |  |
| domains/dkd.de-de/cache/decoded/f0dcfdc07a5d399d18f4c3a47e20133a.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| domains/dkd.de-de/cache/served/f0dcfdc07a5d399d18f4c3a47e20133a.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| domains/dotfusion.com/cache/decoded/15fc6bd00692acb0889f5f6ea1474ed1.html | html | source | missing | no | no | No structured metadata found |
| domains/dotfusion.com/cache/served/15fc6bd00692acb0889f5f6ea1474ed1.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/decoded/ce4cbbaf1b4d3d261a2a474d334fd0cb.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/ce4cbbaf1b4d3d261a2a474d334fd0cb.html | html | source | compliant | yes | yes |  |
| domains/neomwellbeing.com/cache/decoded/acccd2923bdfba3dee1d450705d7006a.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| domains/neomwellbeing.com/cache/served/acccd2923bdfba3dee1d450705d7006a.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| domains/typo3.com/cache/decoded/2affb9098b73bc7171f707a11360f27f.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| domains/typo3.com/cache/served/2affb9098b73bc7171f707a11360f27f.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| domains/typo3.org/cache/decoded/2cea1309d18c929fb0e7a950740af292.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| domains/typo3.org/cache/served/2cea1309d18c929fb0e7a950740af292.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| domains/www.bollants.de/cache/decoded/262901dba3b4e84dc0a8c31aef1dcce3.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| domains/www.bollants.de/cache/served/262901dba3b4e84dc0a8c31aef1dcce3.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| domains/www.marriott.com/cache/decoded/64ef2607aaca6185dd9aee226e1b44ba.html | html | source | missing | no | no | No structured metadata found |
| domains/www.marriott.com/cache/served/64ef2607aaca6185dd9aee226e1b44ba.html | html | source | missing | no | no | No structured metadata found |
| domains/www.paribu.com/cache/decoded/ec5f42ef9736a16a9c00f0fc791e774f.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| domains/www.paribu.com/cache/served/ec5f42ef9736a16a9c00f0fc791e774f.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |

### datalake/ (32 files, 91% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| assets/presentations/historical/members-call-21-jan-26/talk-slides.js | javascript | source | compliant | yes | yes |  |
| assets/presentations/maxine-vision-deck/maxine-slides.js | javascript | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/index.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/script.js | javascript | source | missing | no | no | No structured metadata found |
| manuscripts/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/style.css | css | source | missing | no | no | No structured metadata found |
| manuscripts/mx-books/mx-code-examples/agent-friendly-starter-kit/good/index.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/agent-friendly-starter-kit/good/style.css | css | source | missing | no | no | No structured metadata found |
| manuscripts/mx-books/mx-code-examples/examples/delegation-management-ui.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/eal-delegation-worker.js | javascript | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/components/data-tables.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/components/dialog-modal.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/components/pricing-display.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/ecommerce/order-confirmation.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/ecommerce/product-page.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/ecommerce/shipping-options.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/ecommerce/shopping-cart.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/forms/disabled-button.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/forms/multi-step-wizard.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/forms/validation-form.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/navigation/breadcrumbs.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/navigation/filters.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/navigation/search-results.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/state/authentication.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/state/error-display.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/html-examples/state/loading-state.html | html | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/monitoring/analytics-tracking.js | javascript | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/monitoring/server-log-analysis.sh | shell | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/nextjs/dynamic-query-index.js | javascript | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/nextjs/next.config.js | javascript | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/static-site/generate-index.js | javascript | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/validation/verify-ai-production.js | javascript | source | compliant | yes | yes |  |
| manuscripts/mx-books/mx-code-examples/examples/validation/verify-ai-simple.js | javascript | source | compliant | yes | yes |  |

### intent-cms/ (7 files, 14% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| blocks/cards/cards.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| blocks/cards/cards.js | javascript | source | partial | no | yes | Missing: @version or @author |
| blocks/columns/columns.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| blocks/columns/columns.js | javascript | source | partial | no | yes | Missing: @version or @author |
| blocks/hero/hero.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| blocks/hero/hero.js | javascript | source | partial | no | yes | Missing: @version or @author |
| templates/page.html | html | source | compliant | yes | yes |  |

### mx-audit/ (405 files, 64% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| domains/mx.allabout.network/cache/body/0036285386a86019a783f56ee9faf350.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/01873b0db10dae62474b256bc2ef6ec7.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/0a49f1f7626fb54dae22d7a205cfa465.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/0fc7da2d204e620b8c81248406a0efb2.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/10d419f2ecf0a8a83fb4a3ca9a4fbc41.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/136b6c9e31a2ebaead0180c7cbbee791.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/1804bc0ece4f49018306a338ba9cfc66.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/193bf3ade36a6f65969d325c0eb926f6.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/19b87f561533a69b0a1c33fdec768a45.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/19e567255585827a92fc1e589851f293.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/1ef19e7ce06497c3c258abc2112c3083.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/1f67fce76c12ea84004ec30a0df3ae01.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/1f82260041a9cefca9bdf49ce0198e7f.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/2387d1fcaa0986e331560db037963962.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/2444e08694f0942f2cbc9070806952f6.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/24e1c466abd44d996f4f7b0407ac9894.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/25c0e7d4adf8b03c7bad19c008d380be.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/28c2cc3ad6cb6739d9d91c168a4fc4fd.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/2a90da4c59e9b38d59f08369d59fca27.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/2e3126320c4fe639e2007a448c9bfdaf.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/3000970167c2fd18f5ec37b83b438944.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/30aadf81b9f18539df924e6dc8435b30.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/316182e9c60ebf5a92d50c5d3d07fd7a.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/332ecb92e041786156ef8951e38843c9.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/33cefc7fae7e30409577be9ca6449633.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/33d3bc4b839c16c0c2d8e0a6cf41b2a0.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/33e03f1e0d979c0be58bb62d03d376cc.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/33f9fbe94aa46cd060908695b2cbd339.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/355c5737b6ed3350cf96680a22ca160b.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/38b306169ce01b6ea9ff9b17453c5898.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/39e3227a0c1ad7bec59e32be9591b89b.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/3a2acae49581717dabff2073af1b71e3.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/3b72c18f0f9c4dd1d235ec6f86ba780d.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/3bb708dc4dbeb93c34eee3e4cdf3541c.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/3bf9d5b4fc8c63889a4f25b41150fc53.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/3c69c892054587cc889e43e757df79c9.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/3c809196ebdbfcb5f7a90df750a997a5.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/3f084d915f2860dfd6ef03fe674e6275.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/4124222b4a691044b7fc71a9791857a7.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/42b0b71306bced6210baa839a39e7ed8.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/42c1e027429e56d2e121f28be1f7afd6.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/42ed206ba26b9fa8d6e67ae797ab2ccb.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/4646b54e86975407deae2d7d97ec2b0e.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/46c72e49aa9130525f4d70794cad41d0.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/4891a45727f6b3282105d6cb3547ac0d.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/4d1eef4da6a9a5ad5f511e9ca11c79e0.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/4f4fe6c5cf581ef7cbfcece4ba6f9cae.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/4f709260712fadb7b1c0336f40993ce9.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/508daeb28ee77c3b04d414e5b5d72ebd.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/5094cd6d30c1a4ac1ad00a034d13ca65.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/55147aaae327b807bd7ef8fb695404ae.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/57737d16c158997220124a735a8300ca.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/5b8f17aaa8286a150c1065296b8a9060.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/5d3cc4ddcd90f4e8f2a5cba34f47050c.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/60b4917ed1ce4d2f685dfdadd5167a7b.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/60fb3308fcc3228581aff39630c23feb.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/6309fbd3aba94939f9cc4df687e4e81f.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/63d80c54287bd3b296229ba8b569ec56.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/64057987b5ea17dbab256cbe88583eb8.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/667c843571b0c31462917cf9c1e48fb4.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/69d79d4107eaa5631b1ac091d9a9ff32.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/6b4aca667fd79ddcf392542c0ef50206.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/6d08344508fbeb1ed80457af9a6b1943.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/6da6c0a468bed005e4cf9dea8fbae97a.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/6e1a25e572f43e6aafcc19dbb42074a0.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/6ecbef7dd51b982f11111ae50b5237dc.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/6f2ccdb85bd00b0019400902368dc579.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/704fcc8a95895089076961abc1ad4591.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/72aa278a6c1febe05806c89fd7ccd87c.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/72f5205735cd4f55926cbba6c131ad23.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/746bf80d8efa3504e1bc7d97c4c028b5.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/76d3eb849989c8620f497fa859de67b8.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/77b9f0165307c936233a8dc3af5c6c22.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/799c39ada068562ab40978abccdc52b8.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/7ef3ca8805a2213669b9506854897511.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/83f6af8780457a7c6482e0f959e9ae2e.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/86491a2946dfd0ff3795d771c8a743c9.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/8cc22c0c9cf7ea678a68caf61bb17d87.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/912da7f0e252cd0bfb2e4da66b6e0a79.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/92eb15e81d8d1984032f8d230cb0973b.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/934bc0ca45126c023e900fcbbaf93cb9.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/94b8101762831c34114680e502cde8ca.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/97766fa6846f320e1ae6a345b5748989.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/9b780466447d936dfe6b6dab09f0f4fa.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/9eddd92756faebcda70981438e99fae9.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/a09bedff85bbe4302864737c1018be4a.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/a251789d3b48497b675daedfbeb0c372.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/a36e654f3532aa804347ddbbb75a6174.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/a398fbbfdb984db1959054ff9c7bb0ba.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/a404d2cb9e90f9506c98a9c79919610c.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/a598bc1e87c25ebcb24b9aed77b2ed27.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/a6fdefc515df0558482863b6bd954f26.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/adc7d8b04d72cdf5040306d1301268be.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/ae160f7b28c9a96888d045f88ae73542.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/afdfd39cef538aeb3feefa0eb34cdfa5.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/b04bda6d286ad386d2f90c73725f7229.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/b2d12b12cc107663bd580d126a2867c7.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/b3136503c90f5ec9db4721e551ad6dd1.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/b43038a1f05790aeede9276ba4586d84.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/b732eaa045b8b6f9b4cb5417698b0d88.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/b9057d0c5d25ab60eed6cb72c772c7e9.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/b9584c40d1432646a5a10f16c4227904.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/bc6ced70d849c2f3a1379bfc3ebc5621.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/bcd0d7260bce451d9590ae42bf66569a.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/bd2daa5905162dece24246da0a98d4d8.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/be9a28e63f7520f023d930dfd1bc99d6.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/c0670df660b9e47cc849d990d12431ce.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/c07a8a435e31d839fce56daeb31a51c5.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/c0e84da97b95afedc2d3d3204e3e8993.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/c7292b9fcb5b09c29b3f04c2480cffef.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/c7bc2dc404c681c07453c638603f838c.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/cbdc068bf720f67a4c5b46a27112f072.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/cf7531d20b44a061ad64d38283f729e2.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/d07b0eb3951b03660049a1a6923f68ed.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/d32a92a39989a3aa8e351841566e1015.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/d32e611e22ea14eb2447764dad869456.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/d85329ab10c56ca9dc4872a45e3394aa.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/d8f56fc5fa76544dd81f4038da6eb9a6.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/d98ca3058b2b121ff481b252096f4004.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/d9a7f548ea5c7d89a013b29fb176e95c.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/e1e271885fef8c7e38f9801dfb07a27f.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/e493f6774eaf64af6974c252539adb1d.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/e816ebbbbe61f2e22e4f86749f8f2951.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/eb13f7214a36ab4b9c6a7ca6305df001.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/eb4ce11cb06ea4fa6cea02c26965aa2e.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/ecab5267fcfea3dd092868b55f3de01c.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/ef4c566d71d4729ca7f0e81f48915fdf.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/f05db915b50e276aee52edb8ee7ca1cf.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/f140d45eaa4b8ce3c5b2d498e90c8e4f.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/f2687c06ed1288fa6d5ce29bbcb59b26.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/f4be84761af852f98f973b7b5c9f0953.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/f5304cec63bcb2a7ac6661cbdf40c4b8.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/f9122cc8b527958ce3dd981e2ba92617.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/body/fe3b351d6c81fca16dacef8580b9e62a.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/decoded/0036285386a86019a783f56ee9faf350.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/decoded/01873b0db10dae62474b256bc2ef6ec7.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/0a49f1f7626fb54dae22d7a205cfa465.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/0fc7da2d204e620b8c81248406a0efb2.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/10d419f2ecf0a8a83fb4a3ca9a4fbc41.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/136b6c9e31a2ebaead0180c7cbbee791.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/1804bc0ece4f49018306a338ba9cfc66.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/193bf3ade36a6f65969d325c0eb926f6.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/19b87f561533a69b0a1c33fdec768a45.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/19e567255585827a92fc1e589851f293.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/1ef19e7ce06497c3c258abc2112c3083.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/1f67fce76c12ea84004ec30a0df3ae01.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/1f82260041a9cefca9bdf49ce0198e7f.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/decoded/2387d1fcaa0986e331560db037963962.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/2444e08694f0942f2cbc9070806952f6.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/decoded/24e1c466abd44d996f4f7b0407ac9894.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/25c0e7d4adf8b03c7bad19c008d380be.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/28c2cc3ad6cb6739d9d91c168a4fc4fd.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/2a90da4c59e9b38d59f08369d59fca27.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/2e3126320c4fe639e2007a448c9bfdaf.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/3000970167c2fd18f5ec37b83b438944.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/30aadf81b9f18539df924e6dc8435b30.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/316182e9c60ebf5a92d50c5d3d07fd7a.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/332ecb92e041786156ef8951e38843c9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/33cefc7fae7e30409577be9ca6449633.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/33d3bc4b839c16c0c2d8e0a6cf41b2a0.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/33e03f1e0d979c0be58bb62d03d376cc.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/33f9fbe94aa46cd060908695b2cbd339.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/355c5737b6ed3350cf96680a22ca160b.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/38b306169ce01b6ea9ff9b17453c5898.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/39e3227a0c1ad7bec59e32be9591b89b.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/3a2acae49581717dabff2073af1b71e3.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/3b72c18f0f9c4dd1d235ec6f86ba780d.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/3bb708dc4dbeb93c34eee3e4cdf3541c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/3bf9d5b4fc8c63889a4f25b41150fc53.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/3c69c892054587cc889e43e757df79c9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/3c809196ebdbfcb5f7a90df750a997a5.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/3f084d915f2860dfd6ef03fe674e6275.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/4124222b4a691044b7fc71a9791857a7.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/42b0b71306bced6210baa839a39e7ed8.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/42c1e027429e56d2e121f28be1f7afd6.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/42ed206ba26b9fa8d6e67ae797ab2ccb.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/4646b54e86975407deae2d7d97ec2b0e.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/46c72e49aa9130525f4d70794cad41d0.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/4891a45727f6b3282105d6cb3547ac0d.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/4d1eef4da6a9a5ad5f511e9ca11c79e0.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/4f4fe6c5cf581ef7cbfcece4ba6f9cae.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/4f709260712fadb7b1c0336f40993ce9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/508daeb28ee77c3b04d414e5b5d72ebd.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/5094cd6d30c1a4ac1ad00a034d13ca65.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/55147aaae327b807bd7ef8fb695404ae.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/57737d16c158997220124a735a8300ca.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/5b8f17aaa8286a150c1065296b8a9060.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/5d3cc4ddcd90f4e8f2a5cba34f47050c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/60b4917ed1ce4d2f685dfdadd5167a7b.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/60fb3308fcc3228581aff39630c23feb.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/6309fbd3aba94939f9cc4df687e4e81f.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/63d80c54287bd3b296229ba8b569ec56.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/64057987b5ea17dbab256cbe88583eb8.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/667c843571b0c31462917cf9c1e48fb4.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/69d79d4107eaa5631b1ac091d9a9ff32.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/6b4aca667fd79ddcf392542c0ef50206.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/6d08344508fbeb1ed80457af9a6b1943.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/6da6c0a468bed005e4cf9dea8fbae97a.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/6e1a25e572f43e6aafcc19dbb42074a0.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/6ecbef7dd51b982f11111ae50b5237dc.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/6f2ccdb85bd00b0019400902368dc579.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/704fcc8a95895089076961abc1ad4591.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/72aa278a6c1febe05806c89fd7ccd87c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/72f5205735cd4f55926cbba6c131ad23.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/746bf80d8efa3504e1bc7d97c4c028b5.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/76d3eb849989c8620f497fa859de67b8.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/77b9f0165307c936233a8dc3af5c6c22.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/799c39ada068562ab40978abccdc52b8.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/7ef3ca8805a2213669b9506854897511.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/83f6af8780457a7c6482e0f959e9ae2e.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/86491a2946dfd0ff3795d771c8a743c9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/8cc22c0c9cf7ea678a68caf61bb17d87.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/912da7f0e252cd0bfb2e4da66b6e0a79.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/92eb15e81d8d1984032f8d230cb0973b.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/934bc0ca45126c023e900fcbbaf93cb9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/94b8101762831c34114680e502cde8ca.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/97766fa6846f320e1ae6a345b5748989.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/9b780466447d936dfe6b6dab09f0f4fa.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/9eddd92756faebcda70981438e99fae9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/a09bedff85bbe4302864737c1018be4a.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/a251789d3b48497b675daedfbeb0c372.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/a36e654f3532aa804347ddbbb75a6174.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/a398fbbfdb984db1959054ff9c7bb0ba.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/a404d2cb9e90f9506c98a9c79919610c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/a598bc1e87c25ebcb24b9aed77b2ed27.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/a6fdefc515df0558482863b6bd954f26.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/adc7d8b04d72cdf5040306d1301268be.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/ae160f7b28c9a96888d045f88ae73542.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/afdfd39cef538aeb3feefa0eb34cdfa5.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/b04bda6d286ad386d2f90c73725f7229.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/b2d12b12cc107663bd580d126a2867c7.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/b3136503c90f5ec9db4721e551ad6dd1.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/decoded/b43038a1f05790aeede9276ba4586d84.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/b732eaa045b8b6f9b4cb5417698b0d88.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/b9057d0c5d25ab60eed6cb72c772c7e9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/b9584c40d1432646a5a10f16c4227904.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/bc6ced70d849c2f3a1379bfc3ebc5621.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/bcd0d7260bce451d9590ae42bf66569a.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/bd2daa5905162dece24246da0a98d4d8.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/be9a28e63f7520f023d930dfd1bc99d6.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/c0670df660b9e47cc849d990d12431ce.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/c07a8a435e31d839fce56daeb31a51c5.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/c0e84da97b95afedc2d3d3204e3e8993.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/decoded/c7292b9fcb5b09c29b3f04c2480cffef.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/c7bc2dc404c681c07453c638603f838c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/cbdc068bf720f67a4c5b46a27112f072.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/cf7531d20b44a061ad64d38283f729e2.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/d07b0eb3951b03660049a1a6923f68ed.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/d32a92a39989a3aa8e351841566e1015.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/d32e611e22ea14eb2447764dad869456.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/d85329ab10c56ca9dc4872a45e3394aa.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/d8f56fc5fa76544dd81f4038da6eb9a6.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/d98ca3058b2b121ff481b252096f4004.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/d9a7f548ea5c7d89a013b29fb176e95c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/e1e271885fef8c7e38f9801dfb07a27f.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/e493f6774eaf64af6974c252539adb1d.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/e816ebbbbe61f2e22e4f86749f8f2951.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/eb13f7214a36ab4b9c6a7ca6305df001.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/eb4ce11cb06ea4fa6cea02c26965aa2e.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/ecab5267fcfea3dd092868b55f3de01c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/ef4c566d71d4729ca7f0e81f48915fdf.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/f05db915b50e276aee52edb8ee7ca1cf.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/f140d45eaa4b8ce3c5b2d498e90c8e4f.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/f2687c06ed1288fa6d5ce29bbcb59b26.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/f4be84761af852f98f973b7b5c9f0953.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/f5304cec63bcb2a7ac6661cbdf40c4b8.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/f9122cc8b527958ce3dd981e2ba92617.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/decoded/fe3b351d6c81fca16dacef8580b9e62a.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/rendered/5094cd6d30c1a4ac1ad00a034d13ca65.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/rendered/63d80c54287bd3b296229ba8b569ec56.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/rendered/8cc22c0c9cf7ea678a68caf61bb17d87.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/0036285386a86019a783f56ee9faf350.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/served/01873b0db10dae62474b256bc2ef6ec7.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/0a49f1f7626fb54dae22d7a205cfa465.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/0fc7da2d204e620b8c81248406a0efb2.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/10d419f2ecf0a8a83fb4a3ca9a4fbc41.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/136b6c9e31a2ebaead0180c7cbbee791.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/1804bc0ece4f49018306a338ba9cfc66.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/193bf3ade36a6f65969d325c0eb926f6.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/19b87f561533a69b0a1c33fdec768a45.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/19e567255585827a92fc1e589851f293.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/1ef19e7ce06497c3c258abc2112c3083.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/1f67fce76c12ea84004ec30a0df3ae01.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/1f82260041a9cefca9bdf49ce0198e7f.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/served/2387d1fcaa0986e331560db037963962.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/2444e08694f0942f2cbc9070806952f6.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/served/24e1c466abd44d996f4f7b0407ac9894.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/25c0e7d4adf8b03c7bad19c008d380be.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/28c2cc3ad6cb6739d9d91c168a4fc4fd.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/2a90da4c59e9b38d59f08369d59fca27.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/2e3126320c4fe639e2007a448c9bfdaf.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/3000970167c2fd18f5ec37b83b438944.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/30aadf81b9f18539df924e6dc8435b30.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/316182e9c60ebf5a92d50c5d3d07fd7a.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/332ecb92e041786156ef8951e38843c9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/33cefc7fae7e30409577be9ca6449633.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/33d3bc4b839c16c0c2d8e0a6cf41b2a0.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/33e03f1e0d979c0be58bb62d03d376cc.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/33f9fbe94aa46cd060908695b2cbd339.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/355c5737b6ed3350cf96680a22ca160b.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/38b306169ce01b6ea9ff9b17453c5898.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/39e3227a0c1ad7bec59e32be9591b89b.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/3a2acae49581717dabff2073af1b71e3.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/3b72c18f0f9c4dd1d235ec6f86ba780d.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/3bb708dc4dbeb93c34eee3e4cdf3541c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/3bf9d5b4fc8c63889a4f25b41150fc53.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/3c69c892054587cc889e43e757df79c9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/3c809196ebdbfcb5f7a90df750a997a5.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/3f084d915f2860dfd6ef03fe674e6275.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/4124222b4a691044b7fc71a9791857a7.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/42b0b71306bced6210baa839a39e7ed8.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/42c1e027429e56d2e121f28be1f7afd6.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/42ed206ba26b9fa8d6e67ae797ab2ccb.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/4646b54e86975407deae2d7d97ec2b0e.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/46c72e49aa9130525f4d70794cad41d0.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/4891a45727f6b3282105d6cb3547ac0d.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/4d1eef4da6a9a5ad5f511e9ca11c79e0.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/4f4fe6c5cf581ef7cbfcece4ba6f9cae.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/4f709260712fadb7b1c0336f40993ce9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/508daeb28ee77c3b04d414e5b5d72ebd.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/5094cd6d30c1a4ac1ad00a034d13ca65.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/55147aaae327b807bd7ef8fb695404ae.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/57737d16c158997220124a735a8300ca.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/5b8f17aaa8286a150c1065296b8a9060.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/5d3cc4ddcd90f4e8f2a5cba34f47050c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/60b4917ed1ce4d2f685dfdadd5167a7b.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/60fb3308fcc3228581aff39630c23feb.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/6309fbd3aba94939f9cc4df687e4e81f.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/63d80c54287bd3b296229ba8b569ec56.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/64057987b5ea17dbab256cbe88583eb8.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/667c843571b0c31462917cf9c1e48fb4.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/69d79d4107eaa5631b1ac091d9a9ff32.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/6b4aca667fd79ddcf392542c0ef50206.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/6d08344508fbeb1ed80457af9a6b1943.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/6da6c0a468bed005e4cf9dea8fbae97a.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/6e1a25e572f43e6aafcc19dbb42074a0.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/6ecbef7dd51b982f11111ae50b5237dc.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/6f2ccdb85bd00b0019400902368dc579.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/704fcc8a95895089076961abc1ad4591.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/72aa278a6c1febe05806c89fd7ccd87c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/72f5205735cd4f55926cbba6c131ad23.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/746bf80d8efa3504e1bc7d97c4c028b5.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/76d3eb849989c8620f497fa859de67b8.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/77b9f0165307c936233a8dc3af5c6c22.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/799c39ada068562ab40978abccdc52b8.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/7ef3ca8805a2213669b9506854897511.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/83f6af8780457a7c6482e0f959e9ae2e.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/86491a2946dfd0ff3795d771c8a743c9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/8cc22c0c9cf7ea678a68caf61bb17d87.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/912da7f0e252cd0bfb2e4da66b6e0a79.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/92eb15e81d8d1984032f8d230cb0973b.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/934bc0ca45126c023e900fcbbaf93cb9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/94b8101762831c34114680e502cde8ca.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/97766fa6846f320e1ae6a345b5748989.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/9b780466447d936dfe6b6dab09f0f4fa.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/9eddd92756faebcda70981438e99fae9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/a09bedff85bbe4302864737c1018be4a.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/a251789d3b48497b675daedfbeb0c372.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/a36e654f3532aa804347ddbbb75a6174.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/a398fbbfdb984db1959054ff9c7bb0ba.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/a404d2cb9e90f9506c98a9c79919610c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/a598bc1e87c25ebcb24b9aed77b2ed27.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/a6fdefc515df0558482863b6bd954f26.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/adc7d8b04d72cdf5040306d1301268be.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/ae160f7b28c9a96888d045f88ae73542.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/afdfd39cef538aeb3feefa0eb34cdfa5.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/b04bda6d286ad386d2f90c73725f7229.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/b2d12b12cc107663bd580d126a2867c7.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/b3136503c90f5ec9db4721e551ad6dd1.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/served/b43038a1f05790aeede9276ba4586d84.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/b732eaa045b8b6f9b4cb5417698b0d88.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/b9057d0c5d25ab60eed6cb72c772c7e9.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/b9584c40d1432646a5a10f16c4227904.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/bc6ced70d849c2f3a1379bfc3ebc5621.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/bcd0d7260bce451d9590ae42bf66569a.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/bd2daa5905162dece24246da0a98d4d8.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/be9a28e63f7520f023d930dfd1bc99d6.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/c0670df660b9e47cc849d990d12431ce.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/c07a8a435e31d839fce56daeb31a51c5.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/c0e84da97b95afedc2d3d3204e3e8993.html | html | source | missing | no | no | No structured metadata found |
| domains/mx.allabout.network/cache/served/c7292b9fcb5b09c29b3f04c2480cffef.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/c7bc2dc404c681c07453c638603f838c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/cbdc068bf720f67a4c5b46a27112f072.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/cf7531d20b44a061ad64d38283f729e2.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/d07b0eb3951b03660049a1a6923f68ed.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/d32a92a39989a3aa8e351841566e1015.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/d32e611e22ea14eb2447764dad869456.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/d85329ab10c56ca9dc4872a45e3394aa.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/d8f56fc5fa76544dd81f4038da6eb9a6.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/d98ca3058b2b121ff481b252096f4004.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/d9a7f548ea5c7d89a013b29fb176e95c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/e1e271885fef8c7e38f9801dfb07a27f.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/e493f6774eaf64af6974c252539adb1d.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/e816ebbbbe61f2e22e4f86749f8f2951.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/eb13f7214a36ab4b9c6a7ca6305df001.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/eb4ce11cb06ea4fa6cea02c26965aa2e.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/ecab5267fcfea3dd092868b55f3de01c.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/ef4c566d71d4729ca7f0e81f48915fdf.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/f05db915b50e276aee52edb8ee7ca1cf.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/f140d45eaa4b8ce3c5b2d498e90c8e4f.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/f2687c06ed1288fa6d5ce29bbcb59b26.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/f4be84761af852f98f973b7b5c9f0953.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/f5304cec63bcb2a7ac6661cbdf40c4b8.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/f9122cc8b527958ce3dd981e2ba92617.html | html | source | compliant | yes | yes |  |
| domains/mx.allabout.network/cache/served/fe3b351d6c81fca16dacef8580b9e62a.html | html | source | compliant | yes | yes |  |

### mx-canon/ (43 files, 100% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| mx-maxine-lives/communications/blogs/html/lifecycle/principles-changed-how-i-build.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/lifecycle/principles-changed-how-i-build.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/outputs/designing-workflows-for-humans-and-machines-from-a.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/blogs/html/outputs/designing-workflows-for-humans-and-machines.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-maxine-lives/communications/ready-to-publish/mx-principles-menu.css | css | source | compliant | yes | yes |  |
| mx-maxine-lives/communications/ready-to-publish/mx-principles-menu.html | html | source | compliant | yes | yes |  |
| mx-maxine-lives/tests/test-route-decorator.sh | shell | test | compliant | yes | yes |  |
| mx-os/deliverables/mx-script-inspect.sh | shell | source | compliant | yes | yes |  |
| mx-the-gathering/deliverables/allabout-the-gathering.html | html | source | compliant | yes | yes |  |
| mx-the-gathering/deliverables/css/gathering.css | css | source | compliant | yes | yes |  |
| mx-the-gathering/deliverables/css/landing-page.css | css | source | compliant | yes | yes |  |
| mx-the-gathering/deliverables/landing-page.html | html | source | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/los-granainos/audit/capture-site.js | javascript | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/los-granainos/los-granainos-mx-reference.cog.html | html | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/los-granainos/los-granainos-single-lang.cog.html | html | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/los-granainos/los-granainos-single-lang.css | css | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/los-granainos/los-granainos.css | css | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/templates/audit-system/enhanced-audit.js | javascript | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/templates/audit-system/lib/asset-cacher.js | javascript | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/templates/audit-system/lib/css-analyzer.js | javascript | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/templates/audit-system/lib/dom-extractor.js | javascript | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/templates/audit-system/test-audit/cached-css/d1cac4acd82d137c.css-2e6dc29c.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-the-gathering/reference-implementations/templates/audit-system/test-audit/cached-html/index-e760d848.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
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
| mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-html/content-creator-guide-to-document-authoring-with-e-9cda3259.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| ssot/templates/blog-post.html | html | source | compliant | yes | yes |  |
| ssot/templates/canon-cog/deliverables/css/template.css | css | source | compliant | yes | yes |  |
| ssot/templates/canon-cog/deliverables/landing-page.html | html | source | compliant | yes | yes |  |
| ssot/templates/index-redirect.html | html | source | compliant | yes | yes |  |
| ssot/templates/mx-script.sh | shell | source | compliant | yes | yes |  |
| ssot/templates/n-lang-business.cog.html | html | source | compliant | yes | yes |  |
| ssot/templates/presentations/talk-adobe.js | javascript | source | compliant | yes | yes |  |
| ssot/templates/presentations/talk-slides.js | javascript | source | compliant | yes | yes |  |
| ssot/templates/redirect.css | css | source | compliant | yes | yes |  |

### mx-crm/ (6 files, 100% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| dotfusion/data/about.html | html | source | compliant | yes | yes |  |
| dotfusion/data/assets/css/styles.css | css | source | compliant | yes | yes |  |
| dotfusion/data/contact.html | html | source | compliant | yes | yes |  |
| dotfusion/data/index.html | html | source | compliant | yes | yes |  |
| dotfusion/data/our-work.html | html | source | compliant | yes | yes |  |
| orders/dashboard.html | html | source | compliant | yes | yes |  |

### mx-maxine-app/ (31 files, 97% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| backend/ai-router.js | javascript | source | compliant | yes | yes |  |
| backend/api.js | javascript | source | compliant | yes | yes |  |
| backend/index.js | javascript | source | compliant | yes | yes |  |
| backend/qr-encode.js | javascript | source | compliant | yes | yes |  |
| backend/server.js | javascript | source | compliant | yes | yes |  |
| backend/websocket.js | javascript | source | compliant | yes | yes |  |
| dashboard/app.js | javascript | source | compliant | yes | yes |  |
| dashboard/index.html | html | source | compliant | yes | yes |  |
| dashboard/style.css | css | source | compliant | yes | yes |  |
| demo/demo.css | css | source | compliant | yes | yes |  |
| demo/index.html | html | source | compliant | yes | yes |  |
| demo/restaurant.css | css | source | compliant | yes | yes |  |
| demo/restaurant.html | html | source | compliant | yes | yes |  |
| demo/server.js | javascript | source | compliant | yes | yes |  |
| main.js | javascript | source | compliant | yes | yes |  |
| preload.js | javascript | source | compliant | yes | yes |  |
| pwa/app.js | javascript | source | compliant | yes | yes |  |
| pwa/index.html | html | source | compliant | yes | yes |  |
| pwa/jsQR.js | javascript | source | missing | no | no | No structured metadata found |
| pwa/style.css | css | source | compliant | yes | yes |  |
| pwa/sw.js | javascript | source | compliant | yes | yes |  |
| scripts/generate-icons.js | javascript | source | compliant | yes | yes |  |
| src/css/app-shell.css | css | source | compliant | yes | yes |  |
| src/css/dialogue.css | css | source | compliant | yes | yes |  |
| src/css/mx-brand.css | css | source | compliant | yes | yes |  |
| src/css/sidebar.css | css | source | compliant | yes | yes |  |
| src/css/splash.css | css | source | compliant | yes | yes |  |
| src/index.html | html | source | compliant | yes | yes |  |
| src/js/app.js | javascript | source | compliant | yes | yes |  |
| src/splash.html | html | source | compliant | yes | yes |  |
| test/joymaker.test.js | javascript | test | compliant | yes | yes |  |

### mx-maxine-claw/ (6 files, 17% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| eslint.config.js | javascript | source | missing | no | no | No structured metadata found |
| mx-fetch-poc/index.html | html | source | compliant | yes | yes |  |
| next.config.js | javascript | source | missing | no | no | No structured metadata found |
| postcss.config.js | javascript | source | missing | no | no | No structured metadata found |
| prettier.config.js | javascript | source | missing | no | no | No structured metadata found |
| src/styles/globals.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |

### mx-outputs/ (1021 files, 0% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| audit/crowdfavorite.com/.cache/body/0ee89c2b114fcb641e1afd4030b22459.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/body/1e7617c02b7224c24c20c8382e27f901.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/body/34a1a456a970630fac28973c219fe8d5.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/body/3eb3983e5a998859a8b67a05fec8cbd9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/body/5c66a059483a3ad7c4391eba0254d4ff.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/body/62a248410c2d31db07e07aeaf1f1a279.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/body/8b71613e67643fb6669b24c09e09900a.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/body/a9991d27983ac2fcd741f0c5cc7fc4a8.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/body/e55aae679a06cf57a88d0be250cd286b.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/body/e5646dbd489a83c940ecf90a3598de3b.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/body/ea7c54e6f2d6ad9c79f8d6a653bbebde.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/body/eda5698c4f7eead1925d3b6c506fe633.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/0ee89c2b114fcb641e1afd4030b22459.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/1e7617c02b7224c24c20c8382e27f901.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/34a1a456a970630fac28973c219fe8d5.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/3eb3983e5a998859a8b67a05fec8cbd9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/5c66a059483a3ad7c4391eba0254d4ff.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/62a248410c2d31db07e07aeaf1f1a279.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/8b71613e67643fb6669b24c09e09900a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/a9991d27983ac2fcd741f0c5cc7fc4a8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/d06ca8a06f9418838f6474b1be06bf6e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/e55aae679a06cf57a88d0be250cd286b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/e5646dbd489a83c940ecf90a3598de3b.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/ea7c54e6f2d6ad9c79f8d6a653bbebde.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/decoded/eda5698c4f7eead1925d3b6c506fe633.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/rendered/62a248410c2d31db07e07aeaf1f1a279.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/rendered/a9991d27983ac2fcd741f0c5cc7fc4a8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/rendered/eda5698c4f7eead1925d3b6c506fe633.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/0ee89c2b114fcb641e1afd4030b22459.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/1e7617c02b7224c24c20c8382e27f901.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/34a1a456a970630fac28973c219fe8d5.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/3eb3983e5a998859a8b67a05fec8cbd9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/5c66a059483a3ad7c4391eba0254d4ff.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/62a248410c2d31db07e07aeaf1f1a279.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/8b71613e67643fb6669b24c09e09900a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/a9991d27983ac2fcd741f0c5cc7fc4a8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/d06ca8a06f9418838f6474b1be06bf6e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/e55aae679a06cf57a88d0be250cd286b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/e5646dbd489a83c940ecf90a3598de3b.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/ea7c54e6f2d6ad9c79f8d6a653bbebde.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/crowdfavorite.com/.cache/served/eda5698c4f7eead1925d3b6c506fe633.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dkd.de-de/.cache/decoded/f0dcfdc07a5d399d18f4c3a47e20133a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dkd.de-de/.cache/served/f0dcfdc07a5d399d18f4c3a47e20133a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/01140055daf19cf5070f257c9dac16e7.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/0716d2646a1469c8160756e3d45fae0a.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/14c8c7d3f44ec13a60bedf097b79f63e.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/1557df19049276852f49e5adfd912893.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/1a18aa73c7b4c3bee9802eccc5d14f41.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/3069573e796e0257b289266808cfa3c9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/391b0caa050618d87dc9d85e86853c89.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/5761be663ab2a672aeb62465383bf081.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/67d0321066ee4b2b3e699fe2007fcf6c.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/710c7e876740141b5e86beffb88ad25b.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/789fb1a06a5a9e740e65a3e17aadf148.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/82b5bfb358ab06f5e5a960458ffa63e0.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/8816349fa02af2dc70107a526f74b331.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/a1dd74ad1078cecaf5af5a0fab6691a0.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/ac238bda9e612b628eae6fdfde11e889.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/c8870c4cd3c99ab97392e4f8d2515f04.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/d26b42eba2e870d7248d5b42f084f86f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/d27970ab6cd3f3145a2c15e4782aa875.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/d57f74d27f64322ad2981948526fc880.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/de78b96e9a481e71c45c23d7fad3f212.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/ea96d9198764e97a6b20e3a1faa2b626.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/body/f789e8c382dbf03679d8e8b5f8a1ec15.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/01140055daf19cf5070f257c9dac16e7.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/0716d2646a1469c8160756e3d45fae0a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/14c8c7d3f44ec13a60bedf097b79f63e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/1557df19049276852f49e5adfd912893.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/15fc6bd00692acb0889f5f6ea1474ed1.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/1a18aa73c7b4c3bee9802eccc5d14f41.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/3069573e796e0257b289266808cfa3c9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/391b0caa050618d87dc9d85e86853c89.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/5761be663ab2a672aeb62465383bf081.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/67d0321066ee4b2b3e699fe2007fcf6c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/710c7e876740141b5e86beffb88ad25b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/789fb1a06a5a9e740e65a3e17aadf148.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/82b5bfb358ab06f5e5a960458ffa63e0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/8816349fa02af2dc70107a526f74b331.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/a1dd74ad1078cecaf5af5a0fab6691a0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/ac238bda9e612b628eae6fdfde11e889.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/c8870c4cd3c99ab97392e4f8d2515f04.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/d26b42eba2e870d7248d5b42f084f86f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/d27970ab6cd3f3145a2c15e4782aa875.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/d57f74d27f64322ad2981948526fc880.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/de78b96e9a481e71c45c23d7fad3f212.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/ea96d9198764e97a6b20e3a1faa2b626.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/decoded/f789e8c382dbf03679d8e8b5f8a1ec15.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/01140055daf19cf5070f257c9dac16e7.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/0716d2646a1469c8160756e3d45fae0a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/14c8c7d3f44ec13a60bedf097b79f63e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/1557df19049276852f49e5adfd912893.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/1a18aa73c7b4c3bee9802eccc5d14f41.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/3069573e796e0257b289266808cfa3c9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/391b0caa050618d87dc9d85e86853c89.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/5761be663ab2a672aeb62465383bf081.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/67d0321066ee4b2b3e699fe2007fcf6c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/710c7e876740141b5e86beffb88ad25b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/789fb1a06a5a9e740e65a3e17aadf148.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/82b5bfb358ab06f5e5a960458ffa63e0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/8816349fa02af2dc70107a526f74b331.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/a1dd74ad1078cecaf5af5a0fab6691a0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/ac238bda9e612b628eae6fdfde11e889.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/c8870c4cd3c99ab97392e4f8d2515f04.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/d26b42eba2e870d7248d5b42f084f86f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/d27970ab6cd3f3145a2c15e4782aa875.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/d57f74d27f64322ad2981948526fc880.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/de78b96e9a481e71c45c23d7fad3f212.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/ea96d9198764e97a6b20e3a1faa2b626.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/rendered/f789e8c382dbf03679d8e8b5f8a1ec15.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/01140055daf19cf5070f257c9dac16e7.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/0716d2646a1469c8160756e3d45fae0a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/14c8c7d3f44ec13a60bedf097b79f63e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/1557df19049276852f49e5adfd912893.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/15fc6bd00692acb0889f5f6ea1474ed1.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/1a18aa73c7b4c3bee9802eccc5d14f41.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/3069573e796e0257b289266808cfa3c9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/391b0caa050618d87dc9d85e86853c89.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/5761be663ab2a672aeb62465383bf081.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/67d0321066ee4b2b3e699fe2007fcf6c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/710c7e876740141b5e86beffb88ad25b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/789fb1a06a5a9e740e65a3e17aadf148.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/82b5bfb358ab06f5e5a960458ffa63e0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/8816349fa02af2dc70107a526f74b331.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/a1dd74ad1078cecaf5af5a0fab6691a0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/ac238bda9e612b628eae6fdfde11e889.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/c8870c4cd3c99ab97392e4f8d2515f04.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/d26b42eba2e870d7248d5b42f084f86f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/d27970ab6cd3f3145a2c15e4782aa875.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/d57f74d27f64322ad2981948526fc880.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/de78b96e9a481e71c45c23d7fad3f212.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/ea96d9198764e97a6b20e3a1faa2b626.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/dotfusion.com/.cache/served/f789e8c382dbf03679d8e8b5f8a1ec15.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/enhancely.ai/.cache/decoded/9710ab6f522d796c95c57ce41d16cdfa.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/enhancely.ai/.cache/served/9710ab6f522d796c95c57ce41d16cdfa.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/0036285386a86019a783f56ee9faf350.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/01873b0db10dae62474b256bc2ef6ec7.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/05f777b5fafa212fab3f596fed6ac5ce.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/0a49f1f7626fb54dae22d7a205cfa465.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/0fc7da2d204e620b8c81248406a0efb2.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/10d419f2ecf0a8a83fb4a3ca9a4fbc41.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/136b6c9e31a2ebaead0180c7cbbee791.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/139c7dc17a76e4ad02d12a890534deea.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/1804bc0ece4f49018306a338ba9cfc66.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/18673ccd05abfd63cc836ce6bf80cd8e.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/193bf3ade36a6f65969d325c0eb926f6.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/19b87f561533a69b0a1c33fdec768a45.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/19e567255585827a92fc1e589851f293.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/1ef19e7ce06497c3c258abc2112c3083.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/1f67fce76c12ea84004ec30a0df3ae01.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/1f82260041a9cefca9bdf49ce0198e7f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/2387d1fcaa0986e331560db037963962.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/2444e08694f0942f2cbc9070806952f6.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/24e1c466abd44d996f4f7b0407ac9894.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/25c0e7d4adf8b03c7bad19c008d380be.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/2657cbd2e156d159befae83df5c09c8f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/28c2cc3ad6cb6739d9d91c168a4fc4fd.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/2a90da4c59e9b38d59f08369d59fca27.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/2e3126320c4fe639e2007a448c9bfdaf.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/3000970167c2fd18f5ec37b83b438944.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/30aadf81b9f18539df924e6dc8435b30.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/316182e9c60ebf5a92d50c5d3d07fd7a.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/332ecb92e041786156ef8951e38843c9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/33cefc7fae7e30409577be9ca6449633.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/33d32908e21e17b57d3f5d2c2f4882da.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/33d3bc4b839c16c0c2d8e0a6cf41b2a0.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/33e03f1e0d979c0be58bb62d03d376cc.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/33f9fbe94aa46cd060908695b2cbd339.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/355c5737b6ed3350cf96680a22ca160b.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/38b306169ce01b6ea9ff9b17453c5898.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/39e3227a0c1ad7bec59e32be9591b89b.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/3a2acae49581717dabff2073af1b71e3.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/3b72c18f0f9c4dd1d235ec6f86ba780d.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/3bb708dc4dbeb93c34eee3e4cdf3541c.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/3bf9d5b4fc8c63889a4f25b41150fc53.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/3c69c892054587cc889e43e757df79c9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/3c809196ebdbfcb5f7a90df750a997a5.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/3f084d915f2860dfd6ef03fe674e6275.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/4124222b4a691044b7fc71a9791857a7.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/42b0b71306bced6210baa839a39e7ed8.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/42c1e027429e56d2e121f28be1f7afd6.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/42ed206ba26b9fa8d6e67ae797ab2ccb.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/4646b54e86975407deae2d7d97ec2b0e.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/46c72e49aa9130525f4d70794cad41d0.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/4891a45727f6b3282105d6cb3547ac0d.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/4d1eef4da6a9a5ad5f511e9ca11c79e0.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/4d4917196f2f9d10cd4dadcf078bc259.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/4f4fe6c5cf581ef7cbfcece4ba6f9cae.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/4f709260712fadb7b1c0336f40993ce9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/508daeb28ee77c3b04d414e5b5d72ebd.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/5094cd6d30c1a4ac1ad00a034d13ca65.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/55147aaae327b807bd7ef8fb695404ae.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/57737d16c158997220124a735a8300ca.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/5b8f17aaa8286a150c1065296b8a9060.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/5d3cc4ddcd90f4e8f2a5cba34f47050c.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/60b4917ed1ce4d2f685dfdadd5167a7b.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/60fb3308fcc3228581aff39630c23feb.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/6309fbd3aba94939f9cc4df687e4e81f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/63d80c54287bd3b296229ba8b569ec56.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/64057987b5ea17dbab256cbe88583eb8.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/64a3400603a89c8e602d07dcd03d1974.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/667c843571b0c31462917cf9c1e48fb4.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/69853ff22e0b9adedf5017016c40a9b6.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/69d79d4107eaa5631b1ac091d9a9ff32.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/6b4aca667fd79ddcf392542c0ef50206.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/6d08344508fbeb1ed80457af9a6b1943.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/6da6c0a468bed005e4cf9dea8fbae97a.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/6e1a25e572f43e6aafcc19dbb42074a0.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/6ecbef7dd51b982f11111ae50b5237dc.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/6f2ccdb85bd00b0019400902368dc579.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/704fcc8a95895089076961abc1ad4591.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/70ef8686daa165e7b55f284a195b3a6a.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/715031a8746a092100046ac9ed8fecc7.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/72aa278a6c1febe05806c89fd7ccd87c.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/72f5205735cd4f55926cbba6c131ad23.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/746bf80d8efa3504e1bc7d97c4c028b5.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/76d3eb849989c8620f497fa859de67b8.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/77b9f0165307c936233a8dc3af5c6c22.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/799c39ada068562ab40978abccdc52b8.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/7ef3ca8805a2213669b9506854897511.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/82d327fc80e67da3067830929ace5b4f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/83f6af8780457a7c6482e0f959e9ae2e.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/8402d909f4a3071171272108b73388d9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/84305099ebfccadacd3e3b1c07ea6fc3.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/86491a2946dfd0ff3795d771c8a743c9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/8cc22c0c9cf7ea678a68caf61bb17d87.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/912da7f0e252cd0bfb2e4da66b6e0a79.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/91ac649bced9bae55f4c0a45155d2396.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/92eb15e81d8d1984032f8d230cb0973b.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/934bc0ca45126c023e900fcbbaf93cb9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/94b8101762831c34114680e502cde8ca.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/97766fa6846f320e1ae6a345b5748989.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/97d6f8f7c9c7f6c2b6d2914dbbb7dc4f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/9b780466447d936dfe6b6dab09f0f4fa.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/9bb674872c56516e0946dd8df4ac4251.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/9eddd92756faebcda70981438e99fae9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/a09bedff85bbe4302864737c1018be4a.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/a251789d3b48497b675daedfbeb0c372.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/a36e654f3532aa804347ddbbb75a6174.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/a398fbbfdb984db1959054ff9c7bb0ba.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/a404d2cb9e90f9506c98a9c79919610c.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/a598bc1e87c25ebcb24b9aed77b2ed27.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/a6fdefc515df0558482863b6bd954f26.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/adc7d8b04d72cdf5040306d1301268be.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/ae160f7b28c9a96888d045f88ae73542.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/afdfd39cef538aeb3feefa0eb34cdfa5.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/b04bda6d286ad386d2f90c73725f7229.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/b2d12b12cc107663bd580d126a2867c7.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/b3136503c90f5ec9db4721e551ad6dd1.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/b43038a1f05790aeede9276ba4586d84.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/b732eaa045b8b6f9b4cb5417698b0d88.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/b9057d0c5d25ab60eed6cb72c772c7e9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/b9584c40d1432646a5a10f16c4227904.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/bc6ced70d849c2f3a1379bfc3ebc5621.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/bcd0d7260bce451d9590ae42bf66569a.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/bd2daa5905162dece24246da0a98d4d8.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/be9a28e63f7520f023d930dfd1bc99d6.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/c0670df660b9e47cc849d990d12431ce.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/c07a8a435e31d839fce56daeb31a51c5.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/c0e84da97b95afedc2d3d3204e3e8993.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/c1f983ca527583d4bad61aad0331803b.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/c7292b9fcb5b09c29b3f04c2480cffef.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/c7bc2dc404c681c07453c638603f838c.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/cbdc068bf720f67a4c5b46a27112f072.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/cf7531d20b44a061ad64d38283f729e2.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/d07b0eb3951b03660049a1a6923f68ed.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/d32a92a39989a3aa8e351841566e1015.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/d32e611e22ea14eb2447764dad869456.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/d3e3256e800dc0de1ed44a01b48041b2.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/d85329ab10c56ca9dc4872a45e3394aa.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/d8f56fc5fa76544dd81f4038da6eb9a6.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/d98ca3058b2b121ff481b252096f4004.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/d9a7f548ea5c7d89a013b29fb176e95c.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/e1e271885fef8c7e38f9801dfb07a27f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/e493f6774eaf64af6974c252539adb1d.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/e816ebbbbe61f2e22e4f86749f8f2951.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/eb13f7214a36ab4b9c6a7ca6305df001.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/eb4ce11cb06ea4fa6cea02c26965aa2e.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/ecab5267fcfea3dd092868b55f3de01c.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/ef4c566d71d4729ca7f0e81f48915fdf.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/f05db915b50e276aee52edb8ee7ca1cf.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/f140d45eaa4b8ce3c5b2d498e90c8e4f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/f2687c06ed1288fa6d5ce29bbcb59b26.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/f4be84761af852f98f973b7b5c9f0953.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/f5304cec63bcb2a7ac6661cbdf40c4b8.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/f9122cc8b527958ce3dd981e2ba92617.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/body/fe3b351d6c81fca16dacef8580b9e62a.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/0036285386a86019a783f56ee9faf350.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/01873b0db10dae62474b256bc2ef6ec7.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/05f777b5fafa212fab3f596fed6ac5ce.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/0a49f1f7626fb54dae22d7a205cfa465.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/0fc7da2d204e620b8c81248406a0efb2.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/10d419f2ecf0a8a83fb4a3ca9a4fbc41.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/136b6c9e31a2ebaead0180c7cbbee791.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/139c7dc17a76e4ad02d12a890534deea.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/1804bc0ece4f49018306a338ba9cfc66.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/18673ccd05abfd63cc836ce6bf80cd8e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/193bf3ade36a6f65969d325c0eb926f6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/19b87f561533a69b0a1c33fdec768a45.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/19e567255585827a92fc1e589851f293.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/1ef19e7ce06497c3c258abc2112c3083.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/1f67fce76c12ea84004ec30a0df3ae01.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/1f82260041a9cefca9bdf49ce0198e7f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/2387d1fcaa0986e331560db037963962.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/2444e08694f0942f2cbc9070806952f6.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/24e1c466abd44d996f4f7b0407ac9894.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/25c0e7d4adf8b03c7bad19c008d380be.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/2657cbd2e156d159befae83df5c09c8f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/28c2cc3ad6cb6739d9d91c168a4fc4fd.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/2a90da4c59e9b38d59f08369d59fca27.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/2e3126320c4fe639e2007a448c9bfdaf.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/3000970167c2fd18f5ec37b83b438944.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/30aadf81b9f18539df924e6dc8435b30.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/316182e9c60ebf5a92d50c5d3d07fd7a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/332ecb92e041786156ef8951e38843c9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/33cefc7fae7e30409577be9ca6449633.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/33d32908e21e17b57d3f5d2c2f4882da.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/33d3bc4b839c16c0c2d8e0a6cf41b2a0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/33e03f1e0d979c0be58bb62d03d376cc.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/33f9fbe94aa46cd060908695b2cbd339.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/355c5737b6ed3350cf96680a22ca160b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/38b306169ce01b6ea9ff9b17453c5898.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/39e3227a0c1ad7bec59e32be9591b89b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/3a2acae49581717dabff2073af1b71e3.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/3b72c18f0f9c4dd1d235ec6f86ba780d.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/3bb708dc4dbeb93c34eee3e4cdf3541c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/3bf9d5b4fc8c63889a4f25b41150fc53.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/3c69c892054587cc889e43e757df79c9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/3c809196ebdbfcb5f7a90df750a997a5.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/3f084d915f2860dfd6ef03fe674e6275.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/4124222b4a691044b7fc71a9791857a7.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/42b0b71306bced6210baa839a39e7ed8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/42c1e027429e56d2e121f28be1f7afd6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/42ed206ba26b9fa8d6e67ae797ab2ccb.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/4646b54e86975407deae2d7d97ec2b0e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/46c72e49aa9130525f4d70794cad41d0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/4891a45727f6b3282105d6cb3547ac0d.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/4d1eef4da6a9a5ad5f511e9ca11c79e0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/4d4917196f2f9d10cd4dadcf078bc259.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/4f4fe6c5cf581ef7cbfcece4ba6f9cae.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/4f709260712fadb7b1c0336f40993ce9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/508daeb28ee77c3b04d414e5b5d72ebd.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/5094cd6d30c1a4ac1ad00a034d13ca65.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/55147aaae327b807bd7ef8fb695404ae.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/57737d16c158997220124a735a8300ca.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/5b8f17aaa8286a150c1065296b8a9060.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/5d3cc4ddcd90f4e8f2a5cba34f47050c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/60b4917ed1ce4d2f685dfdadd5167a7b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/60fb3308fcc3228581aff39630c23feb.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/6309fbd3aba94939f9cc4df687e4e81f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/63d80c54287bd3b296229ba8b569ec56.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/64057987b5ea17dbab256cbe88583eb8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/64a3400603a89c8e602d07dcd03d1974.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/667c843571b0c31462917cf9c1e48fb4.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/69853ff22e0b9adedf5017016c40a9b6.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/69d79d4107eaa5631b1ac091d9a9ff32.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/6b4aca667fd79ddcf392542c0ef50206.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/6d08344508fbeb1ed80457af9a6b1943.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/6da6c0a468bed005e4cf9dea8fbae97a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/6e1a25e572f43e6aafcc19dbb42074a0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/6ecbef7dd51b982f11111ae50b5237dc.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/6f2ccdb85bd00b0019400902368dc579.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/704fcc8a95895089076961abc1ad4591.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/70ef8686daa165e7b55f284a195b3a6a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/715031a8746a092100046ac9ed8fecc7.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/72aa278a6c1febe05806c89fd7ccd87c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/72f5205735cd4f55926cbba6c131ad23.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/746bf80d8efa3504e1bc7d97c4c028b5.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/76d3eb849989c8620f497fa859de67b8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/77b9f0165307c936233a8dc3af5c6c22.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/799c39ada068562ab40978abccdc52b8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/7ef3ca8805a2213669b9506854897511.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/82d327fc80e67da3067830929ace5b4f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/83f6af8780457a7c6482e0f959e9ae2e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/8402d909f4a3071171272108b73388d9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/84305099ebfccadacd3e3b1c07ea6fc3.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/86491a2946dfd0ff3795d771c8a743c9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/8cc22c0c9cf7ea678a68caf61bb17d87.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/912da7f0e252cd0bfb2e4da66b6e0a79.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/91ac649bced9bae55f4c0a45155d2396.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/92eb15e81d8d1984032f8d230cb0973b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/934bc0ca45126c023e900fcbbaf93cb9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/94b8101762831c34114680e502cde8ca.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/97766fa6846f320e1ae6a345b5748989.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/97d6f8f7c9c7f6c2b6d2914dbbb7dc4f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/9b780466447d936dfe6b6dab09f0f4fa.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/9bb674872c56516e0946dd8df4ac4251.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/9eddd92756faebcda70981438e99fae9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/a09bedff85bbe4302864737c1018be4a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/a251789d3b48497b675daedfbeb0c372.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/a36e654f3532aa804347ddbbb75a6174.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/a398fbbfdb984db1959054ff9c7bb0ba.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/a404d2cb9e90f9506c98a9c79919610c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/a598bc1e87c25ebcb24b9aed77b2ed27.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/a6fdefc515df0558482863b6bd954f26.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/adc7d8b04d72cdf5040306d1301268be.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/ae160f7b28c9a96888d045f88ae73542.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/afdfd39cef538aeb3feefa0eb34cdfa5.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/b04bda6d286ad386d2f90c73725f7229.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/b2d12b12cc107663bd580d126a2867c7.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/b3136503c90f5ec9db4721e551ad6dd1.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/b43038a1f05790aeede9276ba4586d84.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/b732eaa045b8b6f9b4cb5417698b0d88.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/b9057d0c5d25ab60eed6cb72c772c7e9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/b9584c40d1432646a5a10f16c4227904.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/bc6ced70d849c2f3a1379bfc3ebc5621.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/bcd0d7260bce451d9590ae42bf66569a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/bd2daa5905162dece24246da0a98d4d8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/be9a28e63f7520f023d930dfd1bc99d6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/c0670df660b9e47cc849d990d12431ce.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/c07a8a435e31d839fce56daeb31a51c5.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/c0e84da97b95afedc2d3d3204e3e8993.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/c1f983ca527583d4bad61aad0331803b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/c7292b9fcb5b09c29b3f04c2480cffef.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/c7bc2dc404c681c07453c638603f838c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/cbdc068bf720f67a4c5b46a27112f072.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/ce4cbbaf1b4d3d261a2a474d334fd0cb.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/cf7531d20b44a061ad64d38283f729e2.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/d07b0eb3951b03660049a1a6923f68ed.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/d32a92a39989a3aa8e351841566e1015.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/d32e611e22ea14eb2447764dad869456.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/d3e3256e800dc0de1ed44a01b48041b2.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/d85329ab10c56ca9dc4872a45e3394aa.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/d8f56fc5fa76544dd81f4038da6eb9a6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/d98ca3058b2b121ff481b252096f4004.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/d9a7f548ea5c7d89a013b29fb176e95c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/e1e271885fef8c7e38f9801dfb07a27f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/e493f6774eaf64af6974c252539adb1d.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/e816ebbbbe61f2e22e4f86749f8f2951.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/eb13f7214a36ab4b9c6a7ca6305df001.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/eb4ce11cb06ea4fa6cea02c26965aa2e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/ecab5267fcfea3dd092868b55f3de01c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/ef4c566d71d4729ca7f0e81f48915fdf.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/f05db915b50e276aee52edb8ee7ca1cf.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/f140d45eaa4b8ce3c5b2d498e90c8e4f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/f2687c06ed1288fa6d5ce29bbcb59b26.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/f4be84761af852f98f973b7b5c9f0953.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/f5304cec63bcb2a7ac6661cbdf40c4b8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/f9122cc8b527958ce3dd981e2ba92617.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/decoded/fe3b351d6c81fca16dacef8580b9e62a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/rendered/5094cd6d30c1a4ac1ad00a034d13ca65.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/rendered/63d80c54287bd3b296229ba8b569ec56.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/rendered/8cc22c0c9cf7ea678a68caf61bb17d87.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/0036285386a86019a783f56ee9faf350.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/01873b0db10dae62474b256bc2ef6ec7.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/05f777b5fafa212fab3f596fed6ac5ce.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/0a49f1f7626fb54dae22d7a205cfa465.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/0fc7da2d204e620b8c81248406a0efb2.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/10d419f2ecf0a8a83fb4a3ca9a4fbc41.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/136b6c9e31a2ebaead0180c7cbbee791.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/139c7dc17a76e4ad02d12a890534deea.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/1804bc0ece4f49018306a338ba9cfc66.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/18673ccd05abfd63cc836ce6bf80cd8e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/193bf3ade36a6f65969d325c0eb926f6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/19b87f561533a69b0a1c33fdec768a45.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/19e567255585827a92fc1e589851f293.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/1ef19e7ce06497c3c258abc2112c3083.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/1f67fce76c12ea84004ec30a0df3ae01.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/1f82260041a9cefca9bdf49ce0198e7f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/2387d1fcaa0986e331560db037963962.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/2444e08694f0942f2cbc9070806952f6.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/24e1c466abd44d996f4f7b0407ac9894.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/25c0e7d4adf8b03c7bad19c008d380be.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/2657cbd2e156d159befae83df5c09c8f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/28c2cc3ad6cb6739d9d91c168a4fc4fd.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/2a90da4c59e9b38d59f08369d59fca27.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/2e3126320c4fe639e2007a448c9bfdaf.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/3000970167c2fd18f5ec37b83b438944.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/30aadf81b9f18539df924e6dc8435b30.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/316182e9c60ebf5a92d50c5d3d07fd7a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/332ecb92e041786156ef8951e38843c9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/33cefc7fae7e30409577be9ca6449633.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/33d32908e21e17b57d3f5d2c2f4882da.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/33d3bc4b839c16c0c2d8e0a6cf41b2a0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/33e03f1e0d979c0be58bb62d03d376cc.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/33f9fbe94aa46cd060908695b2cbd339.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/355c5737b6ed3350cf96680a22ca160b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/38b306169ce01b6ea9ff9b17453c5898.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/39e3227a0c1ad7bec59e32be9591b89b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/3a2acae49581717dabff2073af1b71e3.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/3b72c18f0f9c4dd1d235ec6f86ba780d.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/3bb708dc4dbeb93c34eee3e4cdf3541c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/3bf9d5b4fc8c63889a4f25b41150fc53.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/3c69c892054587cc889e43e757df79c9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/3c809196ebdbfcb5f7a90df750a997a5.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/3f084d915f2860dfd6ef03fe674e6275.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/4124222b4a691044b7fc71a9791857a7.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/42b0b71306bced6210baa839a39e7ed8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/42c1e027429e56d2e121f28be1f7afd6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/42ed206ba26b9fa8d6e67ae797ab2ccb.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/4646b54e86975407deae2d7d97ec2b0e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/46c72e49aa9130525f4d70794cad41d0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/4891a45727f6b3282105d6cb3547ac0d.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/4d1eef4da6a9a5ad5f511e9ca11c79e0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/4d4917196f2f9d10cd4dadcf078bc259.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/4f4fe6c5cf581ef7cbfcece4ba6f9cae.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/4f709260712fadb7b1c0336f40993ce9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/508daeb28ee77c3b04d414e5b5d72ebd.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/5094cd6d30c1a4ac1ad00a034d13ca65.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/55147aaae327b807bd7ef8fb695404ae.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/57737d16c158997220124a735a8300ca.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/5b8f17aaa8286a150c1065296b8a9060.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/5d3cc4ddcd90f4e8f2a5cba34f47050c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/60b4917ed1ce4d2f685dfdadd5167a7b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/60fb3308fcc3228581aff39630c23feb.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/6309fbd3aba94939f9cc4df687e4e81f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/63d80c54287bd3b296229ba8b569ec56.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/64057987b5ea17dbab256cbe88583eb8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/64a3400603a89c8e602d07dcd03d1974.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/667c843571b0c31462917cf9c1e48fb4.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/69853ff22e0b9adedf5017016c40a9b6.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/69d79d4107eaa5631b1ac091d9a9ff32.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/6b4aca667fd79ddcf392542c0ef50206.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/6d08344508fbeb1ed80457af9a6b1943.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/6da6c0a468bed005e4cf9dea8fbae97a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/6e1a25e572f43e6aafcc19dbb42074a0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/6ecbef7dd51b982f11111ae50b5237dc.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/6f2ccdb85bd00b0019400902368dc579.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/704fcc8a95895089076961abc1ad4591.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/70ef8686daa165e7b55f284a195b3a6a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/715031a8746a092100046ac9ed8fecc7.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/72aa278a6c1febe05806c89fd7ccd87c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/72f5205735cd4f55926cbba6c131ad23.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/746bf80d8efa3504e1bc7d97c4c028b5.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/76d3eb849989c8620f497fa859de67b8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/77b9f0165307c936233a8dc3af5c6c22.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/799c39ada068562ab40978abccdc52b8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/7ef3ca8805a2213669b9506854897511.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/82d327fc80e67da3067830929ace5b4f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/83f6af8780457a7c6482e0f959e9ae2e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/8402d909f4a3071171272108b73388d9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/84305099ebfccadacd3e3b1c07ea6fc3.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/86491a2946dfd0ff3795d771c8a743c9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/8cc22c0c9cf7ea678a68caf61bb17d87.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/912da7f0e252cd0bfb2e4da66b6e0a79.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/91ac649bced9bae55f4c0a45155d2396.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/92eb15e81d8d1984032f8d230cb0973b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/934bc0ca45126c023e900fcbbaf93cb9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/94b8101762831c34114680e502cde8ca.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/97766fa6846f320e1ae6a345b5748989.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/97d6f8f7c9c7f6c2b6d2914dbbb7dc4f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/9b780466447d936dfe6b6dab09f0f4fa.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/9bb674872c56516e0946dd8df4ac4251.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/9eddd92756faebcda70981438e99fae9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/a09bedff85bbe4302864737c1018be4a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/a251789d3b48497b675daedfbeb0c372.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/a36e654f3532aa804347ddbbb75a6174.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/a398fbbfdb984db1959054ff9c7bb0ba.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/a404d2cb9e90f9506c98a9c79919610c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/a598bc1e87c25ebcb24b9aed77b2ed27.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/a6fdefc515df0558482863b6bd954f26.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/adc7d8b04d72cdf5040306d1301268be.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/ae160f7b28c9a96888d045f88ae73542.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/afdfd39cef538aeb3feefa0eb34cdfa5.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/b04bda6d286ad386d2f90c73725f7229.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/b2d12b12cc107663bd580d126a2867c7.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/b3136503c90f5ec9db4721e551ad6dd1.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/b43038a1f05790aeede9276ba4586d84.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/b732eaa045b8b6f9b4cb5417698b0d88.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/b9057d0c5d25ab60eed6cb72c772c7e9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/b9584c40d1432646a5a10f16c4227904.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/bc6ced70d849c2f3a1379bfc3ebc5621.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/bcd0d7260bce451d9590ae42bf66569a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/bd2daa5905162dece24246da0a98d4d8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/be9a28e63f7520f023d930dfd1bc99d6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/c0670df660b9e47cc849d990d12431ce.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/c07a8a435e31d839fce56daeb31a51c5.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/c0e84da97b95afedc2d3d3204e3e8993.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/c1f983ca527583d4bad61aad0331803b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/c7292b9fcb5b09c29b3f04c2480cffef.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/c7bc2dc404c681c07453c638603f838c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/cbdc068bf720f67a4c5b46a27112f072.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/ce4cbbaf1b4d3d261a2a474d334fd0cb.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/cf7531d20b44a061ad64d38283f729e2.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/d07b0eb3951b03660049a1a6923f68ed.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/d32a92a39989a3aa8e351841566e1015.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/d32e611e22ea14eb2447764dad869456.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/d3e3256e800dc0de1ed44a01b48041b2.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/d85329ab10c56ca9dc4872a45e3394aa.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/d8f56fc5fa76544dd81f4038da6eb9a6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/d98ca3058b2b121ff481b252096f4004.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/d9a7f548ea5c7d89a013b29fb176e95c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/e1e271885fef8c7e38f9801dfb07a27f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/e493f6774eaf64af6974c252539adb1d.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/e816ebbbbe61f2e22e4f86749f8f2951.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/eb13f7214a36ab4b9c6a7ca6305df001.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/eb4ce11cb06ea4fa6cea02c26965aa2e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/ecab5267fcfea3dd092868b55f3de01c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/ef4c566d71d4729ca7f0e81f48915fdf.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/f05db915b50e276aee52edb8ee7ca1cf.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/f140d45eaa4b8ce3c5b2d498e90c8e4f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/f2687c06ed1288fa6d5ce29bbcb59b26.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/f4be84761af852f98f973b7b5c9f0953.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/f5304cec63bcb2a7ac6661cbdf40c4b8.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/f9122cc8b527958ce3dd981e2ba92617.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/mx.allabout.network/.cache/served/fe3b351d6c81fca16dacef8580b9e62a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/body/008378420b7d247de04aab2c9fcd79e9.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/specification.website/.cache/body/4049cc2caa6b56fb1b4f6bc9a8928c2a.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/specification.website/.cache/body/40c0a858e707c6934de764c044c4422e.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/specification.website/.cache/body/44ba7fcbff49cf45368e29280901dad6.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/specification.website/.cache/body/5020e5963199d46c43178c5b23ae986a.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/specification.website/.cache/body/5161d1e5c708da140c0ca6627b89fb54.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/body/55f911f8380f469c593e848db1a14817.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/specification.website/.cache/body/7eec6c17a33b390bc9fbcd70887467f0.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/specification.website/.cache/body/93c536282e8645fd679f28e91b7e4c55.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/specification.website/.cache/body/b3dc873b6fad11377fb96007d5172d51.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/specification.website/.cache/body/d6f6c5ba487301738d6ff7dd7e98c359.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/specification.website/.cache/body/d75b9ce137c66ea3129d84b5ee06186b.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/008378420b7d247de04aab2c9fcd79e9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/4049cc2caa6b56fb1b4f6bc9a8928c2a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/40c0a858e707c6934de764c044c4422e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/44ba7fcbff49cf45368e29280901dad6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/5020e5963199d46c43178c5b23ae986a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/5161d1e5c708da140c0ca6627b89fb54.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/55f911f8380f469c593e848db1a14817.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/7eec6c17a33b390bc9fbcd70887467f0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/93c536282e8645fd679f28e91b7e4c55.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/9b05e91141cf8655080e0facc4cfbe89.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/b3dc873b6fad11377fb96007d5172d51.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/d6f6c5ba487301738d6ff7dd7e98c359.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/decoded/d75b9ce137c66ea3129d84b5ee06186b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/rendered/44ba7fcbff49cf45368e29280901dad6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/rendered/b3dc873b6fad11377fb96007d5172d51.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/rendered/d75b9ce137c66ea3129d84b5ee06186b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/008378420b7d247de04aab2c9fcd79e9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/4049cc2caa6b56fb1b4f6bc9a8928c2a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/40c0a858e707c6934de764c044c4422e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/44ba7fcbff49cf45368e29280901dad6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/5020e5963199d46c43178c5b23ae986a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/5161d1e5c708da140c0ca6627b89fb54.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/55f911f8380f469c593e848db1a14817.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/7eec6c17a33b390bc9fbcd70887467f0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/93c536282e8645fd679f28e91b7e4c55.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/9b05e91141cf8655080e0facc4cfbe89.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/b3dc873b6fad11377fb96007d5172d51.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/d6f6c5ba487301738d6ff7dd7e98c359.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/specification.website/.cache/served/d75b9ce137c66ea3129d84b5ee06186b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/body/0b9d27fe4a14df662cca4c955211655e.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/body/24710a787288e5212ebfbd45665634f2.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/body/8ee7e6a2ffd27ef97d3b181a9a10966e.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/body/98a970fb3ddccca9f4b459d7e4ec4790.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/body/cb11b613ded2eda812348c2ac2ebca72.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/body/d029b7fb7565933063b5aa18efaf512f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/body/f0554cd98b3c1fe2d60b7af72c366125.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/decoded/0b9d27fe4a14df662cca4c955211655e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/decoded/24710a787288e5212ebfbd45665634f2.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/decoded/8ee7e6a2ffd27ef97d3b181a9a10966e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/decoded/98a970fb3ddccca9f4b459d7e4ec4790.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/decoded/b474ad968a1894a46b9b23f2f6137cad.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/decoded/cb11b613ded2eda812348c2ac2ebca72.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/decoded/d029b7fb7565933063b5aa18efaf512f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/decoded/f0554cd98b3c1fe2d60b7af72c366125.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/rendered/24710a787288e5212ebfbd45665634f2.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/rendered/8ee7e6a2ffd27ef97d3b181a9a10966e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/rendered/98a970fb3ddccca9f4b459d7e4ec4790.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/rendered/cb11b613ded2eda812348c2ac2ebca72.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/rendered/d029b7fb7565933063b5aa18efaf512f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/rendered/f0554cd98b3c1fe2d60b7af72c366125.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/served/0b9d27fe4a14df662cca4c955211655e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/served/24710a787288e5212ebfbd45665634f2.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/served/8ee7e6a2ffd27ef97d3b181a9a10966e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/served/98a970fb3ddccca9f4b459d7e4ec4790.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/served/b474ad968a1894a46b9b23f2f6137cad.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/served/cb11b613ded2eda812348c2ac2ebca72.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/served/d029b7fb7565933063b5aa18efaf512f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/stackoptic.com/.cache/served/f0554cd98b3c1fe2d60b7af72c366125.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/typo3.com/.cache/decoded/2affb9098b73bc7171f707a11360f27f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/typo3.com/.cache/served/2affb9098b73bc7171f707a11360f27f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/typo3.org/.cache/decoded/2cea1309d18c929fb0e7a950740af292.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/typo3.org/.cache/served/2cea1309d18c929fb0e7a950740af292.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/body/1fec716311ff81a3f7e12eacf4fb1a03.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/body/25b4fe6a59f1de7c0be825cc45f5733e.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/body/2ff088fead9da4b8734f74b751480dca.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/body/31ec7c50506a99aece729182d9a1237c.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/body/41d365e57fed69cc397e697e3526d8b9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/body/5ddb891f7303d09a3254bdf6b4dd5866.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/body/7efe170074880832ed385c611eceb060.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/body/9287ec38bb9e8830be4c6a69fb67824f.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/body/b13da5d45510140c75eb20a1a26b3918.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/body/cf5b784ee413a6785925b248b180a58a.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/body/f4860e7b94e3e6baa1f0e9c871530ab6.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/body/fcf19a41d9697d4751eac93f9ee6ce7d.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/1fec716311ff81a3f7e12eacf4fb1a03.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/25b4fe6a59f1de7c0be825cc45f5733e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/2ff088fead9da4b8734f74b751480dca.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/31ec7c50506a99aece729182d9a1237c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/41d365e57fed69cc397e697e3526d8b9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/5ddb891f7303d09a3254bdf6b4dd5866.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/7efe170074880832ed385c611eceb060.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/9287ec38bb9e8830be4c6a69fb67824f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/b13da5d45510140c75eb20a1a26b3918.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/cf5b784ee413a6785925b248b180a58a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/f4860e7b94e3e6baa1f0e9c871530ab6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/f5d49f77bc0db14bcb575791919e7e7d.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/decoded/fcf19a41d9697d4751eac93f9ee6ce7d.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/rendered/1fec716311ff81a3f7e12eacf4fb1a03.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/rendered/25b4fe6a59f1de7c0be825cc45f5733e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/rendered/2ff088fead9da4b8734f74b751480dca.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/rendered/31ec7c50506a99aece729182d9a1237c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/rendered/41d365e57fed69cc397e697e3526d8b9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/rendered/5ddb891f7303d09a3254bdf6b4dd5866.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/rendered/7efe170074880832ed385c611eceb060.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/rendered/9287ec38bb9e8830be4c6a69fb67824f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/rendered/b13da5d45510140c75eb20a1a26b3918.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/rendered/cf5b784ee413a6785925b248b180a58a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/rendered/f4860e7b94e3e6baa1f0e9c871530ab6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/rendered/fcf19a41d9697d4751eac93f9ee6ce7d.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/1fec716311ff81a3f7e12eacf4fb1a03.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/25b4fe6a59f1de7c0be825cc45f5733e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/2ff088fead9da4b8734f74b751480dca.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/31ec7c50506a99aece729182d9a1237c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/41d365e57fed69cc397e697e3526d8b9.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/5ddb891f7303d09a3254bdf6b4dd5866.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/7efe170074880832ed385c611eceb060.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/9287ec38bb9e8830be4c6a69fb67824f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/b13da5d45510140c75eb20a1a26b3918.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/cf5b784ee413a6785925b248b180a58a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/f4860e7b94e3e6baa1f0e9c871530ab6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/f5d49f77bc0db14bcb575791919e7e7d.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.contentful.com/.cache/served/fcf19a41d9697d4751eac93f9ee6ce7d.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.dkd.de-de/.cache/decoded/71cd8b0645d14a7372c2e781f5d03005.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| audit/www.dkd.de-de/.cache/served/71cd8b0645d14a7372c2e781f5d03005.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| brand/mx-brand-guide.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| content/css/styles.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| content/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| content/js/common.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| distributions/mx-pdf-inspector/v1.0.0/bin/mx-pdf-inspect.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| distributions/mx-pdf-inspector/v1.0.0/lib/pdf-inspector-core.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| distributions/mx-pdf-inspector/v1.0.0/test-pack/run-test-pack.sh | shell | generated | generated-needs-update | no | no | Generated file — requires generator update |
| distributions/mx-pdf-inspector/v1.0.0/vendor/pdfjs/pdf.min.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| distributions/mx-pdf-inspector/v1.0.0/vendor/pdfjs/pdf.worker.min.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| extensions/mx-comprehension/content.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| extensions/mx-comprehension/demo/demo.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| extensions/mx-comprehension/demo/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| extensions/mx-comprehension/demo/treatment-structured.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| extensions/mx-comprehension/lib/ai-client.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| extensions/mx-comprehension/popup.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| extensions/mx-comprehension/popup.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| extensions/mx-comprehension/popup.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| extensions/mx-llm-view/background.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| extensions/mx-readiness/background.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| extensions/mx-readiness/content.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| extensions/mx-readiness/diff.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| extensions/mx-readiness/diff.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| extensions/mx-readiness/popup.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| extensions/mx-readiness/popup.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| extensions/mx-readiness/popup.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/hub-content-mx-reference-implementations-_templates-bilingual-business-template/cached-html/bilingual-business-template.cog.html-4f6e9d81.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/hub-content-mx-reference-implementations-_templates-single-language-business-template/cached-html/single-language-business-template.cog.html-4c0b71a6.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/hub-content-mx-reference-implementations-los-granainos-los-granainos-mx-reference/cached-html/los-granainos-mx-reference.cog.html-ce17f0b3.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/hub-content-mx-reference-implementations-los-granainos-los-granainos-single-lang/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/hub-content-mx-reference-implementations-los-granainos-los-granainos-single-lang/cached-html/los-granainos-single-lang.cog.html-d66ca05b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-en-index/cached-css/index.cog.css-1c46d859.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-en-index/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-en-index/cached-html/index.cog.html-18a0da03.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-es-index/cached-css/index.cog.css-9e897b23.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-es-index/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-es-index/cached-html/index.cog.html-c5d6272f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-index/cached-css/index.cog.css-b56fe14e.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-index/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-14/packages-allaboutv2-mx-demo-salva-index/cached-html/index.cog.html-2d34f548.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/hub-content-mx-reference-implementations-_templates-bilingual-business-template/cached-html/bilingual-business-template.cog.html-83bec80f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/hub-content-mx-reference-implementations-_templates-single-language-business-template/cached-html/single-language-business-template.cog.html-818e8234.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/hub-content-mx-reference-implementations-los-granainos-los-granainos-mx-reference/cached-html/los-granainos-mx-reference.cog.html-9a736047.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/hub-content-mx-reference-implementations-los-granainos-los-granainos-single-lang/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/hub-content-mx-reference-implementations-los-granainos-los-granainos-single-lang/cached-html/los-granainos-single-lang.cog.html-fb939029.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-en-index/cached-css/index.cog.css-baaffb13.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-en-index/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-en-index/cached-html/index.cog.html-a1f2e46a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-es-index/cached-css/index.cog.css-8d3ec45a.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-es-index/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-es-index/cached-html/index.cog.html-37db841c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-index/cached-css/index.cog.css-98fcb324.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-index/cached-css/leaflet.css-6731ba34.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/audit/baselines/2026-02-21-08-34-46/packages-allaboutv2-mx-demo-salva-index/cached-html/index.cog.html-36f999f0.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/books/chapters/chapter-00-introduction-to-mx.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/books/handbook/mx-handbook.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/books/protocols/mx-protocols.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/presentations/deck-stage.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| html/presentations/mx-pitch-bmv-2026.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/404.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/about/about.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/about/contact.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/about/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/about/printworks.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/AI-USAGE.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/audit/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/a-pdf-that-can-prove-itself.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/a-standard-that-knows-what-it-isnt.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/adobe-just-bought-the-dashboard.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/agency-platforms-and-the-open-layer.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/agent-discoverability-checklist.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/agent-readiness-scores-compared.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/ai-assistants-are-a-traffic-channel.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/ai-mx-and-the-future-of-business.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/audit-for-auditors.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/audit-for-clients.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/audit-for-engineers.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/block-the-machine-it-walks-around-you.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/claude-joins-mx-community.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/cms-summit-26-frankfurt-write-up.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/cms-vocabulary-war.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/content-that-manages-itself.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/data-sovereignty.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/declare-once-work-everywhere.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/designing-workflows-for-humans-and-machines.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/dita-and-mx-a-comparison.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/ab-test-lying-to-machines.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/bridging-the-machine-partnership.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/built-for-machines-not-readers.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/game-the-signals-lose-the-engine.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/mx-gathering-notes-guide.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/the-audit-that-audits-itself.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/typo3-and-mx-readiness.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/watching-the-machines/google-nano-model/dont-be-evil-to-dont-ask.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/watching-the-machines/google-nano-model/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/watching-the-machines/google-nano-model/respect-runs-both-ways.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/watching-the-machines/google-nano-model/the-signature-and-the-download.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/watching-the-machines/how-it-works.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/watching-the-machines/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/watching-with-the-machines.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/what-machines-see-that-humans-dont.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/where-mx-meets-unesco-ai-ethics.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/drafts/write-tight.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/files-away-from-source.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/from-blobs-to-bots.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/geo-is-a-tactic-mx-is-the-specification.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/governance/a-rule-you-sell-is-not-a-standard.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/governance/capture-happens-at-version-two.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/governance/exit-is-the-only-real-vote.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/governance/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/governance/neither-code-nor-content.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/governance/not-the-main-sponsor.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/governance/the-badge-and-the-body.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/governance/the-spec-was-never-the-fragile-part.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/governance/two-implementations-or-it-isnt-a-standard.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/governance/when-the-law-points-at-your-standard.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/governance/whose-standard-is-it-anyway.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/internet-2031-the-human-view.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/llms-txt-guide.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/machine-experience-adding-metadata.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/many-agents-one-metadata-layer.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/microsoft-frontier-tuning-and-the-unsigned-trace.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/mx-a-new-role.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/mx-handbook-is-here.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/mx-manifesto.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/orange-with-pump.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/pope-leo-ai-encyclical-and-mx.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/principles-changed-how-i-build.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/profiles/about.claude.code.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/profiles/about.claude.sonnet.4.5.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/profiles/about.microsoft.copilot.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/profiles/about.tom.cranstoun.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/profiles/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/provenance-you-can-see.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/read-is-not-the-same-as-trusted.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/salesforce-contentful-not-an-mx-strategy.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/schema-org-and-the-missing-provenance-layer.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/skills-static-not-subroutines.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/software-agreed-the-deal.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/strip-the-marks-lose-the-word.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/tagged-pdfs-are-mx.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/the-agent-web-looks-like-1995.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/the-crawl-still-speaks-english.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/the-inspector-you-can-audit-yourself.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/the-markdown-trap.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/the-new-web-agentic-era-infrastructure.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/the-new-web-government-public-sector.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/the-padlock-and-the-page.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/the-provenance-gap.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/tom-cranstoun-launches-mx-handbook.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/use-cases/how-agents-discover-metadata.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/use-cases/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/use-cases/is-mx-useful-to-blockchain.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/use-cases/mx-and-cryptocurrency-drawing-the-line.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/use-cases/nfts-and-mx.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/use-cases/proving-what-you-published.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/use-cases/what-blockchain-and-crypto-have-to-do-with-mx.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/web-is-just-the-start.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/what-a-newborn-llm-wants-from-a-cog.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/what-googles-web-dev-agent-guidance-does-not-touch.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/what-i-do-helping-organisations-move-from-found-to-used.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/what-is-machine-experience.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/when-the-ai-world-realised-it-needed-standards.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/who-answers-when-the-machine-decides.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/who-checked-gutenberg.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/why-ai-agents-need-contracts-not-instructions.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/why-an-mx-audit-pays-for-itself.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/why-llms-dont-execute-javascript.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/blog/why-machines-need-human-creativity.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/agent-friendly-starter-kit/bad/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/agent-friendly-starter-kit/bad/script.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-site/books/appendices/agent-friendly-starter-kit/bad/style.css | css | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-site/books/appendices/agent-friendly-starter-kit/good/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/agent-friendly-starter-kit/good/style.css | css | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-site/books/appendices/agent-friendly-starter-kit/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-a.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-b.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-c.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-d.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-e.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-f.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-g.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-h.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-i.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-j.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-k.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-l.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-m.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-n.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-o.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-p.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-q.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-r.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-s.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-t.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-u.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix-v.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/appendix.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/book-product-page.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/code-examples/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/code-examples/monitoring/analytics-tracking.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/code-examples/monitoring/server-log-analysis.sh | shell | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/code-examples/nextjs/dynamic-query-index.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/code-examples/nextjs/next.config.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/code-examples/static-site/generate-index.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/code-examples/validation/verify-ai-production.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/code-examples/validation/verify-ai-simple.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/for-reviewers.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/appendices/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/faq.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/footnotes.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/free-book-chapter-00-chapter-00.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/handbook-chapter-00-chapter-00.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/handbook.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/introduction.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/mx-handbook-v2-chapters-chapter-00-chapter-00.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/protocols-chapter-00-chapter-00.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/protocols-chapter-12-chapter-12.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/protocols-chapter-24-chapter-24.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/protocols.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/the-author.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/books/training-vs-inference.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/cog.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/books-download-intro.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/mx-appendix.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/mx-blog.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/mx-faq.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/mx-forms.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/mx-hero.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/mx-tools.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/mx-unified.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/themes/appendix.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/themes/captured-allabout.network.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/themes/captured-react.dev.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/themes/eds.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/css/themes/mx-site.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/intent-preview/blogs-ddt-a-guide-to-ai-optimization-an-update.captured-allabout.network.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/intent-preview/blogs-ddt-a-guide-to-ai-optimization-an-update.eds.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/intent-preview/blogs-ddt-a-guide-to-ai-optimization-an-update.eds.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/intent-preview/index.captured-react.dev.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/intent-preview/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/intent-preview/intent-demo.appendix.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/intent-preview/intent-demo.appendix.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/intent-preview/intent-demo.eds.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/intent-preview/intent-demo.eds.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/intent-preview/intent-demo.mx-site.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/intent-preview/intent-demo.mx-site.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/js/app.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/js/blog-filter.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-site/js/checkout-widget.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-site/js/lead-capture.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/js/pdf-inspector-core.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-site/js/pdf-inspector.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-site/js/vendor/pdfjs/pdf.min.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-site/js/vendor/pdfjs/pdf.worker.min.js | javascript | generated | generated-needs-update | no | no | Generated file — requires generator update |
| mx-site/learn/accessibility-ai-convergence.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/learn/benefits.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/learn/common-mistakes.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/learn/explicit-over-implicit.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/learn/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/learn/key-principles.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/learn/mx-for-pdfs.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/learn/mx-principles.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/learn/what-is-mx.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/learn/why-mx-matters.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/reginald/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/reginald/mx-machine-readiness.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/services/certified-operator.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/services/eaa/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/services/examples.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/services/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/services/our-approach.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/services/our-services.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/the-gathering/draft-notes.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/the-gathering/how-it-works.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/the-gathering/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/the-gathering/join.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/the-gathering/sponsorship.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| mx-site/tools/pdf-inspector.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/ai-readiness.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/api.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/audit.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/benefits.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/css/reginald.css | css | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/get-started.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/how-it-works.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/index.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/js/reginald.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/plugins.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/plugins/mx-cogify-eds.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/plugins/mx-cogify-squarespace.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| reginald/plugins/mx-cogify-wix.html | html | generated | generated-needs-update | no | no | Generated file — requires generator update |
| reginald/plugins/mx-cogify.js | javascript | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| reginald/pricing.html | html | generated | generated-has-metadata | yes | no | Generated file — requires generator update |
| scripts/generate-index.sh | shell | generated | generated-has-metadata | yes | no | Generated file — requires generator update |

### mx-reginald/ (332 files, 66% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| audit/bin/action-findings.js | javascript | source | compliant | yes | yes |  |
| audit/bin/agent-access-test.js | javascript | source | compliant | yes | yes |  |
| audit/bin/audience-classify.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/bin/backfill-findings-machine-surface.js | javascript | source | compliant | yes | yes |  |
| audit/bin/cache-status.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/bin/capture-pdf-sample.js | javascript | source | compliant | yes | yes |  |
| audit/bin/check-ab-test.js | javascript | source | compliant | yes | yes |  |
| audit/bin/check-ai-usage.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/bin/check-egress.js | javascript | source | compliant | yes | yes |  |
| audit/bin/check-frameworks.js | javascript | source | compliant | yes | yes |  |
| audit/bin/check-freshness.js | javascript | source | compliant | yes | yes |  |
| audit/bin/check-sitemap-anomaly.js | javascript | source | compliant | yes | yes |  |
| audit/bin/check-sitemap-links.js | javascript | source | missing | no | no | No structured metadata found |
| audit/bin/check-wellknown.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/bin/discover-urls.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/bin/error-page-test.js | javascript | source | compliant | yes | yes |  |
| audit/bin/get-cached-page.js | javascript | source | compliant | yes | yes |  |
| audit/bin/hostile-ux-check.js | javascript | source | compliant | yes | yes |  |
| audit/bin/infill-report.js | javascript | source | compliant | yes | yes |  |
| audit/bin/json-feed-check.js | javascript | source | compliant | yes | yes |  |
| audit/bin/jsonld-snapshot.js | javascript | source | compliant | yes | yes |  |
| audit/bin/provenance-gap-llm.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/bin/provenance-gap.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/bin/prune-cache.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/bin/sanitise-prose.js | javascript | source | missing | no | no | No structured metadata found |
| audit/bin/slowest-page-probe.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/abTestDiscovery.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| audit/bin/tableHandlers/agentAccess.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/aiAttribution.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/audienceClassification.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/bin/tableHandlers/brokenLinks.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/checkoutSchema.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/ecommerceScalars.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/errorPageTest.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/findingsSection.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/formFieldStandards.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/freshnessExpiry.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| audit/bin/tableHandlers/imageSummary.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/llmsTxtSummary.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/markerReachability.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/mxJourneySummary.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/pagesAudited.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/pagesAuditedSimple.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/pipelineSurvivability.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/pipelineSurvivabilitySummary.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/positivePatterns.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/priceParity.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/provenanceGap.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/robotsSummary.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/scopeStatus.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/sitemapAnomaly.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/sitemapSummary.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/structuredDataFindings.js | javascript | source | compliant | yes | yes |  |
| audit/bin/tableHandlers/structuredDataInventory.js | javascript | source | compliant | yes | yes |  |
| audit/bin/topup-pdfs-from-sitemap.js | javascript | source | compliant | yes | yes |  |
| audit/bin/validate-id-references.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/bin/verify-skeleton.js | javascript | source | compliant | yes | yes |  |
| audit/bin/write-sitemap-health.js | javascript | source | compliant | yes | yes |  |
| audit/index.js | javascript | source | compliant | yes | yes |  |
| audit/lib/apply-patches.js | javascript | source | compliant | yes | yes |  |
| audit/lib/audience-signals.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/lib/audit-delta.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/lib/audit-errors.js | javascript | source | compliant | yes | yes |  |
| audit/lib/audit-messages.js | javascript | source | compliant | yes | yes |  |
| audit/lib/capture-prompt.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/lib/content-expiry.js | javascript | source | compliant | yes | yes |  |
| audit/lib/detect-commerce.js | javascript | source | compliant | yes | yes |  |
| audit/lib/deterministic-patches.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/lib/format-page-link.js | javascript | source | compliant | yes | yes |  |
| audit/lib/llm-client.js | javascript | source | compliant | yes | yes |  |
| audit/lib/llm-provenance.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/lib/log-caught.js | javascript | source | compliant | yes | yes |  |
| audit/lib/null-as-pass.js | javascript | source | compliant | yes | yes |  |
| audit/lib/perf-score.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/lib/pipeline-logger.js | javascript | source | missing | no | no | No structured metadata found |
| audit/lib/platform-findings.js | javascript | source | compliant | yes | yes |  |
| audit/lib/prompts.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/lib/rate-limiter.js | javascript | source | missing | no | no | No structured metadata found |
| audit/lib/render-error-section.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/lib/render-findings-json.js | javascript | source | compliant | yes | yes |  |
| audit/lib/sanitise-prose.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/lib/seeds.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/lib/soft-404.js | javascript | source | compliant | yes | yes |  |
| audit/lib/static-seeds.js | javascript | source | compliant | yes | yes |  |
| audit/lib/template-contract.js | javascript | source | compliant | yes | yes |  |
| audit/lib/unusual-findings.js | javascript | source | compliant | yes | yes |  |
| audit/lib/verdict-conventions.js | javascript | source | compliant | yes | yes |  |
| audit/lib/whitelistability.js | javascript | source | compliant | yes | yes |  |
| audit/mx-audit/domains/example.com/cache/body/182ccedb33a9e03fbf1079b209da1a31.html | html | source | missing | no | no | No structured metadata found |
| audit/mx-audit/domains/example.com/cache/decoded/182ccedb33a9e03fbf1079b209da1a31.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| audit/mx-audit/domains/example.com/cache/rendered/182ccedb33a9e03fbf1079b209da1a31.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| audit/mx-audit/domains/example.com/cache/served/182ccedb33a9e03fbf1079b209da1a31.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| audit/scripts/audit-fierce-critic.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/audit-llm-attribution-judge.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/scripts/audit-llm-judgment.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/bin/audit-pdf.sh | shell | source | compliant | yes | yes |  |
| audit/scripts/bin/inject-mx-xmp.sh | shell | source | partial | yes | no | Missing: status/category/tags |
| audit/scripts/bin/inject-toc-pages.js | javascript | source | missing | no | no | No structured metadata found |
| audit/scripts/build-provenance.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/build-vendor-dom-inventory.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-attribution-consistency.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-cross-section-consistency.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/check-image-claims.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-marker-reachability.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-pa11y-consistency.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-platform-claims.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-recommendation-consistency.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-report-coherence.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-report-contradictions.js | javascript | source | missing | no | no | No structured metadata found |
| audit/scripts/check-report-finding-pages.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/check-report-provenance-gap.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/scripts/check-report-rating-grade.js | javascript | source | missing | no | no | No structured metadata found |
| audit/scripts/check-report-scope.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-report-section-completeness.js | javascript | source | missing | no | no | No structured metadata found |
| audit/scripts/check-report-section-sanity.js | javascript | source | missing | no | no | No structured metadata found |
| audit/scripts/check-report-tone.js | javascript | source | missing | no | no | No structured metadata found |
| audit/scripts/check-report-voice.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-scorer-imports.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-served-rendered-gap.js | javascript | source | missing | no | no | No structured metadata found |
| audit/scripts/check-system-prompt-rules.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-table-logic.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-template-compliance.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-template-coverage.js | javascript | source | missing | no | no | No structured metadata found |
| audit/scripts/check-template-leaks.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-template-predicates.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-template-voice.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/check-url-dedup.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/collect-llm-attribution.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/scripts/generate-template-contract.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/inject-audit-delta.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/insert-h2-page-breaks.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/lib/api-retry.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/lib/cog-field-rules.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/lib/frontmatter-validator.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/lib/strip-diagnostic-section.js | javascript | source | partial | no | yes | Missing: @version or @author |
| audit/scripts/prose-leak-patterns.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/record-quality-trend.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/regenerate-engagement-table.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/regenerate-error-section.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/scripts/repair-report-unified.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/rewrite-report.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/run-with-timeout.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/validate-report-frontmatter.js | javascript | source | compliant | yes | yes |  |
| audit/scripts/verify-audit-report.js | javascript | source | compliant | yes | yes |  |
| audit/src/bulk-audit.js | javascript | source | compliant | yes | yes |  |
| audit/src/collectors/accessibilityCollector.js | javascript | source | compliant | yes | yes |  |
| audit/src/collectors/aiAttributionCollector.js | javascript | source | compliant | yes | yes |  |
| audit/src/collectors/linkCollector.js | javascript | source | compliant | yes | yes |  |
| audit/src/collectors/llmCollector.js | javascript | source | compliant | yes | yes |  |
| audit/src/collectors/markerReachabilityCollector.js | javascript | source | compliant | yes | yes |  |
| audit/src/collectors/securityCollector.js | javascript | source | compliant | yes | yes |  |
| audit/src/config/defaults.js | javascript | source | compliant | yes | yes |  |
| audit/src/config/env.js | javascript | source | compliant | yes | yes |  |
| audit/src/config/markers.js | javascript | source | compliant | yes | yes |  |
| audit/src/config/navPages.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/src/config/options.js | javascript | source | compliant | yes | yes |  |
| audit/src/config/scoringWeights.js | javascript | source | compliant | yes | yes |  |
| audit/src/config/validation.js | javascript | source | compliant | yes | yes |  |
| audit/src/core/AuditContext.js | javascript | source | compliant | yes | yes |  |
| audit/src/main.js | javascript | source | compliant | yes | yes |  |
| audit/src/reporters/llmFeedback.js | javascript | source | compliant | yes | yes |  |
| audit/src/scorers/llmScorer.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/browserPool.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/caching.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/src/utils/contentMetrics.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/csvFormatter.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/executionHelpers.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/historicalComparison.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/journeyStageMapper.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/linkAnalyzer.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/linkChecker.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/llmMetrics.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/llmsTxtParser.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/markerDetection.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/metricsCommon.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/metricsUpdater.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/networkUtils.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/non-html-ext.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/pa11yRunner.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/pageAnalyzer.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/pageAnalyzerHelpers.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/pageTypeDetector.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/patternExtraction.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/performanceAnalyzer.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/pipelineTimer.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/platformFingerprint.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/rateLimiter.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reports.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/src/utils/reportUtils/accessibilityAnalysis.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reportUtils/auditAverages.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reportUtils/contentAnalysis.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reportUtils/dashboardGenerator.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reportUtils/executiveSummary.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reportUtils/formatUtils.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reportUtils/imageAnalysis.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reportUtils/journeyStageReports.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reportUtils/linkAnalysis.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reportUtils/llmReports.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reportUtils/reportGenerators.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reportUtils/schemaReports.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/reportUtils/securityAnalysis.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/results.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/robotsCompliance.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/robotsFetcher.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/robotsTxtParser.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/schemaAnalysis.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/schemaValidator.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/schemaVersion.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/seoScoring.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/setup.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/sharedHeadCache.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/shutdownHandler.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/sitemap.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/sitemapUtils.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/technicalMetrics.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/urlMetrics.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/urlProcessor.js | javascript | source | compliant | yes | yes |  |
| audit/src/utils/urlUtils.js | javascript | source | compliant | yes | yes |  |
| audit/standalone.js | javascript | source | missing | no | no | No structured metadata found |
| audit/test/audience-classification.test.js | javascript | test | missing | no | no | No structured metadata found |
| audit/test/audience-signals.test.js | javascript | test | missing | no | no | No structured metadata found |
| audit/test/audit-delta.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/audit-gates.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/audit-messages.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/check-ab-test.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/check-frameworks.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/check-freshness.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/collectors/markerReachability.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/collectors/provenanceGap.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/collectors/provenanceGapHandler.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/contract-completeness.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/diagnose-fetch-403.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/diagnose-fetch-403.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/findings-actioning.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/findings-section.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/fixtures/vendor-dom/sample-page.html | html | test | compliant | yes | yes |  |
| audit/test/format-page-link.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/formatUtils.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/goldenMaster.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/helpers/assertions.js | javascript | test | compliant | yes | yes |  |
| audit/test/helpers/mockResults.js | javascript | test | compliant | yes | yes |  |
| audit/test/infill-golden.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/integration/pipeline.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/non-html-ext.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/null-as-pass.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/report-coherence-fixes.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/reporters/llmFeedback.breadcrumb.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/sanitise-prose.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/setup.js | javascript | test | compliant | yes | yes |  |
| audit/test/sitemap-anomaly.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/soft-404-classify.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/static-seeds.test.js | javascript | test | missing | no | no | No structured metadata found |
| audit/test/utils/browserPool.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/checkAiUsage.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/dynamicContent.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/historicalComparison.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/linkChecker.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/llmMetrics.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/llmsQuality.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/markerDetection.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/patternExtraction.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/pipelineSurvivability.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/rateLimiter.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/robotsQuality.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/scoreFormulas.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/sitemap.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/utils/structuredDataQuality.test.js | javascript | test | compliant | yes | yes |  |
| audit/test/vendor-dom-inventory.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/wcag-level-sort.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit/test/whitelistability.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| lib/provenance.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| scripts/a11y/audit.js | javascript | source | compliant | yes | yes |  |
| scripts/clarity/test.js | javascript | source | compliant | yes | yes |  |
| scripts/link-checker/check.sh | shell | source | compliant | yes | yes |  |
| scripts/link-checker/llms-txt.sh | shell | source | compliant | yes | yes |  |
| scripts/llms-txt/generate.sh | shell | source | compliant | yes | yes |  |
| scripts/llms-txt/validate.sh | shell | source | compliant | yes | yes |  |
| scripts/metadata/extract.sh | shell | source | compliant | yes | yes |  |
| scripts/metadata/validate.sh | shell | source | compliant | yes | yes |  |
| scripts/mx-cog.sh | shell | source | compliant | yes | yes |  |
| scripts/mx-run.js | javascript | source | compliant | yes | yes |  |
| scripts/pricing/validate.sh | shell | source | compliant | yes | yes |  |
| scripts/readability/analyze.sh | shell | source | compliant | yes | yes |  |
| scripts/registration-webhook.js | javascript | source | compliant | yes | yes |  |
| scripts/robots-txt/ai-stance.sh | shell | source | compliant | yes | yes |  |
| scripts/robots-txt/analyze.sh | shell | source | compliant | yes | yes |  |
| scripts/schema/extract.sh | shell | source | compliant | yes | yes |  |
| scripts/schema/validate.sh | shell | source | compliant | yes | yes |  |
| scripts/semantic-html/outline.sh | shell | source | compliant | yes | yes |  |
| scripts/semantic-html/validate.sh | shell | source | compliant | yes | yes |  |
| scripts/sign-published.js | javascript | source | compliant | yes | yes |  |
| scripts/signing/attest-engine.js | javascript | source | compliant | yes | yes |  |
| scripts/signing/attestation-record-engine.js | javascript | source | compliant | yes | yes |  |
| scripts/signing/canonical.js | javascript | source | compliant | yes | yes |  |
| scripts/signing/cli.js | javascript | source | compliant | yes | yes |  |
| scripts/signing/cog-parser.js | javascript | source | compliant | yes | yes |  |
| scripts/signing/fingerprint.js | javascript | source | compliant | yes | yes |  |
| scripts/signing/registry.js | javascript | source | compliant | yes | yes |  |
| scripts/signing/remedies.js | javascript | source | compliant | yes | yes |  |
| scripts/signing/review-phases.js | javascript | source | compliant | yes | yes |  |
| scripts/signing/review-rewrite.js | javascript | source | compliant | yes | yes |  |
| scripts/signing/review-runner.js | javascript | source | compliant | yes | yes |  |
| scripts/signing/validators/index.js | javascript | source | compliant | yes | yes |  |
| scripts/sitemap/analyze.sh | shell | source | compliant | yes | yes |  |
| scripts/toast-detector/scan.js | javascript | source | compliant | yes | yes |  |
| scripts/validate-cog/check.sh | shell | source | compliant | yes | yes |  |
| tests/attestation-record-engine.test.js | javascript | test | compliant | yes | yes |  |
| tests/conformance/run.js | javascript | test | compliant | yes | yes |  |
| tests/integration-suite.test.js | javascript | test | compliant | yes | yes |  |
| tests/test-reginald.sh | shell | test | compliant | yes | yes |  |
| worker/scripts/migrate.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/db/audit.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/db/downloads.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/db/publishers.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/db/subscriptions.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/db/tokens.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/handlers/book-checkout.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/handlers/books.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/handlers/register.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/handlers/status.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/handlers/stripe-webhook.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/handlers/subscribe.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/handlers/token-rotate.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/index.js | javascript | source | compliant | yes | yes |  |
| worker/src/lib/mailerlite.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/lib/responses.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/lib/token.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/lib/validation.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/middleware/auth.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/middleware/stripe-verify.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/src/stripe/client.js | javascript | source | partial | no | yes | Missing: @version or @author |
| worker/tests/book-purchase.test.js | javascript | test | partial | no | yes | Missing: @version or @author |

### mx-reginald-vnext/ (43 files, 0% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| apps/reference-impl/src/walk-prd-section-18.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| apps/reference-impl/test/walk.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/cli/bin/reginald.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/cli/src/hosted-client.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/cli/src/index.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/cli/test/cli.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/cli/test/hosted.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/conformance/src/index.js | javascript | source | missing | no | no | No structured metadata found |
| packages/conformance/src/runner.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/conformance/test/conformance.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/core/src/cog-urn.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/core/src/digest.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/core/src/ed25519.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/core/src/index.js | javascript | source | missing | no | no | No structured metadata found |
| packages/core/src/jcs.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/core/src/merkle.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/core/src/multibase.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/core/src/supersession.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/core/test/cog-urn.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/core/test/ed25519.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/core/test/jcs.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/core/test/merkle.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/core/test/multibase.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/core/test/supersession.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/registry/src/d1-registry.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/registry/src/d1-sqlite-shim.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/registry/src/index.js | javascript | source | missing | no | no | No structured metadata found |
| packages/registry/src/local-registry.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/registry/test/d1-registry.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/registry/test/local-registry.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/schemas/src/index.js | javascript | source | missing | no | no | No structured metadata found |
| packages/schemas/test/schemas.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/verifier/src/did-web.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/verifier/src/index.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/verifier/src/submission-auth.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/verifier/src/submission-sign.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/verifier/test/did-web.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/verifier/test/submission-auth.test.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/verifier/test/submission-sign.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/verifier/test/verify.test.js | javascript | test | missing | no | no | No structured metadata found |
| packages/worker/src/index.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/worker/src/router.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| packages/worker/test/router.test.js | javascript | test | missing | no | no | No structured metadata found |

### scripts/ (210 files, 70% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| add-mx-metadata-to-manuals.js | javascript | source | compliant | yes | yes |  |
| ai-share-of-voice.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| appendix-nav-footer.html | html | source | missing | no | no | No structured metadata found |
| appendix-nav-header.html | html | source | missing | no | no | No structured metadata found |
| audit-ab-vendors-sync.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| audit-batch.js | javascript | source | missing | no | no | No structured metadata found |
| audit-carrier-compliance.js | javascript | source | compliant | yes | yes |  |
| audit-fierce-critic.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit-llm-judgment.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit-llm-phase2.js | javascript | source | compliant | yes | yes |  |
| audit-pipeline.js | javascript | source | missing | no | no | No structured metadata found |
| audit-prose-lint.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| audit-schema-whitelist.js | javascript | source | compliant | yes | yes |  |
| audit-sidecar-csv.js | javascript | source | compliant | yes | yes |  |
| backfill-ai-visits.js | javascript | source | compliant | yes | yes |  |
| backfill-canonical-uri.js | javascript | source | compliant | yes | yes |  |
| bin/2pager.sh | shell | source | missing | no | no | No structured metadata found |
| bin/check-deps.sh | shell | source | compliant | yes | yes |  |
| bin/mx-pdf-inspect.js | javascript | source | missing | no | no | No structured metadata found |
| bin/mx-resend-check.sh | shell | source | compliant | yes | yes |  |
| bin/mx-shell-integration.sh | shell | source | compliant | yes | yes |  |
| bin/mx.ai.sh | shell | source | compliant | yes | yes |  |
| bin/mx.audit.provenance.sh | shell | source | compliant | yes | yes |  |
| bin/mx.backup.sh | shell | source | compliant | yes | yes |  |
| bin/mx.changelog.sh | shell | source | compliant | yes | yes |  |
| bin/mx.cleanup.sh | shell | source | compliant | yes | yes |  |
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
| bin/mx.marp-regen.sh | shell | source | compliant | yes | yes |  |
| bin/mx.metadata.sh | shell | source | compliant | yes | yes |  |
| bin/mx.openclaw.sh | shell | source | compliant | yes | yes |  |
| bin/mx.pdf.sh | shell | source | compliant | yes | yes |  |
| bin/mx.ports.sh | shell | source | compliant | yes | yes |  |
| bin/mx.provenance.sh | shell | source | compliant | yes | yes |  |
| bin/mx.run.sh | shell | source | compliant | yes | yes |  |
| bin/mx.scaffold.sh | shell | source | compliant | yes | yes |  |
| bin/mx.sh | shell | source | compliant | yes | yes |  |
| bin/mx.shell.sh | shell | source | compliant | yes | yes |  |
| bin/mx.status.sh | shell | source | compliant | yes | yes |  |
| bin/mx.sync.sh | shell | source | compliant | yes | yes |  |
| bin/mx.test-pdf.sh | shell | source | partial | yes | no | Missing: status/category/tags |
| bin/mx.timer.sh | shell | source | compliant | yes | yes |  |
| bin/mx.tools.sh | shell | source | compliant | yes | yes |  |
| bin/mx.update.sh | shell | source | compliant | yes | yes |  |
| bin/mx.vscode.sh | shell | source | compliant | yes | yes |  |
| bin/mx.what.git.sh | shell | source | compliant | yes | yes |  |
| bin/mx.whatsup.sh | shell | source | compliant | yes | yes |  |
| bin/mx.workspace.sh | shell | source | compliant | yes | yes |  |
| blog-qa.sh | shell | source | compliant | yes | yes |  |
| blog-status.sh | shell | source | compliant | yes | yes |  |
| build-benchmark-dataset.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| changelog-trim.sh | shell | source | compliant | yes | yes |  |
| check-audit-architecture.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-audit-report-generate.js | javascript | source | missing | no | no | No structured metadata found |
| check-field-drift.js | javascript | source | compliant | yes | yes |  |
| check-gathering-conformance.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-html-hygiene.js | javascript | source | partial | no | yes | Missing: @version or @author |
| check-jsonld-in-head.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-llm-phase2-completeness.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-manuscript-drift.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-manuscript-urls.sh | shell | source | compliant | yes | yes |  |
| check-metadata-transfer.js | javascript | source | missing | no | no | No structured metadata found |
| check-mx-compliance.js | javascript | source | compliant | yes | yes |  |
| check-mx-definitions-index.js | javascript | source | compliant | yes | yes |  |
| check-pitch-drift.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-report-contradictions.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-report-rating-grade.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-report-readability.js | javascript | source | partial | no | yes | Missing: @version or @author |
| check-report-section-completeness.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-report-section-sanity.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-report-tone.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-sitemap-coverage.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-standards-conformance.js | javascript | source | compliant | yes | yes |  |
| check-submodules.sh | shell | source | compliant | yes | yes |  |
| check-template-coverage.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-template-leaks.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| check-universal-claims.js | javascript | source | compliant | yes | yes |  |
| citation-baseline.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| classify-canon.js | javascript | source | compliant | yes | yes |  |
| cleanup-extensions.sh | shell | source | compliant | yes | yes |  |
| cog-field-rules.js | javascript | source | compliant | yes | yes |  |
| cog-tools.js | javascript | source | compliant | yes | yes |  |
| cogify.js | javascript | source | compliant | yes | yes |  |
| compare-audit-runs.js | javascript | source | compliant | yes | yes |  |
| compare-backup-hashes.sh | shell | source | compliant | yes | yes |  |
| consolidate-jsonld-graph.js | javascript | source | compliant | yes | yes |  |
| delete-deprecated-fields.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| embed-pdf-metadata.js | javascript | source | compliant | yes | yes |  |
| field-usage-report.js | javascript | source | compliant | yes | yes |  |
| find-dead-canon-fields.js | javascript | source | compliant | yes | yes |  |
| fix-carrier-metadata.js | javascript | source | compliant | yes | yes |  |
| fix-mx-compliance.js | javascript | source | compliant | yes | yes |  |
| fix-standards-conformance.js | javascript | source | compliant | yes | yes |  |
| gen-book-chrome.sh | shell | source | partial | yes | no | Missing: status/category/tags |
| gen-free-book.sh | shell | source | partial | yes | no | Missing: status/category/tags |
| generate-appendix-html.sh | shell | source | compliant | yes | yes |  |
| generate-download-link.js | javascript | source | partial | no | yes | Missing: @version or @author |
| generate-footnotes.sh | shell | source | compliant | yes | yes |  |
| generate-illustrations.sh | shell | source | compliant | yes | yes |  |
| generate-preflight-findings.js | javascript | source | missing | no | no | No structured metadata found |
| generate-report-qr.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| git-hooks/install-hooks.sh | shell | source | compliant | yes | yes |  |
| git-hooks/install-mx-hooks.sh | shell | source | compliant | yes | yes |  |
| git-hooks/mx-watch-lib.sh | shell | source | compliant | yes | yes |  |
| git-hooks/mx/add-new-repo.sh | shell | source | compliant | yes | yes |  |
| git-hooks/mx/enhance-from-readme.js | javascript | source | compliant | yes | yes |  |
| git-hooks/mx/index-yaml-attributes.js | javascript | source | compliant | yes | yes |  |
| git-hooks/mx/migrate-mx-yaml.js | javascript | source | compliant | yes | yes |  |
| git-hooks/mx/mx-effective.js | javascript | source | compliant | yes | yes |  |
| git-hooks/mx/mx-yaml-generator.js | javascript | source | compliant | yes | yes |  |
| git-hooks/mx/mx-yaml-templates.js | javascript | source | compliant | yes | yes |  |
| git-hooks/mx/onboard-repo.sh | shell | source | compliant | yes | yes |  |
| install-hooks.sh | shell | source | compliant | yes | yes |  |
| lib/drift-check.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| lib/frontmatter-validator.js | javascript | source | compliant | yes | yes |  |
| lib/gitignore-check.js | javascript | source | missing | no | no | No structured metadata found |
| lib/load-canon.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| lint-md-all.js | javascript | source | compliant | yes | yes |  |
| migrate-provenance-v1-to-v2.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| migrate-to-v1.sh | shell | source | compliant | yes | yes |  |
| mode-lib.sh | shell | source | compliant | yes | yes |  |
| mx-about-recon.sh | shell | source | compliant | yes | yes |  |
| mx-audit-recon.sh | shell | source | compliant | yes | yes |  |
| mx-audit.js | javascript | source | compliant | yes | yes |  |
| mx-crm/generate-orders-dashboard.js | javascript | source | compliant | yes | yes |  |
| mx-nav-server/lib/scanner.js | javascript | source | compliant | yes | yes |  |
| mx-nav-server/lib/search.js | javascript | source | compliant | yes | yes |  |
| mx-nav-server/public/app.js | javascript | source | compliant | yes | yes |  |
| mx-nav-server/public/index.html | html | source | compliant | yes | yes |  |
| mx-nav-server/public/styles.css | css | source | compliant | yes | yes |  |
| mx-nav-server/server.js | javascript | source | compliant | yes | yes |  |
| mx-show.sh | shell | source | compliant | yes | yes |  |
| mx-spell.sh | shell | source | compliant | yes | yes |  |
| mx-tidy-repos.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| mx/enhance-from-readme.js | javascript | source | compliant | yes | yes |  |
| mx/fix-cog-metadata.js | javascript | source | compliant | yes | yes |  |
| mx/mx-compliance.js | javascript | source | compliant | yes | yes |  |
| mx/mx-effective.js | javascript | source | compliant | yes | yes |  |
| mx/mx-gathering-submit.js | javascript | source | missing | no | no | No structured metadata found |
| mx/mx-graph-builder.js | javascript | source | compliant | yes | yes |  |
| mx/mx-graph-mcp.js | javascript | source | compliant | yes | yes |  |
| mx/mx-yaml-generator.js | javascript | source | compliant | yes | yes |  |
| onboard-team-member.sh | shell | source | compliant | yes | yes |  |
| one-off/apa-sweep-captions.js | javascript | source | missing | no | no | No structured metadata found |
| organize-think-content.js | javascript | source | compliant | yes | yes |  |
| package-audit.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| parse-mxignore.js | javascript | source | compliant | yes | yes |  |
| prepare-ack.sh | shell | source | missing | no | no | No structured metadata found |
| preprocess-ascii-to-svg.js | javascript | source | compliant | yes | yes |  |
| publish-appendices.sh | shell | source | compliant | yes | yes |  |
| qr-code-generator/config/urls.js | javascript | source | compliant | yes | yes |  |
| qr-code-generator/examples/basic-usage.sh | shell | source | compliant | yes | yes |  |
| qr-code-generator/generate-pipeline-qr.js | javascript | source | compliant | yes | yes |  |
| qr-code-generator/lib/error-handler.js | javascript | source | compliant | yes | yes |  |
| qr-code-generator/lib/formatter.js | javascript | source | compliant | yes | yes |  |
| qr-code-generator/lib/logo-embedder.js | javascript | source | compliant | yes | yes |  |
| qr-code-generator/lib/qr-engine.js | javascript | source | compliant | yes | yes |  |
| qr-code-generator/lib/validator.js | javascript | source | compliant | yes | yes |  |
| qr-code-generator/public/app.js | javascript | source | compliant | yes | yes |  |
| qr-code-generator/public/index.html | html | source | compliant | yes | yes |  |
| qr-code-generator/public/style.css | css | source | compliant | yes | yes |  |
| qr-code-generator/qr-generator.js | javascript | source | compliant | yes | yes |  |
| qr-code-generator/server.js | javascript | source | compliant | yes | yes |  |
| reattach-submodules.sh | shell | source | missing | no | no | No structured metadata found |
| reference-tools/check-parity.js | javascript | source | compliant | yes | yes |  |
| reference-tools/deploy-multilingual.js | javascript | source | compliant | yes | yes |  |
| reference-tools/generate-multilingual.js | javascript | source | compliant | yes | yes |  |
| reference-tools/generate-sitemap.js | javascript | source | compliant | yes | yes |  |
| reference-tools/sync-assets.js | javascript | source | compliant | yes | yes |  |
| reference-tools/validate-multilingual.js | javascript | source | compliant | yes | yes |  |
| reginald-mirror.sh | shell | source | partial | yes | no | Missing: status/category/tags |
| reginald-publisher-verify.js | javascript | source | compliant | yes | yes |  |
| reginald-static-gen.js | javascript | source | compliant | yes | yes |  |
| registry-add.js | javascript | source | compliant | yes | yes |  |
| registry-query.js | javascript | source | compliant | yes | yes |  |
| registry-update.js | javascript | source | compliant | yes | yes |  |
| registry-validate.js | javascript | source | compliant | yes | yes |  |
| rename-prompting-to-runbook.sh | shell | source | compliant | yes | yes |  |
| rewrite-runbook-values.sh | shell | source | compliant | yes | yes |  |
| spell-sweep.sh | shell | source | compliant | yes | yes |  |
| split-canon.js | javascript | source | compliant | yes | yes |  |
| sync-books-to-r2.js | javascript | source | partial | no | yes | Missing: @version or @author |
| templates/pdf/_base.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| templates/pdf/agreement.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| templates/pdf/blog-post.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| templates/pdf/book.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| templates/pdf/briefing-2col.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| templates/pdf/chapter.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| templates/pdf/document.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| templates/pdf/free-book.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| templates/pdf/info-doc.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| templates/pdf/letter.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| templates/pdf/report.css | css | source | partial | yes | no | Missing: @version or @author, @mx:* tags |
| validate-action-cogs.sh | shell | source | compliant | yes | yes |  |
| validate-cog-yaml.sh | shell | source | compliant | yes | yes |  |
| validate-demo.js | javascript | source | compliant | yes | yes |  |
| validate-report-frontmatter.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| verify-audit-report.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| verify-schema-vocabulary.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |

### tests/ (35 files, 29% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| test-asset-metadata.js | javascript | test | missing | no | no | No structured metadata found |
| test-audit-empty-rendering.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-audit-prose-lint.js | javascript | test | missing | no | no | No structured metadata found |
| test-cog-beacon.sh | shell | test | compliant | yes | yes |  |
| test-cog-enforcer.sh | shell | test | compliant | yes | yes |  |
| test-content-dashboard.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-content-html-escaping.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-frontmatter-validator.sh | shell | test | compliant | yes | yes |  |
| test-illustrations.js | javascript | test | compliant | yes | yes |  |
| test-indexes-fresh.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-intent-cms.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-intent-import.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-link-paths.js | javascript | test | missing | no | no | No structured metadata found |
| test-managed-by.js | javascript | test | compliant | yes | yes |  |
| test-mcp-helper.js | javascript | test | partial | no | yes | Missing: @version or @author |
| test-mx-carrier.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-mx-graph.sh | shell | test | compliant | yes | yes |  |
| test-mx-scaffold.sh | shell | test | compliant | yes | yes |  |
| test-mx-shell.sh | shell | test | compliant | yes | yes |  |
| test-mx-tools.sh | shell | test | compliant | yes | yes |  |
| test-pdf-doctype-resolver.js | javascript | test | missing | no | no | No structured metadata found |
| test-pdf-doctypes.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-pdf-eaa.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-pdf-frontmatter.js | javascript | test | missing | no | no | No structured metadata found |
| test-pdf-inspector.js | javascript | test | missing | no | no | No structured metadata found |
| test-pdf-mx-compatible.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-pdf-provenance-chain.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-principles-sync.js | javascript | test | missing | no | no | No structured metadata found |
| test-promote.js | javascript | test | missing | no | no | No structured metadata found |
| test-provenance-v2.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-qr-codes.html | html | test | compliant | yes | yes |  |
| test-scoring-methodology-fresh.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-served-jsonld-valid.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |
| test-source-frontmatter.js | javascript | test | missing | no | no | No structured metadata found |
| test-source-served-parity.js | javascript | test | missing | no | no | Missing: @version or @author, @mx:* tags |

### tg-community/ (70 files, 0% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| stream-back-end/src/app.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/config/db.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/config/swagger.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/core/cache/query-cache.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/core/cache/redis-client.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/core/http/async-handler.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/core/http/errors.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/core/http/request-context.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/core/http/validate.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/core/logger/index.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/core/mail/email-service.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| stream-back-end/src/core/mail/error-utils.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| stream-back-end/src/core/mail/templates/draft-status-notification.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| stream-back-end/src/core/mail/templates/draft-sync-notification.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| stream-back-end/src/core/mail/templates/password-reset.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| stream-back-end/src/core/mail/templates/registration-verification-code.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| stream-back-end/src/core/mail/templates/review-comment-notification.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| stream-back-end/src/core/mail/templates/welcome.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| stream-back-end/src/core/mail/transporter.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| stream-back-end/src/core/security/rate-limit.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/core/security/security.middleware.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/middleware/error.middleware.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/auth/auth.controller.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/auth/auth.routes.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/auth/auth.schemas.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/auth/auth.service.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/auth/auth.token.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/auth/password-reset-request.model.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| stream-back-end/src/modules/auth/pending-registration.model.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| stream-back-end/src/modules/consensus/consensus-record.model.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/consensus/consensus.controller.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/consensus/consensus.repository.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| stream-back-end/src/modules/consensus/consensus.routes.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/consensus/consensus.schemas.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/consensus/consensus.service.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/drafts/draft.model.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/drafts/draft.repository.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| stream-back-end/src/modules/drafts/drafts.controller.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/drafts/drafts.routes.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/drafts/drafts.schemas.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/drafts/drafts.service.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/drafts/drafts.sync-auth.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| stream-back-end/src/modules/health/health.routes.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/health/health.schemas.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/reviews/review-comment.model.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/reviews/review.repository.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| stream-back-end/src/modules/reviews/reviews.controller.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/reviews/reviews.routes.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/reviews/reviews.schemas.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/reviews/reviews.service.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/search/search.controller.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/search/search.routes.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/search/search.schemas.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/search/search.service.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/standards/standards.controller.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/standards/standards.routes.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/standards/standards.schemas.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/standards/standards.service.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/users/user.model.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/users/user.repository.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| stream-back-end/src/modules/users/users.controller.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/users/users.routes.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/modules/users/users.schemas.js | javascript | source | missing | no | no | Missing: @version or @author, @mx:* tags |
| stream-back-end/src/modules/users/users.service.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/routes/root.route.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/routes/v1.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/server.js | javascript | source | partial | yes | no | Missing: @mx:* tags |
| stream-back-end/src/templates/root.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| stream-front-end/src/app/globals.css | css | source | missing | no | no | No structured metadata found |
| website/src/app/globals.css | css | source | missing | no | no | No structured metadata found |

---

## Generated Files Needing Generator Updates

These files are generated outputs that lack MX metadata.
They require changes to the generator scripts, not manual edits.

| File | Carrier | Generator (estimated) |
|------|---------|----------------------|
| mx-canon/mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/fonts.css-691072c6.css | css | unknown |
| mx-canon/mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/footer.css-936251f1.css | css | unknown |
| mx-canon/mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/index.css-f185f710.css | css | unknown |
| mx-canon/mx-the-gathering/reference-implementations/templates/audit-system/tutorial-audit/cached-css/returntotop.css-7de9e92f.css | css | unknown |
| mx-outputs/audit/crowdfavorite.com/.cache/body/0ee89c2b114fcb641e1afd4030b22459.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/body/1e7617c02b7224c24c20c8382e27f901.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/body/34a1a456a970630fac28973c219fe8d5.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/body/3eb3983e5a998859a8b67a05fec8cbd9.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/body/5c66a059483a3ad7c4391eba0254d4ff.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/body/62a248410c2d31db07e07aeaf1f1a279.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/body/8b71613e67643fb6669b24c09e09900a.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/body/a9991d27983ac2fcd741f0c5cc7fc4a8.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/body/e55aae679a06cf57a88d0be250cd286b.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/body/e5646dbd489a83c940ecf90a3598de3b.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/body/ea7c54e6f2d6ad9c79f8d6a653bbebde.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/body/eda5698c4f7eead1925d3b6c506fe633.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/decoded/e5646dbd489a83c940ecf90a3598de3b.html | html | build scripts |
| mx-outputs/audit/crowdfavorite.com/.cache/served/e5646dbd489a83c940ecf90a3598de3b.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/01140055daf19cf5070f257c9dac16e7.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/0716d2646a1469c8160756e3d45fae0a.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/14c8c7d3f44ec13a60bedf097b79f63e.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/1557df19049276852f49e5adfd912893.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/1a18aa73c7b4c3bee9802eccc5d14f41.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/3069573e796e0257b289266808cfa3c9.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/391b0caa050618d87dc9d85e86853c89.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/5761be663ab2a672aeb62465383bf081.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/67d0321066ee4b2b3e699fe2007fcf6c.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/710c7e876740141b5e86beffb88ad25b.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/789fb1a06a5a9e740e65a3e17aadf148.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/82b5bfb358ab06f5e5a960458ffa63e0.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/8816349fa02af2dc70107a526f74b331.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/a1dd74ad1078cecaf5af5a0fab6691a0.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/ac238bda9e612b628eae6fdfde11e889.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/c8870c4cd3c99ab97392e4f8d2515f04.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/d26b42eba2e870d7248d5b42f084f86f.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/d27970ab6cd3f3145a2c15e4782aa875.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/d57f74d27f64322ad2981948526fc880.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/de78b96e9a481e71c45c23d7fad3f212.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/ea96d9198764e97a6b20e3a1faa2b626.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/body/f789e8c382dbf03679d8e8b5f8a1ec15.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/decoded/15fc6bd00692acb0889f5f6ea1474ed1.html | html | build scripts |
| mx-outputs/audit/dotfusion.com/.cache/served/15fc6bd00692acb0889f5f6ea1474ed1.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/0036285386a86019a783f56ee9faf350.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/01873b0db10dae62474b256bc2ef6ec7.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/05f777b5fafa212fab3f596fed6ac5ce.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/0a49f1f7626fb54dae22d7a205cfa465.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/0fc7da2d204e620b8c81248406a0efb2.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/10d419f2ecf0a8a83fb4a3ca9a4fbc41.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/136b6c9e31a2ebaead0180c7cbbee791.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/139c7dc17a76e4ad02d12a890534deea.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/1804bc0ece4f49018306a338ba9cfc66.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/18673ccd05abfd63cc836ce6bf80cd8e.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/193bf3ade36a6f65969d325c0eb926f6.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/19b87f561533a69b0a1c33fdec768a45.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/19e567255585827a92fc1e589851f293.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/1ef19e7ce06497c3c258abc2112c3083.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/1f67fce76c12ea84004ec30a0df3ae01.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/1f82260041a9cefca9bdf49ce0198e7f.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/2387d1fcaa0986e331560db037963962.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/2444e08694f0942f2cbc9070806952f6.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/24e1c466abd44d996f4f7b0407ac9894.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/25c0e7d4adf8b03c7bad19c008d380be.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/2657cbd2e156d159befae83df5c09c8f.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/28c2cc3ad6cb6739d9d91c168a4fc4fd.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/2a90da4c59e9b38d59f08369d59fca27.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/2e3126320c4fe639e2007a448c9bfdaf.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/3000970167c2fd18f5ec37b83b438944.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/30aadf81b9f18539df924e6dc8435b30.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/316182e9c60ebf5a92d50c5d3d07fd7a.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/332ecb92e041786156ef8951e38843c9.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/33cefc7fae7e30409577be9ca6449633.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/33d32908e21e17b57d3f5d2c2f4882da.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/33d3bc4b839c16c0c2d8e0a6cf41b2a0.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/33e03f1e0d979c0be58bb62d03d376cc.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/33f9fbe94aa46cd060908695b2cbd339.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/355c5737b6ed3350cf96680a22ca160b.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/38b306169ce01b6ea9ff9b17453c5898.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/39e3227a0c1ad7bec59e32be9591b89b.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/3a2acae49581717dabff2073af1b71e3.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/3b72c18f0f9c4dd1d235ec6f86ba780d.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/3bb708dc4dbeb93c34eee3e4cdf3541c.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/3bf9d5b4fc8c63889a4f25b41150fc53.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/3c69c892054587cc889e43e757df79c9.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/3c809196ebdbfcb5f7a90df750a997a5.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/3f084d915f2860dfd6ef03fe674e6275.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/4124222b4a691044b7fc71a9791857a7.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/42b0b71306bced6210baa839a39e7ed8.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/42c1e027429e56d2e121f28be1f7afd6.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/42ed206ba26b9fa8d6e67ae797ab2ccb.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/4646b54e86975407deae2d7d97ec2b0e.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/46c72e49aa9130525f4d70794cad41d0.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/4891a45727f6b3282105d6cb3547ac0d.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/4d1eef4da6a9a5ad5f511e9ca11c79e0.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/4d4917196f2f9d10cd4dadcf078bc259.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/4f4fe6c5cf581ef7cbfcece4ba6f9cae.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/4f709260712fadb7b1c0336f40993ce9.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/508daeb28ee77c3b04d414e5b5d72ebd.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/5094cd6d30c1a4ac1ad00a034d13ca65.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/55147aaae327b807bd7ef8fb695404ae.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/57737d16c158997220124a735a8300ca.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/5b8f17aaa8286a150c1065296b8a9060.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/5d3cc4ddcd90f4e8f2a5cba34f47050c.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/60b4917ed1ce4d2f685dfdadd5167a7b.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/60fb3308fcc3228581aff39630c23feb.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/6309fbd3aba94939f9cc4df687e4e81f.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/63d80c54287bd3b296229ba8b569ec56.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/64057987b5ea17dbab256cbe88583eb8.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/64a3400603a89c8e602d07dcd03d1974.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/667c843571b0c31462917cf9c1e48fb4.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/69853ff22e0b9adedf5017016c40a9b6.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/69d79d4107eaa5631b1ac091d9a9ff32.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/6b4aca667fd79ddcf392542c0ef50206.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/6d08344508fbeb1ed80457af9a6b1943.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/6da6c0a468bed005e4cf9dea8fbae97a.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/6e1a25e572f43e6aafcc19dbb42074a0.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/6ecbef7dd51b982f11111ae50b5237dc.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/6f2ccdb85bd00b0019400902368dc579.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/704fcc8a95895089076961abc1ad4591.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/70ef8686daa165e7b55f284a195b3a6a.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/715031a8746a092100046ac9ed8fecc7.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/72aa278a6c1febe05806c89fd7ccd87c.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/72f5205735cd4f55926cbba6c131ad23.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/746bf80d8efa3504e1bc7d97c4c028b5.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/76d3eb849989c8620f497fa859de67b8.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/77b9f0165307c936233a8dc3af5c6c22.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/799c39ada068562ab40978abccdc52b8.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/7ef3ca8805a2213669b9506854897511.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/82d327fc80e67da3067830929ace5b4f.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/83f6af8780457a7c6482e0f959e9ae2e.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/8402d909f4a3071171272108b73388d9.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/84305099ebfccadacd3e3b1c07ea6fc3.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/86491a2946dfd0ff3795d771c8a743c9.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/8cc22c0c9cf7ea678a68caf61bb17d87.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/912da7f0e252cd0bfb2e4da66b6e0a79.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/91ac649bced9bae55f4c0a45155d2396.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/92eb15e81d8d1984032f8d230cb0973b.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/934bc0ca45126c023e900fcbbaf93cb9.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/94b8101762831c34114680e502cde8ca.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/97766fa6846f320e1ae6a345b5748989.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/97d6f8f7c9c7f6c2b6d2914dbbb7dc4f.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/9b780466447d936dfe6b6dab09f0f4fa.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/9bb674872c56516e0946dd8df4ac4251.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/9eddd92756faebcda70981438e99fae9.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/a09bedff85bbe4302864737c1018be4a.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/a251789d3b48497b675daedfbeb0c372.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/a36e654f3532aa804347ddbbb75a6174.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/a398fbbfdb984db1959054ff9c7bb0ba.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/a404d2cb9e90f9506c98a9c79919610c.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/a598bc1e87c25ebcb24b9aed77b2ed27.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/a6fdefc515df0558482863b6bd954f26.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/adc7d8b04d72cdf5040306d1301268be.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/ae160f7b28c9a96888d045f88ae73542.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/afdfd39cef538aeb3feefa0eb34cdfa5.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/b04bda6d286ad386d2f90c73725f7229.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/b2d12b12cc107663bd580d126a2867c7.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/b3136503c90f5ec9db4721e551ad6dd1.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/b43038a1f05790aeede9276ba4586d84.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/b732eaa045b8b6f9b4cb5417698b0d88.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/b9057d0c5d25ab60eed6cb72c772c7e9.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/b9584c40d1432646a5a10f16c4227904.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/bc6ced70d849c2f3a1379bfc3ebc5621.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/bcd0d7260bce451d9590ae42bf66569a.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/bd2daa5905162dece24246da0a98d4d8.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/be9a28e63f7520f023d930dfd1bc99d6.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/c0670df660b9e47cc849d990d12431ce.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/c07a8a435e31d839fce56daeb31a51c5.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/c0e84da97b95afedc2d3d3204e3e8993.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/c1f983ca527583d4bad61aad0331803b.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/c7292b9fcb5b09c29b3f04c2480cffef.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/c7bc2dc404c681c07453c638603f838c.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/cbdc068bf720f67a4c5b46a27112f072.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/cf7531d20b44a061ad64d38283f729e2.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/d07b0eb3951b03660049a1a6923f68ed.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/d32a92a39989a3aa8e351841566e1015.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/d32e611e22ea14eb2447764dad869456.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/d3e3256e800dc0de1ed44a01b48041b2.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/d85329ab10c56ca9dc4872a45e3394aa.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/d8f56fc5fa76544dd81f4038da6eb9a6.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/d98ca3058b2b121ff481b252096f4004.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/d9a7f548ea5c7d89a013b29fb176e95c.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/e1e271885fef8c7e38f9801dfb07a27f.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/e493f6774eaf64af6974c252539adb1d.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/e816ebbbbe61f2e22e4f86749f8f2951.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/eb13f7214a36ab4b9c6a7ca6305df001.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/eb4ce11cb06ea4fa6cea02c26965aa2e.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/ecab5267fcfea3dd092868b55f3de01c.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/ef4c566d71d4729ca7f0e81f48915fdf.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/f05db915b50e276aee52edb8ee7ca1cf.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/f140d45eaa4b8ce3c5b2d498e90c8e4f.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/f2687c06ed1288fa6d5ce29bbcb59b26.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/f4be84761af852f98f973b7b5c9f0953.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/f5304cec63bcb2a7ac6661cbdf40c4b8.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/f9122cc8b527958ce3dd981e2ba92617.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/body/fe3b351d6c81fca16dacef8580b9e62a.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/decoded/0036285386a86019a783f56ee9faf350.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/decoded/1f82260041a9cefca9bdf49ce0198e7f.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/decoded/2444e08694f0942f2cbc9070806952f6.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/decoded/69853ff22e0b9adedf5017016c40a9b6.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/decoded/8402d909f4a3071171272108b73388d9.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/decoded/b3136503c90f5ec9db4721e551ad6dd1.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/decoded/c0e84da97b95afedc2d3d3204e3e8993.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/served/0036285386a86019a783f56ee9faf350.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/served/1f82260041a9cefca9bdf49ce0198e7f.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/served/2444e08694f0942f2cbc9070806952f6.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/served/69853ff22e0b9adedf5017016c40a9b6.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/served/8402d909f4a3071171272108b73388d9.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/served/b3136503c90f5ec9db4721e551ad6dd1.html | html | build scripts |
| mx-outputs/audit/mx.allabout.network/.cache/served/c0e84da97b95afedc2d3d3204e3e8993.html | html | build scripts |
| mx-outputs/audit/specification.website/.cache/body/008378420b7d247de04aab2c9fcd79e9.html | html | build scripts |
| mx-outputs/audit/specification.website/.cache/body/4049cc2caa6b56fb1b4f6bc9a8928c2a.html | html | build scripts |
| mx-outputs/audit/specification.website/.cache/body/40c0a858e707c6934de764c044c4422e.html | html | build scripts |
| mx-outputs/audit/specification.website/.cache/body/44ba7fcbff49cf45368e29280901dad6.html | html | build scripts |
| mx-outputs/audit/specification.website/.cache/body/5020e5963199d46c43178c5b23ae986a.html | html | build scripts |
| mx-outputs/audit/specification.website/.cache/body/55f911f8380f469c593e848db1a14817.html | html | build scripts |
| mx-outputs/audit/specification.website/.cache/body/7eec6c17a33b390bc9fbcd70887467f0.html | html | build scripts |
| mx-outputs/audit/specification.website/.cache/body/93c536282e8645fd679f28e91b7e4c55.html | html | build scripts |
| mx-outputs/audit/specification.website/.cache/body/b3dc873b6fad11377fb96007d5172d51.html | html | build scripts |
| mx-outputs/audit/specification.website/.cache/body/d6f6c5ba487301738d6ff7dd7e98c359.html | html | build scripts |
| mx-outputs/audit/specification.website/.cache/body/d75b9ce137c66ea3129d84b5ee06186b.html | html | build scripts |
| mx-outputs/audit/specification.website/.cache/served/5161d1e5c708da140c0ca6627b89fb54.html | html | build scripts |
| mx-outputs/audit/stackoptic.com/.cache/body/0b9d27fe4a14df662cca4c955211655e.html | html | build scripts |
| mx-outputs/audit/stackoptic.com/.cache/body/24710a787288e5212ebfbd45665634f2.html | html | build scripts |
| mx-outputs/audit/stackoptic.com/.cache/body/8ee7e6a2ffd27ef97d3b181a9a10966e.html | html | build scripts |
| mx-outputs/audit/stackoptic.com/.cache/body/98a970fb3ddccca9f4b459d7e4ec4790.html | html | build scripts |
| mx-outputs/audit/stackoptic.com/.cache/body/cb11b613ded2eda812348c2ac2ebca72.html | html | build scripts |
| mx-outputs/audit/stackoptic.com/.cache/body/d029b7fb7565933063b5aa18efaf512f.html | html | build scripts |
| mx-outputs/audit/stackoptic.com/.cache/body/f0554cd98b3c1fe2d60b7af72c366125.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/body/1fec716311ff81a3f7e12eacf4fb1a03.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/body/25b4fe6a59f1de7c0be825cc45f5733e.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/body/2ff088fead9da4b8734f74b751480dca.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/body/31ec7c50506a99aece729182d9a1237c.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/body/5ddb891f7303d09a3254bdf6b4dd5866.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/body/7efe170074880832ed385c611eceb060.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/body/9287ec38bb9e8830be4c6a69fb67824f.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/body/b13da5d45510140c75eb20a1a26b3918.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/body/cf5b784ee413a6785925b248b180a58a.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/body/f4860e7b94e3e6baa1f0e9c871530ab6.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/body/fcf19a41d9697d4751eac93f9ee6ce7d.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/decoded/b13da5d45510140c75eb20a1a26b3918.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/rendered/b13da5d45510140c75eb20a1a26b3918.html | html | build scripts |
| mx-outputs/audit/www.contentful.com/.cache/served/b13da5d45510140c75eb20a1a26b3918.html | html | build scripts |
| mx-outputs/distributions/mx-pdf-inspector/v1.0.0/bin/mx-pdf-inspect.js | javascript | build scripts |
| mx-outputs/distributions/mx-pdf-inspector/v1.0.0/lib/pdf-inspector-core.js | javascript | build scripts |
| mx-outputs/distributions/mx-pdf-inspector/v1.0.0/test-pack/run-test-pack.sh | shell | build scripts |
| mx-outputs/distributions/mx-pdf-inspector/v1.0.0/vendor/pdfjs/pdf.min.js | javascript | build scripts |
| mx-outputs/distributions/mx-pdf-inspector/v1.0.0/vendor/pdfjs/pdf.worker.min.js | javascript | build scripts |
| mx-outputs/extensions/mx-comprehension/content.js | javascript | build scripts |
| mx-outputs/extensions/mx-comprehension/lib/ai-client.js | javascript | build scripts |
| mx-outputs/extensions/mx-comprehension/popup.js | javascript | build scripts |
| mx-outputs/extensions/mx-llm-view/background.js | javascript | build scripts |
| mx-outputs/extensions/mx-readiness/background.js | javascript | build scripts |
| mx-outputs/extensions/mx-readiness/content.js | javascript | build scripts |
| mx-outputs/extensions/mx-readiness/diff.js | javascript | build scripts |
| mx-outputs/extensions/mx-readiness/popup.js | javascript | build scripts |
| mx-outputs/mx-site/books/appendices/agent-friendly-starter-kit/bad/script.js | javascript | build scripts |
| mx-outputs/mx-site/books/appendices/agent-friendly-starter-kit/bad/style.css | css | build scripts |
| mx-outputs/mx-site/books/appendices/agent-friendly-starter-kit/good/style.css | css | build scripts |
| mx-outputs/mx-site/js/blog-filter.js | javascript | build scripts |
| mx-outputs/mx-site/js/checkout-widget.js | javascript | build scripts |
| mx-outputs/mx-site/js/pdf-inspector-core.js | javascript | build scripts |
| mx-outputs/mx-site/js/pdf-inspector.js | javascript | build scripts |
| mx-outputs/mx-site/js/vendor/pdfjs/pdf.min.js | javascript | build scripts |
| mx-outputs/mx-site/js/vendor/pdfjs/pdf.worker.min.js | javascript | build scripts |
| mx-outputs/reginald/plugins/mx-cogify-squarespace.html | html | build scripts |
| mx-outputs/reginald/plugins/mx-cogify-wix.html | html | build scripts |

---

## Gap Analysis

### Shell (.sh)

- **102** fully compliant (Layer 1 + Layer 2)
- **5** partially compliant (native metadata but no MX identity)
- **3** missing all metadata

**Files missing all metadata:**

- scripts/bin/2pager.sh
- scripts/prepare-ack.sh
- scripts/reattach-submodules.sh

### JavaScript (.js)

- **424** fully compliant (Layer 1 + Layer 2)
- **128** partially compliant (native metadata but no MX identity)
- **191** missing all metadata

**Files missing all metadata:**

- allaboutv2/cloudflare/files/cloudflare-worker.js
- allaboutv2/scripts/check-sitemap.js
- datalake/manuscripts/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/script.js
- mx-maxine-app/pwa/jsQR.js
- mx-maxine-claw/eslint.config.js
- mx-maxine-claw/next.config.js
- mx-maxine-claw/postcss.config.js
- mx-maxine-claw/prettier.config.js
- mx-reginald/audit/bin/check-sitemap-links.js
- mx-reginald/audit/bin/discover-urls.js
- mx-reginald/audit/bin/sanitise-prose.js
- mx-reginald/audit/lib/audit-delta.js
- mx-reginald/audit/lib/llm-provenance.js
- mx-reginald/audit/lib/perf-score.js
- mx-reginald/audit/lib/pipeline-logger.js
- mx-reginald/audit/lib/prompts.js
- mx-reginald/audit/lib/rate-limiter.js
- mx-reginald/audit/lib/sanitise-prose.js
- mx-reginald/audit/lib/seeds.js
- mx-reginald/audit/scripts/bin/inject-toc-pages.js
- ... and 171 more

### HTML (.html)

- **412** fully compliant (Layer 1 + Layer 2)
- **22** partially compliant (native metadata but no MX identity)
- **153** missing all metadata

**Files missing all metadata:**

- allaboutv2/googleec3acd01d043bece.html
- allaboutv2/head.html
- audit-data/domains/dotfusion.com/cache/decoded/15fc6bd00692acb0889f5f6ea1474ed1.html
- audit-data/domains/dotfusion.com/cache/served/15fc6bd00692acb0889f5f6ea1474ed1.html
- audit-data/domains/www.marriott.com/cache/decoded/64ef2607aaca6185dd9aee226e1b44ba.html
- audit-data/domains/www.marriott.com/cache/served/64ef2607aaca6185dd9aee226e1b44ba.html
- mx-audit/domains/mx.allabout.network/cache/body/0036285386a86019a783f56ee9faf350.html
- mx-audit/domains/mx.allabout.network/cache/body/01873b0db10dae62474b256bc2ef6ec7.html
- mx-audit/domains/mx.allabout.network/cache/body/0a49f1f7626fb54dae22d7a205cfa465.html
- mx-audit/domains/mx.allabout.network/cache/body/0fc7da2d204e620b8c81248406a0efb2.html
- mx-audit/domains/mx.allabout.network/cache/body/10d419f2ecf0a8a83fb4a3ca9a4fbc41.html
- mx-audit/domains/mx.allabout.network/cache/body/136b6c9e31a2ebaead0180c7cbbee791.html
- mx-audit/domains/mx.allabout.network/cache/body/1804bc0ece4f49018306a338ba9cfc66.html
- mx-audit/domains/mx.allabout.network/cache/body/193bf3ade36a6f65969d325c0eb926f6.html
- mx-audit/domains/mx.allabout.network/cache/body/19b87f561533a69b0a1c33fdec768a45.html
- mx-audit/domains/mx.allabout.network/cache/body/19e567255585827a92fc1e589851f293.html
- mx-audit/domains/mx.allabout.network/cache/body/1ef19e7ce06497c3c258abc2112c3083.html
- mx-audit/domains/mx.allabout.network/cache/body/1f67fce76c12ea84004ec30a0df3ae01.html
- mx-audit/domains/mx.allabout.network/cache/body/1f82260041a9cefca9bdf49ce0198e7f.html
- mx-audit/domains/mx.allabout.network/cache/body/2387d1fcaa0986e331560db037963962.html
- ... and 133 more

### CSS (.css)

- **174** fully compliant (Layer 1 + Layer 2)
- **16** partially compliant (native metadata but no MX identity)
- **4** missing all metadata

**Files missing all metadata:**

- datalake/manuscripts/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/style.css
- datalake/manuscripts/mx-books/mx-code-examples/agent-friendly-starter-kit/good/style.css
- tg-community/stream-front-end/src/app/globals.css
- tg-community/website/src/app/globals.css

---

## Remediation Priorities

### Priority 1 — Source files in scripts/ and mx-canon/

High-value, hand-maintained files that should be exemplars of carrier format compliance.

**64 files** need attention.

### Priority 2 — Generator updates

**265 generated files** need their generators updated to emit MX metadata.

### Priority 3 — Submodule source files

**72 files** in submodules need attention (requires separate commits).

### Priority 4 — Test and example files

**64 files** — lower priority, not customer-facing.

---

*Carrier Format Compliance Audit — fields-data.yaml (Appendix M §17). Design for both.*
