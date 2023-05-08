 'use strict';

// // Scoping practice

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge () {
//         let output = `${firstName} you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             //  Creating NEW variable with same name as outer scope's variable
//             const firstName = 'Steven';

//             //   Reassigning  outer scope's variable 
//             output = 'NEW OUTPUT!';


//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add (a, b) {
//                 return a + b;
//             }


//         }
//         // console.log(str);
//         console.log(millenial);
//         // console.log(add(2, 3));
//         console.log(output);
//     }
    
//     printAge();

//     return age;
// }

// const firstName = 'Promise';
// calcAge(1991);
// console.log(age);
// printAge();



//  HOISTING
// Variables

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Promsie';
// let job = 'Student';
// const year = 1991;




// //  Functions
// console.log(addDecl(2,3));
// // console.log(addExpr(2,3));
// // console.log(addArrow(2,3));

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function(a,b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// //  Example -- Why you shouldn't use var
// console.log(numProduct);

// var numProduct = 10;
// if (!numProduct) deleteShoppingCart();

// function deleteShoppingCart () {
//     console.log('All products deleted');
// }


// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);




//  THIS Keyword

// console.log(this); // displays the window gibberish

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     // console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     // console.log(this);
// };
// calcAgeArrow(1998);

// const promise = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }
// promise.calcAge();

// const matilda = {
//     year: 2017
// };

// matilda.calcAge = promise.calcAge;
// matilda.calcAge();

// const f = promise.calcAge
// // f();




//  REGULAR FUNCTIONS VS ARROW FUNCTIONS

// const promise = {
//     firstName: 'Promise',
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);

//         //  Solution 1
//         // const self = this; // self or that
//         // const isMillenial = function () {
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         //     // console.log(this.year >= 1981 && this.year <= 1996);
//         // };

//         //  Solution 2
//         const isMillenial =  () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//             // console.log(this.year >= 1981 && this.year <= 1996);
//         }
//         isMillenial();
//     },

//     greet: () => console.log(`Hey ${this.firstName}`),
// }
// promise.greet();
// promise.calcAge();

// //  Arguments keyword
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2,5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArrow(2, 5, 8)



// Primitive

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Promise',
//     age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friends', me);




//  Primitives vs Objects in practice
//  Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//  Reference type
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);


//  Coyping objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice','Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessica2
console.log(jessicaCopy);


jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

