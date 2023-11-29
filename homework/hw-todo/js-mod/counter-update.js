// возвращаем живую коллекцию классов для счетчика карточек "All"
const getAllNumCard = () => {
  const allCards = document.getElementsByClassName('card__item').length;
  return allCards;
};

// возвращаем живую коллекцию классов для счетчика карточек "Completed"
const getCompletedCard = () => {
  const completedCards = document.getElementsByClassName('card__item--checked').length;
  return completedCards;
};

export {
  getAllNumCard,
  getCompletedCard
}