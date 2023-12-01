import {
  createTodoCard,
  updateCounterCards,
  getTodoObj,
  todos,
  setName
} from './reExport.js';

// добавляем новую карточку
function addNewCard(actionItem, textValue, classListAdd, classListRemove, fun) {
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
      updateCounterCards(headerShowAllNum, 'card__item', headerShowCompletedNum, 'card__item--checked');
    };
  };
};

export {
  addNewCard
}