// diff.js — served vs rendered comparison view for MX Readiness Inspector.
// Reads diff data written by popup.js into chrome.storage.session, then
// builds a comparison table showing which findings changed between the
// raw served HTML (what a crawler or LLM receives) and the rendered DOM
// (what the browser shows after JavaScript has run).

const SECTION_LABELS = {
  'mx-governance':   'MX',
  'ai-disclosure':   'AI',
  'discovery-links': 'Links',
  'origin-discovery':'Origin',
  'structured-data': 'Data',
  'open-graph':      'OG',
  'accessibility':   'A11y',
  'provenance':      'Prov',
};

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function pill(status) {
  return `<span class="pill ${esc(status)}">${esc(status)}</span>`;
}

function deltaNote(served, rendered) {
  if (served === rendered) return '';
  if (served === 'fail' && (rendered === 'pass' || rendered === 'warn'))
    return 'JS adds this after page load';
  if ((served === 'pass' || served === 'warn') && rendered === 'fail')
    return 'JS removes this from DOM';
  if (served === 'fail' && rendered === 'info')
    return 'JS adds partial signal';
  if (served === 'warn' && rendered === 'pass')
    return 'JS completes this signal';
  if (served === 'pass' && rendered === 'warn')
    return 'JS degrades this signal';
  return `${served} → ${rendered}`;
}

function buildTable(rows) {
  if (!rows.length) return '<p class="note">No findings in this group.</p>';
  const header = `<table>
    <thead><tr>
      <th>Finding</th>
      <th style="width:48px">Sect</th>
      <th style="width:72px">Served</th>
      <th style="width:72px">Rendered</th>
      <th>Note</th>
    </tr></thead><tbody>`;
  const body = rows.map(({ label, section, served, rendered }) => {
    const changed = served !== rendered;
    const note = deltaNote(served, rendered);
    return `<tr class="${changed ? 'changed' : ''}">
      <td>${esc(label)}</td>
      <td><span class="section-label">${esc(SECTION_LABELS[section] || section)}</span></td>
      <td>${pill(served)}</td>
      <td>${pill(rendered)}</td>
      <td class="delta">${esc(note)}</td>
    </tr>`;
  }).join('');
  return header + body + '</tbody></table>';
}

function render(data) {
  document.getElementById('hdr-url').textContent = data.url || '(unknown URL)';
  document.getElementById('hdr-url').title = data.url || '';

  const servedInfo = data.servedStatus
    ? `Served: HTTP ${data.servedStatus} · ${data.servedContentType || '(no content-type)'}`
    : 'Served HTML fetch status unavailable';
  document.getElementById('hdr-served').textContent =
    servedInfo + ' · Checked: ' + (data.checkedAt ? new Date(data.checkedAt).toLocaleTimeString() : '?');

  // Build lookup maps: findingId → status for served and rendered.
  const servedMap = Object.fromEntries((data.served || []).map((f) => [f.id, f]));
  const renderedMap = Object.fromEntries((data.rendered || []).map((f) => [f.id, f]));

  // Union of all finding IDs.
  const allIds = Array.from(new Set([
    ...(data.served || []).map((f) => f.id),
    ...(data.rendered || []).map((f) => f.id),
  ]));

  const rows = allIds.map((id) => {
    const s = servedMap[id];
    const r = renderedMap[id];
    return {
      id,
      label: (s || r).label,
      section: (s || r).section,
      served:   s ? s.status : 'n/a',
      rendered: r ? r.status : 'n/a',
    };
  });

  const changed = rows.filter((r) => r.served !== r.rendered);
  const unchanged = rows.filter((r) => r.served === r.rendered);

  const summaryBar = document.getElementById('summary-bar');
  if (changed.length === 0) {
    summaryBar.innerHTML = `<span class="diff-count no-changes">No differences</span> — served HTML and rendered DOM agree on all ${rows.length} findings.`;
  } else {
    summaryBar.innerHTML = `<span class="diff-count has-changes">${changed.length} difference${changed.length === 1 ? '' : 's'}</span> found across ${rows.length} findings.`;
  }

  const main = document.getElementById('main');
  let html = '';

  if (changed.length) {
    html += '<h2>Changed — served HTML differs from rendered DOM</h2>';
    html += buildTable(changed);
    html += '<p class="note">Differences reveal how JavaScript modifies the page after the initial HTML loads. A crawler or LLM requesting this URL sees the "served" column; a user (or headless browser) sees the "rendered" column.</p>';
  }

  html += `<h2>Unchanged (${unchanged.length})</h2>`;
  html += buildTable(unchanged);

  main.innerHTML = html;
}

chrome.storage.session.get('mxReadinessDiff', ({ mxReadinessDiff }) => {
  if (!mxReadinessDiff) {
    document.getElementById('main').innerHTML =
      '<div class="empty">No diff data found. Open a page, click the MX Readiness Inspector icon, then click "Served vs rendered".</div>';
    return;
  }
  render(mxReadinessDiff);
});
