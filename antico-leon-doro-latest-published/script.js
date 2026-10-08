(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches || !('IntersectionObserver' in window)) return;
  // Observe fully visible figures, never a hidden or clipped image wrapper.
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('reveal-play');
      const section = entry.target.closest('section');
      if (section) section.classList.add('feature-play');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.05 });
  document.querySelectorAll('[data-reveal]').forEach(target => observer.observe(target));
  if (reduced.addEventListener) reduced.addEventListener('change', event => {
    if (event.matches) observer.disconnect();
  });
})();
