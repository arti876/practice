import {
  getDate,
} from './reExport.js';
  
  // получить объект "todo"
  function getTodoObj(headerInputTextValue) {
    const id = Math.random().toString(36).slice(2);
    const date = getDate();
    const text = headerInputTextValue;
    const isChecked = false;

    const todo = {
      id: id,
      date: date,
      text: text,
      isChecked: isChecked,
    };

    return todo
  };

  export {
    getTodoObj,
  }