const validJCBCard = function (numberCard) {
  return numberCard.search(/^[{3528,3559}]\d+$/);
};

export default validJCBCard;
