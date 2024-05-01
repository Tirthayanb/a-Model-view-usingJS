'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-btn');
const btnShow = document.querySelectorAll('.show-btn');
console.log(btnShow);

function toggleModal() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

btnShow.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

btnClose.addEventListener('click', toggleModal);
document.addEventListener(
  'keydown',
  event => event.key === 'Escape' && toggleModal()
);
