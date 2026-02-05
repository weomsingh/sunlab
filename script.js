const body = document.body;
body.classList.add('page-transition');

const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href && href.includes(currentPath)) {
    link.classList.add('active');
  }
});

const menuToggle = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.nav-links');

if (menuToggle && navContainer) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navContainer.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const transitionLinks = document.querySelectorAll('a[data-transition]');
transitionLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = link.getAttribute('href');
    if (target && !target.startsWith('#') && !target.startsWith('http')) {
      event.preventDefault();
      body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = target;
      }, 240);
    }
  });
});
