'use strict';

window.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.card__status-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('play');
      if (button.classList.contains('play')) {
        button.querySelector('span').textContent = 'Запущено';
      } else {
        button.querySelector('span').textContent = 'Остановлено';
      }
    });
  });
});