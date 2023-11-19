// Task-1-----------------------------------------
console.log(`
Task-1`);

const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

console.log(`arrow function:`);

const arrayOutput1 = fibonacci1.forEach(value => console.log(value));

console.log(`function declaration:`);

fibonacci1.forEach(function arrayOutput2(value) {
  console.log(value);
});


// Task-2-----------------------------------------
console.log(`
Task-2`);

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

const wordAddition1 = users.map(function (user, index) {
  return `member ${index + 1}: ${user}`;
});

console.log(`function declaration:`);
console.log(wordAddition1);


const wordAddition2 = users.map((user, index) => `member ${index + 1}: ${user}`);

console.log(`arrow function:`);
console.log(wordAddition2);


// Task-3-----------------------------------------
console.log(`
Task-3`);

const numbers1 = [7, -4, 32, -90, 54, 32, -21];

const newArrayWithoutNegativity1 = numbers1.filter(function (num) {
  return num > 0;
});

console.log(`function declaration:`);
console.log(newArrayWithoutNegativity1);

const newArrayWithoutNegativity2 = numbers1.filter(num => num > 0);

console.log(`arrow function:`);
console.log(newArrayWithoutNegativity2);


// Task-4-----------------------------------------
console.log(`
Task-4`);

const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

const numberAddition1 = fibonacci2.reduce(function (currentSum, currentNumber) {
  return currentSum + currentNumber;
}, 0);

console.log(`function declaration:`);
console.log(numberAddition1);

const numberAddition2 = fibonacci2.reduce((currentSum, currentNumber) => currentSum + currentNumber, 0);

console.log(`arrow function:`);
console.log(numberAddition2);


// Task-5-----------------------------------------
console.log(`
Task-5`);

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

const evenNumberSearch1 = function (num) {
  return num % 2 === 0;
};

console.log(`function declaration:`);
console.log(numbers.find(evenNumberSearch1));

const evenNumberSearch2 = (num) => num % 2 === 0;

console.log(`arrow function:`);
console.log(numbers.find(evenNumberSearch2));

// ADVANCED-level-Task-1-----------------------------------------
console.log(`
ADVANCED-level-Task-1`);

const creatingStudConstLoanCalc = () => {
  const Student = function (name, salary, rate) {
    this.name = name;
    this.salary = salary;
    this.rate = rate;
    this.creditDetermination = (() => {
      if (this.rate === 'A') {
        return this.salary * 12;
      } else if (this.rate === 'B') {
        return this.salary * 9;
      } else if (this.rate === 'C') {
        return this.salary * 6;
      } else if (this.rate === 'D') {
        return 0;
      }
    })();
  };

  const constructorStudents = [
    new Student('Star Lord', '100', 'D'),
    new Student('Rocket', '2300', 'A'),
    new Student('Drax Destroyer', '1100', 'B'),
    new Student('Groot', '500', 'C'),
    new Student('Gamora', '5000', 'A'),
  ];

  const totalСreditСalculation = Object.values(constructorStudents).reduce((sum, credit) => sum + +credit.creditDetermination, 0);

  return `${JSON.stringify(constructorStudents)}
Студент ${constructorStudents[0].name} зарабатывает $${constructorStudents[0].salary}, рейтинг кредитования "${constructorStudents[0].rate}"
Cумма кредита: ${constructorStudents[0].creditDetermination}

${constructorStudents[1].name} зарабатывает $${constructorStudents[1].salary}, рейтинг кредитования "${constructorStudents[1].rate}"
Cумма кредита: ${constructorStudents[1].creditDetermination}

${constructorStudents[2].name} зарабатывает $${constructorStudents[2].salary}, рейтинг кредитования "${constructorStudents[2].rate}"
Cумма кредита: ${constructorStudents[2].creditDetermination}

${constructorStudents[3].name} зарабатывает $${constructorStudents[3].salary}, рейтинг кредитования "${constructorStudents[3].rate}"
Cумма кредита: ${constructorStudents[3].creditDetermination}

${constructorStudents[4].name} зарабатывает $${constructorStudents[4].salary}, рейтинг кредитования "${constructorStudents[4].rate}"
Cумма кредита: ${constructorStudents[4].creditDetermination}

Общая сумма кредита которую можно выдать группе: $${totalСreditСalculation}`
}

