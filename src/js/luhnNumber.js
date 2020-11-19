const luhnNumber = (number) => {
  // eslint-disable-next-line no-param-reassign
  number = String(number);
  // eslint-disable-next-line radix
  let sum = parseInt(number.charAt(number.length - 1));

  for (let i = 0; i < number.length - 1; i++) {
    // eslint-disable-next-line radix
    let value = parseInt(number.charAt(i));
    if (i % 2 === 0) {
      value *= 2;
    }
    if (value > 9) {
      value -= 9;
    }
    sum += value;
  }
  return sum % 10 === 0;
};

export default luhnNumber;
