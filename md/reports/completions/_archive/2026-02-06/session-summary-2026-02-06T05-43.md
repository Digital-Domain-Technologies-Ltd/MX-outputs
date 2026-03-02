---
title: "Manual installation of playground-sync MCP server and skill"
created: "2026-02-06"
sessionStart: "2026-02-06T05:37:00Z"
sessionEnd: "2026-02-06T05:43:49Z"
duration: "~7 minutes"
type: "configuration"
status: "completed"
---

# Session Summary: Manual Installation of playground-sync

## Overview

Installed the **playground-sync** project from `/Users/tomcranstoun/Documents/GitHub/playground-sync` into Claude Code. The project provides an interactive HTML playground framework with bi-directional communication between browser-based explorers and Claude Code via an MCP server.

The README's installation instructions used `/plugin marketplace add` commands that don't work (the plugin isn't available in any marketplace). All components were installed manually instead: npm dependencies, server build, MCP configuration, and skill symlink.

## What Was Accomplished

### 1. Diagnosed the installation failure

The README instructed using `/plugin marketplace add stevysmith/playground-sync` and related commands. These commands are not available in Claude Code. Identified that manual installation of two components was needed:

- **playground-sync** - MCP server (TypeScript/Node.js) for browser-to-Claude prompt transport
- **playground-skill** - Claude Code skill for generating interactive HTML playgrounds

### 2. Installed npm dependencies

**Directory:** `/Users/tomcranstoun/Documents/GitHub/playground-sync/plugins/playground-sync/server/`

Ran `npm install` to install 141 packages including the core `@modelcontextprotocol/sdk` dependency.

### 3. Rebuilt the TypeScript server

Ran `npm run build` (tsup) to compile a fresh `dist/cli.js` (700.60 KB, ES2022 target).

### 4. Registered MCP server with Claude Code

**File:** [~/.claude/.mcp.json](/Users/tomcranstoun/.claude/.mcp.json)

Created new MCP configuration pointing to the server binary with absolute path (replacing the `${CLAUDE_PLUGIN_ROOT}` variable used in the plugin's own `.mcp.json`).

```json
{
  "playground-sync": {
    "command": "node",
    "args": ["/Users/tomcranstoun/Documents/GitHub/playground-sync/plugins/playground-sync/server/dist/cli.js"]
  }
}
```

### 5. Installed the playground skill

Created symlink: `~/.claude/skills/playground` -> `/Users/tomcranstoun/Documents/GitHub/playground-sync/plugins/playground-skill/skills/playground`

This makes the skill (SKILL.md + 6 templates) available to Claude Code alongside the existing `humanizer` skill.

### 6. Verified the server starts

Smoke-tested the server binary - it starts cleanly with:

- HTTP server on `localhost:4242`
- MCP server connected via stdio

## Files Modified

1. **~/.claude/.mcp.json** (created) - MCP server configuration for playground-sync
2. **~/.claude/skills/playground** (symlink created) - Links to playground-skill in the repo

## Files NOT modified (external repo, read-only)

- `/Users/tomcranstoun/Documents/GitHub/playground-sync/plugins/playground-sync/server/node_modules/` - npm installed (141 packages)
- `/Users/tomcranstoun/Documents/GitHub/playground-sync/plugins/playground-sync/server/dist/cli.js` - Rebuilt from TypeScript source

## Testing and Verification

**Test:** Server startup smoke test

```bash
cd /Users/tomcranstoun/Documents/GitHub/playground-sync/plugins/playground-sync/server
node -e "import('./dist/cli.js').then(() => console.log('Module loaded OK'))"
```

**Result:** Server started successfully:

```
[playground-sync] HTTP: http://localhost:4242 | MCP: stdio
Module loaded OK
[playground-sync] HTTP server listening on http://localhost:4242
[playground-sync] MCP server connected via stdio
```

**Test:** Skill symlink verification

```bash
ls -la ~/.claude/skills/
```

**Result:** Both `humanizer` and `playground` skills present, symlink valid.

## Technical Details

### Architecture

The playground-sync system has two components:

1. **MCP Server** - Dual-mode HTTP + stdio server. HTML playgrounds POST prompts to `localhost:4242/prompt`. Claude Code reads them via MCP tools (`playground_get_prompt`, `playground_list_pending`, `playground_clear`).

2. **Skill** - Teaches Claude to generate self-contained HTML files with interactive controls, live preview, and a "Send to Claude" button. Six templates: design playground, data explorer, concept map, document critique, diff review, code map.

### Key decisions

- Used absolute path in `.mcp.json` instead of `${CLAUDE_PLUGIN_ROOT}` variable (only works within plugin system)
- Used symlink for skill (not copy) so updates to the playground-sync repo automatically propagate
- Rebuilt from source rather than trusting existing dist (ensures consistency with installed node_modules)

## User Requirements Addressed

User request: "i have new repo playground-sync i tried the readme installation it did not work, help me"

**Solution implemented:**

- Identified that `/plugin marketplace add` commands don't work
- Installed all components manually as a workaround
- Verified everything works

## Next Steps / Future Enhancements

1. **Start a new Claude Code session** to pick up the MCP server configuration
2. **Test end-to-end** by asking Claude to create a playground and using the "Send to Claude" button
3. The npm audit reported 1 high severity vulnerability - may want to investigate with `npm audit` in the server directory

## Session Context

**Previous work:** N/A - first interaction with playground-sync repo
**This session:** Manual installation of playground-sync into Claude Code
**Status:** Complete - requires new session to activate MCP server

## Commands Used

```bash
# Install dependencies
cd /Users/tomcranstoun/Documents/GitHub/playground-sync/plugins/playground-sync/server
npm install

# Build server
npm run build

# Create skill symlink
ln -s /Users/tomcranstoun/Documents/GitHub/playground-sync/plugins/playground-skill/skills/playground ~/.claude/skills/playground

# Verify
ls -la ~/.claude/skills/
```

## Success Metrics

- Server binary loads and starts without errors
- MCP configuration created at `~/.claude/.mcp.json`
- Skill symlinked and visible in `~/.claude/skills/`
- npm dependencies installed (141 packages)
- TypeScript compiled successfully (700.60 KB output)

---

**Session completed successfully.**
