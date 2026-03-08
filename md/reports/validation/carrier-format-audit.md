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
| Shell (.sh) | 90 | 89 | 0 | 0 | 1 | 100% |
| JavaScript (.js) | 290 | 288 | 0 | 2 | 0 | 99% |
| HTML (.html) | 377 | 321 | 3 | 3 | 50 | 98% |
| CSS (.css) | 183 | 135 | 0 | 2 | 46 | 99% |
| **Total** | **940** | **833** | **3** | **7** | **97** | **99%** |

---

## Compliance by Category

| Category | Total | Compliant | Partial | Missing |
|----------|-------|-----------|---------|---------|
| Source files | 798 | 788 | 3 | 7 |
| Test files | 23 | 23 | 0 | 0 |
| Reference implementations | 22 | 22 | 0 | 0 |
| Generated outputs | 97 | 0 | 0 | 15 |

---

## Compliance by Directory

### allaboutv2/ (468 files, 100% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| 404.html | html | source | compliant | yes | yes |  |
| agentsetup.sh | shell | source | compliant | yes | yes |  |
| assets/index-DMC9YjsP.css | css | source | compliant | yes | yes |  |
| assets/index-UbQ-77Ai.js | javascript | source | compliant | yes | yes |  |
| bio.html | html | source | compliant | yes | yes |  |
| blocks/3dcube/3dcube.css | css | source | compliant | yes | yes |  |
| blocks/3dcube/3dcube.js | javascript | source | compliant | yes | yes |  |
| blocks/3dcube/test.html | html | source | compliant | yes | yes |  |
| blocks/accordion/accordion.css | css | source | compliant | yes | yes |  |
| blocks/accordion/accordion.js | javascript | source | compliant | yes | yes |  |
| blocks/accordion/test.html | html | source | compliant | yes | yes |  |
| blocks/bio/bio.css | css | source | compliant | yes | yes |  |
| blocks/bio/bio.js | javascript | source | compliant | yes | yes |  |
| blocks/bio/test.html | html | source | compliant | yes | yes |  |
| blocks/bloglist/bloglist.css | css | source | compliant | yes | yes |  |
| blocks/bloglist/bloglist.js | javascript | source | compliant | yes | yes |  |
| blocks/bloglist/test.html | html | source | compliant | yes | yes |  |
| blocks/blogroll/blogroll.css | css | source | compliant | yes | yes |  |
| blocks/blogroll/blogroll.js | javascript | source | compliant | yes | yes |  |
| blocks/blogroll/test.html | html | source | compliant | yes | yes |  |
| blocks/cards/cards.css | css | source | compliant | yes | yes |  |
| blocks/cards/cards.js | javascript | source | compliant | yes | yes |  |
| blocks/cards/test.html | html | source | compliant | yes | yes |  |
| blocks/centreblock/centreblock.css | css | source | compliant | yes | yes |  |
| blocks/centreblock/centreblock.js | javascript | source | compliant | yes | yes |  |
| blocks/centreblock/test.html | html | source | compliant | yes | yes |  |
| blocks/code-expander/code-expander.css | css | source | compliant | yes | yes |  |
| blocks/code-expander/code-expander.js | javascript | source | compliant | yes | yes |  |
| blocks/code-expander/test.html | html | source | compliant | yes | yes |  |
| blocks/columns/columns.css | css | source | compliant | yes | yes |  |
| blocks/columns/columns.js | javascript | source | compliant | yes | yes |  |
| blocks/columns/test.html | html | source | compliant | yes | yes |  |
| blocks/comment/comment.css | css | source | compliant | yes | yes |  |
| blocks/comment/comment.js | javascript | source | compliant | yes | yes |  |
| blocks/comment/test.html | html | source | compliant | yes | yes |  |
| blocks/counter/counter.css | css | source | compliant | yes | yes |  |
| blocks/counter/counter.js | javascript | source | compliant | yes | yes |  |
| blocks/counter/test.html | html | source | compliant | yes | yes |  |
| blocks/dam/dam.css | css | source | compliant | yes | yes |  |
| blocks/dam/dam.js | javascript | source | compliant | yes | yes |  |
| blocks/dam/test.html | html | source | compliant | yes | yes |  |
| blocks/dashboard/dashboard.css | css | source | compliant | yes | yes |  |
| blocks/dashboard/dashboard.js | javascript | source | compliant | yes | yes |  |
| blocks/dashboard/test.html | html | source | compliant | yes | yes |  |
| blocks/dfs/dfs.css | css | source | compliant | yes | yes |  |
| blocks/dfs/dfs.js | javascript | source | compliant | yes | yes |  |
| blocks/dfs/test.html | html | source | compliant | yes | yes |  |
| blocks/dps/dps.css | css | source | compliant | yes | yes |  |
| blocks/dps/dps.js | javascript | source | compliant | yes | yes |  |
| blocks/dps/test.html | html | source | compliant | yes | yes |  |
| blocks/dynamic/dynamic.css | css | source | compliant | yes | yes |  |
| blocks/dynamic/dynamic.js | javascript | source | compliant | yes | yes |  |
| blocks/dynamic/test.html | html | source | compliant | yes | yes |  |
| blocks/embed/embed.css | css | source | compliant | yes | yes |  |
| blocks/embed/embed.js | javascript | source | compliant | yes | yes |  |
| blocks/embed/test.html | html | source | compliant | yes | yes |  |
| blocks/floating-alert/floating-alert.css | css | source | compliant | yes | yes |  |
| blocks/floating-alert/floating-alert.js | javascript | source | compliant | yes | yes |  |
| blocks/floating-alert/test.html | html | source | compliant | yes | yes |  |
| blocks/footer/footer.css | css | source | compliant | yes | yes |  |
| blocks/footer/footer.js | javascript | source | compliant | yes | yes |  |
| blocks/footer/test.html | html | source | compliant | yes | yes |  |
| blocks/fortunecookie/fortunecookie.css | css | source | compliant | yes | yes |  |
| blocks/fortunecookie/fortunecookie.js | javascript | source | compliant | yes | yes |  |
| blocks/fortunecookie/test.html | html | source | compliant | yes | yes |  |
| blocks/fragment/fragment.css | css | source | compliant | yes | yes |  |
| blocks/fragment/fragment.js | javascript | source | compliant | yes | yes |  |
| blocks/fragment/test.html | html | source | compliant | yes | yes |  |
| blocks/grid/grid.css | css | source | compliant | yes | yes |  |
| blocks/grid/grid.js | javascript | source | compliant | yes | yes |  |
| blocks/grid/test.html | html | source | compliant | yes | yes |  |
| blocks/header/header.css | css | source | compliant | yes | yes |  |
| blocks/header/header.js | javascript | source | compliant | yes | yes |  |
| blocks/header/test.html | html | source | compliant | yes | yes |  |
| blocks/helloworld/helloworld.css | css | source | compliant | yes | yes |  |
| blocks/helloworld/helloworld.js | javascript | source | compliant | yes | yes |  |
| blocks/helloworld/test.html | html | source | compliant | yes | yes |  |
| blocks/hero/hero.css | css | source | compliant | yes | yes |  |
| blocks/hero/hero.js | javascript | source | compliant | yes | yes |  |
| blocks/hero/test.html | html | source | compliant | yes | yes |  |
| blocks/index/index.css | css | source | compliant | yes | yes |  |
| blocks/index/index.js | javascript | source | compliant | yes | yes |  |
| blocks/index/test.html | html | source | compliant | yes | yes |  |
| blocks/inline-svg/inline-svg.css | css | source | compliant | yes | yes |  |
| blocks/inline-svg/inline-svg.js | javascript | source | compliant | yes | yes |  |
| blocks/inline-svg/test.html | html | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/ipynb-viewer.css | css | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/ipynb-viewer.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/overlay/footer.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/overlay/navigation-state.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/overlay/renderers/markdown-renderer.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/overlay/renderers/notebook-renderer.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/overlay/toolbar.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/overlay/unified-overlay.js | javascript | source | compliant | yes | yes |  |
| blocks/ipynb-viewer/test.html | html | source | compliant | yes | yes |  |
| blocks/markdown/markdown.css | css | source | compliant | yes | yes |  |
| blocks/markdown/markdown.js | javascript | source | compliant | yes | yes |  |
| blocks/markdown/test.html | html | source | compliant | yes | yes |  |
| blocks/modal/modal.css | css | source | compliant | yes | yes |  |
| blocks/modal/modal.js | javascript | source | compliant | yes | yes |  |
| blocks/modal/test.html | html | source | compliant | yes | yes |  |
| blocks/overlay/overlay.css | css | source | compliant | yes | yes |  |
| blocks/overlay/overlay.js | javascript | source | compliant | yes | yes |  |
| blocks/overlay/test.html | html | source | compliant | yes | yes |  |
| blocks/quote/quote.css | css | source | compliant | yes | yes |  |
| blocks/quote/quote.js | javascript | source | compliant | yes | yes |  |
| blocks/quote/test.html | html | source | compliant | yes | yes |  |
| blocks/raw/raw.css | css | source | compliant | yes | yes |  |
| blocks/raw/raw.js | javascript | source | compliant | yes | yes |  |
| blocks/raw/test.html | html | source | compliant | yes | yes |  |
| blocks/react-slide-builder/react-slide-builder.css | css | source | compliant | yes | yes |  |
| blocks/react-slide-builder/react-slide-builder.js | javascript | source | compliant | yes | yes |  |
| blocks/react-slide-builder/test.html | html | source | compliant | yes | yes |  |
| blocks/remove-icon-styles/remove-icon-styles.css | css | source | compliant | yes | yes |  |
| blocks/remove-icon-styles/remove-icon-styles.js | javascript | source | compliant | yes | yes |  |
| blocks/remove-icon-styles/test.html | html | source | compliant | yes | yes |  |
| blocks/returntotop/returntotop.css | css | source | compliant | yes | yes |  |
| blocks/returntotop/returntotop.js | javascript | source | compliant | yes | yes |  |
| blocks/returntotop/test.html | html | source | compliant | yes | yes |  |
| blocks/search/search.css | css | source | compliant | yes | yes |  |
| blocks/search/search.js | javascript | source | compliant | yes | yes |  |
| blocks/search/test.html | html | source | compliant | yes | yes |  |
| blocks/shoelace-card/shoelace-card.css | css | source | compliant | yes | yes |  |
| blocks/shoelace-card/shoelace-card.js | javascript | source | compliant | yes | yes |  |
| blocks/shoelace-card/test.html | html | source | compliant | yes | yes |  |
| blocks/shoelace-card/test2.html | html | source | compliant | yes | yes |  |
| blocks/shoelace/shoelace.css | css | source | compliant | yes | yes |  |
| blocks/shoelace/shoelace.js | javascript | source | compliant | yes | yes |  |
| blocks/shoelace/test.html | html | source | compliant | yes | yes |  |
| blocks/showcaser/showcaser.css | css | source | compliant | yes | yes |  |
| blocks/showcaser/showcaser.js | javascript | source | compliant | yes | yes |  |
| blocks/showcaser/test.html | html | source | compliant | yes | yes |  |
| blocks/slide-builder/slide-builder.css | css | source | compliant | yes | yes |  |
| blocks/slide-builder/slide-builder.js | javascript | source | compliant | yes | yes |  |
| blocks/slide-builder/test.html | html | source | compliant | yes | yes |  |
| blocks/spectrum-card/spectrum-card.css | css | source | compliant | yes | yes |  |
| blocks/spectrum-card/spectrum-card.js | javascript | source | compliant | yes | yes |  |
| blocks/spectrum-card/test.html | html | source | compliant | yes | yes |  |
| blocks/table/table.css | css | source | compliant | yes | yes |  |
| blocks/table/table.js | javascript | source | compliant | yes | yes |  |
| blocks/table/test.html | html | source | compliant | yes | yes |  |
| blocks/tabs/tabs.css | css | source | compliant | yes | yes |  |
| blocks/tabs/tabs.js | javascript | source | compliant | yes | yes |  |
| blocks/tabs/test.html | html | source | compliant | yes | yes |  |
| blocks/tags/tags.css | css | source | compliant | yes | yes |  |
| blocks/tags/tags.js | javascript | source | compliant | yes | yes |  |
| blocks/tags/test.html | html | source | compliant | yes | yes |  |
| blocks/text/test.html | html | source | compliant | yes | yes |  |
| blocks/text/text.css | css | source | compliant | yes | yes |  |
| blocks/text/text.js | javascript | source | compliant | yes | yes |  |
| blocks/video/test.html | html | source | compliant | yes | yes |  |
| blocks/video/video.css | css | source | compliant | yes | yes |  |
| blocks/video/video.js | javascript | source | compliant | yes | yes |  |
| blocks/view-myblog/test.html | html | source | compliant | yes | yes |  |
| blocks/view-myblog/view-myblog.css | css | source | compliant | yes | yes |  |
| blocks/view-myblog/view-myblog.js | javascript | source | compliant | yes | yes |  |
| blocks/vue-slide-builder/test.html | html | source | compliant | yes | yes |  |
| blocks/vue-slide-builder/vue-slide-builder.css | css | source | compliant | yes | yes |  |
| blocks/vue-slide-builder/vue-slide-builder.js | javascript | source | compliant | yes | yes |  |
| blogs/mx/about.claude.code.html | html | source | compliant | yes | yes |  |
| blogs/mx/about.claude.sonnet.4.5.html | html | source | compliant | yes | yes |  |
| blogs/mx/about.microsoft.copilot.html | html | source | compliant | yes | yes |  |
| blogs/mx/about.tom.cranstoun.html | html | source | compliant | yes | yes |  |
| blogs/mx/ai-assistant-side-notices.html | html | source | compliant | yes | yes |  |
| blogs/mx/claude-joins-mx-community.html | html | source | compliant | yes | yes |  |
| blogs/mx/data-sovereignty.html | html | source | compliant | yes | yes |  |
| blogs/mx/designing-workflows-for-humans-and-machines.css | css | source | compliant | yes | yes |  |
| blogs/mx/designing-workflows-for-humans-and-machines.html | html | source | compliant | yes | yes |  |
| blogs/mx/machine-experience-adding-metadata.html | html | source | compliant | yes | yes |  |
| blogs/mx/mx-a-new-role.html | html | source | compliant | yes | yes |  |
| blogs/mx/mx-contribution-guidelines.html | html | source | compliant | yes | yes |  |
| blogs/mx/mx-manifesto.html | html | source | compliant | yes | yes |  |
| blogs/mx/shared-mx.css | css | source | compliant | yes | yes |  |
| blogs/mx/what-is-machine-experience.html | html | source | compliant | yes | yes |  |
| build/spectrum-card/dist/spectrum-card.js | javascript | source | compliant | yes | yes |  |
| build/spectrum-card/spectrum-card.js | javascript | source | compliant | yes | yes |  |
| build/spectrum-card/test.html | html | source | compliant | yes | yes |  |
| build/spectrum-card/vite.config.js | javascript | source | compliant | yes | yes |  |
| cloudflare/files/cloudflare-worker.js | javascript | source | compliant | yes | yes |  |
| cloudflare/files/cloudflare-worker.test.js | javascript | test | compliant | yes | yes |  |
| cloudflare/files/test-local-html.js | javascript | source | compliant | yes | yes |  |
| cloudflare/files/vitest.config.js | javascript | source | compliant | yes | yes |  |
| cloudflare/test-rendered.html | html | source | compliant | yes | yes |  |
| cloudflare/test.html | html | source | compliant | yes | yes |  |
| config/config.js | javascript | source | compliant | yes | yes |  |
| faq.css | css | source | compliant | yes | yes |  |
| faq.html | html | source | compliant | yes | yes |  |
| googleec3acd01d043bece.html | html | source | missing | no | no | No structured metadata found |
| head.html | html | source | missing | no | no | No structured metadata found |
| index.html | html | source | compliant | yes | yes |  |
| insert-variables.sh | shell | source | compliant | yes | yes |  |
| invisible-users/appendix-a.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix-b.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix-c.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix-d.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix-e.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix-f.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix-g.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix-h.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix-i.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix-index.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix-j.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix-k.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix-l.html | html | source | compliant | yes | yes |  |
| invisible-users/appendix.css | css | source | compliant | yes | yes |  |
| invisible-users/back-cover.html | html | source | compliant | yes | yes |  |
| invisible-users/book.html | html | source | compliant | yes | yes |  |
| invisible-users/faq.html | html | source | compliant | yes | yes |  |
| invisible-users/for-reviewers.css | css | source | compliant | yes | yes |  |
| invisible-users/for-reviewers.html | html | source | compliant | yes | yes |  |
| invisible-users/index.html | html | source | compliant | yes | yes |  |
| invisible-users/news.html | html | source | compliant | yes | yes |  |
| invisible-users/notebook.html | html | source | compliant | yes | yes |  |
| invisible-users/site/404.html | html | source | compliant | yes | yes |  |
| invisible-users/site/about.html | html | source | compliant | yes | yes |  |
| invisible-users/site/article.html | html | source | compliant | yes | yes |  |
| invisible-users/site/author.html | html | source | compliant | yes | yes |  |
| invisible-users/site/blog-post.html | html | source | compliant | yes | yes |  |
| invisible-users/site/checkout.html | html | source | compliant | yes | yes |  |
| invisible-users/site/collection.html | html | source | compliant | yes | yes |  |
| invisible-users/site/consulting.html | html | source | compliant | yes | yes |  |
| invisible-users/site/contact.html | html | source | compliant | yes | yes |  |
| invisible-users/site/css/styles.css | css | source | compliant | yes | yes |  |
| invisible-users/site/event.html | html | source | compliant | yes | yes |  |
| invisible-users/site/faq.html | html | source | compliant | yes | yes |  |
| invisible-users/site/index.html | html | source | compliant | yes | yes |  |
| invisible-users/site/js/common.js | javascript | source | compliant | yes | yes |  |
| invisible-users/site/login.html | html | source | compliant | yes | yes |  |
| invisible-users/site/portfolio.html | html | source | compliant | yes | yes |  |
| invisible-users/site/pricing.html | html | source | compliant | yes | yes |  |
| invisible-users/site/privacy.html | html | source | compliant | yes | yes |  |
| invisible-users/site/product.html | html | source | compliant | yes | yes |  |
| invisible-users/site/sales.html | html | source | compliant | yes | yes |  |
| invisible-users/site/search.html | html | source | compliant | yes | yes |  |
| invisible-users/site/team.html | html | source | compliant | yes | yes |  |
| invisible-users/site/testimonials.html | html | source | compliant | yes | yes |  |
| lottery.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/about.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/about.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/accessibility-ai-convergence.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/accessibility-ai-convergence.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/benefits-of-mx.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/benefits-of-mx.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/common-mistakes.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/common-mistakes.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/contact.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/contact.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/explicit-over-implicit.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/explicit-over-implicit.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/implementation-examples.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/implementation-examples.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/index.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/index.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/key-principles.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/key-principles.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/our-approach.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/our-approach.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/our-services.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/our-services.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/what-is-mx.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/what-is-mx.html | html | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/why-mx-matters.css | css | source | compliant | yes | yes |  |
| mx/cog-nova-mx-website/why-mx-matters.html | html | source | compliant | yes | yes |  |
| mx/coming-soon.css | css | source | compliant | yes | yes |  |
| mx/coming-soon.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/about.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/about.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/accessibility-ai-convergence.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/accessibility-ai-convergence.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/benefits-of-mx.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/benefits-of-mx.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/common-mistakes.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/common-mistakes.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/contact.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/contact.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/explicit-over-implicit.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/explicit-over-implicit.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/implementation-examples.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/implementation-examples.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/index.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/index.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/key-principles.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/key-principles.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/our-approach.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/our-approach.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/our-services.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/our-services.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/what-is-mx.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/what-is-mx.html | html | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/why-mx-matters.css | css | source | compliant | yes | yes |  |
| mx/demo/cog-nova-mx/why-mx-matters.html | html | source | compliant | yes | yes |  |
| mx/demo/conference/assets/script.js | javascript | source | compliant | yes | yes |  |
| mx/demo/conference/assets/style.css | css | source | compliant | yes | yes |  |
| mx/demo/conference/de/index.cog.html | html | source | compliant | yes | yes |  |
| mx/demo/conference/en/index.cog.html | html | source | compliant | yes | yes |  |
| mx/demo/conference/index.html | html | source | compliant | yes | yes |  |
| mx/demo/dotfusion/about.html | html | source | compliant | yes | yes |  |
| mx/demo/dotfusion/assets/css/styles.css | css | source | compliant | yes | yes |  |
| mx/demo/dotfusion/contact.html | html | source | compliant | yes | yes |  |
| mx/demo/dotfusion/index.html | html | source | compliant | yes | yes |  |
| mx/demo/dotfusion/our-work.html | html | source | compliant | yes | yes |  |
| mx/demo/lpc/about.html | html | source | compliant | yes | yes |  |
| mx/demo/lpc/assets/css/styles.css | css | source | compliant | yes | yes |  |
| mx/demo/lpc/contact.html | html | source | compliant | yes | yes |  |
| mx/demo/lpc/index.html | html | source | compliant | yes | yes |  |
| mx/demo/lpc/reviews.html | html | source | compliant | yes | yes |  |
| mx/demo/lpc/services/business-stationery.html | html | source | compliant | yes | yes |  |
| mx/demo/lpc/services/design-branding.html | html | source | compliant | yes | yes |  |
| mx/demo/lpc/services/event-stationery.html | html | source | compliant | yes | yes |  |
| mx/demo/lpc/services/garment-printing.html | html | source | compliant | yes | yes |  |
| mx/demo/lpc/services/index.html | html | source | compliant | yes | yes |  |
| mx/demo/lpc/services/marketing-materials.html | html | source | compliant | yes | yes |  |
| mx/demo/lpc/services/online-merch-shops.html | html | source | compliant | yes | yes |  |
| mx/demo/lpc/services/web-services.html | html | source | compliant | yes | yes |  |
| mx/demo/media219/assets/css/styles.css | css | source | compliant | yes | yes |  |
| mx/demo/media219/contact.html | html | source | compliant | yes | yes |  |
| mx/demo/media219/index.html | html | source | compliant | yes | yes |  |
| mx/demo/media219/work.html | html | source | compliant | yes | yes |  |
| mx/demo/salva/assets/script.js | javascript | source | compliant | yes | yes |  |
| mx/demo/salva/assets/style.css | css | source | compliant | yes | yes |  |
| mx/demo/salva/en/index.cog.html | html | source | compliant | yes | yes |  |
| mx/demo/salva/es/index.cog.html | html | source | compliant | yes | yes |  |
| mx/demo/salva/index.html | html | source | compliant | yes | yes |  |
| mx/mx-principles-menu.css | css | source | compliant | yes | yes |  |
| mx/mx-principles-menu.html | html | source | compliant | yes | yes |  |
| mx/possible-index.html | html | source | compliant | yes | yes |  |
| mx/principles-changed-how-i-build.css | css | source | compliant | yes | yes |  |
| mx/principles-changed-how-i-build.html | html | source | compliant | yes | yes |  |
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
| reginald/index.html | html | source | compliant | yes | yes |  |
| reginald/reginald-website-index.html | html | source | compliant | yes | yes |  |
| scripts/aem.js | javascript | source | compliant | yes | yes |  |
| scripts/delayed.js | javascript | source | compliant | yes | yes |  |
| scripts/generate-invisible-users-sitemap.js | javascript | source | compliant | yes | yes |  |
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
| styles/styles.css | css | source | compliant | yes | yes |  |
| TEST-TWO.css | css | source | compliant | yes | yes |  |
| TEST-TWO.html | html | source | compliant | yes | yes |  |
| tools/sidekick/library.html | html | source | compliant | yes | yes |  |
| vue-slides.html | html | source | compliant | yes | yes |  |
| web/appendix-a.html | html | source | compliant | yes | yes |  |
| web/appendix-b.html | html | source | compliant | yes | yes |  |
| web/appendix-c.html | html | source | compliant | yes | yes |  |
| web/appendix-d.html | html | source | compliant | yes | yes |  |
| web/appendix-e.html | html | source | compliant | yes | yes |  |
| web/appendix-f.html | html | source | compliant | yes | yes |  |
| web/appendix-g.html | html | source | compliant | yes | yes |  |
| web/appendix-h.html | html | source | compliant | yes | yes |  |
| web/appendix-i.html | html | source | compliant | yes | yes |  |
| web/appendix-index.html | html | source | compliant | yes | yes |  |
| web/appendix-j.html | html | source | compliant | yes | yes |  |
| web/appendix-k.html | html | source | compliant | yes | yes |  |
| web/appendix-l.html | html | source | compliant | yes | yes |  |
| web/appendix.css | css | source | compliant | yes | yes |  |
| web/back-cover.html | html | source | compliant | yes | yes |  |
| web/book-product-page.css | css | source | compliant | yes | yes |  |
| web/book-product-page.html | html | source | compliant | yes | yes |  |
| web/book.html | html | source | compliant | yes | yes |  |
| web/faq.html | html | source | compliant | yes | yes |  |
| web/for-reviewers.css | css | source | compliant | yes | yes |  |
| web/for-reviewers.html | html | source | compliant | yes | yes |  |
| web/index.html | html | source | compliant | yes | yes |  |
| web/news.html | html | source | compliant | yes | yes |  |
| web/reference-implementations/lpc/about.html | html | reference | compliant | yes | yes |  |
| web/reference-implementations/lpc/assets/css/styles.css | css | reference | compliant | yes | yes |  |
| web/reference-implementations/lpc/contact.html | html | reference | compliant | yes | yes |  |
| web/reference-implementations/lpc/index.html | html | reference | compliant | yes | yes |  |
| web/reference-implementations/lpc/reviews.html | html | reference | compliant | yes | yes |  |
| web/reference-implementations/lpc/services/business-stationery.html | html | reference | compliant | yes | yes |  |
| web/reference-implementations/lpc/services/design-branding.html | html | reference | compliant | yes | yes |  |
| web/reference-implementations/lpc/services/event-stationery.html | html | reference | compliant | yes | yes |  |
| web/reference-implementations/lpc/services/garment-printing.html | html | reference | compliant | yes | yes |  |
| web/reference-implementations/lpc/services/index.html | html | reference | compliant | yes | yes |  |
| web/reference-implementations/lpc/services/marketing-materials.html | html | reference | compliant | yes | yes |  |
| web/reference-implementations/lpc/services/online-merch-shops.html | html | reference | compliant | yes | yes |  |
| web/reference-implementations/lpc/services/web-services.html | html | reference | compliant | yes | yes |  |
| web/site/404.html | html | source | compliant | yes | yes |  |
| web/site/about.html | html | source | compliant | yes | yes |  |
| web/site/article.html | html | source | compliant | yes | yes |  |
| web/site/author.html | html | source | compliant | yes | yes |  |
| web/site/blog-post.html | html | source | compliant | yes | yes |  |
| web/site/checkout.html | html | source | compliant | yes | yes |  |
| web/site/collection.html | html | source | compliant | yes | yes |  |
| web/site/consulting.html | html | source | compliant | yes | yes |  |
| web/site/contact.html | html | source | compliant | yes | yes |  |
| web/site/css/styles.css | css | source | compliant | yes | yes |  |
| web/site/event.html | html | source | compliant | yes | yes |  |
| web/site/faq.html | html | source | compliant | yes | yes |  |
| web/site/index.html | html | source | compliant | yes | yes |  |
| web/site/js/common.js | javascript | source | compliant | yes | yes |  |
| web/site/login.html | html | source | compliant | yes | yes |  |
| web/site/portfolio.html | html | source | compliant | yes | yes |  |
| web/site/pricing.html | html | source | compliant | yes | yes |  |
| web/site/privacy.html | html | source | compliant | yes | yes |  |
| web/site/product.html | html | source | compliant | yes | yes |  |
| web/site/sales.html | html | source | compliant | yes | yes |  |
| web/site/search.html | html | source | compliant | yes | yes |  |
| web/site/team.html | html | source | compliant | yes | yes |  |
| web/site/testimonials.html | html | source | compliant | yes | yes |  |

