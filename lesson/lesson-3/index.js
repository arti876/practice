// -------Task-1

function task1() {
  let a = 'true';
  let b = false;
  let c = 17;
  let d = undefined;
  let e = null;

  console.log('Task-1:');
  console.log(`true - typeof: ${typeof (a)}`);
  console.log(`false - typeof: ${typeof (b)}`);
  console.log(`17 - typeof: ${typeof (c)}`);
  console.log(`undefined - typeof: ${typeof (d)}`);
  console.log(`null  - typeof: ${typeof (e)}`);
}

// -------Task-2

function task2() {
  let height = 15;
  let width = 20;

  if (height > width) {
    console.log(`Task-2:  height(${height}) > width(${width})`);
  } else if (height < width) {
    console.log(`Task-2:  height(${height}) > width(${width})`);
  } else if (height === width) {
    console.log(`Task-2:  height(${height}) = width(${width})`);
  }
}

// -------Task-3

function task3() {
  for (i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      console.log(`Task-3: Числа от 1 до 20, кратные 3:  ${i}`)
    }
  }
}

// -------Task-4

function task4() {
  let key = true;
  let documents = true;
  let pen = true;
  let apple = false;
  let orange = true;
  let shouldGoToWork = 'Task-4:  На работу взяли все и апельсин на обед';

  if ((key && documents && pen) === true && (apple || orange) === true) {
    console.log(shouldGoToWork)
  } else {
    console.log('Task-4:  Что-то забыли')
  }
}

// -------Task-5

function task5() {
  let someNumbers = prompt('Введите число');

  if (someNumbers === null) {
    console.log('Task-5:  Повторите ввод числа');
  } else if (someNumbers % 3 === 0 && someNumbers % 5 === 0) {
    console.log('Task-5 (деится на 3 и 5):  FizBuz ');
  } else if (someNumbers % 3 === 0) {
    console.log('Task-5 (деится на 3):  Buz');
  } else if (someNumbers % 5 === 0) {
    console.log('Task-5 (деится на 5):  Fiz');
  } else {
    console.log('Task-5:  на 3 или 5 без остатка не делится');
  }
}

// -------Task-6

function task6() {
  let age = +prompt('Введите ваш возраст')

  if (age < 16 && age !== 0) {
    console.log('Task-5:  Пей колу');
  } else if (age >= 18) {
    console.log('Task-5:  Попей пивка');
  } else if (age >= 16 && age < 18) {
    console.log('Task-5:  Можешь выкурить сигаретку, только маме не говори');
  } else {
    console.log('Task-5:  Кто здесь?! О_о');
  }
}



// -------Task-7

function task7() {
  let sideWorld = prompt('В какую сторону света вы бы хотели отправиться. Введите одно из значений "юг, север, запад, восток"');

  switch (sideWorld) {
    case 'юг':
      alert('Task-6:  на юг пойдешь счастье найдешь');
      break;
    case 'север':
      alert('Task-6:  на север пойдешь много денег найдешь');
      break;
    case 'запад':
      alert('Task-6:  на запад пойдешь верного друга найдешь');
      break;
    case 'восток':
      alert('Task-6:  на восток пойдешь разработчиком станешь');
      break;
    default:
      alert('Task-6:  Никуда не поеду, дома посижу');
  }
}

// -------ADVANCED-level-Task-1

// Var1
// function advancedLevelTask1() {
//   let name = 'пОлИнА';
//   let surname = 'нАбЕрЕжНаЯ';

//   name = name[0].toUpperCase() + name.slice(1, 6).toLowerCase();
//   surname = surname[0].toUpperCase() + surname.slice(1, 10).toLowerCase();
//   console.log('ADVANCED level Task 1:  Привет, ' + name + ' ' + surname + '!');
// }

// Var2
function advancedLevelTask1() {
  let trueName = '';
  let name = prompt('Введите свое Имя и Фамилию с верхним и нижним регистром, для примера "пОлИнА нАбЕрЕжНаЯ"');
  let space = false;

  for (let i = 0; i < name.length; i++) {
    if (i === 0 || space){
      trueName += name[i].toUpperCase();
    } else {
      trueName += name[i].toLowerCase();
    }
    space = name[i] === ' ';
  }

  alert(`ADVANCED level Task 1:  Привет, ${trueName}!`);
  console.log(`ADVANCED level Task 1:  Привет, ${trueName}!`);
  }

// -------ADVANCED-level-Task-2

function advancedLevelTask2() {
  let someNumber = +prompt('Введите любое чило');
  let оperation1 = +prompt('Склько отнять от предыдущего числа?');
  let оperation2 = +prompt('Сколько прибавить к предыдущему числу?');
  let оperation3 = +prompt('На сколько умножить предыдущее число?');
  let оperation4 = +prompt('На сколько разделить предыдущее число?');
  let result = (((someNumber - оperation1) + оperation2) * оperation3) / оperation4;

  alert(`ADVANCED level Task 2:  (((${someNumber} - ${оperation1}) + ${оperation2}) * ${оperation3}) / ${оperation4} = ${result}`);
  console.log(`ADVANCED level Task 2:  (((${someNumber} - ${оperation1}) + ${оperation2}) * ${оperation3}) / ${оperation4} = ${result}`);
}

// -------ADVANCED-level-Task-3

function advancedLevelTask3() {
  let ladder = '';

  console.log('ADVANCED level Task 3:  ');

  for (let i = 0; i <= 5; i++) {
    ladder += '#';
    console.log(ladder);
  }
}