/* 'use strict';

// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = false;
//if (hasDriversLicense) console.log('I can drive :D');

//const private = 34;
//console.log('3'+'3');

const persion = {
    'fastName':'Morshalin',
    'friends':['asif','karim','shamim','shaddam'],
    calAge:function(){
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    getSumary:()=>{
        console.log(hasDriversLicense);
        return `${this.fastName} is a ${this.calAge}-years old. He has ${hasDriversLicense?'a':'no'} divers licens.`;
    }
}

/* console.log(`${persion.fastName} has ${persion.friends.length} friends and his best friend is ${persion.friends[persion.friends.indexOf('shamim')]} .`); */

//persion.birthYear = 1997;
//persion['birthYear'] = 1997;

//console.log(persion);
//console.log(persion.getSumary());*/

/* const mark = {
    'fullname':'Mark Miller',
    'mass':78,
    'height':1.69,
    calcBMI:function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const John = {
    'fullname': 'John Smith',
    'mass': 92,
    'height': 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
John.calcBMI();


if (mark.bmi > John.bmi){
    console.log(`${mark.fullname}'s BMI ${mark.bmi} is height than johs ${Number(mark.bmi - John.bmi)} `);
}else{
    console.log(`${John.fullname}'s BMI ${John.bmi} is height than johs ${Number(John.bmi - mark.bmi)} `);
} */

/* const detalis = ['morshalin',30];
console.log(typeof(detalis)); */
//return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) =>{
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + calcTip(bills[i]));
}


const calcAverage = (totals)=>{
    let sum = 0;
    for (let j = 0; j < totals.length; j++) {
        sum += totals[j]
    }
    return sum;
}
console.log('total amounts: ',calcAverage(totals));
console.log('total Tipe : ',calcAverage(tips)); */
"use strict";

const private = 534;
