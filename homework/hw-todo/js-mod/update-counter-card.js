// обновление счетчиков карточек
function updateCounterCards(paramsUpdateCounterCards) {

  const { allCards, allCardsсlass, completedCard, completedCardсlass } = paramsUpdateCounterCards;

  // счетчик "All"
  (function getAllNumCard() {
    return document.querySelector(allCards).textContent = document.getElementsByClassName(allCardsсlass).length;
  })();

  // счетчик "Completed"
  (function getCompletedCard() {
    return document.querySelector(completedCard).textContent = document.getElementsByClassName(completedCardсlass).length;
  })();
};

export {
  updateCounterCards,
}