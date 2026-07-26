/**
 * COG Viewer — mx.allabout.network
 * @description Fetch and display .cog.md files in an accessible modal overlay.
 *              Wired to the Fable 5 COG decomposition post in blog/drafts/.
 * @version 1.0
 * @author Tom Cranstoun
 * @mx:status active
 * @mx:contentType script
 * @mx:audience humans, machines
 * @mx:canonicalUri https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/js/cog-viewer.js
 * @mx:servedAt https://mx.allabout.network/js/cog-viewer.js
 */
(function () {
  'use strict';

  var COG_FILES = {
    'manifest.cog.md':     '00-manifest.cog.md',
    'identity.cog.md':     '01-identity.cog.md',
    'behaviour.cog.md':    '02-behavior.cog.md',
    'wellbeing.cog.md':    '03-wellbeing.cog.md',
    'knowledge.cog.md':    '04-knowledge.cog.md',
    'search.cog.md':       '05-search.cog.md',
    'tools.cog.md':        '06-tools.cog.md',
    'memory.cog.md':       '07-memory.cog.md',
    'storage.cog.md':      '08-storage.cog.md',
    'connectors.cog.md':   '09-connectors.cog.md',
    'computer-use.cog.md': '10-computer-use.cog.md',
    'filesystem.cog.md':   '11-filesystem.cog.md',
    'network.cog.md':      '12-network.cog.md'
  };

  var overlay  = document.getElementById('cog-overlay');
  var titleEl  = document.getElementById('cog-overlay-title');
  var bodyEl   = document.getElementById('cog-overlay-body');
  var closeBtn = document.getElementById('cog-overlay-close');

  if (!overlay) return;

  var lastFocused = null;

  // All focusable elements inside the dialog for the focus trap.
  function getFocusable() {
    return Array.prototype.slice.call(
      overlay.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])')
    ).filter(function (el) { return !el.disabled; });
  }

  function trapFocus(e) {
    var focusable = getFocusable();
    if (!focusable.length) { e.preventDefault(); return; }
    var first = focusable[0];
    var last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  }

  function openOverlay(name, file, trigger) {
    lastFocused = trigger || null;
    titleEl.textContent = name;
    bodyEl.textContent  = 'Loading…';
    overlay.classList.add('cog-overlay--open');
    overlay.removeAttribute('aria-hidden');
    document.body.setAttribute('aria-hidden', 'true');
    document.body.classList.add('cog-overlay-open');
    overlay.addEventListener('keydown', handleKeydown);
    closeBtn.focus();

    fetch('fable5-cogs/' + file)
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function (text) { bodyEl.textContent = text; })
      .catch(function (err) { bodyEl.textContent = 'Could not load file: ' + err.message; });
  }

  function closeOverlay() {
    overlay.classList.remove('cog-overlay--open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.removeAttribute('aria-hidden');
    document.body.classList.remove('cog-overlay-open');
    overlay.removeEventListener('keydown', handleKeydown);
    if (lastFocused) { lastFocused.focus(); lastFocused = null; }
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') { closeOverlay(); return; }
    if (e.key === 'Tab')    { trapFocus(e); }
  }

  closeBtn.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeOverlay();
  });

  // Set initial aria-hidden so SR ignores it until opened.
  overlay.setAttribute('aria-hidden', 'true');

  document.querySelectorAll('ol li code').forEach(function (el) {
    var name = el.textContent.trim();
    var file = COG_FILES[name];
    if (!file) return;
    el.setAttribute('data-cog', file);
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.title = 'Click to view ' + name;
    el.addEventListener('click', function () { openOverlay(name, file, el); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOverlay(name, file, el); }
    });
  });
}());
