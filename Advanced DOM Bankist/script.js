'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Opening Modal for each button

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
console.log(document.querySelectorAll('.section'));
console.log(document.getElementById('section--1'));
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByClassName('btn'));

//Inserting and Creating Elements

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
  'We use cookie for analytics and improvements! <button class="btn btn--close-cookie">Got it</button>';

// header.prepend(message);
header.append(message);

//Removing Cookie message
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

//Styling cookies message body
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';
//setProperty usage
document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Beautiful Logo';
logo.setAttribute('company', 'bankist');

//Data Attributes
console.log(logo.dataset.versionNumber);

//Classes method to remember
logo.classList.add('c', 'd');
logo.classList.remove('c', 'd'); // Multiple class name can be added
logo.classList.toggle('c', 'd');
logo.classList.contains('c');
*/

//Implementing Smooth Scrolling to sepcific section using old school method
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //Smooth Scrolling old style
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //Modern Style
  section1.scrollIntoView({ behavior: 'smooth' });
});
