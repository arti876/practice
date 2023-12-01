// обновление счетчиков карточек
const updateCounterCards = (allCards, allCardsсlass, completedCard, completedCardсlass) => {
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

