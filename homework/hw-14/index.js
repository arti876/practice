const wrapper = document.querySelector('.wrapper');
const timer = document.querySelector('.timer');
const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');
const btnReset = document.querySelector('.reset');

function Timer(time) {
  this.getName = () => {
    return JSON.parse(localStorage.getItem('num')) ?? 0;
  };

  this.setName = (num) => {
    localStorage.setItem('num', JSON.stringify(num));
  };

  let methodSetIntervalTimer;
  let num = this.getName();
  timer.textContent = num;

  this.startTimer = (num) => {
    methodSetIntervalTimer = setInterval(() => {
      timer.textContent = num++;
      this.setName(num - 1);
    }, time);
  };

  this.start = function () {
    if (!methodSetIntervalTimer) {
      this.startTimer(num);
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
    this.setName(+timer.textContent);
  };
}

let newTimer = new Timer(300);

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