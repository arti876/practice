// создание элемента - div или label
function createDivOrLabel(tag, classList) {
  const element = document.createElement(tag);
  element.classList = classList;
  return element;
}

// создание элемента - button
function createButton(classList, name, textContent) {
  const element = document.createElement('button');
  element.classList = classList;
  element.type = 'button';
  element.name = name;
  element.textContent = textContent;
  return element;
}

// создание элемента - input
function createInput(classList, name, placeholder) {
  const element = document.createElement('input');
  element.classList = classList;
  element.type = 'text';
  element.name = name;
  element.placeholder = placeholder;
  return element;
}

// создание элемента - p или span
function createParagraphOrSpan(tag, classList, textContent) {
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