### datalake/ (93 files, 96% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| assets/presentations/historical/members-call-21-jan-26/talk-slides.js | javascript | source | compliant | yes | yes |  |
| assets/presentations/maxine-vision-deck/maxine-slides.js | javascript | source | compliant | yes | yes |  |
| assets/presentations/template/talk-adobe.js | javascript | source | compliant | yes | yes |  |
| assets/presentations/template/talk-slides.js | javascript | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-a.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-b.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-c.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-d.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-e.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-f.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-g.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-h.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-i.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-index.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-j.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-k.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix-l.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/appendix.css | css | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/back-cover.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/book-product-page.css | css | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/book-product-page.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/book.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/faq.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/for-reviewers.css | css | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/for-reviewers.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/index.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/news.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/404.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/about.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/article.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/author.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/blog-post.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/checkout.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/collection.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/consulting.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/contact.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/css/styles.css | css | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/event.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/faq.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/index.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/js/common.js | javascript | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/login.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/portfolio.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/pricing.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/privacy.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/product.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/sales.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/search.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/team.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-appendices/web/site/testimonials.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/index.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| publications/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/script.js | javascript | source | missing | no | no | No structured metadata found |
| publications/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/style.css | css | source | missing | no | no | No structured metadata found |
| publications/mx-books/mx-code-examples/agent-friendly-starter-kit/good/index.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/agent-friendly-starter-kit/good/style.css | css | source | missing | no | no | No structured metadata found |
| publications/mx-books/mx-code-examples/examples/delegation-management-ui.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/eal-delegation-worker.js | javascript | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/components/data-tables.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/components/dialog-modal.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/components/pricing-display.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/ecommerce/order-confirmation.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/ecommerce/product-page.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/ecommerce/shipping-options.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/ecommerce/shopping-cart.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/forms/disabled-button.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/forms/multi-step-wizard.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/forms/validation-form.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/navigation/breadcrumbs.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/navigation/filters.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/navigation/search-results.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/state/authentication.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/state/error-display.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/html-examples/state/loading-state.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/monitoring/analytics-tracking.js | javascript | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/monitoring/server-log-analysis.sh | shell | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/nextjs/dynamic-query-index.js | javascript | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/nextjs/next.config.js | javascript | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/static-site/generate-index.js | javascript | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/validation/verify-ai-production.js | javascript | source | compliant | yes | yes |  |
| publications/mx-books/mx-code-examples/examples/validation/verify-ai-simple.js | javascript | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-a.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-b.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-c.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-d.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-e.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-f.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-g.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-h.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-i.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-index.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-j.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-k.html | html | source | compliant | yes | yes |  |
| publications/mx-books/mx-codex/web/appendix-l.html | html | source | compliant | yes | yes |  |

