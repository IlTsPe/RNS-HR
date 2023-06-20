const scrollItemsTop = document.querySelectorAll('.scroll-item-to-top');
const scrollItemsBottom = document.querySelectorAll('.scroll-item-to-bottom');
const scrollItemsLeft = document.querySelectorAll('.scroll-item-from-left');
const scrollItemsRight = document.querySelectorAll('.scroll-item-from-right');
const sectionAnimation = document.querySelectorAll('.animation');

const scrollAnimation = () => {
  let windowCenter = window.innerHeight + window.scrollY;
  scrollItemsTop.forEach(itemT => {
    let scrollOffset = itemT.offsetTop + (itemT.offsetHeight / 6);
    if (windowCenter >= scrollOffset) {
      itemT.classList.add('animation-to-top');
      itemT.classList.add('animation');
    }
  });
  scrollItemsBottom.forEach(itemB => {
    let scrollOffset = itemB.offsetTop + (itemB.offsetHeight / 6);
    if (windowCenter >= scrollOffset) {
      itemB.classList.add('animation-to-bottom');
      itemB.classList.add('animation');
    }
  });
  scrollItemsLeft.forEach(itemL => {
    let scrollOffset = itemL.offsetTop + (itemL.offsetHeight / 6);
    if (windowCenter >= scrollOffset) {
      itemL.classList.add('animation-from-left');
      itemL.classList.add('animation');
    }
  });
  scrollItemsRight.forEach(itemR => {
    let scrollOffset = itemR.offsetTop + (itemR.offsetHeight / 6);
    if (windowCenter >= scrollOffset) {
      itemR.classList.add('animation-from-right');
      itemR.classList.add('animation');
    }
  });
};

scrollAnimation();
window.addEventListener('scroll', () => {
  scrollAnimation();
});
