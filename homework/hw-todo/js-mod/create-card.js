import {
  createDivOrLabel,
  createButton,
  createParagraphOrSpan
} from './reExport.js';

// контейнер карточек
const cardWrapper = createDivOrLabel('div', 'card');

// ------------------------------------------------------------------------------

// рендеринг новой карточки
function createTodoCard(todo) {

  const card = createDivOrLabel('div', 'card__item');
  card.id = todo.id;

  cardWrapper.append(
    card
  );

  const cardLeft = createDivOrLabel('div', 'card__left');
  const cardRight = createDivOrLabel('div', 'card__right');

  card.append(
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
    card.classList.add('card__item--checked');
    cardTodoText.classList.add('card__todo-text--del');
    buttonConfirm.classList.add('card__btn--confirm-checked');
  };
};

export {
  cardWrapper,
  createTodoCard
}