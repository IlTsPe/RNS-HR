/* Swiper */

function swiperSliders() {

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
    // autoHeight: true,
    speed: 800,
  });

  new Swiper('.slider-2', {
    slidesPerView: 1,
    simulateTouch: false,
    // autoHeight: true,
    speed: 800,
  });


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
}

export default swiperSliders;
