// добавляем новую карточку
const addNewCard = () => {
  if (event.target.classList.contains('header__btn--add')) {
    // проверка на пустое поле
    if (!document.querySelector('.header__input-text').value) {
      inputTextHeader.classList.add('header__input-text--error');
      inputTextHeader.addEventListener('focus', function () {
        inputTextHeader.classList.remove('header__input-text--error');
      });
    } else {
      createTodoCard(getTodoObj());
      headerShowAllNum.textContent = `${getAllNumCard()}`;
      todos.push(getTodoObj());
      setName(todos);
    };
  };
}

// стилизуем карточку с помощью checkbox
const clickCheckbox = () => {
  if (event.target.classList.contains('card__btn--confirm')) {
    event.target.closest('.card__btn--confirm').classList.toggle('card__btn--confirm-checked');
    event.target.closest('.card__item').classList.toggle('card__item--checked');
    event.target.closest('.card__item').querySelector('.card__todo-text').classList.toggle('card__todo-text--del');
    // обновляем счетчик 'Completed'
    headerShowCompletedNum.textContent = `${getCompletedCard()}`;
    // проверяем значение isChecked и обновляем localStorage
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === event.target.closest('.card__item').id) {
        todos[i].isChecked = !todos[i].isChecked;
        setName(todos);
      };
    };
  };
}

// удаляем карточку при нажатии на крестик
const deleteCard = () => {
  if (event.target.classList.contains('card__btn--cancel')) {
    event.target.closest('.card__item').remove();
    // обновляем localStorage
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === event.target.closest('.card__item').id) {
        todos.splice(todos[i], 1);
        setName(todos);
        location.reload();
      };
    };
    // обновляем счетчики карточек
    headerShowCompletedNum.textContent = `${getCompletedCard()}`;
    headerShowAllNum.textContent = `${getAllNumCard()}`;
  };
}

// удаление всех карточек
const deleteAllCards = () => {
  if (event.target.classList.contains('header__btn--del-all')) {
    const cardInputAll = document.querySelectorAll('.card__item');
    cardInputAll.forEach(el => el.remove());
    // обновляем счетчик карточек 'All'
    headerShowCompletedNum.textContent = `${getCompletedCard()}`;
    headerShowAllNum.textContent = `${getAllNumCard()}`;
    // очищаем localStorage
    localStorage.removeItem('todos');
    location.reload();
  };
}

// показать все скрытые карточки
const showAllCards = () => {
  if (event.target.classList.contains('header__btn--show-all')) {
    document.querySelectorAll('.card__item').forEach(el => el.classList.remove('hidden'));
  };
}

// показать только выбранные карточки
const showCheckedCards = () => {
  if (event.target.classList.contains('header__btn--show-completed')) {
    document.querySelectorAll('.card__item').forEach(el => el.classList.contains('card__item--checked') ? el : el.classList.add('hidden'));
  };
}

// удаляем последнюю карточку в списке
const delLastCard = () => {
  if (event.target.classList.contains('header__btn--del-last')) {
    const cardDelLast = document.querySelector('.card');
    cardDelLast.lastChild.remove();
    // обновляем localStorage
    todos.pop();
    setName(todos);
    // обновляем счетчики карточек
    headerShowCompletedNum.textContent = `${getCompletedCard()}`;
    headerShowAllNum.textContent = `${getAllNumCard()}`;
  };
}

export {
  addNewCard,
  clickCheckbox,
  deleteCard,
  deleteAllCards,
  showAllCards,
  showCheckedCards,
  delLastCard
}