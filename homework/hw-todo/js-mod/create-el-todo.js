// функция для создания элемента - div или label
const createDivOrLabel = (tag, classList) => {
  const element = document.createElement(tag);
  element.classList = classList;
  return element;
}

// функция для создания элемента - button
const createButton = (classList, name, textContent) => {
  const element = document.createElement('button');
  element.classList = classList;
  element.type = 'button';
  element.name = name;
  element.textContent = textContent;
  return element;
}

// функция для создания элемента - input
const createInput = (classList, name, placeholder) => {
  const element = document.createElement('input');
  element.classList = classList;
  element.type = 'text';
  element.name = name;
  element.placeholder = placeholder;
  return element;
}

// функция для создания элемента - p или span
const createParagraphOrSpan = (tag, classList, textContent) => {
  const element = document.createElement(tag);
  element.classList = classList;
  element.textContent = textContent;
  return element;
}

export {
  createDivOrLabel,
  createButton,
  createInput,
  createParagraphOrSpan
}