import {
  paramsUpdateCounterCards,
  paramEvent,
  getName,
  createDiv,
  createLabel,
  createButton,
  createInput,
  createParagraph,
  createSpan,
  cardWrapper,
  createTodoCard,
  updateCounterCards,
  eventAddNewCard,
  eventPressСheckbox,
  eventCrossCardRemoval,
  eventDelAllCards,
  eventShowAllCards,
  eventShowCompletedCards,
  eventDelLastCard,
  eventCardSearch,
} from './reExport.js';

  // рендер начальной страницы
document.addEventListener("DOMContentLoaded", function () {

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
  const todos = getName();

  todos.forEach(todo => {
    createTodoCard(todo);
  });

  // обновление счетчика карточек
  updateCounterCards(paramsUpdateCounterCards);

}, { once: true });

// ------------------------------------------------------------------------------

// события по 'click'
root.addEventListener('click', function (event) {

  // добавляем новую карточку
  if (event.target.classList.contains('header__btn--add')) {
    eventAddNewCard(paramEvent);
  };

  // стилизуем карточку с помощью checkbox
  if (event.target.classList.contains('card__btn--confirm')) {
    eventPressСheckbox(paramEvent);
  };

  // удаляем карточку при нажатии на крестик
  if (event.target.classList.contains('card__btn--cancel')) {
    eventCrossCardRemoval(paramEvent);
  };

  // удаление всех карточек
  if (event.target.classList.contains('header__btn--del-all')) {
    eventDelAllCards(paramEvent);
  };

  // показать все скрытые карточки
  if (event.target.classList.contains('header__btn--show-all')) {
    eventShowAllCards(paramEvent);
  };

  // показать только выбранные карточки
  if (event.target.classList.contains('header__btn--show-completed')) {
    eventShowCompletedCards(paramEvent);
  };

  // удаляем последнюю карточку в списке
  if (event.target.classList.contains('header__btn--del-last')) {
    eventDelLastCard(paramEvent)
  };
});

// события по 'input'
root.addEventListener('input', function (event) {

  // поиск карточек
  if (event.target.classList.contains('header__input-search')) {
    eventCardSearch(paramEvent)
  }
});