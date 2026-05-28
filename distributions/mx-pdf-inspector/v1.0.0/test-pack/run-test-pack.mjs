#!/usr/bin/env node
// MX PDF Inspector CLI — test pack runner (Node, cross-platform).
//
// Same behaviour as run-test-pack.sh: walks every fixture under fixtures/,
// runs the CLI against it in JSON mode, and asserts the tier and the
// required evidence rows match the values recorded in expected-results.json.
// Exits non-zero on any mismatch.
//
// Use this runner on Windows (where bash + jq are not native), or anywhere
// you would rather not require POSIX shell + jq. The two runners produce
// the same verdict against the same fixtures and either can serve as the
// post-install smoke test.
//
// Usage
//   node run-test-pack.mjs
//   (from inside the test-pack/ directory)
//
// Exit codes
//   0  every fixture met expectations
//   1  at least one fixture mismatched the expected result
//   2  fatal error (CLI missing, fixture missing, etc.)

import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const execFileAsync = promisify(execFile);

const TEST_PACK_DIR = path.dirname(fileURLToPath(import.meta.url));
const DIST_ROOT = path.resolve(TEST_PACK_DIR, '..');
const CLI = path.join(DIST_ROOT, 'bin', 'mx-pdf-inspect.js');
const EXPECTED_JSON = path.join(TEST_PACK_DIR, 'expected-results.json');

function die(code, msg) {
  console.error(msg);
  process.exit(code);
}

if (!fs.existsSync(CLI)) die(2, `ERROR: CLI not found at ${CLI}`);
if (!fs.existsSync(EXPECTED_JSON)) die(2, `ERROR: expected-results.json not found at ${EXPECTED_JSON}`);

const expected = JSON.parse(fs.readFileSync(EXPECTED_JSON, 'utf-8'));

console.log('MX PDF Inspector CLI — test pack runner (Node)');
console.log(`  CLI:       ${CLI}`);
console.log(`  Test pack: ${TEST_PACK_DIR}`);
console.log('');

let total = 0;
let failures = 0;

for (const fixture of expected.fixtures) {
  total += 1;
  const fixturePath = path.join(TEST_PACK_DIR, 'fixtures', fixture.file);

  if (!fs.existsSync(fixturePath)) {
    console.log(`✗ ${fixture.file}: fixture file missing at ${fixturePath}`);
    failures += 1;
    continue;
  }

  let stdout;
  try {
    const result = await execFileAsync(process.execPath, [CLI, fixturePath, '--json'], { maxBuffer: 10 * 1024 * 1024 });
    stdout = result.stdout;
  } catch (e) {
    // execFile rejects on non-zero exit; capture stdout for diagnosis.
    stdout = e.stdout || '';
    if (!stdout) {
      console.log(`✗ ${fixture.file}: CLI failed with no JSON output (exit ${e.code || '?'})`);
      failures += 1;
      continue;
    }
  }

  let json;
  try {
    json = JSON.parse(stdout);
  } catch (e) {
    console.log(`✗ ${fixture.file}: CLI output was not valid JSON: ${e.message}`);
    failures += 1;
    continue;
  }

  const actual = json.fixtures && json.fixtures[0];
  if (!actual) {
    console.log(`✗ ${fixture.file}: CLI JSON had no fixtures[0] entry`);
    failures += 1;
    continue;
  }

  if (actual.tier !== fixture.expectedTier) {
    console.log(`✗ ${fixture.file}: tier mismatch (expected=${fixture.expectedTier}, actual=${actual.tier})`);
    failures += 1;
    continue;
  }

  let rowFailure = false;
  for (const key of fixture.requiredPasses) {
    const row = (actual.evidence || []).find((r) => r.key === key);
    const status = row ? row.status : 'missing';
    if (status !== 'pass') {
      console.log(`✗ ${fixture.file}: required check '${key}' status=${status} (expected pass)`);
      rowFailure = true;
    }
  }

  if (rowFailure) {
    failures += 1;
  } else {
    console.log(`✓ ${fixture.file}: tier=${actual.tier}, every required check passes`);
  }
}

console.log('');
const passed = total - failures;
console.log(`Result: ${passed}/${total} fixture(s) met expectations.`);

if (failures > 0) {
  console.log('');
  console.log('TEST PACK FAILED. The CLI is not working as expected on this machine.');
  console.log(`  - Confirm node is recent enough: ${process.version} (need >= v18)`);
  console.log(`  - Confirm the CLI runs at all: node ${CLI} --version`);
  console.log('  - Email the runner output to info@cognovamx.com for support.');
  process.exit(1);
}

console.log('TEST PACK PASSED. The CLI is ready for use.');
process.exit(0);
