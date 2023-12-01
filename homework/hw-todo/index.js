import {
  getDate,
  updateCounterCards,
  createDivOrLabel,
  createButton,
  createInput,
  createParagraphOrSpan
} from './js-mod/reExport.js';

// ------------------------------------------------------------------------------

// создаем объект "todo"
function getTodoObj(headerInputTextValue) {
  const id = Math.random().toString(36).slice(2);
  const date = getDate();
  const text = headerInputTextValue;
  const isChecked = false;

  const todo = {
    id: id,
    date: date,
    text: text,
    isChecked: isChecked,
  };

  return todo
};

// записываем объекты в localStorage
function getName() {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
};

let todos = getName();

// получаем массив объектов localStorage
function setName(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// ------------------------------------------------------------------------------

// рендеринг меню навигации
const root = document.querySelector('#root');
const wrapper = createDivOrLabel('div', 'wrapper');

root.append(
  wrapper
);

const header = createDivOrLabel('div', 'header');
const card = createDivOrLabel('div', 'card');

wrapper.append(
  header,
  card
);

const buttonDelAll = createButton('header__btn header__btn--del-all', 'delete-all', 'Delete All');
const buttonDelLast = createButton('header__btn header__btn--del-last', 'delete-last', 'Delete Last');
const labelHeaderInputText = createDivOrLabel('label', 'header__label-input-text');
const buttonAdd = createButton('header__btn header__btn--add', 'add', 'Add');
const headerShowAll = createParagraphOrSpan('p', 'header__show-all', 'All: ');
const headerShowCompleted = createParagraphOrSpan('p', 'header__show-completed', 'Completed: ');
const headerBtnShowAll = createButton('header__btn header__btn--show-all', 'show-all', 'Show All');
const headerBtnShowCompleted = createButton('header__btn header__btn--show-completed', 'show-completed', 'Show Completed');
const headerLabelInputSearch = createDivOrLabel('label', 'header__label-input-search');

header.append(
  buttonDelAll,
  buttonDelLast,
  labelHeaderInputText,
  buttonAdd,
  headerShowAll,
  headerShowCompleted,
  headerBtnShowAll,
  headerBtnShowCompleted,
  headerLabelInputSearch
);

const headerShowAllNum = createParagraphOrSpan('span', 'header__show-all-num', '0');

headerShowAll.append(
  headerShowAllNum
);

const headerShowCompletedNum = createParagraphOrSpan('span', 'header__show-complete-num', '0');

headerShowCompleted.append(
  headerShowCompletedNum
);

const inputTextHeader = createInput('header__input-text', 'enter-todo', 'Enter todo...');

labelHeaderInputText.append(
  inputTextHeader
);

const headerInputSearch = createInput('header__input-search', 'search', 'Search...');

headerLabelInputSearch.append(
  headerInputSearch
);

// рендеринг из localStorage сохраненных карточек
todos.forEach(todo => {
  createTodoCard(todo);
});

// обновление счетчиков карточек
updateCounterCards(headerShowAllNum, 'card__item', headerShowCompletedNum, 'card__item--checked');

// ------------------------------------------------------------------------------

// события по 'click'
root.addEventListener('click', function (event) {
  // добавляем новую карточку
  if (event.target.classList.contains('header__btn--add')) {
    // проверка на пустое поле
    if (!document.querySelector('.header__input-text').value) {
      inputTextHeader.classList.add('header__input-text--error');
      inputTextHeader.addEventListener('focus', function () {
        inputTextHeader.classList.remove('header__input-text--error');
      });
    } else {
      const todoObj = getTodoObj(document.querySelector('.header__input-text').value);
      createTodoCard(todoObj);
      todos.push(todoObj);
      setName(todos);
      updateCounterCards(headerShowAllNum, 'card__item', headerShowCompletedNum, 'card__item--checked');
    };
  };

  // стилизуем карточку с помощью checkbox
  if (event.target.classList.contains('card__btn--confirm')) {
    event.target.closest('.card__btn--confirm').classList.toggle('card__btn--confirm-checked');
    event.target.closest('.card__item').classList.toggle('card__item--checked');
    event.target.closest('.card__item').querySelector('.card__todo-text').classList.toggle('card__todo-text--del');
    // обновляем счетчик 'Completed'
    updateCounterCards(headerShowAllNum, 'card__item', headerShowCompletedNum, 'card__item--checked');
    // проверяем значение isChecked и обновляем localStorage
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === event.target.closest('.card__item').id) {
        todos[i].isChecked = !todos[i].isChecked;
        setName(todos);
      };
    };
  };

  // удаляем карточку при нажатии на крестик
  if (event.target.classList.contains('card__btn--cancel')) {
    event.target.closest('.card__item').remove();
    // обновляем localStorage
    const cardDel = todos.filter(todo => todo.id === event.target.closest('.card__item').id);
    todos.splice(cardDel, 1);
    setName(todos);
    // обновляем счетчики карточек
    updateCounterCards(headerShowAllNum, 'card__item', headerShowCompletedNum, 'card__item--checked');
  };

  // удаление всех карточек
  if (event.target.classList.contains('header__btn--del-all')) {
    const cardInputAll = document.querySelectorAll('.card__item');
    cardInputAll.forEach(el => el.remove());
    // обновляем счетчик карточек 'All'
    updateCounterCards(headerShowAllNum, 'card__item', headerShowCompletedNum, 'card__item--checked');
    // очищаем localStorage
    todos = [];
    setName(todos);
  };

  // показать все скрытые карточки
  const cardItemAll = document.querySelectorAll('.card__item');
  if (event.target.classList.contains('header__btn--show-all')) {
    cardItemAll.forEach(el => el.classList.remove('hidden'));
  };

  // показать только выбранные карточки
  if (event.target.classList.contains('header__btn--show-completed')) {
    cardItemAll.forEach(el => el.classList.contains('card__item--checked') ? el : el.classList.add('hidden'));
  };

  // удаляем последнюю карточку в списке
  if (event.target.classList.contains('header__btn--del-last')) {
    const cardDelLast = document.querySelector('.card');
    cardDelLast.lastChild.remove();
    // обновляем localStorage
    todos.pop();
    setName(todos);
    // обновляем счетчики карточек
    updateCounterCards(headerShowAllNum, 'card__item', headerShowCompletedNum, 'card__item--checked');
  };
});

