// const root = document.querySelector('.root');

// const todos = fetch('https://jsonplaceholder.typicode.com/todos').then((data) => data.json())
//   .then((data) => data.forEach((value) => createTodo(root, value)))

// function createTodo(root, {userId, id, title, completed}) {
//   const todo = document.createElement('div');
//   const userId = createTextNode(userId);
//   const id = createTextNode(id);
//   const title = createTextNode(title);
//   const completed = createTextNode(completed);

//   todo.append(userId, id, title, completed);
//   root.append(todo);
// }

// function createTextNode (text) {
//   const textNode = document.createElement('p');
//   textNode.textContent = text;

//   return textNode
// }

function renderElement(template) {
  document.body.insertAdjacentHTML('beforeend', template)
}

function createWidget() {
  return new Promise ((resolve, reject) => {
    const templateWidget = '<fxwidget-cc amount="100" decimals="2" large="false" shadow="true" symbol="true" grouping="true" bor
    const scriptUrl = 'https://s.fx-w.io/widgets/currency-converter/latest.js?ru'
    const scriptElement = document.createElement('script')
  
    scriptElement.src = scriptUrl
  
    scriptElement.onload = () => {
      resolve(templateWidget)
      console.log('Widget is loaded!')
    }
  
    scriptElement.onerror = () => {
      reject(new Error('Error! Try again later'))
    }
  
    document.head.append(scriptElement)
  })
}

createWidget().then((result) => renderElement(result)).catch((error) => console.error(error))