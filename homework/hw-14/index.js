const wrapper = document.querySelector('.wrapper');
const timer = document.querySelector('.timer');
const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');
const btnReset = document.querySelector('.reset');

let num = 1;
let abc;

const startTimer = () => {
  abc = setInterval(() => {
    timer.textContent = num++
  }, 1000);
}

wrapper.addEventListener('click', function (event) {
  if (event.target.classList.contains('start')) {
    startTimer()
  };

  if (event.target.classList.contains('pause')) {
    clearInterval(abc)
  };

  if (event.target.classList.contains('reset')) {
    clearInterval(abc)
    timer.textContent = 0;
  };
});

