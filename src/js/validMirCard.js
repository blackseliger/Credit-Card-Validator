const validMirCard = function (numberCard) {
  return numberCard.search(/^[{2200–2204}]\d+$/);
};

export default validMirCard;
