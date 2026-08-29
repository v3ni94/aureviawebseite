(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Goldspur: dünne Scroll-Fortschrittslinie */
  var goldspur = document.querySelector(".goldspur");
  function updateGoldspur() {
    if (!goldspur) return;
    var h = document.documentElement;
    var scrollable = h.scrollHeight - h.clientHeight;
    var pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
    goldspur.style.width = pct + "%";
  }

  /* Sticky-Nav: kompakter beim Scrollen */
  var nav = document.querySelector("nav.mainnav");
  function updateNav() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 12);
  }

  /* Zurück-nach-oben */
  var totop = document.querySelector(".totop");
  function updateTotop() {
    if (!totop) return;
    totop.classList.toggle("show", window.scrollY > 480);
  }

  window.addEventListener("scroll", function () {
    updateGoldspur();
    updateNav();
    updateTotop();
  }, { passive: true });
  updateGoldspur();
  updateNav();
  updateTotop();

  if (totop) {
    totop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* Mobile Navigation */
  var toggle = document.querySelector(".navtoggle");
  var panel = document.querySelector(".mobilepanel");
  var closeBtn = document.querySelector(".mobilepanel .close");

  function openPanel() {
    if (!panel || !toggle) return;
    panel.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("navopen");
  }
  function closePanel() {
    if (!panel || !toggle) return;
    panel.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("navopen");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      expanded ? closePanel() : openPanel();
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", closePanel);
  if (panel) {
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closePanel);
    });
  }
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePanel();
  });

  /* Scroll-Reveal (IntersectionObserver) */
  var revealEls = document.querySelectorAll(".reveal, .h2bar, .phase-track");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* Aktive Seite in der Navigation markieren */
  var here = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll(".navlinks a, .mobilepanel a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here || (here === "" && href === "index.html")) {
      a.setAttribute("aria-current", "page");
    }
  });
})();
