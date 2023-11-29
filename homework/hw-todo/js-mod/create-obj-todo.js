import {
  getDate
} from './reExport.js';

// получаем объект todo
const getTodoObj = () => {
  const id = Math.random().toString(36).slice(2);
  const date = getDate();
  const text = document.querySelector('.header__input-text').value;
  const isChecked = false;

  const todo = {
    id: id,
    date: date,
    text: text,
    isChecked: isChecked,
  };

  return todo
}

const {id, date, text, isChecked} = getTodoObj();

export {
  getTodoObj,
  id,
  date,
  text,
  isChecked
}