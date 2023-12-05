import {
  paramsUpdateCounterCards,
  getTodoObj,
  createTodoCard,
  getName,
  setName,
  updateCounterCards,
} from './reExport.js';

let todos = getName();

// добавить новую карточку
function eventAddNewCard(paramEvent) {
  const { headerInputText, headerInputTextError } = paramEvent;
  const selectorHeaderInputText = document.querySelector(headerInputText);

  if (!selectorHeaderInputText.value) {
    selectorHeaderInputText.classList.add(headerInputTextError);
    selectorHeaderInputText.addEventListener('focus', function () {
      selectorHeaderInputText.classList.remove(headerInputTextError);
    });
  } else {
    const todoObj = getTodoObj(selectorHeaderInputText.value);
    createTodoCard(todoObj);
    todos.push(todoObj);
    setName(todos);
    updateCounterCards(paramsUpdateCounterCards);
  };
}

// выбрать карточку
function eventPressСheckbox(paramEvent) {
  const { cardItem, cardItemChecked, cardTodoText, cardBtnConfirm, cardBtnConfirmChecked, cardTodoTextDel } = paramEvent;
  const closestCardItem = event.target.closest(cardItem);

  event.target.closest(cardBtnConfirm).classList.toggle(cardBtnConfirmChecked);
  closestCardItem.classList.toggle(cardItemChecked);
  closestCardItem.querySelector(cardTodoText).classList.toggle(cardTodoTextDel);

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === closestCardItem.id) {
      todos[i].isChecked = !todos[i].isChecked;
      setName(todos);
    };
  };

  updateCounterCards(paramsUpdateCounterCards);
}

// удаляем карточку при нажатии на крестик
function eventCrossCardRemoval(paramEvent) {
  const { cardItem } = paramEvent;
  const closestCardItem = event.target.closest(cardItem);
  const cardDel = todos.filter(todo => todo.id === closestCardItem.id);

  closestCardItem.remove();

  todos.splice(cardDel, 1);
  setName(todos);

  updateCounterCards(paramsUpdateCounterCards);
}

// удаление всех карточек
function eventDelAllCards(paramEvent) {
  const { cardItem } = paramEvent;

  document.querySelectorAll(cardItem).forEach(el => el.remove());

  todos = [];
  setName(todos);

  updateCounterCards(paramsUpdateCounterCards);
}

// показать все скрытые карточки
function eventShowAllCards(paramEvent) {
  const { cardItem, hidden} = paramEvent;

  document.querySelectorAll(cardItem).forEach(el => el.classList.remove(hidden));
}

// показать только выбранные карточки
function eventShowCompletedCards(paramEvent) {
  const { cardItem, hidden, cardItemChecked } = paramEvent;

  document.querySelectorAll(cardItem).forEach(el => el.classList.contains(cardItemChecked) ? el : el.classList.add(hidden));
}

// удаление последнуй карточки
function eventDelLastCard(paramEvent) {
  const { cardList } = paramEvent;

  document.querySelector(cardList).lastChild.remove();

  todos.pop();
  setName(todos);

  updateCounterCards(paramsUpdateCounterCards);
}

// поиск карточек
function eventCardSearch(paramEvent) {
  const { cardItem, hidden,cardTodoText, headerInputSearch } = paramEvent;
  const selectorCardItem = document.querySelectorAll(cardItem);

  const todoTextCardAll = document.querySelectorAll(cardTodoText);
  for (let i = 0; i < todoTextCardAll.length; i++) {
    if (todoTextCardAll[i].innerText.toLowerCase().includes(document.querySelector(headerInputSearch).value.toLowerCase())) {
      selectorCardItem[i].classList.remove(hidden);
    } else {
      selectorCardItem[i].classList.add(hidden);
    };
  };
};

export {
  eventAddNewCard,
  eventPressСheckbox,
  eventCrossCardRemoval,
  eventDelAllCards,
  eventShowAllCards,
  eventShowCompletedCards,
  eventDelLastCard,
  eventCardSearch,
}


