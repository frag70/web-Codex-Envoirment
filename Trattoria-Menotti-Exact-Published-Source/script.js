const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mobile-nav');
const header = document.querySelector('.header');
function closeMenu() {
  nav.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Apri menu');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
  nav.hidden = !open;
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('click', e => {
  if (!nav.hidden && !header.contains(e.target)) closeMenu();
});
window.matchMedia('(min-width: 701px)').addEventListener('change', e => {
  if (e.matches) closeMenu();
});
const dialog = document.querySelector('#enquiry-dialog');
document.querySelectorAll('.enquiry-open').forEach(button => {
  button.addEventListener('click', () => {
    closeMenu();
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.addEventListener('click', e => {
  const r = dialog.getBoundingClientRect();
  if (e.target === dialog && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) dialog.close();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !nav.hidden) {
    closeMenu();
    toggle.focus();
  }
});
document.querySelector('#event-form').addEventListener('submit', e => {
  e.preventDefault();
  const occasion = document.querySelector('#occasion').value;
  const date = document.querySelector('#date').value;
  const guests = document.querySelector('#guests').value;
  const message = document.querySelector('#message').value;
  const body = `Buongiorno Trattoria Menotti,\n\nvorrei informazioni per organizzare un evento.\n\nOccasione: ${occasion}\nData indicativa: ${date ? date.split('-').reverse().join('/') : 'Da concordare'}\nOspiti indicativi: ${guests || 'Da definire'}\n\n${message}\n\nPotreste indicarmi disponibilità, spazi e possibilità?\n\nNome e recapito: [da completare]\nGrazie!`;
  document.querySelector('#form-status').hidden = false;
  window.location.href = `mailto:trattoriamenotti@libero.it?subject=${encodeURIComponent('Informazioni evento — ' + occasion)}&body=${encodeURIComponent(body)}`;
});
