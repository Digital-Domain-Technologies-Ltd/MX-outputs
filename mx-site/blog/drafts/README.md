# Blog Drafts — Private

HTML placed in this directory is **not** indexed by any MX discovery surface:

- Excluded from `mx-outputs/mx-site/blog/sitemap.xml` (`scripts/update-blog-sitemap.cjs` skips this folder)
- Excluded from `mx-outputs/mx-site/llms.txt` and `llms-full.txt` (`scripts/generate-llms-full-txt.cjs` skip-list)
- Disallowed in `mx-outputs/mx-site/robots.txt` (`Disallow: /blog/drafts/`)
- Never referenced by `scripts/sync-blog-discovery.cjs` (reads the blog dir flat)

Use this folder for work-in-progress posts, internal previews, and pages you want live on the worker but invisible to crawlers, agents, and the curated index. When a draft is ready to publish, move it up one level to `mx-outputs/mx-site/blog/` and re-run the discovery sync.

> Note: disallow rules depend on well-behaved crawlers. Do not place secrets here — treat it as obscurity, not security.
