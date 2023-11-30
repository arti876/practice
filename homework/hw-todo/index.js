// import * as myModule from './reExport.js';
import {
  getDate
} from './js-mod/get-date.js';

// import {
//   createDivOrLabel,
//   createButton,
//   createInput,
//   createParagraphOrSpan
// } from './js-mod/create-el-todo.js';


// ------------------------------------------------------------------------------

// получаем объект todo
function getTodoObj() {
  const id = Math.random().toString(36).slice(2);
  const date = getDate();
  const text = document.querySelector('.header__input-text').value;
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
const getName = () => {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
};

// получаем массив объектов localStorage
let todos = getName();
let setName = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// возвращаем живую коллекцию классов для счетчика карточек "All"
const getAllNumCard = () => {
  const allCards = document.getElementsByClassName('card__item').length;
  return allCards;
};

// возвращаем живую коллекцию классов для счетчика карточек "Completed"
const getCompletedCard = () => {
  const completedCards = document.getElementsByClassName('card__item--checked').length;
  return completedCards;
};

// функция для создания элемента - div или label
const createDivOrLabel = (tag, classList) => {
  const element = document.createElement(tag);
  element.classList = classList;
  return element;
}

// функция для создания элемента - button
const createButton = (classList, name, textContent) => {
  const element = document.createElement('button');
  element.classList = classList;
  element.type = 'button';
  element.name = name;
  element.textContent = textContent;
  return element;
}

// функция для создания элемента - input
const createInput = (classList, name, placeholder) => {
  const element = document.createElement('input');
  element.classList = classList;
  element.type = 'text';
  element.name = name;
  element.placeholder = placeholder;
  return element;
}

// функция для создания элемента - p или span
const createParagraphOrSpan = (tag, classList, textContent) => {
  const element = document.createElement(tag);
  element.classList = classList;
  element.textContent = textContent;
  return element;
}

// функция  для создания карточек
const createTodoCard = (todo) => {

  const cardItem = createDivOrLabel('div', 'card__item');
  // cardItem.id = id;
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
  // const cardTodoText = createParagraphOrSpan('p', 'card__todo-text', text);
  const cardTodoText = createParagraphOrSpan('p', 'card__todo-text', todo.text);
  // cardTodoText.textContent = todo.text;

  cardLeft.append(
    buttonConfirm,
    cardTodoText
  );

  const buttonCancel = createButton('card__btn card__btn--cancel', 'cancel', 'X');
  // const cardDate = createParagraphOrSpan('p', 'card__date', date);
  const cardDate = createParagraphOrSpan('p', 'card__date', todo.date);
  // cardDate.textContent = todo.date;

  cardRight.append(
    buttonCancel,
    cardDate
  );

  // if (isChecked) {
  if (todo.isChecked) {
    cardItem.classList.add('card__item--checked');
    cardTodoText.classList.add('card__todo-text--del');
    buttonConfirm.classList.add('card__btn--confirm-checked');
  };
};

// ------------------------------------------------------------------------------

// создание элементов для меню навигации
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

// поиск элементов
// const buttonAddLocate = document.querySelector('.header__btn--add');


// создаем из памяти localStorage карточки
todos.forEach(todo => {
  createTodoCard(todo);
});

// обновляем счетчики карточек
headerShowCompletedNum.textContent = `${getCompletedCard()}`;
headerShowAllNum.textContent = `${getAllNumCard()}`;

// ------------------------------------------------------------------------------

// делегирование собитий '#root' по 'click'
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
      const todoObj = getTodoObj();
      createTodoCard(todoObj);
      todos.push(todoObj);
      setName(todos);
      console.log(todos);
    };
  };

  // добавляем в счетчик 'All' созданную карточку
  if (event.target.classList.contains('header__btn--add')) {
    headerShowAllNum.textContent = `${getAllNumCard()}`;
  };

  // стилизуем карточку с помощью checkbox
  if (event.target.classList.contains('card__btn--confirm')) {
    event.target.closest('.card__btn--confirm').classList.toggle('card__btn--confirm-checked');
    event.target.closest('.card__item').classList.toggle('card__item--checked');
    event.target.closest('.card__item').querySelector('.card__todo-text').classList.toggle('card__todo-text--del');
    // обновляем счетчик 'Completed'
    headerShowCompletedNum.textContent = `${getCompletedCard()}`;
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
    console.log(todos);
    console.log(`${todos[0].id} = ${event.target.closest('.card__item').id}`);
    event.target.closest('.card__item').remove();
    // обновляем localStorage
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === event.target.closest('.card__item').id) {
        todos.splice(todos[i], 1);
        setName(todos);
      };
    };
    // обновляем счетчики карточек
    headerShowCompletedNum.textContent = `${getCompletedCard()}`;
    headerShowAllNum.textContent = `${getAllNumCard()}`;
  };

  // удаление всех карточек
  if (event.target.classList.contains('header__btn--del-all')) {
    const cardInputAll = document.querySelectorAll('.card__item');
    cardInputAll.forEach(el => el.remove());
    // обновляем счетчик карточек 'All'
    headerShowCompletedNum.textContent = `${getCompletedCard()}`;
    headerShowAllNum.textContent = `${getAllNumCard()}`;
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
    headerShowCompletedNum.textContent = `${getCompletedCard()}`;
    headerShowAllNum.textContent = `${getAllNumCard()}`;
  };
});

// делегирование собитий '#root' по 'input'
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