const wrapper = document.querySelector('.wrapper');
const timer = document.querySelector('.timer');
const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');
const btnReset = document.querySelector('.reset');

function getName() {
  return JSON.parse(localStorage.getItem('num')) ?? 0;
};

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