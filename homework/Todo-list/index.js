document.addEventListener("DOMContentLoaded", function () {

  const getName = () => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
  };

  let todos = getName();

  let setName = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const root = document.querySelector('#root');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  root.append(wrapper);

  const header = document.createElement('div');
  header.classList.add('header');
  document.querySelector('.wrapper').append(header);

  const buttonDelAll = document.createElement('button');
  buttonDelAll.classList.add('header__btn', 'header__btn--del-all');
  buttonDelAll.type = 'button';
  buttonDelAll.name = 'delete-all';
  buttonDelAll.textContent = 'Delete All';
  document.querySelector('.header').append(buttonDelAll);

  const buttonDelCompleted = document.createElement('button');
  buttonDelCompleted.classList.add('header__btn', 'header__btn--del-completed');
  buttonDelCompleted.type = 'button';
  buttonDelCompleted.name = 'delete-completed';
  buttonDelCompleted.textContent = 'Delete Completed';
  document.querySelector('.header').append(buttonDelCompleted);

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
  headerShowAllNum.textContent = '0';
  headerShowAll.append(headerShowAllNum);

  const headerShowCompleted = document.createElement('div');
  headerShowCompleted.classList.add('header__show-completed');
  headerShowCompleted.textContent = 'Completed: ';
  document.querySelector('.header').append(headerShowCompleted);

  const headerShowCompletedNum = document.createElement('span');
  headerShowCompletedNum.classList.add('header__show-complete-num');
  headerShowCompletedNum.textContent = '0';
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

  todos.forEach(todo => {
    createTodoCard(todo);
  });


  function createTodoCard(todo) {
    // if (!document.querySelector('.header__input-text').value) {
    //   inputTextHeader.classList.add('header__input-text--error');
    //   inputTextHeader.addEventListener('focus', function () {
    //     inputTextHeader.classList.remove('header__input-text--error');
    //   });
    // } else {
    const cardItem = document.createElement('div');
    cardItem.classList.add('card__item');
    cardItem.id = todo.id;
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
    cardTodoText.textContent = todo.text;
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
    cardDate.textContent = todo.date;
    cardRight.append(cardDate);

    if (todo.isChecked) {
      cardItem.classList.add('card__item--checked');
      cardTodoText.classList.add('card__todo-text--del');
      buttonConfirm.classList.add('card__btn--confirm-checked');
    }
    // };
  };

  // делегирование собитий '#root' по 'click'
  root.addEventListener('click', function (event) {

    const id = Math.random().toString(36).slice(2);
    const month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const date = `${new Date().getHours()}:${new Date().getMinutes()} ${new Date().getDate()} ${month[new Date().getMonth()]}`;
    const text = document.querySelector('.header__input-text').value;
    const isChecked = false;

    const todo = {
      id: id,
      date: date,
      text: text,
      isChecked: isChecked,
    };

    // click-function-1 (добавляем новую карточку)
    if (event.target.classList.contains('header__btn--add')) {

      createTodoCard(todo);

      todos.push(todo);
      setName(todos);
    };

const completed = () => {
  console.log(document.getElementsByClassName('.card__item--checked'))
}

    // click-function-2 (добавляем в счетчик 'All' созданную карточку)
    const result = document.querySelectorAll('.card__item');
    if (event.target.classList.contains('header__btn--add')) {
      headerShowAllNum.textContent = result.length;
    }

    // click-function-3 (стилизуем карточку с помощью checkbox)
    let cardItemCheckedAll = 0;
    if (event.target.classList.contains('card__btn--confirm')) {
      event.target.closest('.card__btn--confirm').classList.toggle('card__btn--confirm-checked');
      event.target.closest('.card__item').classList.toggle('card__item--checked');
      event.target.closest('.card__item').querySelector('.card__todo-text').classList.toggle('card__todo-text--del');
      // добавляем\удаляем в счетчик 'Completed' выбранные карточки
      completed();
      cardItemCheckedAll = document.querySelectorAll('.card__item--checked');
      headerShowCompletedNum.textContent = cardItemCheckedAll.length;
      // проверяем значение isChecked и обновляем массив
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === event.target.closest('.card__item').id) {
          todos[i].isChecked = !todos[i].isChecked;
          const updatedTodos = todos.map(value => value);
          setName(updatedTodos);
        }
      }
    }

    // click-function-4 (удаляем карточку при нажатии на крестик)
    if (event.target.classList.contains('card__btn--cancel')) {
      event.target.closest('.card__item').remove();
      // при удалении отнимаем от счетчика 'All' одну карточку
      headerShowAllNum.textContent = result.length - 1;
    }

    // click-function-5 (удаление выбранных карточек)
    if (event.target.classList.contains('header__btn--del-completed')) {
      const cardChecked = document.querySelectorAll('.card__item--checked');
      cardChecked.forEach(el => el.remove());
      // удаляем из счетчика 'Completed' выбранные карточки
      cardItemCheckedAll = document.querySelectorAll('.card__item--checked');
      headerShowCompletedNum.textContent = cardItemCheckedAll.length;
      headerShowAllNum.textContent = result.length - cardChecked.length;
    }
    // click-function-6 (удаление всех карточек)
    if (event.target.classList.contains('header__btn--del-all')) {
      const cardInputAll = document.querySelectorAll('.card__item');
      cardInputAll.forEach(el => el.remove());
      // удаляем из счетчика 'All' все карточки
      headerShowAllNum.textContent = result.length - result.length;
      // очищаем localStorage
      localStorage.removeItem('todos');
      // localStorage.clear();
      location.reload();
    }

    // click-function-7 (показать все скрытые карточки)
    const cardItemAll = document.querySelectorAll('.card__item');
    if (event.target.classList.contains('header__btn--show-all')) {
      cardItemAll.forEach(el => el.classList.remove('hidden'));
    }

    // click-function-8 (показать только выбранные карточки)
    if (event.target.classList.contains('header__btn--show-completed')) {
      cardItemAll.forEach(el => el.classList.contains('card__item--checked') ? el : el.classList.add('hidden'));
    }

    // click-function-9 (удаляем последнюю карточку в списке)
    if (event.target.classList.contains('header__btn--del-last')) {
      const cardDelLast = document.querySelector('.card');
      cardDelLast.lastChild.remove();
      headerShowAllNum.textContent = result.length - 1;
    }

    if (event.target.classList.contains('header__btn--del-last')) {
      const cardDelLast = document.querySelector('.card');
      cardDelLast.lastChild.remove();
      headerShowAllNum.textContent = result.length - 1;
    }
  });


  // делегирование собитий '#root' по 'input'
  root.addEventListener('input', function (event) {
    if (event.target.classList.contains('header__input-search')) {
      const todoTextCardAll = document.querySelectorAll('.card__todo-text');
      for (let i = 0; i < todoTextCardAll.length; i++) {
        if (todoTextCardAll[i].innerText.toLowerCase().startsWith(document.querySelector('.header__input-search').value.toLowerCase())) {
          document.querySelectorAll('.card__item')[i].classList.remove('hidden');
        } else {
          document.querySelectorAll('.card__item')[i].classList.add('hidden');
        };
      };
    };
  });
});