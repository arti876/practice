import {
  getTodoObj,
  createTodoCard,
  todos,
  setName,
  updateCounterCards
} from './reExport.js';

// ------------------------------------------------------------------------------

// добавляем новую карточку
function addNewCard(paramsAddNewCard, paramsUpdateCounterCards) {
  const { textValue, classListAdd, classListRemove } = paramsAddNewCard;

  if (!textValue) {
    inputTextHeader.classList.add(classListAdd);
    inputTextHeader.addEventListener('focus', function () {
      inputTextHeader.classList.remove(classListRemove);
    });
  } else {
    const todoObj = getTodoObj(textValue);
    createTodoCard(todoObj);
    todos.push(todoObj);
    setName(todos);
    updateCounterCards(paramsUpdateCounterCards);
  };
};

// // ------------------------------------------------------------------------------

// // стилизуем карточку с помощью checkbox
// if (event.target.classList.contains('card__btn--confirm')) {
//   event.target.closest('.card__btn--confirm').classList.toggle('card__btn--confirm-checked');
//   event.target.closest('.card__item').classList.toggle('card__item--checked');
//   event.target.closest('.card__item').querySelector('.card__todo-text').classList.toggle('card__todo-text--del');
//   // обновление счетчика карточек
//   updateCounterCards(paramsUpdateCounterCards);
//   // проверяем значение isChecked и обновляем localStorage
//   for (let i = 0; i < todos.length; i++) {
//     if (todos[i].id === event.target.closest('.card__item').id) {
//       todos[i].isChecked = !todos[i].isChecked;
//       setName(todos);
//     };
//   };
// };

// // ------------------------------------------------------------------------------

// // удаляем карточку при нажатии на крестик
// if (event.target.classList.contains('card__btn--cancel')) {
//   event.target.closest('.card__item').remove();
//   // обновляем localStorage
//   const cardDel = todos.filter(todo => todo.id === event.target.closest('.card__item').id);
//   todos.splice(cardDel, 1);
//   setName(todos);
//   // обновление счетчика карточек
//   updateCounterCards(paramsUpdateCounterCards);
// };

// // ------------------------------------------------------------------------------

// // удаление всех карточек
// if (event.target.classList.contains('header__btn--del-all')) {
//   const cardInputAll = document.querySelectorAll('.card__item');
//   cardInputAll.forEach(el => el.remove());
//   // обновление счетчика карточек
//   updateCounterCards(paramsUpdateCounterCards);
//   // очищаем localStorage
//   todos = [];
//   setName(todos);
// };

// // ------------------------------------------------------------------------------

// // показать все скрытые карточки
// const cardItemAll = document.querySelectorAll('.card__item');
// if (event.target.classList.contains('header__btn--show-all')) {
//   cardItemAll.forEach(el => el.classList.remove('hidden'));
// };

// // ------------------------------------------------------------------------------

// // показать только выбранные карточки
// if (event.target.classList.contains('header__btn--show-completed')) {
//   cardItemAll.forEach(el => el.classList.contains('card__item--checked') ? el : el.classList.add('hidden'));
// };

// // удаляем последнюю карточку в списке
// if (event.target.classList.contains('header__btn--del-last')) {
//   const cardDelLast = document.querySelector('.card__list');
//   cardDelLast.lastChild.remove();
//   // обновляем localStorage
//   todos.pop();
//   setName(todos);
//   // обновление счетчика карточек
//   updateCounterCards(paramsUpdateCounterCards);
// };

// // ------------------------------------------------------------------------------

// // поиск карточек
// if (event.target.classList.contains('header__input-search')) {
//   const todoTextCardAll = document.querySelectorAll('.card__todo-text');
//   for (let i = 0; i < todoTextCardAll.length; i++) {
//     if (todoTextCardAll[i].innerText.toLowerCase().includes(document.querySelector('.header__input-search').value.toLowerCase())) {
//       document.querySelectorAll('.card__item')[i].classList.remove('hidden');
//     } else {
//       document.querySelectorAll('.card__item')[i].classList.add('hidden');
//     };
//   };
// };


export {
  addNewCard
}