### mx-audit/ (80 files, 98% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| .cache/rendered/182ccedb33a9e03fbf1079b209da1a31.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| .cache/served/182ccedb33a9e03fbf1079b209da1a31.html | html | source | partial | yes | no | Missing: <meta name="mx:*"> or <link rel="mx"> |
| index.js | javascript | source | compliant | yes | yes |  |
| src/bulk-audit.js | javascript | source | compliant | yes | yes |  |
| src/collectors/llmCollector.js | javascript | source | compliant | yes | yes |  |
| src/config/defaults.js | javascript | source | compliant | yes | yes |  |
| src/config/env.js | javascript | source | compliant | yes | yes |  |
| src/config/options.js | javascript | source | compliant | yes | yes |  |
| src/config/scoringWeights.js | javascript | source | compliant | yes | yes |  |
| src/config/validation.js | javascript | source | compliant | yes | yes |  |
| src/core/AuditContext.js | javascript | source | compliant | yes | yes |  |
| src/main.js | javascript | source | compliant | yes | yes |  |
| src/reporters/llmFeedback.js | javascript | source | compliant | yes | yes |  |
| src/scorers/llmScorer.js | javascript | source | compliant | yes | yes |  |
| src/utils/accessibilityReport.js | javascript | source | compliant | yes | yes |  |
| src/utils/browserPool.js | javascript | source | compliant | yes | yes |  |
| src/utils/caching.js | javascript | source | compliant | yes | yes |  |
| src/utils/contentMetrics.js | javascript | source | compliant | yes | yes |  |
| src/utils/csvFormatter.js | javascript | source | compliant | yes | yes |  |
| src/utils/executionHelpers.js | javascript | source | compliant | yes | yes |  |
| src/utils/historicalComparison.js | javascript | source | compliant | yes | yes |  |
| src/utils/linkAnalyzer.js | javascript | source | compliant | yes | yes |  |
| src/utils/llmMetrics.js | javascript | source | compliant | yes | yes |  |
| src/utils/llmsTxtParser.js | javascript | source | compliant | yes | yes |  |
| src/utils/mediaMetrics.js | javascript | source | compliant | yes | yes |  |
| src/utils/metricsCommon.js | javascript | source | compliant | yes | yes |  |
| src/utils/metricsUpdater.js | javascript | source | compliant | yes | yes |  |
| src/utils/networkUtils.js | javascript | source | compliant | yes | yes |  |
| src/utils/pa11yRunner.js | javascript | source | compliant | yes | yes |  |
| src/utils/pageAnalyzer.js | javascript | source | compliant | yes | yes |  |
| src/utils/pageAnalyzerHelpers.js | javascript | source | compliant | yes | yes |  |
| src/utils/pageTypeDetector.js | javascript | source | compliant | yes | yes |  |
| src/utils/patternExtraction.js | javascript | source | compliant | yes | yes |  |
| src/utils/performanceAnalyzer.js | javascript | source | compliant | yes | yes |  |
| src/utils/rateLimiter.js | javascript | source | compliant | yes | yes |  |
| src/utils/reports.js | javascript | source | compliant | yes | yes |  |
| src/utils/reportUtils/accessibilityAnalysis.js | javascript | source | compliant | yes | yes |  |
| src/utils/reportUtils/contentAnalysis.js | javascript | source | compliant | yes | yes |  |
| src/utils/reportUtils/dashboardGenerator.js | javascript | source | compliant | yes | yes |  |
| src/utils/reportUtils/executiveSummary.js | javascript | source | compliant | yes | yes |  |
| src/utils/reportUtils/formatUtils.js | javascript | source | compliant | yes | yes |  |
| src/utils/reportUtils/imageAnalysis.js | javascript | source | compliant | yes | yes |  |
| src/utils/reportUtils/linkAnalysis.js | javascript | source | compliant | yes | yes |  |
| src/utils/reportUtils/llmReports.js | javascript | source | compliant | yes | yes |  |
| src/utils/reportUtils/reportGenerators.js | javascript | source | compliant | yes | yes |  |
| src/utils/reportUtils/schemaReports.js | javascript | source | compliant | yes | yes |  |
| src/utils/reportUtils/securityAnalysis.js | javascript | source | compliant | yes | yes |  |
| src/utils/results.js | javascript | source | compliant | yes | yes |  |
| src/utils/robotsCompliance.js | javascript | source | compliant | yes | yes |  |
| src/utils/robotsFetcher.js | javascript | source | compliant | yes | yes |  |
| src/utils/robotsTxtParser.js | javascript | source | compliant | yes | yes |  |
| src/utils/schemaAnalysis.js | javascript | source | compliant | yes | yes |  |
| src/utils/schemaValidator.js | javascript | source | compliant | yes | yes |  |
| src/utils/schemaVersion.js | javascript | source | compliant | yes | yes |  |
| src/utils/seoScoring.js | javascript | source | compliant | yes | yes |  |
| src/utils/setup.js | javascript | source | compliant | yes | yes |  |
| src/utils/shutdownHandler.js | javascript | source | compliant | yes | yes |  |
| src/utils/sitemap.js | javascript | source | compliant | yes | yes |  |
| src/utils/sitemapParser.js | javascript | source | compliant | yes | yes |  |
| src/utils/sitemapUtils.js | javascript | source | compliant | yes | yes |  |
| src/utils/technicalMetrics.js | javascript | source | compliant | yes | yes |  |
| src/utils/technologyDetection.js | javascript | source | compliant | yes | yes |  |
| src/utils/urlMetrics.js | javascript | source | compliant | yes | yes |  |
| src/utils/urlProcessor.js | javascript | source | compliant | yes | yes |  |
| src/utils/urlUtils.js | javascript | source | compliant | yes | yes |  |
| test/formatUtils.test.js | javascript | test | compliant | yes | yes |  |
| test/goldenMaster.test.js | javascript | test | compliant | yes | yes |  |
| test/helpers/assertions.js | javascript | test | compliant | yes | yes |  |
| test/helpers/mockResults.js | javascript | test | compliant | yes | yes |  |
| test/integration/pipeline.test.js | javascript | test | compliant | yes | yes |  |
| test/setup.js | javascript | test | compliant | yes | yes |  |
| test/utils/browserPool.test.js | javascript | test | compliant | yes | yes |  |
| test/utils/dynamicContent.test.js | javascript | test | compliant | yes | yes |  |
| test/utils/historicalComparison.test.js | javascript | test | compliant | yes | yes |  |
| test/utils/llmMetrics.test.js | javascript | test | compliant | yes | yes |  |
| test/utils/llmsQuality.test.js | javascript | test | compliant | yes | yes |  |
| test/utils/patternExtraction.test.js | javascript | test | compliant | yes | yes |  |
| test/utils/rateLimiter.test.js | javascript | test | compliant | yes | yes |  |
| test/utils/robotsQuality.test.js | javascript | test | compliant | yes | yes |  |
| test/utils/sitemap.test.js | javascript | test | compliant | yes | yes |  |

