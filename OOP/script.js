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
const palash = new Person('Paul', 1992);
console.log(palash);

//Protypes // it inherits properties from the object
Person.prototype.calcage = function () {
  console.log(2037 - this.birthYear);
};
palash.calcage();

//Adding properties to object
Person.prototype.species = 'Homo Sapiens';
console.log(palash.species);
