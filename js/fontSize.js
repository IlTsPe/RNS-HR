// import isMobile from 'ismobilejs';
import Cookies from 'js-cookie';

const SIZES = [
  0,
  0.0625,
  0.125,
  0.1875,
  0.25,
  0.3125,
  0.375,
  0.4375,
  0.5,
  0.5625,
  0.625,
  0.6875,
  0.75,
  0.8125,
  0.875,
  0.9375,
  1,
  1.063,
  1.125,
  1.188,
  1.25,
  1.313,
  1.375,
  1.438,
  1.5,
  1.563,
  1.625,
  1.688,
  1.75,
  1.813,
  1.875,
  1.938,
  2,
  2.063,
  2.125,
  2.188,
  2.25,
  2.313,
  2.375,
  2.438,
  2.5,
  2.563,
  2.625,
  2.688,
  2.75,
  2.813,
  2.875,
  2.938,
  3,
  3.063,
  3.125
];

const FONT_SIZE = 62.5;
const BASE_WIDTH = 1200;
const DESKTOP_WIDTH = 1024;

(function () {
  const root = document.documentElement;

  function setFontSize() {
    if (window.innerWidth > DESKTOP_WIDTH) {

      const maxWidth = Math.min(window.innerWidth, 1920); //что бы не расло после hd

      const fontSize = (FONT_SIZE * maxWidth / BASE_WIDTH).toFixed(0);

      let arrayFontSize = null;
      SIZES.some((val, index) => {
        arrayFontSize = index;
        return fontSize <= val * 100;
      });

      root.style.fontSize = `${SIZES[arrayFontSize - 1] * 100}%`;
      Cookies.set('fontSize', SIZES[arrayFontSize - 1] * 100);
    } else {
      root.style.fontSize = `62.5%`;
      Cookies.set('fontSize', `62.5`);
    }
  }

  setFontSize();

  window.addEventListener("optimizedResize", setFontSize, false);

})();
