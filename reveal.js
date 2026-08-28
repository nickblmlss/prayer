/* BLMLSS scroll reveal — slow fade-and-rise, per the design system:
   16px translate, 640ms, cubic-bezier(.16,.84,.44,1). Respects reduced motion.
   Fails safe: content is never left hidden if the observer never fires. */
(function () {
  if (window.__blmlssReveal) return;
  window.__blmlssReveal = true;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  var EASE = 'cubic-bezier(.16,.84,.44,1)';
  var SEL = 'main > section, main > section > *, article, footer, [data-reveal]';
  var seen = new WeakSet();
  var primed = [];
  var io = null;
  var ioWorks = false;

  function show(el, delay) {
    if (!el || el.__revealed) return;
    el.__revealed = true;
    el.style.transition = 'opacity 640ms ' + EASE + ' ' + (delay || 0) + 'ms, transform 640ms ' + EASE + ' ' + (delay || 0) + 'ms';
    el.style.opacity = '1';
    el.style.transform = 'none';
    setTimeout(function () { el.style.willChange = ''; }, 900 + (delay || 0));
  }

  function inView(el) {
    var r = el.getBoundingClientRect();
    return r.top < (window.innerHeight || 0) * 0.92 && r.bottom > 0;
  }

  function sweep() {
    for (var i = primed.length - 1; i >= 0; i--) {
      var el = primed[i];
      if (el.__revealed || !el.isConnected) { primed.splice(i, 1); continue; }
      if (inView(el)) { show(el, 0); primed.splice(i, 1); }
    }
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; sweep(); });
  }
  window.addEventListener('scroll', onScroll, { passive: true, capture: true });
  document.addEventListener('scroll', onScroll, { passive: true, capture: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // Immune to missing scroll/IO events: poll while anything is still hidden.
  setInterval(function () {
    if (!primed.length) return;
    sweep();
  }, 200);

  if (typeof IntersectionObserver === 'function') {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        ioWorks = true;
        io.unobserve(e.target);
        show(e.target, 0);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
  }

  function prime(el, i) {
    if (seen.has(el)) return;
    /* parallax layers own their own transform — never fade-and-rise them */
    if (el.hasAttribute('data-parallax')) return;
    seen.add(el);

    // Already on screen at first paint: animate in immediately with a light stagger.
    if (inView(el)) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.willChange = 'opacity, transform';
      var d = Math.min(i, 5) * 70;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { show(el, d); });
      });
      return;
    }

    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.willChange = 'opacity, transform';
    primed.push(el);
    if (io) io.observe(el);

    // Safety net: nothing stays hidden for more than ~1.2s of inactivity.
    setTimeout(function () { if (!el.__revealed && inView(el)) show(el, 0); }, 1200);
  }

  function scan() {
    var i = 0;
    document.querySelectorAll(SEL).forEach(function (el) {
      if (el.closest('[data-no-reveal]')) return;
      if (el.tagName === 'SECTION' && el.parentElement && el.parentElement.closest('main > section')) return;
      prime(el, i++);
    });
    sweep();
  }

  function start() {
    scan();
    new MutationObserver(function () {
      clearTimeout(start._t);
      start._t = setTimeout(scan, 120);
    }).observe(document.body, { childList: true, subtree: true });

    // Final guarantee: if the observer never produced a single callback, the
    // runtime does not support it — drop the effect rather than hide content.
    setTimeout(function () {
      if (ioWorks) return;
      sweep();
      if (primed.length && !ioWorks) {
        document.querySelectorAll(SEL).forEach(function (el) {
          if (el.style.opacity === '0' && !inView(el)) return; // scroll handler covers these
          if (el.style.opacity === '0') { el.style.transition = 'none'; el.style.opacity = '1'; el.style.transform = 'none'; }
        });
      }
    }, 2000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(start, 60); });
  } else {
    setTimeout(start, 60);
  }
})();
