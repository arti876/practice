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
//   return JSON.parse(localStorage.getItem('num')) ?? 0;
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
//     timer.textContent = num++;
//     setName(num - 1);
//   }, 300);
// };

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

// получить
function getName() {
  return JSON.parse(localStorage.getItem('num')) ?? 0;
};

// записать
function setName(num) {
  localStorage.setItem('num', JSON.stringify(num));
};

function Timer(num) {
  let methodSetIntervalTimer;

  const startTimer = (num) => {
    methodSetIntervalTimer = setInterval(() => {
      timer.textContent = num++;
      setName(num - 1);
    }, 1000);
  };

  this.start = function () {
    if (!methodSetIntervalTimer) {
      startTimer(getName());
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
    timer.textContent = 0;
    setName(+timer.textContent);
  };
}

let num = getName();
timer.textContent = num;

let newTimer = new Timer(timer.textContent);

wrapper.addEventListener('click', function (event) {

  if (event.target.classList.contains('start')) {
    newTimer.start();
  };

  if (event.target.classList.contains('pause')) {
    newTimer.stop();
  };

  if (event.target.classList.contains('reset')) {
    newTimer.reset();
  };
});