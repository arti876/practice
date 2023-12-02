// Tak-1

function array_diff(a, b) {
  return a.filter(value => !b.includes(value));
};

console.log(arrayDiff([1,2],[1]));
console.log(arrayDiff([1,2,2,2,3],[2]));


// Task-2

function createPhoneNumber(numbers) {
  let format = '(xxx) xxx-xxxx';

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// Task-3

function persistence(num) {
  let count = 0;
  let arr = num.toString().split('');
  while (arr.length > 1) {
    count++;
    arr = arr.reduce((a, b) => a * b).toString().split('');
  }
  return count;
};

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));