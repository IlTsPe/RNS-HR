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
