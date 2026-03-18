/**
 * MX Content Site — Common JavaScript
 * Shared functionality for content.allabout.network
 * @file common.js
 * @version 2.0
 * @author Tom Cranstoun
 *
 * @mx:category mx-tools
 * @mx:status active
 * @mx:contentType script
 * @mx:tags tool, content-site
 * @mx:partOf mx-os
 */

/**
 * Smooth scroll to top functionality
 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

/**
 * Initialise floating navigation buttons
 */
function initializeFloatingButtons() {
  var topButton = document.querySelector('.floating-top-button');
  if (topButton) {
    topButton.addEventListener('click', function (e) {
      e.preventDefault();
      scrollToTop();
    });
  }
}

/**
 * Set page load state for AI agents
 */
function setPageLoadState() {
  var main = document.querySelector('main[role="main"]');
  if (main && !main.hasAttribute('data-load-state')) {
    main.setAttribute('data-load-state', 'complete');
  }
}

/**
 * Initialise all common functionality
 */
function initialize() {
  setPageLoadState();
  initializeFloatingButtons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}
