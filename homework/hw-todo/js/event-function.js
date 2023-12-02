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
function eventAddNewCard(paramEvent) {
  const { _, __, ___, ____, _____, ______, _______, ________, _________, headerInputText, headerInputTextError } = paramEvent;

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

// стилизуем карточку с помощью checkbox
function eventPressСheckbox(paramEvent) {
  const { cardItem, _, cardItemChecked, __, cardTodoText, ___, cardBtnConfirm, cardBtnConfirmChecked, cardTodoTextDel } = paramEvent;

  event.target.closest(cardBtnConfirm).classList.toggle(cardBtnConfirmChecked);
  event.target.closest(cardItem).classList.toggle(cardItemChecked);
  event.target.closest(cardItem).querySelector(cardTodoText).classList.toggle(cardTodoTextDel);
  // обновление счетчика карточек
  updateCounterCards(paramsUpdateCounterCards);
  // проверяем значение isChecked и обновляем localStorage
  const todos = getName();
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === event.target.closest(cardItem).id) {
      todos[i].isChecked = !todos[i].isChecked;
      setName(todos);
    };
  };
}

// удаляем карточку при нажатии на крестик
function eventCrossCardRemoval(paramEvent) {
  const { cardItem } = paramEvent;

  event.target.closest(cardItem).remove();
  // обновляем localStorage
  const todos = getName();
  const cardDel = todos.filter(todo => todo.id === event.target.closest(cardItem).id);
  todos.splice(cardDel, 1);
  setName(todos);
  // обновление счетчика карточек
  updateCounterCards(paramsUpdateCounterCards);
}

// удаление всех карточек
function eventDelAllCards(paramEvent) {
  const { cardItem } = paramEvent;

  const cardInputAll = document.querySelectorAll(cardItem);
  cardInputAll.forEach(el => el.remove());
  // обновление счетчика карточек
  updateCounterCards(paramsUpdateCounterCards);
  // очищаем localStorage
  const todos = [];
  setName(todos);
}

// показать все скрытые карточки
function eventShowAllCards(paramEvent) {
  const { cardItem, hidden, _ } = paramEvent;

  document.querySelectorAll(cardItem).forEach(el => el.classList.remove(hidden));
}

// показать только выбранные карточки
function eventShowCompletedCards(paramEvent) {
  const { cardItem, hidden, cardItemChecked } = paramEvent;

  document.querySelectorAll(cardItem).forEach(el => el.classList.contains(cardItemChecked) ? el : el.classList.add(hidden));
}

// удаляем последнюю карточку в списке
function eventDelLastCard(paramEvent) {
  const { _, __, ___, cardList } = paramEvent;

  const cardDelLast = document.querySelector(cardList);
  cardDelLast.lastChild.remove();
  // обновляем localStorage
  const todos = getName();
  todos.pop();
  setName(todos);
  // обновление счетчика карточек
  updateCounterCards(paramsUpdateCounterCards);
}

function eventCardSearch(paramEvent) {
  const { cardItem, hidden, _, __, ___, cardTodoText, headerInputSearch } = paramEvent;

  const todoTextCardAll = document.querySelectorAll(cardTodoText);
  for (let i = 0; i < todoTextCardAll.length; i++) {
    if (todoTextCardAll[i].innerText.toLowerCase().includes(document.querySelector(headerInputSearch).value.toLowerCase())) {
      document.querySelectorAll(cardItem)[i].classList.remove(hidden);
    } else {
      document.querySelectorAll(cardItem)[i].classList.add(hidden);
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


