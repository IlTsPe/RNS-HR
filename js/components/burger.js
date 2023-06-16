/* Burger */

const mainNavBtn = document.getElementById("main-nav-btn"),
  mainNav = document.getElementById("main-nav"),
  body = document.querySelector('body'),
  navLink = document.querySelectorAll('.main-nav__link');

function changeMenuState() {
  mainNav.classList.toggle("main-nav__hidden");
  mainNavBtn.classList.toggle("main-nav__btn-mobile_open");
  body.classList.toggle('js-scroll');
};

function closeMenu() {
  mainNav.classList.add("main-nav__hidden");
  mainNavBtn.classList.remove("main-nav__btn-mobile_open");
  body.classList.remove('js-scroll');
};

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    closeMenu()
  };
});

navLink.forEach(link => {
  link.addEventListener('click', closeMenu);
});

mainNavBtn.addEventListener('click', changeMenuState);


window.addEventListener('scroll', () => {
  let burgerLine = document.querySelectorAll('.js-burger-line');
  let sectionToChange = document.querySelector('.services');
  let fromTop = window.scrollY;

  burgerLine.forEach(line => {
    if (
      sectionToChange.offsetTop <= fromTop &&
      sectionToChange.offsetTop + sectionToChange.offsetHeight > fromTop
    ) {
      line.style.backgroundColor = 'red';
    } else {
      line.style.backgroundColor = 'white';
    }
  });
});
