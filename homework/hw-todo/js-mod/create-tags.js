// создание элемента - div
function createDiv(classList) {
  const element = document.createElement('div');
  element.classList = classList;
  return element;
}

// создание элемента - label
function createLabel(classList) {
  const element = document.createElement('label');
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

// создание элемента - paragraph
function createParagraph(classList, textContent) {
  const element = document.createElement('p');
  element.classList = classList;
  element.textContent = textContent;
  return element;
}

// создание элемента - span
function createSpan(classList, textContent) {
  const element = document.createElement('span');
  element.classList = classList;
  element.textContent = textContent;
  return element;
}

export {
  createDiv,
  createLabel,
  createButton,
  createInput,
  createParagraph,
  createSpan
}