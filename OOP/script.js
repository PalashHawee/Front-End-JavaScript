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
