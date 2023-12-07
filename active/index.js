const root = document.querySelector('.root');

const todos = fetch('https://jsonplaceholder.typicode.com/todos').then((data) => data.json())
  .then((data) => data.forEach((value) => createTodo(root, value)))

function createTodo(root, {userId, id, title, completed}) {
  const todo = document.createElement('div');
  const userId = createTextNode(userId);
  const id = createTextNode(id);
  const title = createTextNode(title);
  const completed = createTextNode(completed);
  
  todo.append(userId, id, title, completed);
  root.append(todo);
}

function createTextNode (text) {
  const textNode = document.createElement('p');
  textNode.textContent = text;

  return textNode
}