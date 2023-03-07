'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//looping thorugh the three open modal buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
//Closing the modal
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
//Closing by cliking on overlay
overlay.addEventListener('click', closeModal);

//Adding functionality of pressing ESC key to close the modal
//-->Takes whole page and have to sepicify the key to function
//-> takes key up, key down, key press
//-->Keydown is used mostly since its functionality to press any key to work
//-->If writes document then it takes entire web page like (document.addEnevtlistener)

document.addEventListener('keydown', e => {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
