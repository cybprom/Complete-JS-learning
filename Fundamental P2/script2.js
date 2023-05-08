'use strict'

// FUNCTION
/*
function logger() {
    console.log('My name is promise');
}
// calling /running / invoking function

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

fruitProcessor(3, 2);
console.log(fruitProcessor(3, 2));

function fruitProcessor(strawberry, apple) {
    const juice = `Juice with ${strawberry} strawberries and ${apple} apples`;
    return juice;
}

const fruitJuice = fruitProcessor(5, 7);

console.log(fruitJuice);
*/

// FUNCTION DECLARATIONS VS EXPRESSIONS

// FUNCTION DECLARATION
// Function Declaration can be called before defining it
/*
function calcAge1 (birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
// console.log(age1);

// FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1990);
console.log(age2);
*/

// ARROW FUNCTIONS

// const age3 = (birthYear) => 2037 - birthYear;
// const agee = age3(1990);

// console.log(agee);

// const age3 = (birthYear, birthYear2) => ` 2037 is the current year, while ${birthYear} is my year of birth, ${birthYear2} is my second year of birth`
// const agee = age3(1990, 1999);

// console.log(agee);

// const yearsUntilRetirement = (birthYear) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1991));

/*
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'promise'));
console.log(yearsUntilRetirement(1980, 'joseph'));
*/

// FUNCTIONS CALLING OTHER FUNCTIONS
/*
const cutPieces = function (fruit) {
    return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangepieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangepieces} pieces of orange.`;
    return juice;
};

console.log(fruitProcessor(2, 3));
*/

/*
const calAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;  // the return statement exit the function immediately
        console.log(`${firstName} retires in ${retirement} years`); // it is not logged to the console because the Return statement has exited the function
    } else {
        return -1;
    }
    
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'promise'))

*/





// TWO DATA STRUCTURES IN JS ARE ARRAYS AND OBJECTS

// ARRAYS

// Instead of doing;
/*
const friend1 = 'Promise'
const friend2 = 'Ileri'
const friend3 = 'Joseph'

// We can do

const friends = ['Promise', 'Ileri', 'Jospeh'];

console.log(friends)

// Another way
const yrs = new Array(1991, 1984, 2000, 2023);

console.log(friends[0]);
console.log(friends[2]);

// Get length of an array
console.log(friends.length)

// To get the last element in the ARRAY
console.log(friends[friends.length - 1])

// Add/mutate element to the array
friends[2] = 'Jay'

console.log(friends)

// Arrays can hold different types
const promise = ['Promise', 'Akintunde', 2027 - 2000, 'student', friends];
console.log(promise);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear
}

const years = [1991, 1984, 2000, 2015, 2023];

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])

console.log(age1, age2), age3

const ages = [age1, age2, age3]

console.log(ages)

*/

// ARRAY OPERATIONS (METHODS)

/*
const friends = ['Promise', 'Ileri', 'Jospeh']

// Add element to the end of an array

// friends.push('Jay');
const newLength = friends.push('Jay');

console.log(friends)
console.log(newLength);

// Add element to the beginning of an array
friends.unshift('John');

console.log(friends);

// Methods to remove element from an array
friends.pop(); // remove last element of an array
const popped = friends.pop(); // can return/display the removed element
console.log(friends);
console.log(popped)

friends.shift(); // remove the first element
console.log(friends);

// Tells which position a certain element is in an array
console.log(friends.indexOf('Ileri'));

// includes

console.log(friends.includes('Ileri'));
// Includes can be used to write conditionals

if (friends.includes('Ileri')) {
    console.log('You have a friend called Ileri')
}
*/

// Introduction to Objects
/*
const promiseArray = [
    'Promise',
    'Akintunde',
    2027 - 2000,
    'student',
    ['Promise', 'Ileri', 'Ayomide']
];

// Obeject Literals Syntax

const promise = {
    firstName: 'Promise',
    lastName: 'Akintunde',
    age: 2027 - 2000,
    job: 'student',
    friends: ['Promise', 'Ileri', 'Ayomide']
};

*/



