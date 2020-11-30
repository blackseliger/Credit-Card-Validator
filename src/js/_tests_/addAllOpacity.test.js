/* eslint-disable no-undef */
const { default: addAllOpacity } = require('../addAllOpacity');

const cardImg = [...document.querySelectorAll('.cardImg')];

describe('work func addAllOpacity', () => {
  test('should add class opacityImg every element', () => {
    addAllOpacity();
    const expected = true;
    const received = cardImg.every( (element) => element.classList.contains('opacityImg'));
    expect(received).toEqual(expected);
  });
});
