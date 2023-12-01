import {
  createTodoCard,
  updateCounterCards,
  getTodoObj,
  todos,
  setName,
} from './reExport.js';

// добавляем новую карточку
function addNewCard(paramsAddNewCard, paramsUpdateCounterCards) {
  
  const {actionItem, textValue, classListAdd, classListRemove} = paramsAddNewCard;
  
  if (event.target.classList.contains(actionItem)) {
    if (!document.querySelector(textValue).value) {
      inputTextHeader.classList.add(classListAdd);
      inputTextHeader.addEventListener('focus', function () {
        inputTextHeader.classList.remove(classListRemove);
      });
    } else {
      const todoObj = getTodoObj(document.querySelector(textValue).value);
      createTodoCard(todoObj);
      todos.push(todoObj);
      setName(todos);
      updateCounterCards(paramsUpdateCounterCards);
    };
  };
};

export {
  addNewCard
}

// addNewCard('header__btn--add', '.header__input-text', 'header__input-text--error', 'header__input-text--error', getTodoObj(document.querySelector('.header__input-text').value));