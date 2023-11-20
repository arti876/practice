document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector('#root');

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

  const buttonDelLast = document.createElement('button');
  buttonDelLast.classList.add('header__btn', 'header__btn--del-last');
  buttonDelLast.type = 'button';
  buttonDelLast.name = 'delete-last';
  buttonDelLast.textContent = 'Delete Last';
  document.querySelector('.header').append(buttonDelLast);

  const labelHeaderInputText = document.createElement('label');
  labelHeaderInputText.classList.add('header__label-input-text');
  document.querySelector('.header').append(labelHeaderInputText);

  const inputTextHeader = document.createElement('input');
  inputTextHeader.classList.add('header__input-text');
  inputTextHeader.type = 'text';
  inputTextHeader.name = 'enter-todo';
  inputTextHeader.placeholder = 'Enter todo...';
  labelHeaderInputText.append(inputTextHeader);

  const buttonAdd = document.createElement('button');
  buttonAdd.classList.add('header__btn', 'header__btn--add');
  buttonAdd.type = 'button';
  buttonAdd.name = 'delete-all';
  buttonAdd.textContent = 'Add';
  document.querySelector('.header').append(buttonAdd);

  const headerShowAll = document.createElement('div');
  headerShowAll.classList.add('header__show-all');
  headerShowAll.textContent = 'All: ';
  document.querySelector('.header').append(headerShowAll);

  const headerShowAllNum = document.createElement('span');
  headerShowAllNum.classList.add('header__show-all-num');
  headerShowAllNum.textContent = '2';
  headerShowAll.append(headerShowAllNum);

  const headerShowCompleted = document.createElement('div');
  headerShowCompleted.classList.add('header__show-completed');
  headerShowCompleted.textContent = 'Completed: ';
  document.querySelector('.header').append(headerShowCompleted);

  const headerShowCompletedNum = document.createElement('span');
  headerShowCompletedNum.classList.add('header__show-all-num');
  headerShowCompletedNum.textContent = '2';
  headerShowCompleted.append(headerShowCompletedNum);

  const headerBtnShowAll = document.createElement('button');
  headerBtnShowAll.classList.add('header__btn', 'header__btn--show-all');
  headerBtnShowAll.type = 'button';
  headerBtnShowAll.name = 'show-all';
  headerBtnShowAll.textContent = 'Show All';
  document.querySelector('.header').append(headerBtnShowAll);

  const headerBtnShowCompleted = document.createElement('button');
  headerBtnShowCompleted.classList.add('header__btn', 'header__btn--show-completed');
  headerBtnShowCompleted.type = 'button';
  headerBtnShowCompleted.name = 'show-completed';
  headerBtnShowCompleted.textContent = 'Show Completed';
  document.querySelector('.header').append(headerBtnShowCompleted);

  const headerLabelInputSearch = document.createElement('label');
  headerLabelInputSearch.classList.add('header__label-input-search');
  document.querySelector('.header').append(headerLabelInputSearch);

  const headerInputSearch = document.createElement('input');
  headerInputSearch.classList.add('header__input-search');
  headerInputSearch.type = 'text';
  headerInputSearch.name = 'search';
  headerInputSearch.placeholder = 'Search...';
  headerLabelInputSearch.append(headerInputSearch);

  const card = document.createElement('div');
  card.classList.add('card');
  document.querySelector('.wrapper').append(card);

  buttonAdd.addEventListener('click', function () {
    if (!document.querySelector('.header__input-text').value) {
      inputTextHeader.classList.add('header__input-text--error');
      inputTextHeader.addEventListener('focus', function () {
        inputTextHeader.classList.remove('header__input-text--error');
      });
    } else {
      const cardItem = document.createElement('div');
      cardItem.classList.add('card__item');
      card.append(cardItem);

      const cardLeft = document.createElement('div');
      cardLeft.classList.add('card__left');
      cardItem.append(cardLeft);

      const buttonConfirm = document.createElement('button');
      buttonConfirm.classList.add('card__btn');
      buttonConfirm.type = 'button';
      buttonConfirm.name = 'confirm';
      cardLeft.append(buttonConfirm);

      const cardTodoText = document.createElement('p');
      cardTodoText.classList.add('card__todo-text');
      cardTodoText.textContent = document.querySelector('.header__input-text').value;
      cardLeft.append(cardTodoText);

      const cardRight = document.createElement('div');
      cardRight.classList.add('card__right');
      cardItem.append(cardRight);

      const buttonCancel = document.createElement('button');
      buttonCancel.classList.add('card__btn', 'card__btn--cancel');
      buttonCancel.type = 'button';
      buttonCancel.name = 'cancel';
      buttonCancel.textContent = 'X';
      cardRight.append(buttonCancel);

      const cardDate = document.createElement('p');
      cardDate.classList.add('card__date');
      cardDate.textContent = new Date().toLocaleString();
      cardRight.append(cardDate);

      // buttonCancel.addEventListener('click', function () {
      //   cardItem.remove();
      // });

      buttonConfirm.addEventListener('click', function () {
        buttonConfirm.classList.toggle('card__btn--confirm');
        cardItem.classList.toggle('card__item--del');
        cardTodoText.classList.toggle('card__todo-text--del');
      });
    };

    buttonDel.addEventListener('click', function () {
      const cardConfirmDel = document.querySelectorAll('.card__item--del');
      cardConfirmDel.forEach(el => el.remove());
    });

    const cardContainer = document.querySelector('.card');
    cardContainer.addEventListener('click', function (event) {
      if (event.target.classList.contains('card__btn--cancel')) {
        event.target.closest('.card__item').remove();
      }
    });
  });
});


// Событие по нажатию на "Enter"

// document.addEventListener('keyup', event => {
//   if (event.code === 'Enter') {
//     console.log('Enter')
//   }
// })