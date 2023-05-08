/*
let js = "amazing";
console.log(40 + 8 + 23 -10);

let firstName = "Promise";

console.log(firstName);
*/

/*
// Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'promise');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

// // LET CONST VAR
// let age = 30;
// age = 31;  // mutate or reassigning

// const birthYear = 1991;
// birthYear = 1992;  // ERROR

// const job; //error

// Operators

// // Math Operators
// const now = 2037;
// const agePromise = now - 2002;
// const ageSarah = now - 2018;
// console.log(agePromise, ageSarah);

// console.log(agePromise * 2, agePromise / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3   = 2 * 2 * 2

// //concatination
// const firstName = 'Promise';
// const lastName = 'cybprom';
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 + 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// // Comparison operators
// console.log(agePromise > ageSarah); // >, <, >=, <=

// STRINGS AND TEMPLATE LITERALS

// const firstName = 'Promise';
// const job = 'programmer';
// const birthYear = 2002;
// const year = 2030;

// const promise = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(promise);

// // Template Literals
// const promiseNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(promiseNew);

// console.log(`String
// multiple
// lines`);

// If / else statements

// const age = 15;

// if(age >= 18) {
//     console.log('Sarah can start start driving license 🚗');
// }
// else {
//     const yearsLeft = 18 - age;
//     console.log(` Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;

// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// Type Conversion and Coercion
// TYPE CONVERSION

/*
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

// NaN
console.log(Number('Promise'));

console.log(String(23));

// TYPE COERCION
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // converts it to string '11'
n = n - 1; // '11' - 1 = 10
console.log(n);
*/

// 5 falsy values: 0, '', undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Promise'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");   
} else {
    console.log('You should get a job');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

// Equality Operator == vs ===

/*
// const age = 18;
const age = '18';
if (age === 18) { // === 'Strict Equality Operator'
    console.log('You just became an adult (strict)');
}

if (age == 18) { // == 'Loose Equality Operator'
    console.log('You just became an adult (loose)');
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if(favourite !== 23) console.log('Why not 23?');
*/

// Boolean Logic - AND, OR & NOT

// and -- &&
// or -- ||
// not -- !

// SWITCH STATEMENT

/* const day = 'monday';

switch (day) {
  case 'monday':
    console.log('Plan course struture')
    console.log('Go to coding meetup')
    break;

  case 'tuesday':
    console.log('Prepare theory videos')
    break;

  case 'wednesday':
  case 'thursday':
    console.log('write code examples')
    break;

  case 'friday':
    console.log('Record Videos')
    break;

  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend')
    break;

  default:
    console.log('Not a valid day!')  
}

if (day === 'monday') {
    console.log('Plan course struture');
    console.log('Go to coding meetup')
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples')
} else if (day === 'friday') {
    console.log('Record Videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}




// let instrument = 'piano';

// switch (instrument) {
//   case 'trumpet':
//     alert('i can play trumpet')
//     break

//   case 'drums':
//     alert('i can play drums')
//     break

//   case 'piano':
//     alert('i can play a piano')
//     break
//   default:
//     alert("I can't play any instrument")
//     break
// }

*/


// STATEMENTS AND EXPRESSIONS


// THE CONDITIONAL (TENARY) OPERATOR

const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

