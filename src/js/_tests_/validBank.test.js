/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-sequences */
const { _ } = require('core-js');
const { default: validBank } = require('../validBank');

describe('should return name card', () => {
  test.each([
    ['visa', 4, 'visa'],
    ['mir', 2, 'mir'],
    ['discover', 60, 'discover'],
    ['mastercard', 51, 'mastercard'],
    ['mastercard', 52, 'mastercard'],
    ['mastercard', 53, 'mastercard'],
    ['mastercard', 54, 'mastercard'],
    ['mastercard', 55, 'mastercard'],
    ['jcb', 31, 'jcb'],
    ['jcb', 35, 'jcb'],
    ['none', 1, 0],
  ])('it should to return a true name card'), (_plug, input, nameCard) => {
    expect(validBank(input).toBe(nameCard));
  };
});
