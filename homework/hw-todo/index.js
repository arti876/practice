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
  // headerShowAllNum.textContent = '0';
  headerShowAll.append(headerShowAllNum);

  const headerShowCompleted = document.createElement('div');
  headerShowCompleted.classList.add('header__show-completed');
  headerShowCompleted.textContent = 'Completed: ';
  document.querySelector('.header').append(headerShowCompleted);

  const headerShowCompletedNum = document.createElement('span');
  headerShowCompletedNum.classList.add('header__show-all-num');
  // headerShowCompletedNum.textContent = '2';
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

  root.addEventListener('click', function (event) {
    // click-function-1 (card сreation)
    if (event.target.classList.contains('header__btn--add')) {
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
        buttonConfirm.classList.add('card__btn', 'card__btn--confirm');
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
      };
    };

    if (event.target.classList.contains('header__btn--add')) {
      const result = document.querySelectorAll('.card__item');
      headerShowAllNum.textContent = result.length + 1;
    }

    // click-function-2 (style the card with a checkbox)
    if (event.target.classList.contains('card__btn--confirm')) {
      event.target.closest('.card__btn--confirm').classList.toggle('card__btn--confirm-checked');
      event.target.closest('.card__item').classList.toggle('card__item--checked');
      event.target.closest('.card__item').querySelector('.card__todo-text').classList.toggle('card__todo-text--del');
    }

    // click-function-3 (delete the card by pressing the cross)
    if (event.target.classList.contains('card__btn--cancel')) {
      event.target.closest('.card__item').remove();
    }

    // click-function-4 (delete cards with an active checkbox)
    if (event.target.classList.contains('header__btn--del')) {
      const cardChecked = document.querySelectorAll('.card__item--checked');
      cardChecked.forEach(el => el.remove());
    }

    // click-function-5
    const cardItemAll = document.querySelectorAll('.card__item');
    if (event.target.classList.contains('header__btn--show-all')) {
      cardItemAll.forEach(el => el.classList.remove('hidden'));
    }

    // click-function-6
    if (event.target.classList.contains('header__btn--show-completed')) {
      cardItemAll.forEach(el => el.classList.contains('card__item--checked') ? el : el.classList.add('hidden'));
    }

    // click-function-7
    if (event.target.classList.contains('header__btn--del-last')) {
      const cardDelLast = document.querySelector('.card');
      cardDelLast.lastChild.remove();
    }

    // !!!!!!!!!!!!!!!!!!------------------------------------

    document.querySelector('.header').addEventListener('keyup', function (event) {
      if (event.target.classList.contains('header__input-search')) {
        if (event.code === 'Enter') {
          console.log(document.querySelector('.card__todo-text').innerHTML)
        }
      }
    });

    // document.querySelectorAll('.card__todo-text').textContent
    // cardTodoText.textContent === document.querySelector('.header__input-search').value;

    // !!!!!!!!!!!!!!!!!!--------------------------------------

  });
});