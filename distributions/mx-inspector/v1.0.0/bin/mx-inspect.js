#!/usr/bin/env node
// mx-inspect — MX Inspector CLI, any carrier (v1.0.0).
//
// The standalone distribution of the same detect+classify core that runs the
// public MX Inspector at https://mx.allabout.network/tools/mx-inspector.html.
// Self-contained: it loads its dependencies (the detection core, the vendored
// pdf.js, the worker file) from this package, not from the wider repo.
//
// Walks a file (or a directory tree) and reports, per file, the MX metadata it
// carries and the verdict the inspector would assign. PDFs are classified on
// the flagship tier scale — mx | eaa-tagged | plain — with the evidence rows
// that justify the tier; every other carrier (raster image, SVG, HTML,
// markdown, shell, sidecar) is classified mx | plain and its extracted MX
// fields are printed.
//
// Exit codes
//   0  every fixture met or exceeded --min-tier
//   1  at least one fixture below --min-tier
//   2  fatal error: a file could not be opened, pdfjs failed to load, etc.

import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const BIN_DIR = path.dirname(fileURLToPath(import.meta.url));
const DIST_ROOT = path.resolve(BIN_DIR, '..');
const PDFJS_PATH = path.join(DIST_ROOT, 'vendor/pdfjs/pdf.min.js');
const PDFJS_WORKER_PATH = path.join(DIST_ROOT, 'vendor/pdfjs/pdf.worker.min.js');
const CORE_PATH = path.join(DIST_ROOT, 'lib/mx-inspector-core.js');

const TIER_RANK = { unsupported: -1, plain: 0, 'eaa-tagged': 1, mx: 2 };
const TIER_LABEL = {
  mx: 'MX Compatible', 'eaa-tagged': 'EAA Tagged Only', plain: 'Plain', unsupported: 'Unsupported carrier',
};
const RASTER = new Set(['raster']);

const HELP = `mx-inspect — MX Inspector CLI, any carrier (v1.0.0)

USAGE
  mx-inspect <path> [path ...] [options]

DESCRIPTION
  Walks one or more paths (files or directories) and reports the MX metadata
  each file carries and the verdict the public inspector at
  https://mx.allabout.network/tools/mx-inspector.html would assign.

  Carriers: pdf, raster image (png/jpg/webp/gif/avif), svg, html, markdown,
  shell, sidecar (.mx.yaml).

  Tiers: PDFs use plain | eaa-tagged | mx; other carriers use plain | mx
  (mx = carries MX metadata).

OPTIONS
  --recursive, -r       Walk directories recursively (default: top-level only).
  --min-tier <tier>     Treat anything below this tier as failure (default: mx).
                        One of: plain | eaa-tagged | mx
  --json                Output a single JSON report covering every fixture.
  --markdown            Output a human-readable markdown report. (default)
  --quiet               Suppress the per-row detail on pass; keep on fail.
  --no-summary          Skip the trailing summary line.
  --version             Print the version and exit.
  --help, -h            Show this help and exit.

EXIT CODES
  0    every fixture met or exceeded --min-tier
  1    at least one fixture below --min-tier
  2    fatal error (pdf.js could not load, fixture not found, etc.)

EXAMPLES
  mx-inspect ./logo.png
  mx-inspect ./report.pdf
  mx-inspect ./deliverables/ --recursive --min-tier plain
  mx-inspect *.svg --json > inspection.json
`;

