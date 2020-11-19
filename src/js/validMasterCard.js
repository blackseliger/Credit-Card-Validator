const validMasterCard = function (numberCard) {
  return numberCard.search(/^[{2221,2720}]\d+$/) || numberCard.search(/^[{51,55}]\d+$/);
};

export default validMasterCard;
