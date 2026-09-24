// FINKI Café & Bakery - shared script: mobile navigation toggle only
const toggle = document.querySelector('.nav-toggle');
const list = document.querySelector('.nav-list');
if (toggle && list) {
  toggle.addEventListener('click', () => {
    const open = list.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}
