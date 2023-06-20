/* Swiper */

import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

const hero = new Swiper('.swiper-hero--js', {
  modules: [Navigation, Pagination, Autoplay, EffectFade],
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
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: '.tasks__next',
    prevEl: '.tasks__prev',
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
  breakpoints: {
    800: {
      slidesPerView: 2,
    },
  },
});

const conditions = new Swiper('.swiper-conditions--js', {
  modules: [Navigation, Pagination, Autoplay],
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
  modules: [Navigation, Pagination, Autoplay],
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
  modules: [Navigation, Pagination],
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
  // autoHeight: true,
  speed: 800,
});


//! partnerSlider
const partnerSlider = document.querySelector(".slider-container.slider-2");
let mySliderPartner;
function mobileSlider() {
  if (window.innerWidth <= 1024 && partnerSlider.dataset.mobile == "false") {
    mySliderPartner = new Swiper(partnerSlider, {
      modules: [Autoplay],
      slidesPerView: "auto",
      spaceBetween: 10,
      loop: true,
      slideClass: "company-card",
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      freeMode: true,
      speed: 4000
      //freeModeMomentum: false
    });

    partnerSlider.dataset.mobile = "true";
  }
  if (window.innerWidth > 1024 && partnerSlider.dataset.mobile == "true") {
    partnerSlider.dataset.mobile = "false";
    mySliderPartner.destroy();
  }
}

mobileSlider();
window.addEventListener("resize", () => {
  mobileSlider();
});
//!

const swiperNames = [hero, conditions, corpLife];

function stopAutoPlay(swiperNamesArr, ...section) {
  for (let i = 0; i <= swiperNamesArr.length - 1; i++) {
    let sectionName = `.${[...section][i]}`;
    document.querySelector(sectionName).addEventListener('mouseenter', () => {
      swiperNamesArr[i].autoplay.stop();
    });
  };
};

function startAutoPlay(swiperNamesArr, ...section) {
  for (let i = 0; i <= swiperNamesArr.length - 1; i++) {
    let sectionName = `.${[...section][i]}`;
    document.querySelector(sectionName).addEventListener('mouseleave', () => {
      swiperNamesArr[i].autoplay.start();
    });
  };
};

stopAutoPlay(swiperNames, 'hero', 'conditions', 'corp-life');
startAutoPlay(swiperNames, 'hero', 'conditions', 'corp-life');
