import {
  paramsUpdateCounterCards,
  getTodoObj,
  createTodoCard,
  getName,
  setName,
  updateCounterCards,
} from './reExport.js';

// ------------------------------------------------------------------------------

// добавляем новую карточку
function eventAddNewCard(paramEventAddNewCard) {
  const { headerInputText, headerInputTextError } = paramEventAddNewCard;

  if (!document.querySelector(headerInputText).value) {
    document.querySelector(headerInputText).classList.add(headerInputTextError);
    document.querySelector(headerInputText).addEventListener('focus', function () {
      document.querySelector(headerInputText).classList.remove(headerInputTextError);
    });
  } else {
    const todoObj = getTodoObj(document.querySelector(headerInputText).value);
    createTodoCard(todoObj);
    const todos = getName();
    todos.push(todoObj);
    setName(todos);
    updateCounterCards(paramsUpdateCounterCards);
  };
}

export {
  eventAddNewCard
}