const form = document.querySelector('form');

const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zip-code');
const password = document.querySelector('#password');
const confirmPw = document.querySelector('#confirm-pw');

const emailError = document.querySelector('#email + span.error');
const countryError = document.querySelector('#country + span.error');
const zipCodeError = document.querySelector('#zip-code + span.error');
const passwordError = document.querySelector('#password + span.error');
const confirmPwError = document.querySelector('#confirm-pw + span.error');

email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
  } else {
    showEmailError();
  }
});

country.addEventListener('input', () => {
  if (country.validity.valid) {
    countryError.textContent = '';
  } else {
    showCountryError();
  }
});

zipCode.addEventListener('input', () => {
  if (zipCode.validity.valid) {
    zipCodeError.textContent = '';
  } else {
    showZipCodeError();
  }
});

password.addEventListener('input', () => {
  if (password.validity.valid) {
    passwordError.textContent = '';
  } else {
    showPasswordError();
  }
});

confirmPw.addEventListener('input', () => {
  if (password.value === confirmPw.value) {
    confirmPwError.textContent = '';
  } else {
    showConfirmPwError();
  }
});

form.addEventListener('submit', (e) => {
  if (!email.validity.valid) {
    showEmailError();
    e.preventDefault();
  }

  if (!country.validity.valid) {
    showCountryError();
    e.preventDefault();
  }

  if (!zipCode.validity.valid) {
    showZipCodeError();
    e.preventDefault();
  }

  if (!password.validity.valid) {
    showPasswordError();
    e.preventDefault();
  }

  if (password.value !== confirmPw.value) {
    showConfirmPwError();
    e.preventDefault();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = '* Please enter an email address.'
  } else if (email.validity.typeMismatch) {
    emailError.textContent = '* Entered value needs to be an email address.';
  }
}

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = '* Please enter a country.';
  } 
}

function showZipCodeError() {
  if (zipCode.validity.valueMissing) {
    zipCodeError.textContent = '* Please enter a zip code.';
  } 
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = '* Please enter a password.';
  } else if (password.validity.tooShort) {
    passwordError.textContent = `* Password should be at least ${password.minLength} characters.`;
  } else if (!password.validity.valid) {
    passwordError.textContent = '* Password must contain at least 1 number and 1 uppercase and lowercase letter.';
  }
}

function showConfirmPwError() {
  if (password.value !== confirmPw.value) {
    confirmPwError.textContent = '* Both passwords must match.';
  } 
}
