/* eslint-disable no-restricted-globals */
import luhnNumber from './luhnNumber';
import addAllOpacity from './addAllOpacity';
import firstNumberCard from './firstNumberCards';

const cardButton = document.querySelector('.button');
const fieldCard = document.querySelector('.field');

cardButton.addEventListener('click', (e) => {
  e.preventDefault();
  const valueCard = fieldCard.value.trim();
  if (isNaN(valueCard) === false && valueCard !== '') {
    const luhnTest = luhnNumber(valueCard);
    if (luhnTest) {
      for (const element in firstNumberCard) {
        for (let i = 0; i < firstNumberCard[element].length; i++) {
          const arrayElement = firstNumberCard[element][i];
          if (arrayElement === Number(valueCard.slice(0, 2)) || arrayElement === Number(valueCard.slice(0, 1))) {
            addAllOpacity();
            const cardName = document.querySelector(`.${element}`);
            cardName.classList.remove('opacityImg');
          }
        }
      }
    }
  }
});
