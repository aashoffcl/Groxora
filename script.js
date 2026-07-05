// ============================================================
// GROXORA — script.js
// Mobile nav toggle + "what are you looking for" service finder
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Footer year ----
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  // ---- Mobile nav toggle ----
  var header = document.querySelector('.site-header');
  var navToggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');

  if (navToggle && header) {
    navToggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close mobile nav when a link is tapped
    if (mobileNav) {
      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          header.classList.remove('nav-open');
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.setAttribute('aria-label', 'Open menu');
        });
      });
    }
  }

  // ---- Service finder: click a chip -> scroll to matching service + highlight ----
  var finderChips = document.querySelectorAll('.finder-chip');

  finderChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var targetId = chip.getAttribute('data-target');
      var targetEl = document.getElementById(targetId);
      if (!targetEl) { return; }

      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // remove highlight from any previously highlighted row
      document.querySelectorAll('.service-row.highlight').forEach(function (row) {
        row.classList.remove('highlight');
      });

      // add highlight, then remove after animation window
      window.setTimeout(function () {
        targetEl.classList.add('highlight');
      }, 350);

      window.setTimeout(function () {
        targetEl.classList.remove('highlight');
      }, 2600);
    });
  });

});
