'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const obj = new Person('Morshalin', 1997);
const matilda = new Person('Matilda', 2017);
const obj2 = '';
// console.log(obj);
// console.log(obj instanceof Person);
console.log('only class and obj:');
console.log(Person);
console.log(obj);
Person.prototype.calAge = function () {
  console.log(2021 - this.birthYear);
};
//console.log(obj);
obj.calAge();
matilda.calAge();
console.log('with prototype:');
console.log(Person.prototype);
console.log(obj.__proto__);
console.log(Person.prototype === obj.__proto__);
console.log(Person.prototype.isPrototypeOf(obj2));

Person.prototype.species = 'Homo Sapiens';

console.log(obj.hasOwnProperty('firstName'));
console.log(obj.hasOwnProperty('species'));
