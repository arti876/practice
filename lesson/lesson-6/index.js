// Task-1-----------------------------------------
console.log(`
Task-1`);

const colors = ['red', 'green', 'blue'];

console.log(colors.length);

// Task-2-----------------------------------------
console.log(`
Task-2`);

const animals = ['monkey', 'dog', 'cat'];

console.log(`Var1: `, animals[animals.length - 1]);
console.log(`Var2: `, animals.slice(-1));


// Task-3-----------------------------------------
console.log(`
Task-3`);

const elementRemovalVar1 = function (numbers) {
  numbers.length = 0;
  return numbers;
};

const elementRemovalVar2 = function (numbers) {
  numbers.splice(0);
  return numbers;
};

console.log(`Var1: `, elementRemovalVar1([5, 43, 63, 23, 90]));
console.log(`Var2: `, elementRemovalVar2([5, 43, 63, 23, 90]));

// Task-4-----------------------------------------
console.log(`
Task-4`);

const arrayModificationVar1 = function (students) {
  students.splice(-1, 1, `Borya`);
  students.splice(0, 1, `Andrey`);
  return students;
};

const arrayModificationVar2 = function (students) {
  students.pop();
  students.push(`Borya`);
  students.shift();
  students.unshift(`Andrey`);
  return students;
};

console.log(`Var1: `, arrayModificationVar1(['Polina', 'Dasha', 'Masha']));
console.log(`Var2: `, arrayModificationVar2(['Polina', 'Dasha', 'Masha']));


// Task-5-----------------------------------------
console.log(`
Task-5`);

const funFor = function (cats) {
  for (let i = 0; i < cats.length; i++) {
    console.log(`for: ${cats[i]}`);
  };
}

const funForOf = function (cats) {
  for (let cat of cats) {
    console.log(`for of: ${cat}`);
  };
}

funFor(['Gachito', 'Tom', 'Batman']);
funForOf(['Gachito', 'Tom', 'Batman']);


// Task-6-----------------------------------------
console.log(`
Task-6`);

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = evenNumbers.concat(oddNumbers);

console.log(allNumbers);
console.log(allNumbers.indexOf(8));


// Task-7-----------------------------------------
console.log(`
Task-7`);

const binary = [0, 0, 0, 0];

let strBinary = binary.join('1');

console.log(strBinary);


// ADVANCED-level-Task-1-----------------------------------------
console.log(`
ADVANCED-level-Task-1`);

const checkIsPalindrome = function (strToCheck) {
  for (let i = 0; i < (strToCheck.length / 2); i++) {
    if (strToCheck[i] !== strToCheck[strToCheck.length - i - 1]) {
      return `"${strToCheck}" not a palindrome`;
    }
  }
  return `"${strToCheck}" palindrome`;
}

console.log(checkIsPalindrome('ffzzzff'));


// ADVANCED-level-Task-2-----------------------------------------
console.log(`
ADVANCED-level-Task-2`);

const averageCalculation = function (matrix) {
  let sumValue = 0;
  let counter = 0;
  for (let subarrays of matrix) {
    for (let value of subarrays) {
      sumValue += value;
      counter++;
    }
  }
  return sumValue / counter;
}

console.log(averageCalculation([
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
]));


// ADVANCED-level-Task-3-----------------------------------------
console.log(`
ADVANCED-level-Task-3`);

const numberFiltering = function (mixedNumbers) {
  const positiveNumbers = [];
  const negativeNumbers = [];
  
  for (arr of mixedNumbers) {
    if (arr >= 0) {
      positiveNumbers.push(arr)
    } else if (arr < 0) {
      negativeNumbers.push(arr)
    }
  };
  return `arrPositiveNumbers [${positiveNumbers}]
arrNegativeNumbers [${negativeNumbers}]`;
};

console.log(numberFiltering([-14, 24, -89, 43, 0, -1, 412, 4]));


// ADVANCED-level-Task-4-----------------------------------------
console.log(`
ADVANCED-level-Task-4`);

const arrayСreation = function (randomNumberArray,extentArray) {
  for (let i = 0; i < 10; i++) {
    randomNumberArray.push(Math.floor(Math.random() * 10) + 1)
  }
  for (let i = 0; i < randomNumberArray.length; i++) {
    extentArray.push(randomNumberArray[i] ** 3);
  }
  return `randomNumberArray [${randomNumberArray}]
extentArray*3 [${extentArray}]`
}

console.log(arrayСreation([],[]));