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

//Random color rgba(255,255,255)
// const randomInt = (min, max) => {
//   Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () => {
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };

// document.querySelector('.nav__link').addEventListener('click', e => {
//   this.style.backgroundColor = randomColor();

// });

// const navLinks = document.querySelector('.nav__links');

// const navLinksFunc = function (e) {
//   navLinks.style.backgroundColor = randomColor();
// };
// navLinks.addEventListener('click', navLinksFunc);

// document.querySelector('.nav').addEventListener('click', e => {});

//Page Navigation
// document.querySelectorAll('.nav__link').forEach(curEl => {
//   curEl.addEventListener('click', e => {
//     e.preventDefault();
//     const id = curEl.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Page Delegation Navigation to a sepcific section onclicking the nav links
// 1. Add Event Listener to common parent element
// 2. Determine what element originated the element

document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  //Checking the target element
  // console.log(e.target);

  //Checking the targeted Matching
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//DOM Traversing
//Going downwards : Child
const h1 = document.querySelector('h1');
h1.querySelectorAll('.highlight');
h1.firstElementChild.style.color = 'red';
h1.lastElementChild.style.color = 'orangered';

//Going up: Parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// If needs the parent only to attach the closest element
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

//Going Sideways: Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
//Working with all the siblings
[...h1.parentElement.children].forEach(cur => {
  if (cur !== h1) {
    cur.style.background = 'orangered';
  }
});

//Tabs Component (Button)
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//using delegation method (parentNode clossest)
tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard Clause for preventing click
  //outside the parent class
  if (!clicked) return;

  //Removing Active class from tabs
  tabs.forEach(i => i.classList.remove('operations__tab--active'));

  //Adding active class again for clicking active show
  clicked.classList.add('operations__tab--active');

  //Removing active conetent
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade Animation
const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky Navigation using:
const header = document.querySelector('.header');

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = entries => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
