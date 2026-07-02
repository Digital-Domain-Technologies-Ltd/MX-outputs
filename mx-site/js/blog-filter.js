/* Blog index tag filter.
 *
 * Wires the multi-select AND filter on the blog landing page:
 *   - clicking a tag chip toggles selection (aria-pressed reflects state)
 *   - the clear-all chip (data-tag-clear) resets every selection and is
 *     hidden when no filter is active
 *   - the URL hash (#tags=provenance,commentary or #tag=provenance) is
 *     parsed on load so a link from a per-post chip arrives pre-selected
 *
 * Extracted from inline <script> in blog/index.html on 2026-05-26 to
 * honour the no-inline-CSS-or-JS rule on mx-site. The CSS lives in
 * mx-outputs/mx-site/css/mx-blog.css.
 */

(function () {
  var filter = document.querySelector('.tag-filter');
  if (!filter) return;
  var chips = Array.prototype.slice.call(filter.querySelectorAll('.tag-chip[data-tag]'));
  var clearBtn = filter.querySelector('[data-tag-clear]');
  var status = filter.querySelector('[data-tag-status]');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.proposition-card[data-tags]'));
  var selected = Object.create(null);

  function selectedKeys() { return Object.keys(selected); }

  function apply() {
    var keys = selectedKeys();
    var visible = 0;
    cards.forEach(function (card) {
      var cardTags = (card.getAttribute('data-tags') || '').split(',').map(function (s) { return s.trim(); });
      var match = true;
      if (keys.length > 0) {
        for (var i = 0; i < keys.length; i++) {
          if (cardTags.indexOf(keys[i]) === -1) { match = false; break; }
        }
      }
      if (match) { card.removeAttribute('hidden'); visible++; }
      else { card.setAttribute('hidden', ''); }
    });
    if (keys.length === 0) {
      status.textContent = '';
    } else {
      var label = keys.join(' AND ');
      status.textContent = visible + ' post' + (visible === 1 ? '' : 's') + ' match ' + label + '.';
    }
    if (clearBtn) {
      if (keys.length > 0) clearBtn.classList.add('is-visible');
      else clearBtn.classList.remove('is-visible');
    }
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var tag = chip.getAttribute('data-tag');
      var pressed = chip.getAttribute('aria-pressed') === 'true';
      if (pressed) { chip.setAttribute('aria-pressed', 'false'); delete selected[tag]; }
      else { chip.setAttribute('aria-pressed', 'true'); selected[tag] = true; }
      apply();
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      for (var k in selected) { delete selected[k]; }
      chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      if (history && history.replaceState) {
        history.replaceState(null, '', location.pathname + location.search);
      }
      apply();
    });
  }

  function applyHashSelection() {
    var hash = (location.hash || '').replace(/^#/, '');
    if (!hash) return;
    var params = {};
    hash.split('&').forEach(function (pair) {
      var idx = pair.indexOf('=');
      if (idx > -1) { params[pair.slice(0, idx)] = pair.slice(idx + 1); }
    });
    var raw = params.tags || params.tag;
    if (!raw) return;
    var requested = decodeURIComponent(raw).split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    var known = {};
    chips.forEach(function (c) { known[c.getAttribute('data-tag')] = c; });
    requested.forEach(function (t) {
      if (known[t]) {
        known[t].setAttribute('aria-pressed', 'true');
        selected[t] = true;
      }
    });
    if (Object.keys(selected).length > 0) apply();
  }

  applyHashSelection();
})();
