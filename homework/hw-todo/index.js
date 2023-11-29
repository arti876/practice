// import * as myModule from './reExport.js';
import {
  createDivOrLabel,
  createButton,
  createInput,
  createParagraphOrSpan,
  addNewCard,
  clickCheckbox,
  deleteCard,
  deleteAllCards,
  showAllCards,
  showCheckedCards,
  delLastCard
} from './js-mod/reExport.js';

// отрисовка стреницы
export default document.addEventListener("DOMContentLoaded", function () {
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

  // // создаем из памяти localStorage карточки
  // todos.forEach(todo => {
  //   createTodoCard(todo);
  // });

  // // обновляем счетчики карточек
  // headerShowCompletedNum.textContent = `${getCompletedCard()}`;
  // headerShowAllNum.textContent = `${getAllNumCard()}`;


// // действия по 'click'
// root.addEventListener('click', function (event) {
//   addNewCard();
//   clickCheckbox();
//   deleteCard();
//   deleteAllCards();
//   showAllCards();
//   showCheckedCards();
//   delLastCard();
// });
});