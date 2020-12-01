
const validMessage = document.querySelector('.validMessage');

function validation(valueValid) {
  if (validMessage.classList.contains('hiddenValid')) {
    validMessage.classList.remove('hiddenValid');
    validMessage.dataset.id = `${valueValid}`;
    validMessage.innerText = `${valueValid}`;
  }
}

function validHIde() {
  if (validMessage.classList.contains('hiddenValid') === false) {
    validMessage.classList.add('hiddenValid');
    validMessage.dataset.id = "free"
  }
}

export { validation, validHIde };
