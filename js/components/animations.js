const scrollItemsTop = document.querySelectorAll('.scroll-item-to-top');
const scrollItemsBottom = document.querySelectorAll('.scroll-item-to-bottom');
const scrollItemsLeft = document.querySelectorAll('.scroll-item-from-left');
const scrollItemsRight = document.querySelectorAll('.scroll-item-from-right');

function general(item, animationClass, generalAnimation) {
  let windowCenter = window.innerHeight + window.scrollY;
  let scrollOffset = item.offsetTop + (item.offsetHeight / 6);
  if (windowCenter >= scrollOffset) {
    item.classList.add(`${animationClass}`);
    item.classList.add(`${generalAnimation}`);
  }
}

const scrollAnimation = () => {
  scrollItemsTop.forEach(itemT => {
    general(itemT, 'animation-to-top', 'animation')
  });
  scrollItemsBottom.forEach(itemB => {
    general(itemB, 'animation-to-bottom', 'animation')
  });
  scrollItemsLeft.forEach(itemL => {
    general(itemL, 'animation-from-left', 'animation')
  });
  scrollItemsRight.forEach(itemR => {
    general(itemR, 'animation-from-right', 'animation')
  });
};

scrollAnimation();
window.addEventListener('scroll', () => {
  scrollAnimation();
});
