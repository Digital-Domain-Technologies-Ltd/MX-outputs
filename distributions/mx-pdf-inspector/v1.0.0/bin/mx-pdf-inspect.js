#!/usr/bin/env node
// mx-pdf-inspect — MX Compatible PDF inspector CLI.
//
// The same detect+classify pipeline that ships in the public PDF inspector
// at https://mx.allabout.network/tools/pdf-inspector.html, available as a
// command-line tool for accredited operators and their pipelines.
//
// Walks a PDF (or a directory tree of PDFs) and reports, per file, the
// MX Compatible tier the inspector would assign — mx | eaa-tagged | plain
// — plus the seven evidence rows that justify the tier. Designed for:
//
//   1. Publishers and consultancies that want to verify the EAA + MX
//      claims on a document before it ships, in CI or at the desk.
//   2. Procurement teams and compliance reviewers verifying supplier
//      deliverables against the same rubric the supplier's own pipeline
//      should have used.
//
// This is the standalone distribution. The CLI resolves its dependencies
// (the detection core, the vendored pdf.js, the worker file) from
// sibling directories in this package, so the same install works whether
// the package is unpacked into /opt, /usr/local/lib, npm's node_modules,
// or a fresh git clone.
//
// Exit codes
//   0  every fixture classified as the target tier (default: mx)
//   1  at least one fixture below the target tier
//   2  fatal error: a PDF could not be opened, pdfjs failed to load, etc.

import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const BIN_DIR = path.dirname(fileURLToPath(import.meta.url));
const DIST_ROOT = path.resolve(BIN_DIR, '..');
const PDFJS_PATH = path.join(DIST_ROOT, 'vendor/pdfjs/pdf.min.js');
const PDFJS_WORKER_PATH = path.join(DIST_ROOT, 'vendor/pdfjs/pdf.worker.min.js');
const CORE_PATH = path.join(DIST_ROOT, 'lib/pdf-inspector-core.js');

const TIER_RANK = { plain: 0, 'eaa-tagged': 1, mx: 2 };
const TIER_LABEL = { mx: 'MX Compatible', 'eaa-tagged': 'EAA Tagged Only', plain: 'Plain PDF' };

const HELP = `mx-pdf-inspect — MX Compatible PDF inspector CLI (v1.0.0)

USAGE
  mx-pdf-inspect <path> [path ...] [options]

DESCRIPTION
  Walks one or more PDF paths (files or directories) and reports the
  MX Compatible tier each one would receive in the public inspector at
  https://mx.allabout.network/tools/pdf-inspector.html.

  Three tiers, ordered low to high:
    plain        — no tagged structure tree, no MX metadata
    eaa-tagged   — tagged structure tree present (EAA-conformant); no MX evidence
    mx           — tagged structure + MX metadata + provenance chain (MX Compatible)

OPTIONS
  --recursive, -r       Walk directories recursively (default: top-level only).
  --min-tier <tier>     Treat anything below this tier as failure (default: mx).
                        One of: plain | eaa-tagged | mx
  --json                Output a single JSON report covering every fixture.
  --markdown            Output a human-readable markdown report. (default)
  --quiet               Suppress the per-row evidence table on pass; keep on fail.
  --no-summary          Skip the trailing summary line.
  --help, -h            Show this help and exit.
  --version, -v         Print version and exit.

EXIT CODES
  0    every fixture met or exceeded --min-tier
  1    at least one fixture below --min-tier
  2    fatal error (pdf.js could not load, fixture not found, etc.)

EXAMPLES
  mx-pdf-inspect ./report.pdf
  mx-pdf-inspect ./deliverables/ --recursive
  mx-pdf-inspect *.pdf --json > inspection.json
  mx-pdf-inspect ./report.pdf --min-tier eaa-tagged    # accept EAA-only files

TEST PACK
  After installing, verify the CLI against the bundled gold-standard
  fixture by running the test-pack runner:
    cd test-pack && bash run-test-pack.sh
`;

