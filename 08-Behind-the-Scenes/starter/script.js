'use strict';

/*  Hoisting (Lecture : 095)
Hoisting: This makes some types of variables accessible/usable in the code before they are actually declared. “Variables lifted to the top of their scope”.(উত্তোলন: এটি আসলে ঘোষিত হওয়ার আগে কোডে কিছু ধরণের ভেরিয়েবল অ্যাক্সেসযোগ্য/ব্যবহারযোগ্য করে তোলে। "ভেরিয়েবলগুলি তাদের সুযোগের শীর্ষে নিয়ে গেছে")
*/
/* console.log(me);
console.log(job);
console.log(year); */

/* var me = 'Morshalin'; //Hoisting
let job = 'Developer';
const year = 1997;
*/
/* console.log(addDec(3, 4)); //Hoisting
console.log(addExp(3, 4));
console.log(addArow(3, 4));

//Hoisting
function addDec(a, b) {
  return a + b;
}
//Not a Hoisting or TEMPORAL DEAD ZONE(TDZ)
var addExp = function () {
  return a + b;
}; */
//Not a Hoisting or TEMPORAL DEAD ZONE(TDZ)
/* var addArow = () => {
  return a + b;
}; */

/* const a = 1;
const b = 2;
const c = 3;

console.log(a === 1 && b === 2 && c === 3); */

const morshalin = {
  year: 1997,
  caleAge: function () {
    return 2021 - this.year;
  },
};

const zhora = {
  year: 2002,
};

console.log(morshalin);
console.log(morshalin.caleAge());

zhora.caleAge = morshalin.caleAge;
console.log(zhora);
console.log(zhora.caleAge());
