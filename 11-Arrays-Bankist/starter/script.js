'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function (movements, sorting = false) {
  containerMovements.innerHTML = '';
  const sortMov = sorting ? movements.slice().sort((a, b) => a - b) : movements;
  sortMov.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calDisplayBlance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} ₡`;
};

const calDisplaySumary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}₡`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}₡`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}₡`;
};

const createUsernames = function (accr) {
  accr.forEach(
    acc =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(arr => arr[0])
        .join(''))
  );
};
createUsernames(accounts);

const updateUi = acc => {
  //display movements ui
  displayMovements(acc.movements);
  //calculate balence
  calDisplayBlance(acc);
  //display Sumary
  calDisplaySumary(acc);
};

///////////////////////////////////////
// Event handlers
let curentAccount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  curentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (curentAccount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    //clear input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //set welcome message
    labelWelcome.textContent = `Welcome, ${curentAccount.owner.split(' ')[0]}`;
    //updATE UI
    updateUi(curentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiveAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    receiveAccount &&
    receiveAccount?.username !== curentAccount.username &&
    curentAccount.balance >= amount
  ) {
    //Doing the transfer
    curentAccount.movements.push(-amount);
    receiveAccount.movements.push(amount);
    //clear input field
    inputTransferAmount.value = inputTransferTo.value = '';
    //updATE UI
    updateUi(curentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && curentAccount.movements.some(mov => mov >= amount * 0.1)) {
    curentAccount.movements.push(amount);
    updateUi(curentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    curentAccount.username === inputCloseUsername.value &&
    curentAccount.pin == inputClosePin.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username == curentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
let sort = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(curentAccount.movements, !sort);
  sort = !sort;
});
///coding start

// const userName = function (user){
//   const shortName = user.toLowerCase().split(' ').map(name=>name[0]).join('');
//   return shortName;
// }

// console.log(userName('Steven Thomas Williams'));
//const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

/* const result = movements.filter(mov => mov < 0);

console.log(result);

const arr = [];
for (const iterator of movements) {
  if(iterator < 0){
    arr.push(iterator);
  }
} */

/* const r = movements.reduce((acc,cur,i,arr) => acc+cur ,0);
console.log(r); */

/* const max = movements.reduce((acc,cur)=>{
  if(acc < cur){
    acc = cur;
  }
  return acc;
},movements[0]); */

/* const max = movements.reduce((acc,cur)=>{
  if(acc > cur){
    return acc;
  }else {
    return cur;
  }
},movements[0]);

console.log(max); */
/* 
const calcAverageHumanAge = (arr) =>{
  let humanAge = arr.map((dogAge)=> dogAge <= 2?2 * dogAge:16 + dogAge * 4);
  humanAge.fil
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); */

//const uroToDolar = 1.1;

/* const totalDepositUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * uroToDolar)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUsd); */

/* const totalDepositUsd = movements
  .filter(mov => mov > 0)
  .map((mov, _, arr) => {
    console.log(arr);
    return mov * uroToDolar;
  })
  .reduce((acc, mov, _, arr) => {
    console.log(arr);
    acc + mov;
  }, 0); */
//console.log(totalDepositUsd);

/* const calcAverageHumanAge = ages => {
  const average = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  console.log(average);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]) */

//user flat function

const multipulArray = [[1, 2, 3], 4, 5, [6, 7, 8]];
console.log(multipulArray.flat()); //one step covert from nested array.

const multipulArray2 = [[1, [2, 3]], 4, 5, [6, [7, 8]]];
console.log(multipulArray2.flat(2)); //number of step covert from nested array.

const ovearBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(ovearBalance);

//user flatMap function (onely one step covert from nested array.)
const ovearBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(ovearBalance2);
