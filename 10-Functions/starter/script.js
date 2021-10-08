'use strict';
//#Default Parameters 127
/* const bookings = [];
const createBooking = function (flightNum, numPansger, price) {
  const booking = {
    flightNum,
    numPansger,
    price,
  };
  bookings.push(booking);
  console.log(booking);
  console.log(bookings);
};

createBooking('LH123');

const greet = greeting => name => console.log(`${greeting}, ${name}`);

const grettingHey = greet('Hey');
grettingHey('Jonas');
grettingHey('Morshalin');

greet('Hey')('Rani'); */

const secureBooking = function () {
  console.log('Count Start');
  var passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} Passenger`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
