const root = document.querySelector('#root');
const cardCreationDate = new Date();
const currentDate = `${cardCreationDate.getMonth() + 1}/${cardCreationDate.getDate()}/${cardCreationDate.getFullYear()}`;

// Get To-do cards from localStorage
const getName = () => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
};

// Save To-do cards to localStorage
const setName = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const formsList = document.createElement('div');
formsList.classList.add('form-list');

const createFullSection = () => {
    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('head-wrapper');

    const deleteAllBtn = document.createElement("button");
    deleteAllBtn.classList.add('head-btn');
    deleteAllBtn.textContent = 'Delete All';

    const enterToDoInput = document.createElement("input");
    enterToDoInput.classList.add('head-input');
    enterToDoInput.placeholder = 'Enter todo ...';

    const addBtn = document.createElement('button');
    addBtn.classList.add('head-btn');
    addBtn.textContent = 'Add';

    headerWrapper.append(deleteAllBtn, enterToDoInput, addBtn);
    root.append(headerWrapper);

    // Add To-do card by pressing "Add" button
    addBtn.addEventListener('click', () => {
        const cardText = enterToDoInput.value;

        // Generate a dynamic ID for each To-do card
        const todoId = Date.now();

        // Create a To-do object
        const todo = {
            id: todoId,
            date: currentDate,
            text: cardText,
            isChecked: false,
        };

        // Save the To-do object to localStorage
        const todos = getName();
        todos.push(todo);
        setName(todos);

        // Create a To-do card
        createTodoCard(todo);

        enterToDoInput.value = '';
    });

    // Remove all To-do cards
    deleteAllBtn.addEventListener('click', () => {
        const allTodos = document.querySelectorAll('.form-wrapper');

        allTodos.forEach(value => value.remove());
        localStorage.removeItem('todos');
    });

    // Load To-do cards from localStorage on page load
    const storedTodos = getName();
    storedTodos.forEach(todo => {
        createTodoCard(todo);
    });

    root.appendChild(formsList);
};

function createTodoCard(todo) {
    const formWrapper = document.createElement('div');
    formWrapper.classList.add('form-wrapper');

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('form-btn');
    submitBtn.setAttribute('href', '');

    const submitBtnImage = document.createElement('img');
    submitBtnImage.src = './icons/check.png';
    submitBtnImage.alt = 'Submit';
    submitBtnImage.classList.add('icon-style');

    submitBtn.appendChild(submitBtnImage);

    const todoInput = document.createElement('input');
    todoInput.classList.add('form-input');
    todoInput.placeholder = 'Todo text';
    todoInput.value = todo.text;

    // Change card background color and add line-through text on submitBtn click
    submitBtn.addEventListener('click', () => {
        if (formWrapper.style.backgroundColor === 'aqua') {
            formWrapper.style.backgroundColor = '';
            todoInput.style.textDecoration = '';
            todo.isChecked = false;
        } else {
            formWrapper.style.backgroundColor = 'aqua';
            todoInput.style.textDecoration = 'line-through';
            todo.isChecked = true;
        }
        // Save the checked To-do object to localStorage
        const todos = getName();
        const updatedTodos = todos.map(value => (value.id === todo.id ? todo : value));
        setName(updatedTodos);
    });

    const declineAndDate = document.createElement('div');
    declineAndDate.classList.add('decline-date-section');

    const declineBtn = document.createElement('button');
    declineBtn.classList.add('decline-btn');
    declineBtn.textContent = 'X';

    // Remove a specific single card
    declineBtn.addEventListener('click', () => {
        formWrapper.remove();
    });

    // Add appearance of a To-do card creation date in format MM/DD/YYYY
    const dateInput = document.createElement('label');
    dateInput.classList.add('date-input');
    dateInput.textContent = todo.date;

    // Check isChecked status and if true, apply backgroundColor and textDecoration styles
    if (todo.isChecked) {
        formWrapper.style.backgroundColor = 'aqua';
        todoInput.style.textDecoration = 'line-through';
    }

    declineAndDate.append(declineBtn, dateInput);
    formWrapper.append(submitBtn, todoInput, declineAndDate);

    formsList.appendChild(formWrapper);
}

createFullSection();