const updateCounterCards = (allCards, allCardsсlass, completedCard, completedCardсlass) => {
  let getAllNumCard = (function () {
    return allCards.textContent = document.getElementsByClassName(allCardsсlass).length;
  })();

  let getCompletedCard = (function () {
    return completedCard.textContent = document.getElementsByClassName(completedCardсlass).length;
  })();

  return [getAllNumCard, getCompletedCard]
};

export {
  updateCounterCards
}

