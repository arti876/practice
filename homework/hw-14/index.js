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

// получить
function getName() {
  return JSON.parse(localStorage.getItem('num')) ?? +0;
};

// записать
function setName(num) {
  localStorage.setItem('num', JSON.stringify(num));
};

let num = getName();
let methodSetIntervalTimer;
timer.textContent = num;

const startTimer = (num) => {
  methodSetIntervalTimer = setInterval(() => {
    timer.textContent = num++
    setName(num - 1);
  }, 300);
}

wrapper.addEventListener('click', function (event) {
  if (event.target.classList.contains('start')) {
    if (!methodSetIntervalTimer) {
      startTimer(getName());
    };
  };

  if (event.target.classList.contains('pause')) {
    if (methodSetIntervalTimer) {
      clearInterval(methodSetIntervalTimer);
      methodSetIntervalTimer = null;
    };
  };

  if (event.target.classList.contains('reset')) {
    clearInterval(methodSetIntervalTimer);
    methodSetIntervalTimer = null;
    timer.textContent = 0;
    setName(+timer.textContent)
  };
});

// -----------------------------------------------------------

//   // получить
//   function getName() {
//     return JSON.parse(localStorage.getItem('num')) ?? +0;
//   };

//   // записать
//   function setName(num) {
//     localStorage.setItem('num', JSON.stringify(num));
//   };

//   let num = getName();

// function Timer(fn, t) {
//   // let methodSetIntervalTimer;
//   timer.textContent = num;
//   var timerObj = setInterval(fn, t);

//   this.stop = function () {
//     if (timerObj) {
//       clearInterval(timerObj);
//       timerObj = null;
//     };
//     return this;
//   }

//   this.start = function () {
//     if (!timerObj) {
//       timerObj = setInterval(startTimer(getName()), 300);
//     }
//     return this;
//   }

//   this.reset = function () {
//         clearInterval(timerObj);
//         timerObj = null;
//         timer.textContent = 0;
//         setName(+timer.textContent)
//     return this;
//   }
// }

// function startTimer(num) {
//   timer.textContent = num++
//   setName(num - 1);
// }


// var timer1 = new Timer(startTimer(num), 300);

// wrapper.addEventListener('click', function (event) {
//   if (event.target.classList.contains('start')) {
//     timer1.start();
//     console.log(timer1.start())
//   };

//   if (event.target.classList.contains('pause')) {
//     timer1.stop();
//   };

//   if (event.target.classList.contains('reset')) {
//     timer1.reset()
//   };
// });