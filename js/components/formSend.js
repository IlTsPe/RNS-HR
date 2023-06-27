import axios from 'axios';

const token = '6235234686:AAHuG42TiUhjZiUbA7sIUK1i_JpujZecv2Y';
const chatId = '-987994014';
const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

document.querySelector('.feedback__form').addEventListener('submit', function (e) {
  e.preventDefault();

  const modalConfirm = document.querySelector('.confirm');

  let name = this.name;
  let email = this.email;
  let phone = this.phone;

  let message = `❗Заявка с портала❗\n`;
  message += `Имя: <b>${name.value}</b>\n`;
  message += `Почта: <b>${email.value}</b>\n`;
  message += `Телефон: <b>${phone.value}</b>`;

  function close() {
    modalConfirm.addEventListener('click', (e) => {
      const target = e.target;
      if (target && !target.classList.contains('confirm__content')) {
        modalConfirm.classList.remove('confirm--active');
      };
    });
  };

  axios.post(urlApi, {
    chat_id: chatId,
    parse_mode: 'html',
    text: message
  })
    .then(() => {
      name.value = '';
      email.value = '';
      phone.value = '';
      modalConfirm.classList.add('confirm--active');
      close()
      setInterval(() => {
        modalConfirm.classList.remove('confirm--active');
      }, 3000);
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => {
      true
    });
});

/* Валидация формы */
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const namePopup = document.querySelector('.popup-name');
const emailPopup = document.querySelector('.popup-email');
const phonePopup = document.querySelector('.popup-phone');

function addInvalidActive(input, popup) {
  input.classList.add('feedback__input--invalid');
  popup.classList.add('popup--active');
  setInterval(() => {
    popup.classList.remove('popup--active');
  }, 2500);
};

function removeInvalidActive(input) {
  input.classList.remove('feedback__input--invalid');
};

function nameValidation() {
  const nameRegEx = /[^а-я\s]+/gi;
  const validName = nameInput.value.replace(nameRegEx, "?");
  const checkName = validName.indexOf('?') > -1;
  checkName || nameInput.value == '' ? addInvalidActive(nameInput, namePopup) : removeInvalidActive(nameInput);
};

function emailValidation() {
  const emailRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  const validEmail = emailRegEx.test(emailInput.value);
  validEmail && emailInput.value !== '' ? removeInvalidActive(emailInput) : addInvalidActive(emailInput, emailPopup);
};

function phoneValidation() {
  const phoneRegEx = /\W*_*/g;
  const validPhone = phoneInput.value.replace(phoneRegEx, '');
  validPhone.length == 11 ? removeInvalidActive(phoneInput) : addInvalidActive(phoneInput, phonePopup);
};

function btnValidation() {
  const inputs = document.querySelectorAll('.feedback__input');
  const formBtn = document.querySelector('.feedback__button');
  const inputsStatusArr = [];

  inputs.forEach(input => {
    const status = input.querySelector('input').classList.contains('feedback__input--invalid');
    inputsStatusArr.push(status);
    return inputsStatusArr;
  });

  if (inputsStatusArr.includes(true)) {
    formBtn.classList.add('disabled-button');
    formBtn.setAttribute('disabled', true);
  } else {
    formBtn.classList.remove('disabled-button');
    formBtn.removeAttribute('disabled')
  };
};

nameValidation();
emailValidation();
phoneValidation();

nameInput.addEventListener('change', () => {
  nameValidation();
  btnValidation();
});
emailInput.addEventListener('change', () => {
  emailValidation();
  btnValidation();
});
phoneInput.addEventListener('change', () => {
  phoneValidation();
  btnValidation();
});
