  // делегирование собитий '#root' по 'input'
  const eventOnInput = root.addEventListener('input', function (event) {
    // поиск карточек
    if (event.target.classList.contains('header__input-search')) {
      const todoTextCardAll = document.querySelectorAll('.card__todo-text');
      for (let i = 0; i < todoTextCardAll.length; i++) {
        if (todoTextCardAll[i].innerText.toLowerCase().includes(document.querySelector('.header__input-search').value.toLowerCase())) {
          document.querySelectorAll('.card__item')[i].classList.remove('hidden');
        } else {
          document.querySelectorAll('.card__item')[i].classList.add('hidden');
        };
      };
    };
  });

  export {
    eventOnInput
  }