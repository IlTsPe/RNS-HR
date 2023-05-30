'use strict'

/* Swiper */

const hero = new Swiper('.swiper-hero--js', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  delay: 3000,
  simulateTouch: true,
  speed: 800,
});

const tasks = new Swiper('.swiper-tasks', {
  spaceBetween: 15,
  navigation: {
    nextEl: '.tasks__next',
    prevEl: '.tasks__prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  simulateTouch: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 600,
  breakpoints: {
    1000: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },

  },
});

const conditions = new Swiper('.swiper-conditions--js', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.conditions__next',
    prevEl: '.conditions__prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  simulateTouch: true,
  speed: 600,
});

const corpLife = new Swiper('.swiper-corp-life--js', {
  spaceBetween: 24,
  navigation: {
    nextEl: '.corp-life__next',
    prevEl: '.corp-life__prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  simulateTouch: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 600,
  loop: true,
  centeredSlides: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    620: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    }
  }
});

new Swiper('.swiper-services--js', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.services__next',
    prevEl: '.services__prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  simulateTouch: false,
  speed: 800,
});


const swiperNames = [hero, conditions, corpLife];

function stopAutoPlay(swiperNamesArr, ...section) {
  for (let i = 0; i <= swiperNamesArr.length - 1; i++) {
    let sectionName = `.${[...section][i]}`;
    document.querySelector(sectionName).addEventListener('mouseenter', () => {
      swiperNamesArr[i].autoplay.stop();
    });
  }
}

function startAutoPlay(swiperNamesArr, ...section) {
  for (let i = 0; i <= swiperNamesArr.length - 1; i++) {
    let sectionName = `.${[...section][i]}`;
    document.querySelector(sectionName).addEventListener('mouseleave', () => {
      swiperNamesArr[i].autoplay.start();
    });
  }
}

stopAutoPlay(swiperNames, 'hero', 'conditions', 'corp-life');
startAutoPlay(swiperNames, 'hero', 'conditions', 'corp-life');


/* Accordion */

const accordionItem = document.querySelectorAll('.accordion__item');

accordionItem.forEach(item => {
  const accordionHeader = item.querySelector('.accordion__title');
  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem)
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


/* Burger */

const burger = document.querySelector('.burger'),
  menu = document.querySelector('.menu'),
  overlay = document.querySelector('.menu__overlay'),
  close = document.querySelector('.menu__close'),
  body = document.querySelector('body');

burger.addEventListener('click', () => {
  menu.classList.add('active');
  body.classList.add('js-scroll');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
  body.classList.remove('js-scroll');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active');
  body.classList.remove('js-scroll');
});


/* Map */

// ymaps.ready(function () {
//   const myMap = new ymaps.Map('map', {
//     center: [59.912026, 30.422444],
//     zoom: 13
//   }, {
//     searchControlProvider: 'yandex#search'
//   }),

//     // Создаём макет содержимого.
//     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//       '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//     ),

//     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//       hintContent: 'RNS Family',
//       balloonContent: ''
//     }, {
//       // Опции.
//       // Необходимо указать данный тип макета.
//       iconLayout: 'default#image',
//       // Своё изображение иконки метки.
//       iconImageHref: 'map.png',
//       // Размеры метки.
//       iconImageSize: [520, 182],
//       // Смещение левого верхнего угла иконки относительно
//       // её "ножки" (точки привязки).
//       iconImageOffset: [-50, -170]
//     });

//   myMap.geoObjects
//     .add(myPlacemark)
// });

/* Preloader */

window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
  body.classList.add('js-scroll');
  setInterval(function () {
    preloader.classList.add('preloader-hidden');
    body.classList.remove('js-scroll');
  }, 300);
}
