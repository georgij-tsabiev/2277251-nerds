/* Модальное окно */

const modal = document.querySelector('.modal');
const buttons = Array.from(document.querySelectorAll('.contacts__button'));
const closeBtn = document.querySelector('.modal__close-button');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});
