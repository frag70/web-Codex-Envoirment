'use strict';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.matches('.kinetic-heading') ? 'type-enter' : 'play-reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  document.querySelectorAll('.cinema-mask, .kinetic-heading').forEach(mask => observer.observe(mask));
  const onMotionChange = event => {
    if (event.matches) {
      observer.disconnect();
      document.querySelectorAll('.play-reveal, .type-enter').forEach(mask => { mask.classList.remove('play-reveal'); mask.classList.remove('type-enter'); });
    }
  };
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', onMotionChange);
  else if (reducedMotion.addListener) reducedMotion.addListener(onMotionChange);
}
document.querySelectorAll('.food-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });
});