function parseArgs(argv) {
  const opts = {
    paths: [],
    recursive: false,
    minTier: 'mx',
    format: 'markdown',
    quiet: false,
    summary: true,
    help: false,
    version: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    switch (a) {
      case '--help':
      case '-h':
        opts.help = true;
        break;
      case '--version':
      case '-v':
        opts.version = true;
        break;
      case '--recursive':
      case '-r':
        opts.recursive = true;
        break;
      case '--json':
        opts.format = 'json';
        break;
      case '--markdown':
        opts.format = 'markdown';
        break;
      case '--quiet':
        opts.quiet = true;
        break;
      case '--no-summary':
        opts.summary = false;
        break;
      case '--min-tier': {
        const v = argv[++i];
        if (!TIER_RANK.hasOwnProperty(v)) {
          throw new Error(`--min-tier must be one of: ${Object.keys(TIER_RANK).join(', ')} (got: ${v})`);
        }
        opts.minTier = v;
        break;
      }
      default:
        if (a.startsWith('--')) throw new Error(`Unknown option: ${a}`);
        opts.paths.push(a);
    }
  }
  return opts;
}

function collectPdfPaths(rootPath, recursive) {
  const stat = fs.statSync(rootPath);
  if (stat.isFile()) {
    return rootPath.toLowerCase().endsWith('.pdf') ? [rootPath] : [];
  }
  if (!stat.isDirectory()) return [];
  const out = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (recursive) walk(full);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.pdf')) {
        out.push(full);
      }
    }
  };
  walk(rootPath);
  return out;
}

function suppressPdfJsBuildWarning() {
  // pdfjs 4.10.38 prints a "Please use the `legacy` build in Node.js
  // environments" advisory on every load. The CLI deliberately uses the
  // same browser bundle the public inspector ships — that lockstep is the
  // point. pdfjs writes this warning to stdout (not stderr, as you might
  // expect for a warning), so JSON consumers receive non-JSON garbage at
  // the head of the output. Intercept stdout.write at the source: drop
  // any chunk that is just the warning, pass everything else through
  // untouched.
  const origStdoutWrite = process.stdout.write.bind(process.stdout);
  process.stdout.write = (chunk, ...rest) => {
    if (typeof chunk === 'string' && /legacy.*build.*Node/i.test(chunk)) return true;
    return origStdoutWrite(chunk, ...rest);
  };
  const origWarn = console.warn;
  console.warn = function suppressed(msg, ...args) {
    if (typeof msg === 'string' && /legacy.*build.*Node/i.test(msg)) return;
    return origWarn.call(console, msg, ...args);
  };
}

async function loadDependencies() {
  let pdfjs;
  let core;
  try {
    pdfjs = await import(pathToFileURL(PDFJS_PATH).href);
  } catch (e) {
    throw new Error(`could not load pdf.js at ${PDFJS_PATH}: ${e.message}`);
  }
  try {
    core = await import(pathToFileURL(CORE_PATH).href);
  } catch (e) {
    throw new Error(`could not load pdf-inspector-core at ${CORE_PATH}: ${e.message}`);
  }
  pdfjs.GlobalWorkerOptions.workerSrc = pathToFileURL(PDFJS_WORKER_PATH).href;
  return { pdfjs, core };
}

async function inspectOne(pdfPath, pdfjs, core) {
  const result = {
    path: pdfPath,
    relativePath: path.relative(process.cwd(), pdfPath),
    error: null,
    tier: null,
    evidence: null,
  };
  try {
    if (!fs.existsSync(pdfPath)) {
      result.error = 'file not found';
      return result;
    }
    const data = new Uint8Array(fs.readFileSync(pdfPath));
    const pdfDoc = await pdfjs.getDocument({ data, disableWorker: true, isEvalSupported: false }).promise;
    const { findings, classification } = await core.inspectPdfDoc(pdfDoc);
    result.tier = classification.tier;
    result.evidence = classification.evidence;
    result.findings = {
      responsiblePerson: findings.responsiblePerson || null,
      provenanceSchemaVersion: findings.provenanceSchemaVersion || null,
      parties: findings.parties || [],
    };
  } catch (e) {
    result.error = e.message;
  }
  return result;
}

