const wrapper = document.querySelector('.wrapper');
const timer = document.querySelector('.timer');
const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');
const btnReset = document.querySelector('.reset');

// -----------------------------------------------------------

// function Constructor(num) {
//   let x = this
//   this.num = num;

//   this.go = function() {

//       setInterval(function () {
//           x.num++;
//       }, 100);
//   };
// }

// -----------------------------------------------------------

// // получить
// function getName() {
//   return JSON.parse(localStorage.getItem('num')) ?? +0;
// };

// // записать
// function setName(num) {
//   localStorage.setItem('num', JSON.stringify(num));
// };

// let num = getName();
// let methodSetIntervalTimer;
// timer.textContent = num;

// const startTimer = (num) => {
//   methodSetIntervalTimer = setInterval(() => {
//     timer.textContent = num++
//     setName(num - 1);
//   }, 300);
// }

// wrapper.addEventListener('click', function (event) {
//   if (event.target.classList.contains('start')) {
//     if (!methodSetIntervalTimer) {
//       startTimer(getName());
//     };
//   };

//   if (event.target.classList.contains('pause')) {
//     if (methodSetIntervalTimer) {
//       clearInterval(methodSetIntervalTimer);
//       methodSetIntervalTimer = null;
//     };
//   };

//   if (event.target.classList.contains('reset')) {
//     clearInterval(methodSetIntervalTimer);
//     methodSetIntervalTimer = null;
//     timer.textContent = 0;
//     setName(+timer.textContent)
//   };
// });

// -----------------------------------------------------------

function Clock(num) {
  let methodSetIntervalTimer;

  function render() {
    timer.textContent = num++
    setName(num - 1);
  }

  this.start = function () {
    if (!methodSetIntervalTimer) {
      methodSetIntervalTimer = setInterval(render, 300);
    };
  };

  this.stop = function () {
    if (methodSetIntervalTimer) {
      clearInterval(methodSetIntervalTimer);
      methodSetIntervalTimer = null;
    };
  };

  this.reset = function () {
    clearInterval(methodSetIntervalTimer);
    methodSetIntervalTimer = null;
    // timer.textContent = 0;
    // setName(+timer.textContent)
  };
}

// получить
function getName() {
  return JSON.parse(localStorage.getItem('num')) ?? 0;
};

// записать
function setName(num) {
  localStorage.setItem('num', JSON.stringify(num));
};

// let num = getName();
// timer.textContent = num;

timer.textContent = getName();

let clock = new Clock(timer.textContent);

wrapper.addEventListener('click', function (event) {

  if (event.target.classList.contains('start')) {
    clock.start();
  };

  if (event.target.classList.contains('pause')) {
    clock.stop();
  };

  if (event.target.classList.contains('reset')) {
    clock.reset();
  };
});