/* Phone mask */

function phoneMask() {
  const phoneInput = document.querySelector('#phone');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(phoneInput);
};

export default phoneMask;