console.log(creatingStudConstLoanCalc());


// ADVANCED-level-Task-2-----------------------------------------
console.log(`
ADVANCED-level-Task-2`);

const vowelDeletion = (str) => {
  const vowelLetters = 'aeiou';
  return str.split('').filter(letter => !vowelLetters.includes(letter.toLowerCase())).join('');
};

console.log(vowelDeletion('This website is for losers LOL!'));


// ADVANCED-level-Task-3-----------------------------------------
console.log(`
ADVANCED-level-Task-3`);

const stringСonversion = (string) => {
  const arrElem = string.split('').reduce((result, letter, index) => {
    result = result.concat(letter.toUpperCase());
    for (let i = 1; i <= index; i++) {
      result = result.concat(letter.toLowerCase());
    }
    return result += '-'
  }, []);
  return arrElem.slice(0, -1)
}

console.log(stringСonversion('abcd'));
console.log(stringСonversion('RqaEzty'));
console.log(stringСonversion('cwAt'));


// ADVANCED-level-Task-4-----------------------------------------
console.log(`
ADVANCED-level-Task-4`);

const findHighLow = (strHighLow) => {
  const highAndLow = strHighLow.split(' ').reduce((minMax, num) => {
    minMax[0] = (minMax[0] > num) ? minMax[0] : num;
    minMax[1] = (minMax[1] < num) ? minMax[1] : num;
    return minMax;
  }, []);
  return `В массиве [${strHighLow}] MaxMin = "${highAndLow[0]} ${highAndLow[1]}"`
};

console.log(findHighLow('7 6 5 4 3 2 1'));
console.log(findHighLow('1 2 -3 4 5'));
console.log(findHighLow('1 9 3 4 -5'));


// ADVANCED-level-Task-5-----------------------------------------
console.log(`
ADVANCED-level-Task-5`);

const isogramTest = (str) =>
  str.toLowerCase().split('').filter((letter, index, arrLetter) =>
    arrLetter.indexOf(letter) === index).length === (str.length || !str);

console.log(`"Dermatoglyphics"  ${isogramTest('Dermatoglyphics')}`);
console.log(`"aba"  ${isogramTest('aba')}`);
console.log(`"moOse"  ${isogramTest('moOse')}`);
console.log(`""  ${isogramTest('')}`);


// ADVANCED-level-Task-6-----------------------------------------
console.log(`
ADVANCED-level-Task-6`);

const characterCodeConversion = (str) => {
  const total1 = str.split('').reduce((sum, letter) => sum + letter.charCodeAt(), '');
  const total2 = total1.split('').map((num) => (num === '7' ? '1' : num)).join('');
  // const total2 = total1.replace(/7/gi, '1');
  return total1 - total2
};

console.log(characterCodeConversion('ABCDF'));

// ADVANCED-level-Task-6-----------------------------------------
console.log(`
ADVANCED-level-Task-6`);

// + Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен 
// **(**, если этот символ появляется только один раз в исходной строке, или **)**,
// если этот символ встречается более одного раза в исходной строке. Игнорируйте
// использование заглавных букв при определении дубликата символа.
// ```javascript
//     "din" => "((("
//     "recede" => "()()()"
//     "Success" => ")())())"
//     "(( @" => "))(("
// ```

// const stringTransformation = (str) => {
// const replicas = str.replace(/(.)\1{1,}/gi, '*')
//   return replicas
// }
// console.log(stringTransformation('Success'));

const num = [4, 3, 3, 1, 15, 7, 4, 19, 19];

const countItems = {};


for (const item of num) {
  countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
}

const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
console.dir(result);
