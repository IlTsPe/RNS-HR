/* Burger */

function burgerMenu() {
  const mainNavBtn = document.getElementById("main-nav-btn");

  const mainNav = document.getElementById("main-nav");

  function changeMenuState() {
    mainNav.classList.toggle("main-nav__hidden");
    mainNavBtn.classList.toggle("main-nav__btn-mobile_open");
  }

  mainNavBtn.addEventListener('click', changeMenuState);
}

export default burgerMenu;
