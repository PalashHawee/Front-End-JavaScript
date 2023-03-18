'use strict';

//Remember 4 steps:
//1. New {} is created
//2. Function is called, this={}
//3. {} linked to prototype
//4. Function automatically returns {}
//Constructor function
const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

//Instances of Person
// const palash = new Person('Paul', 1992);
// console.log(palash);

// //Protypes // it inherits properties from the object
// Person.prototype.calcage = function () {
//   console.log(2037 - this.birthYear);
// };
// palash.calcage();

//Adding properties to object
// Person.prototype.species = 'Homo Sapiens';
// console.log(palash.species);

// console.log(palash.__proto__.__proto__);
// console.log(palash.__proto__.__proto__.__proto__); //returns null

// const arr = [4, 4, 4, 7, 8, 9, 1, 2, 2, 3, 3, 5];
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

//Implementing Constructor function and inheritance

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//Implementing speed function
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

//Implementing brake method
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('bmw', 120);
// const marcedes = new Car('Marcedes', 95);
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

//Class decalrtion
// class PersonCl {
//   constructor(firstName, birthYear) {
//     (this.firstName = firstName), (this.birthYear = birthYear);
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hello ${this.firstName}`);
//   }
// }

// const snagma = new PersonCl('Bapon', 1992);
// console.log(snagma);
// snagma.calcAge();

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hello ${this.firstName}`);
// // };
// snagma.greet();

//Getters and setters for object
const account = {
  owner: 'Palash',
  movements: [200, 700, 100, 500],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
