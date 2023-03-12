'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  fname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // order: function (catIndex, mainIndex) {
  //   return [this.categories[catIndex], this.starterMenu[mainIndex]];
  // },
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(
  //     `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
  //   );
  // },
};
// const [first, second] = restaurant.starterMenu;
// console.log(first, second);

// const [third, fourth] = restaurant.order(2, 3);
// console.log(third, fourth);

//Obejct destructuring

// const { fname, categories, openingHours } = restaurant;
// console.log(fname, categories, openingHours);

const spreadArr = [...restaurant.mainMenu, 'Palash'];
// console.log(spreadArr);

const ingredients = [
  // prompt("let's make pasta! ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
//calling function
// restaurant.orderPasta(...ingredients);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

// Map ds
const questions = new Map([
  ['question', 'What is the best programming lanaguage of the world?'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [(true, 'Correct 🎉')],
  [false, 'Try again'],
]);
console.log(questions);

console.log(questions.get('question'));
for (const [key, value] of questions) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);

//Checking middle seat in Plane using string method
const checkMiddleSeat = seat => {
  //B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat😒');
  } else {
    console.log('You are lucky');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('12C');

//Fix capitalization in name
const passenger = 'pAlasH';
const toLower = passenger.toLowerCase();
const passengerCorrect = toLower[0].toUpperCase() + toLower.slice(1);
console.log(passengerCorrect);

const annoucenment = 'All the passengers board door 23. Boarding door 23!';
// console.log(annoucenment.replaceAll('door', 'gate'));

//Split and Join and Slice together
const capitalize = name => {
  //Splitting for iteration
  const names = name.split(' ');
  const upperCase = [];
  for (const i of names) {
    // upperCase.push(i[0].toUpperCase() + i.slice(1));
    upperCase.push(i.replace(i[0], i[0].toUpperCase()));
  }
  console.log(upperCase.join(' '));
};

capitalize('palash hawee is from bangladesh');
capitalize('sangma bapon');
