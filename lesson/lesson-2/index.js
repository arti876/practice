// -------------------------------------------------------------------------Task-1
function task1() {
  let x = 20;
  let y = 58;
  let z = 42;

  alert('Task 1:  ' + 'Результат сложения переменных = ' + (x + y + z));
  console.log('Task 1: ' + (x + y + z));
};

// -------------------------------------------------------------------------Task-2
function task2() {
  // - количество секунд в минуте
  let secMin = 60;
  // - количество минут в часу
  let minHour = 60;
  // - количество часов в сутках
  let hourDay = 24;
  // - количество суток в году
  let dayYear = 365;
  // - возраст
  let myAge = Number(prompt('Введите ваш возраст'));
  // - возраст в секундах
  let myAgeInSeconds = myAge * dayYear * hourDay * minHour * secMin;

  if (myAge > 0) {
    alert('Task 2:  ' + 'Ваш возраст ' + myAgeInSeconds + ' секунд');
    console.log('Task 2: ' + myAgeInSeconds);
  }
};

// -------------------------------------------------------------------------Task-3
function task3() {
  let count = 42;
  let userName = '42';

  let newContVar1 = String(count);
  let newUserNameVar1 = +userName;

  let newContVar2 = '' + count;
  let newUserNameVar2 = Number(userName);

  alert('Task 3 (Вариант 1):  ' + 'String(count) = ' + typeof (newContVar1) + '  ,  ' + '+userName = ' + typeof (newUserNameVar1));
  console.log('Task 3:');
  console.log('newContVar1 = ' + typeof (newContVar1));
  console.log('newUserNameVar1 = ' + typeof (newUserNameVar1));

  alert('Task 3 (Вариант 1):  ' + '("" + count) = ' + typeof (newContVar2) + '  ,  ' + 'Number(userName) = ' + typeof (newUserNameVar2));
  console.log('newContVar2 = ' + typeof (newContVar2));
  console.log('newUserNameVar2 = ' + typeof (newUserNameVar2));
};

// -------------------------------------------------------------------------Task-4
function task4() {
  let a = 1;
  let b = 2;
  let c = "белых медведей";

  alert('Task 4:  ' + a + b + ' ' + c + '   O_o');
  console.log('Task 4: ' + a + b + ' ' + c);
};

// -------------------------------------------------------------------------Task-5
function task5() {
  let access = Number(!!'доступ');
  let marine = Number(!!'морпех');
  let ice = Number(!!'наледь');
  let across = Number(!!'поперек');
  let chopped = Number(!!'рубило');

  alert('Task 5:  ' + 'Количество слов из списка =  ' + (access + marine + ice + across + chopped));
  console.log('Task 5: ' + (access + marine + ice + across + chopped));
};

// -------------------------------------------------------------------------Task-6
function task6() {
  let typeOneString = String('Variable: %variable name% have type: %type variable%');
  let typeTwoNumber = Number('Variable: %variable name% have type: %type variable%');
  let typeThreeBoolean = Boolean('Variable: %variable name% have type: %type variable%');

  alert('Task 6 (Первый тип "String"):  ' + typeOneString);
  console.log('Task 6:');
  console.log('typeOneString:   ' + typeOneString);
  alert('Task 6 (Второй тип "Number"):  ' + typeTwoNumber);
  console.log('typeTwoNumber:   ' + typeTwoNumber);
  alert('Task 6 (Третий тип "Boolean"):  ' + typeThreeBoolean);
  console.log('typeThreeBoolean:   ' + typeThreeBoolean);
};

// -------------------------------------------------------------------------Task-7
function task7() {
  let NameYear = String(prompt('Напишите свое имя и возраст'));

  while (confirm('Введенные вами имя и возраст: ' + NameYear) === false || NameYear === null || NameYear.length === 0) {
    NameYear = prompt('Напишите свое имя и возраст');
  };
  console.log('Task 7:  ' + NameYear);
};

// -------------------------------------------------------------------------ADVANCED-level-Task-1
function advancedLevelTask1() {
  let a = 4;
  let b = 3;

  z = a - b;
  a = a - z;
  b = b + z;

  alert('advancedLevelTask1:  ' + '"a" было 4, стало ' + a + '   /   ' + '"b" было 3, стало ' + b);
  console.log('advancedLevelTask1:');
  console.log('a = 4:   ' + a);
  console.log('b = 3:   ' + b);
};

// -------------------------------------------------------------------------ADVANCED-level-Task-2
function advancedLevelTask2() {
  let codeWord1 = "обернись";
  let codeWord2 = "неужели";
  let codeWord3 = "огурцы";
  let codeWord4 = "липкие";
  let codeWord5 = "?!";
  let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

  alert('advancedLevelTask1:  ' + 'Послание из шифра говорит..   ' + cipher);
  console.log('advancedLevelTask2: ' + cipher);
};