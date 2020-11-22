/* eslint-disable no-undef */

const { default: luhnNumber } = require('../luhnNumber');

test.each([
  ['valid', 4099858029959041, true],
  ['valid', 378382246310005, false],
])('testing', (name, input, expected) => {
  expect(luhnNumber(input)).toBe(expected);
});
