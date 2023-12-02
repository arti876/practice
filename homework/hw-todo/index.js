import {
  updateCounterCards,
  createDiv,
  createLabel,
  createButton,
  createInput,
  createParagraph,
  createSpan,
  cardWrapper,
  addNewCard,
  todos,
  createTodoCard
} from './js-mod/reExport.js';

// ------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

  // // создаем объект "todo"
  // function getTodoObj(headerInputTextValue) {
  //   const id = Math.random().toString(36).slice(2);
  //   const date = getDate();
  //   const text = headerInputTextValue;
  //   const isChecked = false;

  //   const todo = {
  //     id: id,
  //     date: date,
  //     text: text,
  //     isChecked: isChecked,
  //   };

  //   return todo
  // };

  // // записываем объекты в localStorage
  // function getName() {
  //   return JSON.parse(localStorage.getItem('todos')) ?? [];
  // };

  // let todos = getName();

  // // получаем массив объектов localStorage
  // function setName(todos) {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // };

  // ------------------------------------------------------------------------------

  // рендеринг меню навигации
  const root = document.querySelector('#root');
  const wrapper = createDiv('wrapper');

  root.append(
    wrapper
  );

  const header = createDiv('header');

  wrapper.append(
    header,
    cardWrapper
  );

  const buttonDelAll = createButton('header__btn header__btn--del-all', 'delete-all', 'Delete All');
  const buttonDelLast = createButton('header__btn header__btn--del-last', 'delete-last', 'Delete Last');
  const labelHeaderInputText = createLabel('header__label-input-text');
  const buttonAdd = createButton('header__btn header__btn--add', 'add', 'Add');
  const headerShowAll = createParagraph('header__show-all', 'All: ');
  const headerShowCompleted = createParagraph('header__show-completed', 'Completed: ');
  const headerBtnShowAll = createButton('header__btn header__btn--show-all', 'show-all', 'Show All');
  const headerBtnShowCompleted = createButton('header__btn header__btn--show-completed', 'show-completed', 'Show Completed');
  const headerLabelInputSearch = createLabel('header__label-input-search');

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

  const headerShowAllNum = createSpan('header__show-all-num', '0');

  headerShowAll.append(
    headerShowAllNum
  );

  const headerShowCompletedNum = createSpan('header__show-complete-num', '0');

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

  // обновление счетчика карточек
  const paramsUpdateCounterCards = {
    allCards: document.querySelector('.header__show-all-num'),
    allCardsсlass: 'card__item',
    completedCard: document.querySelector('.header__show-complete-num'),
    completedCardсlass: 'card__item--checked',
  }

  updateCounterCards(paramsUpdateCounterCards);

  // ------------------------------------------------------------------------------

  // события по 'click'
  root.addEventListener('click', function (event) {

    const paramsUpdateCounterCards = {
      allCards: document.querySelector('.header__show-all-num'),
      allCardsсlass: 'card__item',
      completedCard: document.querySelector('.header__show-complete-num'),
      completedCardсlass: 'card__item--checked',
    }

    // добавляем новую карточку
    if (event.target.classList.contains('header__btn--add')) {

      const paramsAddNewCard = {
        textValue: document.querySelector('.header__input-text').value,
        classListAdd: 'header__input-text--error',
        classListRemove: 'header__input-text--error',
      }

      addNewCard(paramsAddNewCard, paramsUpdateCounterCards);
    };

  });

  // // события по 'input'
  // root.addEventListener('input', function (event) {
  // });

}, { once: true });