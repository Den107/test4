'use strict';

window.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.card__status-button');
  const range = document.querySelector('.card__status-range-active');
  const proc = document.querySelector('[data-proc]');
  const span = button.querySelector('span');

  button.addEventListener('click', () => {
    button.classList.toggle('play');
    if (button.classList.contains('play')) {
      span.textContent = 'Запущено';
    } else {
      span.textContent = 'Остановлено';
    }

    if (window.getComputedStyle(range).display == 'none') {
      range.style.display = 'block';
    } else {
      range.style.display = 'none';
    }

    if (button.classList.contains('play')) {
      proc.textContent = '49%';
    } else {
      proc.textContent = '0.0%';
    }
  });

});