### mx-canon/ (82 files, 100% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| _template/deliverables/landing-page.html | html | source | compliant | yes | yes |  |
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
| mx-maxine-lives/communications/ready-to-publish/mx-principles-menu.css | css | source | compliant | yes | yes |  |
| mx-maxine-lives/communications/ready-to-publish/mx-principles-menu.html | html | source | compliant | yes | yes |  |
| mx-maxine-lives/tests/test-route-decorator.sh | shell | test | compliant | yes | yes |  |
| mx-os/deliverables/mx-script-inspect.sh | shell | source | compliant | yes | yes |  |
| mx-os/deliverables/mx-script-template.sh | shell | source | compliant | yes | yes |  |
| mx-the-gathering/deliverables/allabout-the-gathering.html | html | source | compliant | yes | yes |  |
| mx-the-gathering/deliverables/landing-page.html | html | source | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/los-granainos/audit/capture-site.js | javascript | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/los-granainos/los-granainos-mx-reference.cog.html | html | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/los-granainos/los-granainos-single-lang.cog.html | html | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/templates/audit-system/enhanced-audit.js | javascript | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/templates/audit-system/lib/asset-cacher.js | javascript | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/templates/audit-system/lib/css-analyzer.js | javascript | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/templates/audit-system/lib/dom-extractor.js | javascript | reference | compliant | yes | yes |  |
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
| mx-the-gathering/reference-implementations/templates/index-redirect-template.html | html | reference | compliant | yes | yes |  |
| mx-the-gathering/reference-implementations/templates/n-lang-business-template.cog.html | html | reference | compliant | yes | yes |  |
| mx-the-gathering/web/about.html | html | source | compliant | yes | yes |  |
| mx-the-gathering/web/index.html | html | source | compliant | yes | yes |  |
| mx-the-gathering/web/shared-gathering.css | css | source | compliant | yes | yes |  |

