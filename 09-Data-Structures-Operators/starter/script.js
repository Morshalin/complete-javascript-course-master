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
								Lectture: 113 // Coding Challenge #3
===========================================================================================*/
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane.length);

/*=========================================================================================
								Lectture: 113 // Coding Challenge #3
===========================================================================================*/
/* const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
//#Problem 1
const arr = [...gameEvents.values()];
const uniqueArray = new Set(arr);
//console.log(uniqueArray);
//#Problem 2
//console.log(gameEvents.delete(64));
//#Problem 3
const length = gameEvents.size;
console.log(`"An event happened, on 
average, every ${90 / length} minutes"`); 
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log([...gameEvents.keys()]);

//#problem 4
for (const [t, e] of gameEvents) {
  const half = t < 45 ? 'FIRST' : 'Seconds';
  //console.log(`[${half} HALF]${t}: ${e}`);
} */
///////////////////////////////////////
// Sets
/* const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza')); 
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);
// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size); */

/*=========================================================================================
								Lectture: 113 // Coding Challenge #2
===========================================================================================*/
/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}; */

//#problem 1
/* const scored = game.scored.entries();
for (const [i, v] of scored) {
  console.log(`"Goal ${i + 1}: ${v}"`);
}

//#Problem 2
const odds = Object.values(game.odds);
let sum = 0;
for (const item of odds) {
  sum += item;
}
console.log(`Avarage Valu : ${sum / odds.length}`);

//#problem 3
for (const [item, val] of Object.entries(game.odds)) {
  const teamStr = item === 'x' ? 'Draw' : game[item];
  console.log(`Odd of ${teamStr}: ${val}`);
} */

//#Problem 4

// const scorers = {};
// for (const [v, p] of Object.entries(game.scored)) {
//   scorers += `${p}:${v + 1}`;
// }
// console.log(scorers);

/*=========================================================================================
								Lectture: 113 // Looping Objects: Object Keys, Values, and Entries
===========================================================================================*/
/* const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `Open Restaruent in week ${properties.length}`;
for (const day of properties) {
  openStr += `, ${day}`;
}
console.log(openStr, '.');
const value = Object.values(openingHours);
console.log(value);

const entries = Object.entries(openingHours);
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
console.log(entries); */

/*=========================================================================================
								Lectture: 110 // Coding Challenge
===========================================================================================*/
/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//for (const item of menu) console.log(item);
for (const items of menu.entries()) console.log(items);
for (const [i, item] of menu.entries()) {
  console.log(`${i + 1} : ${item}`);
}

console.log(...menu.entries()); */

/*=========================================================================================
								Lectture: 109 Rest Pattern and Parameters
===========================================================================================*/
/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//#problem 1
const [players1, players2] = game.players;

//#problem 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);

//#problem 3
const allPlayers = [...players1, ...players2];

//# Problem 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//problem 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1);
//#problem 6

const printGoals = (...number) => {
  console.log(number);
  console.log(`${number.length} goals is scored`);
};
printGoals(...allPlayers);
//#proble 7
team1 > team2 && console.log('Team One is win');
team1 < team2 && console.log('Team Twqo is win'); */
/*=========================================================================================
								Lectture: 106 Rest Pattern and Parameters
===========================================================================================*/
// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
/* const arr = [1, 2, ...[3, 4]];
console.log(arr);

// Rest, because on Left side of =

const [a, b, ...onthers] = [1, 2, 3, 4];
console.log(a, b, onthers);

const [Pizza, , Risotto, ...othersFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, othersFood);

// Objects
const { sat, ...weekdays } = { ...restaurant.openingHours };
console.log(sat, weekdays);

// 2) Functions

const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(2, 3, 4);
add(...[2, 3, 4, 5]);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms'); */

/* ========================================================================================
													Lectture: 104 // The Spread Operator (...)
=========================================================================================== */
/* const arr = [7, 8, 9];
//const badNewArray = [1,2,3,4,5,6,arr[0],arr[1],arr[2]]
const badNewArray = [1, 2, 3, 4, 5, 6, ...arr];
console.log(badNewArray);

const { mainMenu, starterMenu } = restaurant;
const newMenu = [...mainMenu, 'Cocacola', '7Up'];
console.log(newMenu);

//copy main menu
const newMenuCopy = [...mainMenu];

//join two array
const menu = [...starterMenu, ...mainMenu];
// const menu = [...restaurant.starterMenu,...mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Morshalin';
console.log([...str]);
const ingredient = [
  // prompt('Let\'s make pasta! Ingredient 1?'),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

//restaurant.orderPasta(ingredient[0],ingredient[1],ingredient[2]);
restaurant.orderPasta(...ingredient);

const obj = { ...restaurant, Bari: 'Dhaka' };
const hargeBari = restaurant.name;
obj.name = 'rajshahi';
console.log(hargeBari, obj.name); */

/* ========================================================================================
													Lectture: 104 // Destructuring Objects
=========================================================================================== */
/* restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});


const {name,test='Morshalin',openingHours,categories} = restaurant;
console.log(categories,test);

const {name : restaurantName, categories : allCategory} = restaurant;
//console.log(restaurantName,allCategory);

// Default values

const {menu = [], starterMenu:starters=[]} = restaurant;
//console.log(menu,starters);

// Mutating variables
let a = 34;
let b = 999;
const obj = {a:23, b:7, c:22};
({a,b} = obj);
//console.log(a,b);

const {
  fri:{open:o=100,close:c=200}
} = openingHours;
//console.log(o,c); */

/* ========================================================================================
													Lectture: 103 (Destructuring Arrays)
=========================================================================================== */
/* const arr = [2,3,4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(restaurant.categories[0], restaurant.categories[2]);

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); 

[main , secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [p,q] = restaurant.order(0,2);
console.log(p,q);

// Nested destructuring // Default values
const [j=1, k,[i,o],t=1] = [3,4,[5,6]]
console.log(j,k,i,o,t); */
