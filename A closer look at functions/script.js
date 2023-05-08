'use strict';

// DEFAULT PARAMETERS
/*
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
    console.log(numPassengers);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);

// How to skip a default parameter
createBooking('LH123', undefined, 1000);
*/

/*
const flight = 'LH234';
const promise = {
    name: 'Ilerioluwa Akintunde',
    passport: 23739479284
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'MR.' + passenger.name;

    if (passenger.passport === 23739479284) {
        alert('Check in');
    } else {
        alert('Wrong passport!');
    }
};

// checkIn(flight, promise);
// console.log(flight);
// console.log(promise);

const newPassport = function (person) {
    person.passport = Math.random() * 1000000000000000
};

newPassport(promise);
checkIn(flight, promise);
*/


/////////////////////////////
//  FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
/*
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transfomer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by : ${fn.name}`);
};
transfomer('Javascript is the best!', upperFirstWord);
transfomer('Javascript is the best!', oneWord);

// JS uses callbacks all the time

const high5 = function() {
    console.log('👋');
};
document.body.addEventListener('click', high5);
['Promise', 'Layo', 'Promise'].forEach(high5);
*/



/////////////////
// Functions returning functions

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// };

// const greeterHey = greet('Hey');
// greeterHey('Promise');
// greeterHey('Steven');

// greet('Hello')('Promise');

// Challenge
/*
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`); 

const greeterHey = greet('Hi');
greeterHey('Promise');
*/



////////////////
// The CALL and APPLY methods

/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
};

lufthansa.book(239, 'Ilerioluwa Akintunde');
lufthansa.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'Ew',
    bookings: []
};


const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');


// Call Method
book.call(eurowings, 23, 'Sarah Williams'); // What you want the this keyword to point to.
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
};

book.call(swiss, 583, 'Mary Cooper')
console.log(swiss);

//////////////////
// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
//console.log(swiss);

// alternative instead of apply
book.call(swiss, ...flightData);
*/


////////////////////////
// The BIND Method

// book.call(eurowings, 23, 'Sarah Williams');
/*
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);


bookEW(23, 'Steven Williams');

// Preset value with BIND

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Ilerioluwa Akintunde');
bookEW23('Martha Cooper');

// With Event Listeners

lufthansa.planes = 300;
// console.log(lufthansa);
lufthansa.buyPlane = function () {
    console.log(this);


    this.planes++
    console.log(this.planes);
};
// lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value * 0.23; 
console.log(addVAT(23));


// Challenge: Rewrite the above using function returning functons

const addVATT = function (rate) {
    return function (value) {
        return value + value * rate;
    }
};


addVATT(0.23)(23);
const vatt = addVATT(0.23);
vatt(23);
*/


///////////////////////////
/*
// IIFE: IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

//IIFE
(function() {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate);

// Also works for an arrow function
(() => console.log('This will ALSO never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

///////////////////
// CLOSURES
/*
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

//////////////// 
// More CLOSURE
/*
// EXAMPLE 1
let f;

const g = function() {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
}

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(() => {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3); 
*/