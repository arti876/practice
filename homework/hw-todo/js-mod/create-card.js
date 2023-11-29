import {
  id,
  date,
  text,
  isChecked,
} from './reExport.js';

// функция  для создания карточек
const createTodoCard = (todo) => {

  const cardItem = createDivOrLabel('div', 'card__item');
  cardItem.id = id;
  // cardItem.id = todo.id;

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
  const cardTodoText = createParagraphOrSpan('p', 'card__todo-text', text);
  // const cardTodoText = createParagraphOrSpan('p', 'card__todo-text', todo.text);
  // cardTodoText.textContent = todo.text;

  cardLeft.append(
    buttonConfirm,
    cardTodoText
  );

  const buttonCancel = createButton('card__btn card__btn--cancel', 'cancel', 'X');
  const cardDate = createParagraphOrSpan('p', 'card__date', date);
  // const cardDate = createParagraphOrSpan('p', 'card__date', todo.date);
  // cardDate.textContent = todo.date;

  cardRight.append(
    buttonCancel,
    cardDate
  );

  if (isChecked) {
    // if (todo.isChecked) {
    cardItem.classList.add('card__item--checked');
    cardTodoText.classList.add('card__todo-text--del');
    buttonConfirm.classList.add('card__btn--confirm-checked');
  };
};

export {
  createTodoCard
}