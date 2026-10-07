const toggle = document.querySelector('.nav-toggle');
const list = document.querySelector('.nav-list');

if (toggle && list) {
  toggle.addEventListener('click', () => {
    const isOpen = list.classList.toggle('open');
    toggle.classList.toggle('is-open', isOpen);
  });
}
