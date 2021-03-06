/* eslint-disable no-restricted-syntax */
import firstNumberCard from './firstNumberCards';
import addAllOpacity from './addAllOpacity';



// eslint-disable-next-line consistent-return
const validBank = function(inputCard) {
  for (const element in firstNumberCard) {
    if (Object.prototype.hasOwnProperty.call(firstNumberCard, element)) {
      for (let i = 0; i < firstNumberCard[element].length; i++) {
        const arrayElement = firstNumberCard[element][i];
        if (arrayElement === Number(inputCard.slice(0, 2)) || arrayElement === Number(inputCard.slice(0, 1))) {
          addAllOpacity();
          const test1 = document.querySelector('.discover');
          console.log(test1);
          const cardName = document.querySelector(`[data-id="${element}"]`)
          console.log(cardName);
          // const cardName = document.querySelector(`.${element}`);
          cardName.classList.remove('opacityImg');
          return element;
        }
      }
    }
  }
  return "0";
};

export default validBank;
