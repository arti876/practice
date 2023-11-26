const root = document.querySelector("#root");

const createListToDo = () => {

  const getName = () => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
  };

  const todos = getName();

  const setName = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const navigationItem = document.createElement('div');
  navigationItem.classList.add('navigation-item');

  const btnDeleteAll = document.createElement('button');
  btnDeleteAll.classList.add('btn-del');
  btnDeleteAll.textContent = "Delete All";

  const descriptionItemInput = document.createElement('input');
  descriptionItemInput.classList.add('navigation-item_text');
  descriptionItemInput.type = 'text';
  descriptionItemInput.name = 'name';
  descriptionItemInput.placeholder = 'Enter todo ...';

  const btnAdd = document.createElement('button');
  btnAdd.classList.add('btn-add');
  btnAdd.textContent = "Add";

  root.append(navigationItem);
  navigationItem.append(btnDeleteAll, descriptionItemInput, btnAdd);

  const cardList = document.createElement('div');
  cardList.classList.add('card-list');
  root.append(cardList)

  todos.forEach(todo => {
    addNewCard(todo);
  });

  function addNewCard(todo) {

    const cardItem = document.createElement('div');
    cardItem.classList.add('card-item');
    cardList.append(cardItem)

    const checkAdd = document.createElement("input");
    checkAdd.type = "checkbox";
    checkAdd.classList.add("chec-add");
    cardItem.append(checkAdd)

    const cardText = document.createElement('span');
    cardText.classList.add('card-text');
    cardText.textContent = todo.text;
    cardItem.append(cardText)

    const cardCanclDate = document.createElement('div');
    cardCanclDate.classList.add('card-date_cancel');
    cardItem.append(cardCanclDate)

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('btn-cancel');
    cancelButton.textContent = "X";
    cardCanclDate.append(cancelButton)

    const cardDate = document.createElement('div');
    cardDate.classList.add('card-date');
    cardDate.textContent = todo.date;
    cardCanclDate.append(cardDate)
  };

  root.addEventListener('click', (event) => {

    const cardId = new Date().getTime();
    const cardDate = new Date().toLocaleString();
    const cardText = document.querySelector('.navigation-item_text').value;
    const cardChecked = false;

    const todo = {
      id: cardId,
      date: cardDate,
      text: cardText,
      isChecked: cardChecked,
    };

    if (event.target.classList.contains('btn-add')) {

      addNewCard(todo);

      todos.push(todo);
      setName(todos);

    };

    if (event.target.classList.contains('btn-del')) {
      const cardDeleteAll = document.querySelectorAll('.card-item')
      cardDeleteAll.forEach((value) => {
        value.remove();
        localStorage.clear();
      })
    }

    if (event.target.classList.contains('btn-cancel')) {
      event.target.closest('.card-item').remove();
    }

    if (event.target.classList.contains('chec-add')) {
      event.target.closest('.card-item').classList.toggle('card-item_check');
      event.target.closest('.card-item').querySelector('.card-text').classList.toggle('card-item_strikethrough');
    }

  })

}

createListToDo();