// DOT VS BRACKET NOTATION

// Get data from and Object
/*
const promise = {
  firstName: 'Promise',
  lastName: 'Akintunde',
  age: 2027 - 2000,
  job: 'student',
  friends: ['Promise', 'Ileri', 'Ayomide'],
}

console.log(promise.firstName);
console.log(promise['lastName']);

const nameKey = 'Name';
console.log(promise['first' + nameKey]);


// const interestedIn = prompt('What do you want to know about Promise? Choose between firstName, lastName, age, job and friends');

// if (promise[interestedIn]) {
//     console.log(promise[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

// How to add new properties to the object

promise.location = 'Nigeria';
promise['twitter'] = '@cybprom';

console.log(promise)

// Challenge
// "Promise has 3 friends, and this best friend is called ayomide"

// const output = `${promise['firstName']} has ${promise.friends.length} friends, and his best friend is called ${promise.friends[2]}`;

console.log(`${promise['firstName']} has ${promise.friends.length} friends, and his best friend is called ${promise.friends[2]}`)
*/



// OBJECT METHODS
/*
const promise = {
    firstName: 'Promise',
    lastName: 'Akintunde',
    birthYear:  2000,
    job: 'teacher',
    friends: ['Promise', 'Ileri', 'Ayomide'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    // CHALLENGE

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(promise.calcAge());
// console.log(promise['calcAge'](2000))

// console.log(promise.age)

// CHALLENGE
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(promise.getSummary())
*/




// ITERATION: THE FOR LOOP
/*
// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// FOR loop keeps running while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/



// LOOPING ARRAYS, BREAKING AND CONTINUING
// One of the most used application of for loop is to loop through arrays
/*
const promiseArray = [
  'Promise',
  'Akintunde',
  2027 - 2000,
  'student',
  ['Promise', 'Ileri', 'Ayomide'],
  true,
];


// console.log(promiseArray[0]);
// console.log(promiseArray[1]);
// ....
// console.log(promiseArray[4]);
// promiseArray does NOT exist

const types = [];

for (let i = 0; i < promiseArray.length; i++) {
    // Reading from promiseArray array
  console.log(promiseArray[i], typeof promiseArray[i]);

  // Filling types array
  // types[i] = typeof promiseArray[i];

  types.push(typeof promiseArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2023];
const ages = [];

for (let i = 0; i  < years.length; i++) {
    // ages.push(2037 - years[i]);
    ages[i] = 2037 - years[i];]'
        
[}
console.log(ages)

// Continue and Break 
console.log('----ONLY STRINGS---')
for (let i = 0; i < promiseArray.length; i++) {
    if (typeof promiseArray[i] !== 'string') continue;

  console.log(promiseArray[i], typeof promiseArray[i]);
}

console.log('----BREAK WITH NUMBERS---')
for (let i = 0; i < promiseArray.length; i++) {
    if (typeof promiseArray[i] === 'number') break;

  console.log(promiseArray[i], typeof promiseArray[i]);
}
*/




// LOOPING BACKWARDS AND LOOPS IN LOOPS
// LOOPING Backwards
/*
const promise = [
  'Promise',
  'Akintunde',
  2027 - 2000,
  'student',
  ['Promise', 'Ileri', 'Ayomide']
];


// In previous lecture we looped from 0, 1, ..... 4
// Now we loop backwards, we wan to start from 4, 3, .... 0

\\

for (let i = promise.length - 1; i >= 0; i--) {
    console.log(i, promise[i]);
}


// Loops in loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/


// THE WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// Implementing the above for Loop to WHILE loop


// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     // rep ++;
// }


// let dice = Math.trunc(Math.random() * 6) + 1;


// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end..');
// }

// Whenever you need a loop without a counter you can reach for WHILE Loop
// The WHILE Loop is used when you do not know how many iteration you'll have

console.log();