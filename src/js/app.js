/* eslint-disable no-restricted-globals */
import luhnNumber from './luhnNumber';
import validDinnerClubCard from './validDinnerClubCard';
import addAllOpacity from './addAllOpacity';
import validJCBCard from './validJCBCard';
import validMasterCard from './validMasterCard';
import validMirCard from './validMirCard';
import validVisaCard from './validVisaCard';

const cardButton = document.querySelector('.button');
const fieldCard = document.querySelector('.field');
const dinnerClubCard = document.querySelector('.dinnerClub');
const jcb = document.querySelector('.jcb');
const masterCard = document.querySelector('.masterCard');
const mir = document.querySelector('.mir');
const visa = document.querySelector('.visa');

cardButton.addEventListener('click', (e) => {
  e.preventDefault();
  const valueCard = fieldCard.value.trim();
  if (isNaN(valueCard) === false && valueCard !== '') {
    const luhnTest = luhnNumber(valueCard);
    if (luhnTest === true) {
      if (validDinnerClubCard(valueCard) > -1) {
        addAllOpacity();
        dinnerClubCard.classList.remove('opacityImg');
      } else if (validJCBCard(valueCard) > -1) {
        addAllOpacity();
        jcb.classList.remove('opacityImg');
      } else if (validMasterCard(valueCard) > -1) {
        addAllOpacity();
        masterCard.classList.remove('opacityImg');
      } else if (validMirCard(valueCard) > -1) {
        addAllOpacity();
        mir.classList.remove('opacityImg');
      } else if (validVisaCard(valueCard) > -1) {
        addAllOpacity();
        visa.classList.remove('opacityImg');
      }
    } console.error('неверно введенн номер карты');
  } console.error('Допустимы только числовые значения');
});
