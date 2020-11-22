/* eslint-disable no-undef */
const { default: addAllOpacity } = require('../addAllOpacity');

const cardImg = [...document.querySelectorAll('.cardImg')];

describe('work func addAllOpacity', () => {
  test('should add class opacityImg every element', () => {
    addAllOpacity();
    const expected = true;
    const received = cardImg[1].classList.contains('opacityImg');
    expected(received).tobeEqual(expected);
  });
});
