// записываем объекты в localStorage
const getName = () => {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
}

let todos = getName();

// получаем массив объектов localStorage
let setName = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export {
  todos,
  setName
}