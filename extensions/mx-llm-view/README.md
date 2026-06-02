# MX: LLM View

A Chrome / Edge browser extension. Click the icon on any page and the current viewport is replaced with exactly what the server returns when asked for markdown — the raw response body, status, and content-type verdict, all in the browser window.

No popup. The page becomes the view.

## What it shows

The current tab is replaced with a full-page view containing:

- **HTTP status** - the response code the server gave.
- **Content-Type** - what the server declared it was returning.
- **Verdict** - did the server honour the Accept header?
  - **markdown served** (green) - server returned `text/markdown` or `text/plain`.
  - **html returned** (red) - server ignored the Accept header and sent HTML.
  - **other type** (amber) - server returned something else (JSON, XML, etc.).
- **Response body** - the raw bytes the server sent, in a full-height scrollable block.
- **Copy body** - copies the raw body to the clipboard.
- **Counts** - character count and line count.

Use the browser back button to return to the original page.

## Why it matters

An LLM that wants to read a page sends `Accept: text/markdown` in its request. Most servers ignore this and return HTML anyway. A few return actual markdown. The difference matters: markdown is clean, linearly scannable, and low-token; HTML is noisy, tag-heavy, and wastes context window.

This extension makes the gap visible in one click.

## Install (unpacked)

1. Open `chrome://extensions` (or `edge://extensions`).
2. Enable **Developer mode**.
3. Click **Load unpacked** and select this `mx-llm-view/` folder.

## Notes

- The fetch is made **without session cookies** - it shows what an external LLM agent sees on a cold, unauthenticated request.
- No data leaves the browser. No model is called. Entirely deterministic.
- Body is capped at 100,000 characters; a truncation notice appears if the response is larger.
- Internal browser pages (`chrome://`, `about:`, `edge://`) cannot be fetched.
- The extension has no popup. Clicking the icon immediately replaces the current tab.

## Sibling extensions

| Extension | Accent | Purpose |
|-----------|--------|---------|
| MX Readiness Inspector | Teal | Scores a page for MX governance signals |
| MX Comprehension Probe | Amber | Asks a free-text question answered by the page alone |
| MX: LLM View | Indigo | Shows what a markdown-requesting LLM receives |

## Icons

The current icons are solid indigo squares (placeholder). Replace `icons/icon-16.png`, `icons/icon-48.png`, and `icons/icon-128.png` with final artwork.
