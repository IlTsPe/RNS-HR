/* Accordion */

const accordionItem = document.querySelectorAll('.accordion__item');

accordionItem.forEach(item => {
  const accordionHeader = item.querySelector('.accordion__title');
  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    };
  });
});

const toggleItem = item => {
  const accordionContent = item.querySelector('.accordion__content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = `${accordionContent.scrollHeight}px`;
    item.classList.add('accordion-open');
  };
};
