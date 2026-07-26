/**
 * MX Bookshop — Application Script
 * @description Interactive behaviours for the MX book-sale website
 * @version 1.0
 * @author Tom Cranstoun
 * @mx:status active
 * @mx:contentType script
 */

document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initSmoothScroll();
  initHeaderScroll();
  initCodeCopy();
});

/** Mobile navigation toggle */
function initMobileMenu() {
  var btn = document.querySelector('.mobile-menu-btn');
  var nav = document.querySelector('.header-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.textContent = isOpen ? '\u2715' : '\u2630';
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '\u2630';
    });
  });
}

/** Smooth scroll for anchor links */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/**
 * Copy-to-clipboard button on every fenced code block.
 * Progressive enhancement: no clipboard API (or an insecure context) means no
 * button, and the content is unaffected. Persistent state over transient
 * signals: the label changes to "Copied" and stays - nothing flashes and
 * vanishes. Styles are injected here so the enhancement travels complete in
 * this one file, on every page that loads it, whichever stylesheet the page
 * uses.
 */
function initCodeCopy() {
  if (!navigator.clipboard || !window.isSecureContext) return;
  var blocks = document.querySelectorAll('pre > code');
  if (!blocks.length) return;

  var style = document.createElement('style');
  style.textContent =
    'pre { position: relative; }' +
    '.code-copy-btn { position: absolute; top: .5rem; right: .5rem;' +
    ' padding: .25rem .6rem; font: inherit; font-size: .8em; line-height: 1;' +
    ' color: inherit; background: rgba(127, 127, 127, .15);' +
    ' border: 1px solid rgba(127, 127, 127, .45); border-radius: 4px; cursor: pointer; }' +
    '.code-copy-btn:hover { background: rgba(127, 127, 127, .3); }' +
    '.code-copy-btn:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }';
  document.head.appendChild(style);

  blocks.forEach(function (code) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'code-copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy code to clipboard');
    btn.setAttribute('aria-live', 'polite');
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(code.textContent).then(function () {
        btn.textContent = 'Copied';
        btn.setAttribute('aria-label', 'Code copied to clipboard');
      }, function () {
        btn.textContent = 'Copy failed';
      });
    });
    code.parentElement.appendChild(btn);
  });
}

/** Header background solidifies on scroll */
function initHeaderScroll() {
  var header = document.querySelector('.site-header');
  if (!header) return;

  var scrollThreshold = 50;
  var ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        if (window.scrollY > scrollThreshold) {
          header.style.background = 'rgba(10, 22, 40, 0.98)';
        } else {
          header.style.background = 'rgba(10, 22, 40, 0.95)';
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}
