const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

// Open or close the menu when the button is clicked
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

// Close the menu after a link is chosen
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});