function parseArgs(argv) {
  const opts = { paths: [], recursive: false, minTier: 'mx', format: 'markdown', quiet: false, summary: true, help: false, version: false };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    switch (a) {
      case '--help': case '-h': opts.help = true; break;
      case '--version': opts.version = true; break;
      case '--recursive': case '-r': opts.recursive = true; break;
      case '--json': opts.format = 'json'; break;
      case '--markdown': opts.format = 'markdown'; break;
      case '--quiet': opts.quiet = true; break;
      case '--no-summary': opts.summary = false; break;
      case '--min-tier': {
        const v = argv[++i];
        if (!Object.prototype.hasOwnProperty.call(TIER_RANK, v) || v === 'unsupported') {
          throw new Error(`--min-tier must be one of: plain, eaa-tagged, mx (got: ${v})`);
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

function collectPaths(rootPath, recursive, core) {
  const inspectable = (f) => core.detectCarrierFromName(f) !== null;
  const stat = fs.statSync(rootPath);
  if (stat.isFile()) return inspectable(rootPath) ? [rootPath] : [];
  if (!stat.isDirectory()) return [];
  const out = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { if (recursive) walk(full); }
      else if (entry.isFile() && inspectable(full)) out.push(full);
    }
  };
  walk(rootPath);
  return out;
}

function suppressPdfJsBuildWarning() {
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

async function loadCore() {
  try { return await import(pathToFileURL(CORE_PATH).href); }
  catch (e) { throw new Error(`could not load mx-inspector-core at ${CORE_PATH}: ${e.message}`); }
}

let pdfjsModule = null;
async function loadPdfjs() {
  if (pdfjsModule) return pdfjsModule;
  let pdfjs;
  try { pdfjs = await import(pathToFileURL(PDFJS_PATH).href); }
  catch (e) { throw new Error(`could not load pdf.js at ${PDFJS_PATH}: ${e.message}`); }
  pdfjs.GlobalWorkerOptions.workerSrc = pathToFileURL(PDFJS_WORKER_PATH).href;
  pdfjsModule = pdfjs;
  return pdfjs;
}

async function inspectOne(filePath, core) {
  const result = {
    path: filePath, relativePath: path.relative(process.cwd(), filePath),
    carrier: null, error: null, tier: null, evidence: null, fields: null,
  };
  try {
    if (!fs.existsSync(filePath)) { result.error = 'file not found'; return result; }
    const carrier = core.detectCarrierFromName(filePath);
    result.carrier = carrier;
    if (carrier === 'pdf') {
      const pdfjs = await loadPdfjs();
      const data = new Uint8Array(fs.readFileSync(filePath));
      const pdfDoc = await pdfjs.getDocument({ data, disableWorker: true, isEvalSupported: false }).promise;
      const { findings, classification } = await core.inspectPdfDoc(pdfDoc);
      result.tier = classification.tier;
      result.evidence = classification.evidence;
      result.findings = {
        responsiblePerson: findings.responsiblePerson || null,
        provenanceSchemaVersion: findings.provenanceSchemaVersion || null,
        parties: findings.parties || [],
      };
    } else {
      const arg = RASTER.has(carrier)
        ? { carrier, filename: filePath, bytes: new Uint8Array(fs.readFileSync(filePath)) }
        : { carrier, filename: filePath, text: fs.readFileSync(filePath, 'utf8') };
      const { findings, classification } = core.inspectCarrier(arg);
      result.tier = classification.tier;
      result.evidence = classification.evidence;
      result.fields = findings.fields || {};
    }
  } catch (e) {
    result.error = e.message;
  }
  return result;
}

function renderMarkdown(results, opts) {
  const lines = [];
  for (const r of results) {
    const label = r.relativePath || r.path;
    if (r.error) { lines.push(`\n✗ ${label}`); lines.push(`    ERROR: ${r.error}`); continue; }
    const meetsMinTier = TIER_RANK[r.tier] >= TIER_RANK[opts.minTier];
    const mark = meetsMinTier ? '✓' : '✗';
    const tierTxt = `${r.tier} (${TIER_LABEL[r.tier] || r.tier})`;
    if (opts.quiet && meetsMinTier) {
      lines.push(`${mark} ${label} [${r.carrier}] — ${tierTxt}`);
      continue;
    }
    lines.push(`\n${mark} ${label} [${r.carrier}]`);
    lines.push(`    tier: ${tierTxt}`);
    for (const row of r.evidence || []) {
      lines.push(`    [${row.status.toUpperCase().padEnd(4)}] ${row.label} — ${row.detail}`);
    }
    if (r.fields && Object.keys(r.fields).length) {
      lines.push('    MX metadata:');
      for (const [k, v] of Object.entries(r.fields)) {
        lines.push(`      ${k}: ${String(v).slice(0, 100)}`);
      }
    }
  }
  return lines.join('\n');
}

function renderJson(results, opts) {
  return JSON.stringify({
    tool: 'mx-inspect',
    version: '1.0.0',
    minTier: opts.minTier,
    fixtures: results.map((r) => ({
      path: r.path, relativePath: r.relativePath, carrier: r.carrier,
      tier: r.tier, tierLabel: r.tier ? (TIER_LABEL[r.tier] || r.tier) : null,
      meetsMinTier: r.tier ? TIER_RANK[r.tier] >= TIER_RANK[opts.minTier] : false,
      error: r.error, evidence: r.evidence || null, fields: r.fields || null, findings: r.findings || null,
    })),
  }, null, 2);
}

async function main() {
  let opts;
  try { opts = parseArgs(process.argv.slice(2)); }
  catch (e) { console.error(`mx-inspect: ${e.message}\n`); console.error(HELP); process.exit(2); }

  if (opts.help) { process.stdout.write(HELP); process.exit(0); }
  if (opts.version) { process.stdout.write('mx-inspect 1.0.0\n'); process.exit(0); }
  if (opts.paths.length === 0) {
    console.error('mx-inspect: at least one path is required.\n');
    console.error(HELP); process.exit(2);
  }

  suppressPdfJsBuildWarning();

  let core;
  try { core = await loadCore(); }
  catch (e) { console.error(`mx-inspect: ${e.message}`); process.exit(2); }

  const fixtures = [];
  for (const p of opts.paths) {
    const abs = path.resolve(p);
    if (!fs.existsSync(abs)) { console.error(`mx-inspect: path not found: ${p}`); process.exit(2); }
    const found = collectPaths(abs, opts.recursive, core);
    if (found.length === 0) console.error(`mx-inspect: no inspectable files at ${p}${opts.recursive ? '' : ' (try --recursive)'}`);
    fixtures.push(...found);
  }
  if (fixtures.length === 0) process.exit(2);

  const results = [];
  for (const f of fixtures) results.push(await inspectOne(f, core));

  if (opts.format === 'json') { process.stdout.write(`${renderJson(results, opts)}\n`); }
  else { process.stdout.write(`${renderMarkdown(results, opts)}\n`); }

  let failures = 0; let errors = 0;
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

main().catch((e) => { console.error(`mx-inspect: fatal: ${e.stack || e.message}`); process.exit(2); });
