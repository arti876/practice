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

  // добавляем новую карточку
  function addNewCard() {
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
  }

  // стилизуем карточку с помощью checkbox
  function pressСheckbox() {
    event.target.closest('.card__btn--confirm').classList.toggle('card__btn--confirm-checked');
    event.target.closest('.card__item').classList.toggle('card__item--checked');
    event.target.closest('.card__item').querySelector('.card__todo-text').classList.toggle('card__todo-text--del');
    // обновление счетчика карточек
    updateCounterCards(headerShowAllNum, 'card__item', headerShowCompletedNum, 'card__item--checked');
    // проверяем значение isChecked и обновляем localStorage
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === event.target.closest('.card__item').id) {
        todos[i].isChecked = !todos[i].isChecked;
        setName(todos);
      };
    };
  }

  // удаляем карточку при нажатии на крестик
  function crossCardRemoval() {
    event.target.closest('.card__item').remove();
    // обновляем localStorage
    const cardDel = todos.filter(todo => todo.id === event.target.closest('.card__item').id);
    todos.splice(cardDel, 1);
    setName(todos);
    // обновление счетчика карточек
    updateCounterCards(headerShowAllNum, 'card__item', headerShowCompletedNum, 'card__item--checked');
  }

  // удаление всех карточек
  function delAllCards() {
    const cardInputAll = document.querySelectorAll('.card__item');
    cardInputAll.forEach(el => el.remove());
    // обновление счетчика карточек
    updateCounterCards(headerShowAllNum, 'card__item', headerShowCompletedNum, 'card__item--checked');
    // очищаем localStorage
    todos = [];
    setName(todos);
  }

  // показать все скрытые карточки
  function showAllCards() {
    document.querySelectorAll('.card__item').forEach(el => el.classList.remove('hidden'));
  }

  // показать только выбранные карточки
  function showCompletedCards() {
    document.querySelectorAll('.card__item').forEach(el => el.classList.contains('card__item--checked') ? el : el.classList.add('hidden'));
  }

  // удаляем последнюю карточку в списке
  function delLastCard() {
    const cardDelLast = document.querySelector('.card__list');
    cardDelLast.lastChild.remove();
    // обновляем localStorage
    todos.pop();
    setName(todos);
    // обновление счетчика карточек
    updateCounterCards(headerShowAllNum, 'card__item', headerShowCompletedNum, 'card__item--checked');
  }

  function cardSearch() {
    const todoTextCardAll = document.querySelectorAll('.card__todo-text');
    for (let i = 0; i < todoTextCardAll.length; i++) {
      if (todoTextCardAll[i].innerText.toLowerCase().includes(document.querySelector('.header__input-search').value.toLowerCase())) {
        document.querySelectorAll('.card__item')[i].classList.remove('hidden');
      } else {
        document.querySelectorAll('.card__item')[i].classList.add('hidden');
      };
    };
  };

  // ------------------------------------------------------------------------------

  // события по 'click'
  root.addEventListener('click', function (event) {

    // добавляем новую карточку
    if (event.target.classList.contains('header__btn--add')) {
      addNewCard();
    };

    // стилизуем карточку с помощью checkbox
    if (event.target.classList.contains('card__btn--confirm')) {
      pressСheckbox();
    };

    // удаляем карточку при нажатии на крестик
    if (event.target.classList.contains('card__btn--cancel')) {
      crossCardRemoval();
    };

    // удаление всех карточек
    if (event.target.classList.contains('header__btn--del-all')) {
      delAllCards();
    };

    // показать все скрытые карточки
    if (event.target.classList.contains('header__btn--show-all')) {
      showAllCards();
    };

    // показать только выбранные карточки
    if (event.target.classList.contains('header__btn--show-completed')) {
      showCompletedCards();
    };

    // удаляем последнюю карточку в списке
    if (event.target.classList.contains('header__btn--del-last')) {
      delLastCard()
    };
  });

  // события по 'input'
  root.addEventListener('input', function (event) {

    // поиск карточек
    if (event.target.classList.contains('header__input-search')) {
      cardSearch()
    }
  });

}, { once: true });








// // ------------------------------------------------------------------------------

// // события по 'click'
// root.addEventListener('click', function (event) {

//   const paramsUpdateCounterCards = {
//     allCards: document.querySelector('.header__show-all-num'),
//     allCardsсlass: 'card__item',
//     completedCard: document.querySelector('.header__show-complete-num'),
//     completedCardсlass: 'card__item--checked',
//   }

//   // добавляем новую карточку
//   if (event.target.classList.contains('header__btn--add')) {

//     const paramsAddNewCard = {
//       textValue: document.querySelector('.header__input-text').value,
//       classListAdd: 'header__input-text--error',
//       classListRemove: 'header__input-text--error',
//     }

//     addNewCard(paramsAddNewCard, paramsUpdateCounterCards);
//   };

// });