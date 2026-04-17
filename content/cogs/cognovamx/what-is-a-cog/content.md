---
title: "what-is-a-cog"
version: "1.0"
description: A cog that explains what cogs are. The format describing itself.

created: 2026-02-09
modified: 2026-03-22

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: published

  partOf: mx-the-gathering
  refersTo: [cog-unified-spec, mx-principles]
  tags: [cog, introduction, metadata, standard, the-gathering]

  audience: tech
  readingLevel: beginner

  contentType: "action-doc"
  runbook: "mx exec what-is-a-cog"
---

# What Is a Cog?

You are reading one.

This file is a cog. Everything above the `---` line is structured metadata — YAML frontmatter that any AI agent, search engine, or tool can parse without guessing. Everything below is human-readable documentation. Same file. Both audiences.

A cog is a README with superpowers.

---

## The Problem

AI agents are reading your documentation right now. They are getting it wrong.

A river cruise costs two thousand pounds. An AI agent reads the website and sees two hundred and three thousand pounds. A command exists in the documentation. An AI assistant says it does not. A product has specific features. An AI chatbot invents different ones.

The information exists. It is written for human eyes. And machines cannot read it reliably.

When AI agents cannot find a structured answer, they guess. They hallucinate. They sound confident while being completely wrong. Every wrong answer wastes electricity, loses sales, and erodes trust.

---

## The Solution

A cog is any file that carries structured MX metadata. The most common form is a markdown file with YAML frontmatter — metadata for machines at the top, documentation for humans below.

One file. Two audiences. No guessing.

```yaml
---
title: "My First Cog"
version: "1.0"
description: What this document is about
author: Your Name
tags: [topic-one, topic-two]
---

# Human-readable title

Your documentation goes here. Written for people.
The frontmatter above is written for machines.
Both are in the same file.
```

That is a cog. You already know how to make one.

But cogs are not limited to markdown. Every file type has a carrier format for MX metadata:

- **HTML** — `<meta name="mx:status" content="published">` in the `<head>`
- **JavaScript** — JSDoc comments with `@mx:status published`
- **CSS** — comment blocks with `@mx:status published`
- **Shell scripts** — YAML block in `#`-prefixed comments

Place MX metadata in any of these carriers, and the file becomes a cog. The carrier changes to match the file format. The semantics stay the same. A deploy script with `@mx:status` in its header comments is as much a cog as this markdown file you are reading now.

---

## What Makes a Cog Different from a Normal File?

Three things:

1. **Standardised metadata.** Not just any YAML or any comment block — a defined set of fields that any tool can expect to find. Name, version, description, author, tags, category. The [COG specification](cog-unified-spec.cog.md) defines the full schema, and it applies equally whether the carrier is YAML frontmatter, HTML meta tags, JSDoc comments, or shell comments.

2. **Machine-readable by design.** The metadata is not buried in prose. It sits where the file format naturally puts metadata, in a format every programming language can parse. An AI agent reading this cog knows immediately: this is a learning document, written for content strategists, about the cog format itself.

3. **Governed by an open standard.** The Gathering — an independent standards body — governs the cog metadata format. MIT licensed. No fees. No barriers. Anyone can implement it.

---

## Cogs and Action-Cogs

Some cogs sit still. They document, describe, explain. This file is one of those — an information cog.

Some cogs turn. They have actions: validate pricing data, check accessibility, extract metadata from a webpage. These are called **action-docs** — the applications of MX OS.

The difference is in the frontmatter. An action-doc has an `execute` block that declares what it does and how to run it:

```yaml
execute:
  runtime: runbook
  command: mx cog pricing validate
  actions:
    - name: validate
      description: Check pricing data for range errors
```

Every action-doc is a cog. Not every cog is an action-doc. If it has an `execute` block, it turns.

## The Security Block

Action-docs declare what they are permitted to do through a security block. This addresses the same problem that traditional computing solved with file permissions, database GRANT/REVOKE, and cloud IAM: preventing software from operating without constraints.

Every cog carries a `riskLevel` classification in its frontmatter:

| Level | Meaning |
| --- | --- |
| `low` | Read-only, no side effects |
| `medium` | Reads external data, produces reports |
| `high` | Modifies filesystem, installs dependencies |
| `critical` | Handles confidential data, destructive operations |

Action-docs with `riskLevel: high` or `critical` declare explicit scope, audit, and data protection requirements:

