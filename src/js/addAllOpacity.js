/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
const cardImg = [...document.querySelectorAll('.cardImg')];

// eslint-disable-next-line func-names
const addAllOpacity = function () {
  for (const card of cardImg) {
    if (card.classList.contains('opacityImg') === false) {
      card.classList.add('opacityImg');
    }
  }
};

export default addAllOpacity;
