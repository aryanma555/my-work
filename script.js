const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('#quote-form').addEventListener('submit', (event) => { event.preventDefault(); event.currentTarget.querySelector('.form-success').classList.add('visible'); event.currentTarget.reset(); });
