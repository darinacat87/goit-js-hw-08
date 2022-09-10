const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

if (!localStorage.getItem(LOCALSTORAGE_KEY)) {
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({ email: '', message: '' })
  );
}

form.addEventListener('input', throttle(saveForm, 500));

const { email, message } = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

form.email.value = email;
form.message.value = message;

form.addEventListener('submit', submitForm);

function saveForm() {
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({ email: form.email.value, message: form.message.value })
  );
}

function submitForm(e) {
  e.preventDefault();
  console.log({ email: form.email.value, message: form.message.value });
  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
}
