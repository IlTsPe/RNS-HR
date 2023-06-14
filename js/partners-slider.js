import { Swiper, Autoplay } from "swiper";
Swiper.use([Autoplay]);
const partnerSlider = document.querySelector(".slider-container.slider-2");

let mySliderPartner;

function mobileSlider() {
  if (window.innerWidth <= 1024 && partnerSlider.dataset.mobile == "false") {
    mySliderPartner = new Swiper(partnerSlider, {
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
