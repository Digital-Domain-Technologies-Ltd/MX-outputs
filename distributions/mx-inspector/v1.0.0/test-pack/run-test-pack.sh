#!/usr/bin/env bash
# MX PDF Inspector CLI — test pack runner.
#
# Walks every fixture under fixtures/, runs the CLI against it in JSON mode,
# and asserts the tier and the required evidence rows match the values
# recorded in expected-results.json. Exits non-zero on any mismatch.
#
# A clean pass means the CLI binary, the vendored pdf.js, the detection core,
# and the fixture pipeline all loaded and ran correctly on this machine.
# Anyone admitting an accredited operator to the programme can hand them the
# distribution tarball and ask them to run this script before their first
# real audit.
#
# Usage
#   cd test-pack
#   bash run-test-pack.sh
#
# Exit codes
#   0  every fixture met expectations
#   1  at least one fixture mismatched the expected result
#   2  fatal error (jq missing, fixture missing, CLI missing, etc.)

set -euo pipefail

TEST_PACK_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DIST_ROOT="$(cd "$TEST_PACK_DIR/.." && pwd)"
CLI="$DIST_ROOT/bin/mx-inspect.js"
EXPECTED_JSON="$TEST_PACK_DIR/expected-results.json"

# Required tools.
for tool in node jq; do
  if ! command -v "$tool" >/dev/null 2>&1; then
    echo "ERROR: $tool is required but not on PATH" >&2
    exit 2
  fi
done

# Required files.
if [ ! -f "$CLI" ]; then
  echo "ERROR: CLI not found at $CLI" >&2
  exit 2
fi
if [ ! -f "$EXPECTED_JSON" ]; then
  echo "ERROR: expected-results.json not found at $EXPECTED_JSON" >&2
  exit 2
fi

echo "MX PDF Inspector CLI — test pack runner"
echo "  CLI:       $CLI"
echo "  Test pack: $TEST_PACK_DIR"
echo ""

fail_count=0
total=0
fixture_count=$(jq '.fixtures | length' "$EXPECTED_JSON")

for i in $(seq 0 $((fixture_count - 1))); do
  total=$((total + 1))
  file=$(jq -r ".fixtures[$i].file" "$EXPECTED_JSON")
  expected_tier=$(jq -r ".fixtures[$i].expectedTier" "$EXPECTED_JSON")
  required_passes=$(jq -r ".fixtures[$i].requiredPasses[]" "$EXPECTED_JSON")
  fixture_path="$TEST_PACK_DIR/fixtures/$file"

  if [ ! -f "$fixture_path" ]; then
    echo "✗ $file: fixture file missing at $fixture_path"
    fail_count=$((fail_count + 1))
    continue
  fi

  # Run the CLI in JSON mode.
  json_output=$(node "$CLI" "$fixture_path" --json 2>/dev/null || true)
  if [ -z "$json_output" ]; then
    echo "✗ $file: CLI produced no JSON output"
    fail_count=$((fail_count + 1))
    continue
  fi

  actual_tier=$(echo "$json_output" | jq -r '.fixtures[0].tier // "null"')
  if [ "$actual_tier" != "$expected_tier" ]; then
    echo "✗ $file: tier mismatch (expected=$expected_tier, actual=$actual_tier)"
    fail_count=$((fail_count + 1))
    continue
  fi

  # Check every required evidence row passes.
  row_failure=0
  for key in $required_passes; do
    status=$(echo "$json_output" | jq -r ".fixtures[0].evidence[] | select(.key == \"$key\") | .status // \"missing\"")
    if [ "$status" != "pass" ]; then
      echo "✗ $file: required check '$key' status=$status (expected pass)"
      row_failure=1
    fi
  done

  if [ $row_failure -eq 0 ]; then
    echo "✓ $file: tier=$actual_tier, every required check passes"
  else
    fail_count=$((fail_count + 1))
  fi
done

echo ""
passed=$((total - fail_count))
echo "Result: $passed/$total fixture(s) met expectations."

if [ $fail_count -gt 0 ]; then
  echo ""
  echo "TEST PACK FAILED. The CLI is not working as expected on this machine."
  echo "  - Confirm node is recent enough: $(node --version) (need >= v18)"
  echo "  - Confirm the CLI runs at all: node $CLI --version"
  echo "  - Email the runner output to info@cognovamx.com for support."
  exit 1
fi

echo "TEST PACK PASSED. The CLI is ready for use."
exit 0
