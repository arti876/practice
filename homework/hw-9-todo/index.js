const root = document.querySelector('#root');

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  root.append(wrapper);

  const header = document.createElement('div');
  header.classList.add('header');
  document.querySelector('.wrapper').append(header);

  const buttonDel = document.createElement('button');
  buttonDel.classList.add('header__btn', 'header__btn--del');
  buttonDel.type = 'button';
  buttonDel.name = 'delete-all';
  buttonDel.textContent = 'Delete All';
  document.querySelector('.header').append(buttonDel);

  const labelHeaderInputText = document.createElement('label');
  document.querySelector('.header').append(labelHeaderInputText);

  const inputTextHeader = document.createElement('input');
  inputTextHeader.classList.add('header__input-text');
  inputTextHeader.type = 'text';
  inputTextHeader.name = 'enter-todo';
  inputTextHeader.placeholder = 'Enter todo...';
  inputTextHeader.required = true;
  inputTextHeader.onclick = "this.style.left='450px'"
  labelHeaderInputText.append(inputTextHeader);

  const buttonAdd = document.createElement('button');
  buttonAdd.classList.add('header__btn', 'header__btn--add');
  buttonAdd.type = 'button';
  buttonAdd.name = 'delete-all';
  buttonAdd.textContent = 'Add';
  document.querySelector('.header').append(buttonAdd);

  const card = document.createElement('div');
  card.classList.add('card');
  document.querySelector('.wrapper').append(card);

  // Card-Number-1
  let cardItem = document.createElement('div');
  cardItem.classList.add('card__item', 'card__item--del');
  card.append(cardItem);

  let cardLeft = document.createElement('div');
  cardLeft.classList.add('card__left');
  cardItem.append(cardLeft);

  let buttonConfirm = document.createElement('button');
  buttonConfirm.classList.add('card__btn', 'card__btn--confirm');
  buttonConfirm.type = 'button';
  buttonConfirm.name = 'confirm';
  cardLeft.append(buttonConfirm);

  let cardTodoText = document.createElement('p');
  cardTodoText.classList.add('card__todo-text', 'card__todo-text--del');
  cardTodoText.textContent = 'Todo text';
  cardLeft.append(cardTodoText);

  let cardRight = document.createElement('div');
  cardRight.classList.add('card__right');
  cardItem.append(cardRight);

  let buttonCancel = document.createElement('button');
  buttonCancel.classList.add('card__btn');
  buttonCancel.type = 'button';
  buttonCancel.name = 'cancel';
  buttonCancel.textContent = 'X';
  cardRight.append(buttonCancel);

  let cardDate = document.createElement('p');
  cardDate.classList.add('card__date');
  cardDate.textContent = 'Date';
  cardRight.append(cardDate);

  // Card-Number-2
  cardItem = document.createElement('div');
  cardItem.classList.add('card__item');
  card.append(cardItem);

  cardLeft = document.createElement('div');
  cardLeft.classList.add('card__left');
  cardItem.append(cardLeft);

  buttonConfirm = document.createElement('button');
  buttonConfirm.classList.add('card__btn');
  buttonConfirm.type = 'button';
  buttonConfirm.name = 'confirm';
  cardLeft.append(buttonConfirm);

  cardTodoText = document.createElement('p');
  cardTodoText.classList.add('card__todo-text');
  cardTodoText.textContent = 'Todo text 2';
  cardLeft.append(cardTodoText);

  cardRight = document.createElement('div');
  cardRight.classList.add('card__right');
  cardItem.append(cardRight);

  buttonCancel = document.createElement('button');
  buttonCancel.classList.add('card__btn');
  buttonCancel.type = 'button';
  buttonCancel.name = 'cancel';
  buttonCancel.textContent = 'X';
  cardRight.append(buttonCancel);

  cardDate = document.createElement('p');
  cardDate.classList.add('card__date');
  cardDate.textContent = 'Date';
  cardRight.append(cardDate);
});