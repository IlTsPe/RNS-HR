/* Arrow Up */

const arrowUp = document.querySelector('.pageup');
const heroSection = document.querySelector('.hero');

window.onscroll = () => {
  const topWindow = window.scrollY;
  const offsetHero = heroSection.offsetHeight;
  if (topWindow >= offsetHero) {
    arrowUp.classList.add('pageup--visible');
  } else {
    arrowUp.classList.remove('pageup--visible');
  };
};
