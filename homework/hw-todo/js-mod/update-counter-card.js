const updateCounterCards = (allCards, allCardsсlass, completedCard, completedCardсlass) => {
  (function getAllNumCard() {
    return allCards.textContent = document.getElementsByClassName(allCardsсlass).length;
  })();

  (function getCompletedCard() {
    return completedCard.textContent = document.getElementsByClassName(completedCardсlass).length;
  })();
};

export {
  updateCounterCards
}