### mx-crm/ (5 files, 100% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| dotfusion/data/about.html | html | source | compliant | yes | yes |  |
| dotfusion/data/assets/css/styles.css | css | source | compliant | yes | yes |  |
| dotfusion/data/contact.html | html | source | compliant | yes | yes |  |
| dotfusion/data/index.html | html | source | compliant | yes | yes |  |
| dotfusion/data/our-work.html | html | source | compliant | yes | yes |  |

### mx-maxine-app/ (28 files, 96% compliant)

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
| demo/index.html | html | source | compliant | yes | yes |  |
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
| src/index.html | html | source | compliant | yes | yes |  |
| src/js/app.js | javascript | source | compliant | yes | yes |  |
| src/splash.html | html | source | compliant | yes | yes |  |
| test/joymaker.test.js | javascript | test | compliant | yes | yes |  |

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

### mx-reginald/ (20 files, 100% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| scripts/cog-registry/query.js | javascript | source | compliant | yes | yes |  |
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
| scripts/robots-txt/ai-stance.sh | shell | source | compliant | yes | yes |  |
| scripts/robots-txt/analyze.sh | shell | source | compliant | yes | yes |  |
| scripts/schema/extract.sh | shell | source | compliant | yes | yes |  |
| scripts/schema/validate.sh | shell | source | compliant | yes | yes |  |
| scripts/semantic-html/outline.sh | shell | source | compliant | yes | yes |  |
| scripts/semantic-html/validate.sh | shell | source | compliant | yes | yes |  |
| scripts/sitemap/analyze.sh | shell | source | compliant | yes | yes |  |
| scripts/validate-cog/check.sh | shell | source | compliant | yes | yes |  |
| scripts/validate-cogs.js | javascript | source | compliant | yes | yes |  |