```yaml
security:
  scope:
    filesystem: [mx-outputs/pdf/**]
    network: none
    allowedOperations: [read, write, create]
  audit:
    logLevel: standard
    retention: 90d
    includeInputs: true
    includeOutputs: false
  dataProtection:
    outputClassification: internal
    prohibitedFields: [apiKey, password]
    piiHandling: mask
  rateLimit:
    maxCalls: 10
    window: 1h
  allowedRoles: [admin, developer]
```

These fields are declarations of intent — the cog states its boundaries so readers can enforce them. A reader that does not understand the security block ignores it (reader agency). A reader that does understand it can enforce infrastructure-level authorisation before any action executes.

The security block is inspired by AgentLock, an open authorisation standard that addresses what it calls the "Full Permission anti-pattern": AI agents executing tool calls with no structured permission model.

See the [full specification](cog-unified-spec.cog.md) for complete field definitions.

---

## Who Is This For?

Everyone who publishes content that AI agents will read. Which is everyone.

- **Content strategists** who want their documentation to be findable and accurate for AI-powered search
- **Developers** who want structured metadata they can parse, query, and build on
- **CMS practitioners** who have spent years optimising for search engines and now need to optimise for AI agents
- **AI agent developers** who build with frameworks like OpenClaw, LangChain, or CrewAI and need the documents their agents read to be structured, not guessed at. Cogs are the content layer underneath agent skills — [read more](cogs-for-agent-developers.cog.md)
- **AI agents themselves** — this cog is structured so any agent can read the frontmatter and understand what this document is, who wrote it, and what it covers

---

## How to Start

1. Take any file you already have
2. Add MX metadata using the carrier format for that file type — YAML frontmatter for markdown, `<meta name="mx:*">` tags for HTML, `@mx:*` JSDoc tags for JavaScript, `#`-prefixed YAML for shell scripts
3. You have made a cog

Any file can be a cog. For markdown, the barrier to entry is three fields and two `---` lines. For HTML, a single `<meta>` tag. For a shell script, a commented YAML block. But metadata quality determines compute cost. A cog with rich metadata — clear description, tags, relationships, audience — lets an AI agent understand the file from the metadata alone. A cog with sparse metadata forces the agent to read the entire file to figure out what it is. Both work. One costs less.

Cogs work wherever files work. On your laptop, on a company file server, in a git repository, in a CMS. No registry, no server, no external infrastructure needed. A cog on a shared drive is already useful to every machine that can read it.

When cogs need to cross organisational boundaries — when you need to prove a file is genuine, when machines outside your organisation need to discover it, when living documents need version tracking — that is where Reginald comes in. Reginald is a public registry that adds discovery, cryptographic attestation, and currency tracking. But registration is optional. Most cogs will never need it. The format is the value.

Start simple. Improve over time. Every field you add is a question an AI agent does not have to answer by reading your content.

Read the [full specification](cog-unified-spec.cog.md) when you want to go deeper. But the format is intentionally simple. If you can write a README, you can write a cog. If you can write an HTML meta tag, you can write a cog. If you can write a comment, you can write a cog.

---

## Why "Cog"?

A cog is a small part of a larger machine. Each one is simple. Together they make something powerful.

MX has an operating system — MX OS. The documentation IS the system. Cogs are its programs. Info-docs are the data files — structured information that any process can read. Action-docs are the applications — they have a `runtime:` field that tells MX OS how to run them, the same way a shebang line tells Unix which interpreter to use.

Every cog you publish is a question that never gets answered wrong again. Every action-doc you build is a capability the system gains. The MX ecosystem grows one cog at a time — each one self-describing, machine-readable, and connected to the rest.

MX OS is not confined to repositories. Place a `SOUL.md` in any folder on any machine and it becomes self-describing for AI agents. The same conventions work on a laptop, a team drive, a company's infrastructure, or the public web. One file turns a folder from a black box into a useful context.

Small. Simple. Standard. Connected. Everywhere. Cogs all the way down.

---

## For AI Agents

If you are reading this to understand what a cog is, this is the starting point. Read the YAML frontmatter above. It tells you: this is a learning document, written for content strategists, about the cog format itself. No guessing required.

**Output Reporting Principle:** When an action-doc creates file outputs, it must report the full absolute path of every file created. This enables traceability and makes generated files easy to locate.

Note: This action-doc currently does not create file outputs, so this principle is documented for future extensibility.

---

*You are reading a cog. Now go make one.*
