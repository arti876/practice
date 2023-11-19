// Task-1-----------------------------------------

const setNumber = Number(100);

if (setNumber >= 0) {

  const getSumTask1 = function (setNumber) {
    let sumNumbers = 0;
    for (let i = 0; i <= setNumber; i++) {
      sumNumbers += i;
    }
    return sumNumbers;
  }

  console.log(`
Task-1
Имя функции (getSumTask1)
Передано значение: ${setNumber}
Ответ: ${getSumTask1(setNumber)}`);
} else if (!setNumber) {
  console.log(`
Task-1
Ошибка! Повторите ввод данных`)
}


// Task-2-----------------------------------------

const someNum = Number(40);

if (someNum >= 0) {

  const getDividersTask2 = function (someNum) {
    let dividers = '';
    for (let i = 0; i <= someNum; i++) {
      if (someNum % i === 0) {
        dividers += `, ${i}`;
      }
    }
    return dividers.slice(1);
  }

  console.log(`
Task-2
Имя функции (getDividersTask2)
Передано значение: ${someNum}
Ответ: ${getDividersTask2(someNum)}`);
} else if (!someNum) {
  console.log(`
Task-2
Ошибка! Повторите ввод данных`)
}


// Task-3-----------------------------------------

const row = String('Текст для проверки работы функции');
const rowFrom = Number(1);
const rowBy = Number(18);

if (!row || !rowFrom || !rowBy || rowFrom < 0 || rowBy < 0) {
  console.log(`
Task-3
Ошибка! Повторите ввод данных`)
} else {

  const trimStringTask3 = function (row, rowFrom, rowBy) {
    return row.slice(rowFrom - 1, rowBy);
  }

  console.log(`
Task-3
Имя функции (trimStringTask3)
Передано значение: ${row}, ${rowFrom}, ${rowBy}
Ответ: ${trimStringTask3(row, rowFrom, rowBy)}`);
}


// Task-4-----------------------------------------

let num = Number(2021);

const getSumNumbersTask4 = function (num) {
  let resultSumNum = 0;
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    resultSumNum += +num[i];
  }
  return resultSumNum;
}

console.log(`
Task-4
Имя функции (getSumNumbersTask4)
Передано значение: ${num}
Ответ: ${getSumNumbersTask4(num)}`);


// Task-5-----------------------------------------

const a = Number(-1);
const b = Number(2);

if ((a <= 0 || a >= 0) && (b <= 0 || b >= 0)) {

  const getSumTask5 = function (a, b) {
    let resultSum = 0;
    for (a; a <= b; a++) {
      resultSum += a;
    }
    return resultSum;
  }

  console.log(`
Task-5
Имя функции (getSumTask5)
Передано значение: ${a}, ${b}
Ответ: ${getSumTask5(a, b)}`);
} else {
  console.log(`
Task-5
Ошибка! Повторите ввод данных`)
}


// Task-6-----------------------------------------

const booValue = Boolean(true);

const funFoo = function () {
  console.log(`
Task-6
Имя функции (foobooTask6)
Передано значение: ${booValue}
Ответ: function funFoo()`);
}

const funBoo = function () {
  console.log(`
Task-6
Имя функции (foobooTask6)
Передано значение: ${booValue}
Ответ: function funBoo()`);
}

const foobooTask6 = function (booValue, funFoo, funBoo) {
  if (booValue === true) {
    funFoo()
  } else {
    funBoo()
  }
}

foobooTask6(booValue, funFoo, funBoo)


// ADVANCED-level-Task-1-----------------------------------------

const d = 1;
const e = 1;
const f = 2;

const buildTriangle = function (d, e, f) {
  if ((e + f > d) && (d + f > e) && (d + e > f)) {
    return true
  } else {
    return false;
  }
}

console.log(`
ADVANCED-level-Task-1
Имя функции (buildTriangle)
Сторона D = ${d}, Сторона E = ${e}, Сторона F = ${f}
Ответ: ${buildTriangle(d, e, f)}`);

// ADVANCED-level-Task-2-----------------------------------------

const n = 2;
const m = 3;

const numChocBreaks = function (n, m) {
  if (!n || !m || n < 0 || m < 0) {
    return 0;
  } else {
    return n * m - 1;
  }
}

console.log(`
ADVANCED-level-Task-2
Имя функции (numChocBreaks)
Передано значение: ${n}x${m}
Ответ: ${numChocBreaks(n, m)}`);


// ADVANCED-level-Task-3-----------------------------------------

const bankBalance = 1234;
const pricePhone = 70;
const priceAccessory = 5;
const taxNDS = 0.2;

let amount = 0;

const calcTaxNDS = function (amount) {
  return amount * taxNDS;
}

const priceFormat = function (amount) {
  return "$" + amount.toFixed(2);
}

let iterationNum = 0;

for (; amount < bankBalance;) {
  amount += pricePhone + priceAccessory;
  iterationNum++;
}

amount += calcTaxNDS(amount);

if (amount > bankBalance) {
  for (; amount > bankBalance;) {
    amount -= pricePhone + priceAccessory;
    iterationNum--;
  }

  console.log(`
ADVANCED-level-Task-3
Стоимость одного телефона (без учата НДС): $${pricePhone}
Стоимость зарядного устройста к телефону (без учата НДС): $${priceAccessory}
Согласно вашему счету в банке
вы можете купить ${iterationNum} комплектов (Телефон + Зарядное)
Сумма к оплате (с учетом НДС ${taxNDS * 100}%): ${priceFormat(amount)}`);
}