function renderMarkdown(results, opts) {
  const lines = [];
  for (const r of results) {
    const label = r.relativePath || r.path;
    if (r.error) {
      lines.push(`\n✗ ${label}`);
      lines.push(`    ERROR: ${r.error}`);
      continue;
    }
    const meetsMinTier = TIER_RANK[r.tier] >= TIER_RANK[opts.minTier];
    const mark = meetsMinTier ? '✓' : '✗';
    const tierTxt = `${r.tier} (${TIER_LABEL[r.tier]})`;
    if (opts.quiet && meetsMinTier) {
      lines.push(`${mark} ${label} — ${tierTxt}`);
    } else {
      lines.push(`\n${mark} ${label}`);
      lines.push(`    tier: ${tierTxt}`);
      for (const row of r.evidence) {
        lines.push(`    [${row.status.toUpperCase().padEnd(4)}] ${row.label} — ${row.detail}`);
      }
    }
  }
  return lines.join('\n');
}

function renderJson(results, opts) {
  return JSON.stringify({
    tool: 'mx-pdf-inspect',
    version: '1.0.0',
    inspectedAt: new Date().toISOString(),
    minTier: opts.minTier,
    fixtures: results.map((r) => ({
      path: r.path,
      relativePath: r.relativePath,
      tier: r.tier,
      tierLabel: r.tier ? TIER_LABEL[r.tier] : null,
      meetsMinTier: r.tier ? TIER_RANK[r.tier] >= TIER_RANK[opts.minTier] : false,
      error: r.error,
      evidence: r.evidence || null,
      findings: r.findings || null,
    })),
  }, null, 2);
}

async function main() {
  let opts;
  try {
    opts = parseArgs(process.argv.slice(2));
  } catch (e) {
    console.error(`mx-pdf-inspect: ${e.message}\n`);
    console.error(HELP);
    process.exit(2);
  }

  if (opts.help) {
    process.stdout.write(HELP);
    process.exit(0);
  }
  if (opts.version) {
    process.stdout.write('mx-pdf-inspect 1.0.0\n');
    process.exit(0);
  }
  if (opts.paths.length === 0) {
    console.error('mx-pdf-inspect: at least one path is required.\n');
    console.error(HELP);
    process.exit(2);
  }

  suppressPdfJsBuildWarning();

  let pdfjs;
  let core;
  try {
    ({ pdfjs, core } = await loadDependencies());
  } catch (e) {
    console.error(`mx-pdf-inspect: ${e.message}`);
    process.exit(2);
  }

  const fixtures = [];
  for (const p of opts.paths) {
    const abs = path.resolve(p);
    if (!fs.existsSync(abs)) {
      console.error(`mx-pdf-inspect: path not found: ${p}`);
      process.exit(2);
    }
    const found = collectPdfPaths(abs, opts.recursive);
    if (found.length === 0) {
      console.error(`mx-pdf-inspect: no PDFs at ${p}${opts.recursive ? '' : ' (try --recursive)'}`);
    }
    fixtures.push(...found);
  }
  if (fixtures.length === 0) process.exit(2);

  const results = [];
  for (const pdfPath of fixtures) {
    results.push(await inspectOne(pdfPath, pdfjs, core));
  }

  if (opts.format === 'json') {
    process.stdout.write(renderJson(results, opts));
    process.stdout.write('\n');
  } else {
    process.stdout.write(renderMarkdown(results, opts));
    process.stdout.write('\n');
  }

  let failures = 0;
  let errors = 0;
  for (const r of results) {
    if (r.error) errors += 1;
    else if (TIER_RANK[r.tier] < TIER_RANK[opts.minTier]) failures += 1;
  }

  if (opts.summary && opts.format !== 'json') {
    const passed = results.length - failures - errors;
    process.stdout.write(`\nResult: ${passed}/${results.length} met --min-tier=${opts.minTier}`);
    if (errors > 0) process.stdout.write(`, ${errors} error(s)`);
    process.stdout.write('.\n');
  }

  if (errors > 0) process.exit(2);
  if (failures > 0) process.exit(1);
  process.exit(0);
}

main().catch((e) => {
  console.error(`mx-pdf-inspect: fatal: ${e.stack || e.message}`);
  process.exit(2);
});
