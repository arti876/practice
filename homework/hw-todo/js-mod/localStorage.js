// записываем объекты в localStorage
function getName() {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
};

let todos = getName();

// получаем массив объектов localStorage
function setName(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export {
  todos,
  setName
}