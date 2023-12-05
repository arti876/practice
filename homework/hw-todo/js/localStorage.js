// записать объекты в localStorage
function getName() {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
};

// получить массив объектов localStorage
function setName(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export {
  setName,
  getName,
}