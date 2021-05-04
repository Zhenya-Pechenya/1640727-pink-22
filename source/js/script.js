const mainNav = document.querySelector('.main-nav');

const navToggle = document.querySelector('.main-nav__toggle');

// mainNav.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', (e) => {
  e.preventDefault();

  mainNav.classList.toggle('main-nav--closed');
})