### scripts/ (125 files, 99% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| add-mx-metadata-to-manuals.js | javascript | source | compliant | yes | yes |  |
| appendix-nav-header.html | html | source | missing | no | no | No structured metadata found |
| audit-carrier-compliance.js | javascript | source | compliant | yes | yes |  |
| audit-html-baseline.js | javascript | source | compliant | yes | yes |  |
| audit-html-compare.js | javascript | source | compliant | yes | yes |  |
| audit-html-patterns.js | javascript | source | compliant | yes | yes |  |
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
| cog-field-rules.js | javascript | source | compliant | yes | yes |  |
| cog-tools.js | javascript | source | compliant | yes | yes |  |
| cogify.js | javascript | source | compliant | yes | yes |  |
| compare-backup-hashes.sh | shell | source | compliant | yes | yes |  |
| embed-pdf-metadata.js | javascript | source | compliant | yes | yes |  |
| enhance-appendix-html.js | javascript | source | compliant | yes | yes |  |
| fix-carrier-metadata.js | javascript | source | compliant | yes | yes |  |
| generate-appendix-html.sh | shell | source | compliant | yes | yes |  |
| generate-content-html.js | javascript | source | compliant | yes | yes |  |
| generate-document-pdf.js | javascript | source | compliant | yes | yes |  |
| generate-illustrations.sh | shell | source | compliant | yes | yes |  |
| generate-sitemap.js | javascript | source | compliant | yes | yes |  |
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
| lib/html-audit-utils.js | javascript | source | compliant | yes | yes |  |
| lint-md-all.js | javascript | source | compliant | yes | yes |  |
| migrate-to-v1.sh | shell | source | compliant | yes | yes |  |
| mode-lib.sh | shell | source | compliant | yes | yes |  |
| mx-about-recon.sh | shell | source | compliant | yes | yes |  |
| mx-audit-recon.sh | shell | source | compliant | yes | yes |  |
| mx-audit.js | javascript | source | compliant | yes | yes |  |
| mx-nav-server/lib/scanner.js | javascript | source | compliant | yes | yes |  |
| mx-nav-server/lib/search.js | javascript | source | compliant | yes | yes |  |
| mx-nav-server/public/app.js | javascript | source | compliant | yes | yes |  |
| mx-nav-server/public/index.html | html | source | compliant | yes | yes |  |
| mx-nav-server/server.js | javascript | source | compliant | yes | yes |  |
| mx-pdf.sh | shell | source | compliant | yes | yes |  |
| mx-rename-tracker.js | javascript | source | compliant | yes | yes |  |
| mx-show.sh | shell | source | compliant | yes | yes |  |
| mx-spell.sh | shell | source | compliant | yes | yes |  |
| mx-validator.js | javascript | source | compliant | yes | yes |  |
| mx/enhance-from-readme.js | javascript | source | compliant | yes | yes |  |
| mx/mx-compliance.js | javascript | source | compliant | yes | yes |  |
| mx/mx-effective.js | javascript | source | compliant | yes | yes |  |
| mx/mx-yaml-generator.js | javascript | source | compliant | yes | yes |  |
| onboard-team-member.sh | shell | source | compliant | yes | yes |  |
| organize-think-content.js | javascript | source | compliant | yes | yes |  |
| parse-mxignore.js | javascript | source | compliant | yes | yes |  |
| preprocess-ascii-to-svg.js | javascript | source | compliant | yes | yes |  |
| qr-code-generator/config/urls.js | javascript | source | compliant | yes | yes |  |
| qr-code-generator/examples/basic-usage.sh | shell | source | compliant | yes | yes |  |
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
| reference-tools/check-parity.js | javascript | source | compliant | yes | yes |  |
| reference-tools/deploy-multilingual.js | javascript | source | compliant | yes | yes |  |
| reference-tools/generate-multilingual.js | javascript | source | compliant | yes | yes |  |
| reference-tools/generate-sitemap.js | javascript | source | compliant | yes | yes |  |
| reference-tools/sync-assets.js | javascript | source | compliant | yes | yes |  |
| reference-tools/validate-multilingual.js | javascript | source | compliant | yes | yes |  |
| reginald-static-gen.js | javascript | source | compliant | yes | yes |  |
| registry-add.js | javascript | source | compliant | yes | yes |  |
| registry-query.js | javascript | source | compliant | yes | yes |  |
| registry-update.js | javascript | source | compliant | yes | yes |  |
| registry-validate.js | javascript | source | compliant | yes | yes |  |
| rename-prompting-to-runbook.sh | shell | source | compliant | yes | yes |  |
| rewrite-runbook-values.sh | shell | source | compliant | yes | yes |  |
| route-sync.js | javascript | source | compliant | yes | yes |  |
| validate-action-cogs.sh | shell | source | compliant | yes | yes |  |
| validate-cog-yaml.sh | shell | source | compliant | yes | yes |  |
| validate-demo.js | javascript | source | compliant | yes | yes |  |

