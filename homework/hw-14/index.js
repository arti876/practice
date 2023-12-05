const wrapper = document.querySelector('.wrapper');
const timer = document.querySelector('.timer');
const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');
const btnReset = document.querySelector('.reset');

// -----------------------------------------------------------

// function Constructor(num) {
  // let x = this
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
  return JSON.parse(localStorage.getItem('num')) ?? [];
};

// записать
function setName(num) {
  localStorage.setItem('num', JSON.stringify(num));
};

// записать
// setName(123)

// получить
// timer.textContent = getName()


let num = getName();
let abc;
timer.textContent = 0 + num;

const startTimer = (num) => {
  abc = setInterval(() => {
    timer.textContent = num++
    setName(num - 1);
  }, 300);
}

wrapper.addEventListener('click', function (event) {
  if (event.target.classList.contains('start')) {
    if (!abc) {
      startTimer(getName());
    };
  };

  if (event.target.classList.contains('pause')) {
    if (abc) {
      clearInterval(abc);
      abc = null;
    };
  };

  if (event.target.classList.contains('reset')) {
    clearInterval(abc);
    abc = null;
    timer.textContent = 0;
    setName([])
  };
});

// -----------------------------------------------------------