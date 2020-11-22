/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
import luhnNumber from './luhnNumber';
import { validation, validHIde } from './validMessage';
import validBank from './validBank';

const cardButton = document.querySelector('.button');
const fieldCard = document.querySelector('.field');

cardButton.addEventListener('click', (e) => {
  e.preventDefault();
  validHIde();
  const valueCard = fieldCard.value.trim();
  if (isNaN(valueCard) === false && valueCard !== '') {
    const luhnTest = luhnNumber(valueCard);
    if (luhnTest) {
      validation('valid');
      validBank(valueCard);
    } else {
      validation('invalid');
    }
  }
});
