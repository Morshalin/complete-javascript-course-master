'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[1]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (m, s) {
    return [this.categories[m], this.categories[s]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mushrooms, ...othersIngredients) {
    console.log(mushrooms, othersIngredients);
  },
  openingHours,
};
/*=========================================================================================
								Lectture: 104
===========================================================================================*/
// const obj = { name: 'morshalin', age: 20, designation: 'programmer' };
// const { name, age, designation } = obj;

/* restaurant.orderDelivery({
  starterIndex: 1,
  mainIndex: 0,
  time: '20:00',
  address: 'Bholohat',
});

restaurant.orderDelivery({
  address: 'Pachtikory',
}); */

/* const { name, location = 'hello', categories } = restaurant;
console.log(location); */

// Mutating variables
const arr = [1, 2, 3];
const newArr = [arr.slice(0, -1), 4, 5];
console.log(newArr);
/*=========================================================================================
								Lectture: 103 Destructuring Arrays
===========================================================================================*/
/* const arr = [1, 3, 5];
const [x, , z] = arr;
let [main, , secondary] = restaurant.categories;

// Switching variables
let temp = '';
temp = main;
main = secondary;
secondary = temp;

// Receive 2 return values from a function
const [first, second] = restaurant.order(0, 2);

console.log(first);
console.log(second);

// Nested destructuring
const [a, b, [c, d]] = [1, 2, [3, 4]];

// Default values
const [a = 10, b = 15, [c, [d, , e]]] = [1, 2, [3, [5, 2, 5]]];

console.log(e); */
