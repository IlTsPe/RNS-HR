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

const swiperNames = [hero];

function stop(swiperNameArr, ...section) {
  for (let i = 0; i <= swiperNameArr.length - 1; i++) {
    let sectionName = `.${[...section][i]}`;
    document.querySelector(sectionName).addEventListener('mouseenter', () => {
      swiperNameArr[i].autoplay.stop();
    });
  }
}

function start(swiperNameArr, ...section) {
  for (let i = 0; i <= swiperNameArr.length - 1; i++) {
    let sectionName = `.${[...section][i]}`;
    document.querySelector(sectionName).addEventListener('mouseleave', () => {
      swiperNameArr[i].autoplay.start();
    });
  }
}

stop(swiperNames, 'hero');
start(swiperNames, 'hero');

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

new Swiper('.swiper-conditions', {
  slidesPerView: 1,
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

new Swiper('.swiper-corp-life', {
  spaceBetween: 24,
  navigation: {
    nextEl: '.corp-life__next',
    prevEl: '.corp-life__prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  simulateTouch: false,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
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

new Swiper('.swiper-services', {
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
  autoHeight: true,
});


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
  body = document.querySelector('body'),
  closeMenu = document.querySelector('.menu__close'),
  closeOver = document.querySelector('.menu__overlay');

burger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active');
});

burger.addEventListener('click', () => {
  body.classList.add('js-scroll');
});

closeMenu.addEventListener('click', () => {
  body.classList.remove('js-scroll');
});

closeOver.addEventListener('click', () => {
  body.classList.remove('js-scroll');
});


/* Map */

ymaps.ready(function () {
  const myMap = new ymaps.Map('map', {
    center: [59.912026, 30.422444],
    zoom: 13
  }, {
    searchControlProvider: 'yandex#search'
  }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'RNS Family',
      balloonContent: ''
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map.png',
      // Размеры метки.
      iconImageSize: [520, 182],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-50, -170]
    });

  myMap.geoObjects
    .add(myPlacemark)
});