### tests/ (4 files, 100% compliant)

| File | Carrier | Category | Status | Layer 1 | Layer 2 | Notes |
|------|---------|----------|--------|---------|---------|-------|
| test-illustrations.js | javascript | test | compliant | yes | yes |  |
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

- **89** fully compliant (Layer 1 + Layer 2)
- **0** partially compliant (native metadata but no MX identity)
- **0** missing all metadata

### JavaScript (.js)

- **288** fully compliant (Layer 1 + Layer 2)
- **0** partially compliant (native metadata but no MX identity)
- **2** missing all metadata

**Files missing all metadata:**

- datalake/manuscripts/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/script.js
- mx-maxine-app/pwa/jsQR.js

### HTML (.html)

- **321** fully compliant (Layer 1 + Layer 2)
- **3** partially compliant (native metadata but no MX identity)
- **3** missing all metadata

**Files missing all metadata:**

- allaboutv2/googleec3acd01d043bece.html
- allaboutv2/head.html
- scripts/appendix-nav-header.html

### CSS (.css)

- **135** fully compliant (Layer 1 + Layer 2)
- **0** partially compliant (native metadata but no MX identity)
- **2** missing all metadata

**Files missing all metadata:**

- datalake/manuscripts/mx-books/mx-code-examples/agent-friendly-starter-kit/bad/style.css
- datalake/manuscripts/mx-books/mx-code-examples/agent-friendly-starter-kit/good/style.css

---

## Remediation Priorities

### Priority 1 — Source files in scripts/ and mx-canon/

High-value, hand-maintained files that should be exemplars of carrier format compliance.

**1 files** need attention.

### Priority 2 — Generator updates

**15 generated files** need their generators updated to emit MX metadata.

### Priority 3 — Submodule source files

**3 files** in submodules need attention (requires separate commits).

### Priority 4 — Test and example files

**0 files** — lower priority, not customer-facing.

---

*Carrier Format Compliance Audit — field-dictionary.cog.md v4.0. Design for both.*
