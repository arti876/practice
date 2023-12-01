// обновление счетчиков карточек
const updateCounterCards = (paramsUpdateCounterCards) => {

  const { allCards, allCardsсlass, completedCard, completedCardсlass } = paramsUpdateCounterCards;

  // счетчик "All"
  (function getAllNumCard() {
    return allCards.textContent = document.getElementsByClassName(allCardsсlass).length;
  })();

  // счетчик "Completed"
  (function getCompletedCard() {
    return completedCard.textContent = document.getElementsByClassName(completedCardсlass).length;
  })();
};

export {
  updateCounterCards
}