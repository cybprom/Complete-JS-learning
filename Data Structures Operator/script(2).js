'use strict';

const weekdays = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22
    },
    [weekdays[4]]: {
        open: 11,
        close: 23
    },
    [weekdays[5]]: {
        open: 0,
        close: 24
    }
};



const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 ENHANCED OBJECT LITERALS

    openingHours,

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },


    // SECOND ENHACMENT
    // GET RID OF FUNCTION AND SEMI-COLON
    orderDelivery({starterIndex, mainIndex, time, address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};
restaurant.orderDelivery({
    time:'22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
});


//////////////////////////
//  String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
    console.log(output);
}



//////////////////////////
// WORKING WITH STRINGS - PART 3
// Split and join
/*
console.log('a+very+nice+string'.split('+'));
console.log('Akintunde Ilerioluwa'.split(' '));

const [firstName, lastName] = 'Ilerioluwa Akintunde'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizedName = function (name) {
    const names = name.split(' ');
    const namesUpperCase = [];

    for(const n of names) {
        // namesUpperCase.push(n[0].toUpperCase() + n.slice(1));
        namesUpperCase.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpperCase.join(' '));
};

capitalizedName('jessica ann smith davis');
capitalizedName('ilerioluwa akintunde');

// Padding 
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30,'+'));

const maskCreditCard = function (number) {
    const str = number + '';
    // const last = str.slice(-4);
    const first = str.slice(0, 6);
    const last = str.slice(-4);
    const paddedFirst = first.padEnd(first.length + 6, '*').concat(last);
    return paddedFirst;

    // return last.padStart(str.length, '*');
    // return last.padStart(str.length, '*');
}

console.log(maskCreditCard(2143453455768576));
console.log(maskCreditCard('0834348657346546'));

// Repeat
const message2 = 'Bad weather... All Depatures Delayed... '
console.log(message2.repeat(5));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

/////////////////////////////
// WORKING WITH STRINGS - PART 2
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


// Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing emails
const email = 'hello@promise.io';
const loginEmail = '  Hello@Promise.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();


const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing

const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

///////////////////////////////
// WORKING WITH STRINGS - PART 1
/*

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// strings method 
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // End value is actually not included in the string

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // start extracting from the left
console.log(airline.slice(1, -1)); 

// Write a function that receives an airplane seat and log to the console whether it is middle seat or not

const checkMiddleSeat = function (seat) {
    // B and E are middle seat
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') 
    console.log('You got the middle seat');
    else console.log('You got lucky');
}


checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

///////////////
// MAPS: ITERATION
// Another way of populating maps apart from the set method
/*
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!']
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for(const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}` );
}

// Quiz
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log(...question);
*/

/*
//////////////
// MAPS: Fundamentals
// Maps are alot more useful than set

const rest = new Map();
rest.set('name', 'Classico Italiano ');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest.set(2, 'Lisbon, Portugal'));


rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :[');
console.log(rest);

// To READ/GET data from a map, we use the get method
console.log(rest.get(1));
console.log(rest.get('name'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// To check if a map contains a certain key
console.log(rest.has('categories'));

// To DELETE elements from the map
rest.delete(2);
console.log(rest);

// TO check the size of the map
console.log(rest.size);

// To remove all the elements of the map
rest.clear();

// Use array or objects as map key
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

*/


//////////
// SETS
/*
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

console.log(ordersSet);

console.log(new Set('Promise'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic bread');
ordersSet.add('Garlic bread');
console.log(ordersSet);
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

// You can't get/retrieve values out of a set unlike arrays

for (const order of ordersSet) {
    console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const startUnique = [...new Set(staff)];
console.log(startUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);


console.log(new Set('Ilerioluwa').size);
*/


//////////////////
// LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES
// Learnt how to loop through object below from sololearn

/*
for (const day in openingHours) console.log(day);


// Property NAMES

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties){
    openStr += ` ${day}`;
};
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/


///////////////////////////////////////
// Optional Chaining
/*
if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}
// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example

const days = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];

for(const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// Arrays
const users = [
    {name: 'Promise', email: 'hello@promsie.dev'}
];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');
*/


/*
//////////////////////////////////////////
// LOOPING ARRAYS: THE FOR-OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
    console.log(item);
    console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
    console.log(i, el);
    console.log(`${i + 1}: ${el}`);
}
*/

//  Logical assignment operator
/*
const rest1 = {
    // name: 'Capri',
    numGuests: 0
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};


// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest2.numGuests);
console.log(rest1.numGuests);
console.log(rest2.owner);
*/


////////////////////////////////
// THE NULLISH COALESCING OPERATOR (??)
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish values: null and undefined (NOt 0 or '')
// only nullish value will short circuit the evaluation below
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/


// OR
// SHORT-CIRCUITING
// LOGICAL OPERATOR: CAN USE ANY DATA TYPE, return ANY data type, short-circuiting
/*
console.log(3 || 'Promise');
console.log('' || 'Promise');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);


// AND
// its short-circuit when the 1st value is falsy and then immedaitely returns that falsy value without evaluating the second operand 
console.log(0 && 'Promise');
console.log(7 && 'Promise' && 'Jonas');

console.log('Hello' && 23 && null && 'promise');

// PRACTICAL EXAMPLE
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
// Destructuring object

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;

//   Setting default value

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//  Mutating variable
let a = 111;
let b = 999; 
const obj = {a: 23, b: 7, c: 14};


({a,b} = obj);
console.log(a, b);

// const {a: firstNum, b: secondNum} = obj;
// console.log(firstNum, secondNum);


//  Nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
*/

//////////
//  SPREAD(...) operator
/*
const arr = [7, 8, 9];
let badArrNew = [1, 2];

for (let i = 0; i < arr.length; i++) {
    badArrNew.push(arr[i]);
};

console.log(badArrNew);

//       OR
badArrNew = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(...newArr); 

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//  Use case of spread operator
//  Copy array

const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays or more together
const menuu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuu);


//  Spread operator works on all iterables
// Iterables are: arrays, strings, maps, sets, Not objects
const str = 'Promise';
const letters = [...str, ' ', 's.'];

console.log(letters);

// Muliple values seperated by a comma are usually only expected when we pass argument in a function or when we build a new array

// Real World example
const ingredients = [
    // prompt('Let\'s make pasta! Ingredient 1?'),
    // prompt('Ingredient 2?'),
    // prompt('Ingredient 3?')
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);


const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/



// 1) Destructuring 

// SPREAD, because on RIGHT side of = operator
/*
const arr = [1, 2, ...[3, 4]];


// REST, because on the LEFT side of = operator

const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(others);


const [pizza, , Risotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(otherfood);

// Objects

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);


// 2) functions

const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};

add(5, 3, 7, 2);

const p = [23, 5, 7];
add(...p);


restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/


/*
///////////////////////
//  Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

//  Destructuring

let [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);


let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

//  Switching variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//  Switching variables using destructuring

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//  Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j , k,);


//  Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/