// события по 'input'
root.addEventListener('input', function (event) {
  // поиск карточек
  if (event.target.classList.contains('header__input-search')) {
    const todoTextCardAll = document.querySelectorAll('.card__todo-text');
    for (let i = 0; i < todoTextCardAll.length; i++) {
      if (todoTextCardAll[i].innerText.toLowerCase().includes(document.querySelector('.header__input-search').value.toLowerCase())) {
        document.querySelectorAll('.card__item')[i].classList.remove('hidden');
      } else {
        document.querySelectorAll('.card__item')[i].classList.add('hidden');
      };
    };
  };
});

// ------------------------------------------------------------------------------

// функция  для создания карточек
function createTodoCard(todo) {

  const cardItem = createDivOrLabel('div', 'card__item');
  cardItem.id = todo.id;

  card.append(
    cardItem
  );

  const cardLeft = createDivOrLabel('div', 'card__left');
  const cardRight = createDivOrLabel('div', 'card__right');

  cardItem.append(
    cardLeft,
    cardRight
  );

  const buttonConfirm = createButton('card__btn card__btn--confirm', 'confirm', undefined);
  const cardTodoText = createParagraphOrSpan('p', 'card__todo-text', todo.text);

  cardLeft.append(
    buttonConfirm,
    cardTodoText
  );

  const buttonCancel = createButton('card__btn card__btn--cancel', 'cancel', 'X');
  const cardDate = createParagraphOrSpan('p', 'card__date', todo.date);

  cardRight.append(
    buttonCancel,
    cardDate
  );

  if (todo.isChecked) {
    cardItem.classList.add('card__item--checked');
    cardTodoText.classList.add('card__todo-text--del');
    buttonConfirm.classList.add('card__btn--confirm-checked');
  };
};