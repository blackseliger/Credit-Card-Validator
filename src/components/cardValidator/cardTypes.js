const cardTypes = [
  {
    name: 'visa',
    fullName: 'Visa',
    startDigit: 4,
    digitCount: [13, 16],
    url: './assets/cards/visa_curved.png'
  },
  {
    name: 'mastercard',
    fullName: 'MasterCard',
    startDigit: 5,
    digitCount: [16],
    url: './assets/cards/mastercard_curved.png'
  },
  {
    name: 'americanexpress',
    fullName: 'American Express',
    startDigit: 3,
    digitCount: [15],
    url: './assets/cards/american_express_curved.png'
  },
];

export default cardTypes;
