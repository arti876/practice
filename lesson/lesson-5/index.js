// Task-1-----------------------------------------
console.log(`
Task-1`);

const obj1 = {
  color: 'Red',
  colorNomber: '#FF0000',
};

console.log(`(add)
obj1[color]: ${obj1.color}
obj1[colorNomber]: ${obj1.colorNomber}`);

delete obj1.color;
delete obj1.colorNomber;

console.log(`(delete)
obj1[color]: ${obj1.color}
obj1[colorNomber]: ${obj1.colorNomber}`);


// Task-2-----------------------------------------
console.log(`
Task-2`);

const obj2 = {
  color: 'Red',
  colorNomber: '#FF0000',
};

const key = 'color';

const checkKey = function (key) {
  if (key in obj2) {
    return true;
  } else {
    return false;
  };
}

console.log(`${key} in obj2: ${checkKey(key)}`);


// Task-3-----------------------------------------
console.log(`
Task-3`)

const student = {
  name: 'John',
  age: 19,
  isHappy: true
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
};


// Task-4-----------------------------------------
console.log(`
Task-4`)

const colors = {
  'ru pum pu ru rum': {
    red: 'красный',
    green: 'зеленый',
    blue: 'синий'
  },
};

console.log(`${colors['ru pum pu ru rum'].red} и ${colors['ru pum pu ru rum'].blue}`);


// Task-5-----------------------------------------
console.log(`
Task-5`);

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  shepard: 664,
  alexandra: 199,
}

const averageSalaryCalc = function () {
  let staff = 0;
  let totalSalary = 0;

  for (let key in salaries) {
    totalSalary += salaries[key];
    staff++;
  }
  return totalSalary / staff
}

console.log(`${JSON.stringify(salaries)}
Средняя зарплата сотрудников: $${averageSalaryCalc()}`);


// Task-6-----------------------------------------
console.log(`
Task-6`);

const executeTask6 = function () {
  const userDatabase = {
    signUp() {
      this.userLogin = prompt('Task-6: Введите логин для регистрации');
      this.userPassword = prompt('Task-6: Введите пароль для регистрации');
    }
  }

  const signIn = function () {
    let checkLogin = prompt(`Подтвертиде ваш логин. Подсказка (${userDatabase.userLogin})`);
    let checkPassword = prompt(`Подтвертиде ваш пароль. Подсказка (${userDatabase.userPassword})`);

    if (checkLogin === userDatabase.userLogin && checkPassword === userDatabase.userPassword) {
      alert('Добро пожаловать');
      console.log('Добро пожаловать');
    } else if (confirm(`Ошибка ввода логина или пароля. Повторить ввод данных?`) === true) {
      signIn();
    } else {
      console.log(`Ошибка ввода логина или пароля`);
    }
  }

  userDatabase.signUp();
  signIn();
}

// executeTask6();


// ADVANCED-level-Task-1-----------------------------------------
console.log(`
ADVANCED-level-Task-1`);

const objNum = {
  0: 'нуль',
  1: 'один',
  2: 'два',
  3: 'три',
  4: 'четыре',
  5: 'пять',
  6: 'шесть',
  7: 'семь',
  8: 'восемь',
  9: 'девять',
}

const formattingMatchResult = function (matchResult) {
  return objNum[matchResult[0]] + ':' + objNum[matchResult[2]];
}

console.log(`Результат матча (${formattingMatchResult('1:7')})`);


// ADVANCED-level-Task-2-----------------------------------------
console.log(`
ADVANCED-level-Task-2`);

// let isEqual = JSON.stringify(student1) === JSON.stringify(student2);
// console.log(isEqual);

let student1 = {
  name: 'Polina',
  age: 27,
}

let student2 = {
  name: 'Polina',
  age: 27,
}

const isEqual = function (student1, student2) {
  const obj1 = Object.entries(student1);
  const obj2 = Object.entries(student2);
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let i = 0; i < obj1.length; ++i) {
    if (obj1[i][0] !== obj2[i][0]) {
      return false;
    }
    if (obj1[i][1] !== obj2[i][1]) {
      return false;
    }
  }
  return true;
}

console.log(`Объект "student1" равен "student2"?
Ответ: ${isEqual(student1, student2)}`);

console.log(`Объект "student1" равен "student2"?
Ответ: ${isEqual(student1, student2)}`);


// ADVANCED-level-Task-3-----------------------------------------
console.log(`
ADVANCED-level-Task-3`);

const animals = {
  cat: {
    name: 'Енчик',
    age: 3,
  },
  dog: {
    name: 'Орео',
    age: 2,
  }
}

console.log(animals.bird?.name);