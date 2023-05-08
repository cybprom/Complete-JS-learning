let country = 'nigeria';
let continent = 'africa';
let population = 220000000;

//console.log(country);
//console.log(continent);
//console.log(population);

// CODING CHALLLENGE #1
/*
let marksMass = 78;
let johnsMass = 92;
let marksHeight = 1.69;
let johnsHeight = 1.95;

let marksBMI = marksMass / marksHeight ** 2;
let johnsBMI = johnsMass / johnsHeight ** 2; 
console.log(marksBMI, johnsBMI);


// if (marksBMI > johnsBMI) {
//     console.log(`Mark's BMI (${marksBMI}) is higher than John's! (${johnsBMI})`);
// } else {
//     console.log(`John's BMI (${johnsBMI}) is higher than Mark's! (${marksBMI})`);
// }


marksMass = 95;
johnsMass = 85;
marksHeight = 1.88;
johnsHeight = 1.76;

marksBMI = marksMass / marksHeight ** 2;
johnsBMI = johnsMass / johnsHeight ** 2; 

// console.log(marksBMI, johnsBMI);

*/

// CODING CHALLLENGE #2

// if (marksBMI > johnsBMI) {
//     console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
// } else {
//     console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
// }

// CODING CHALLLENGE #3

// const averageDolphins = (96 + 108 + 89) / 3;
// const averageKaolas = (88 + 91 + 110) / 3;

// if (averageDolphins > averageKaolas) {
//     console.log('Team Dolphin is the winner');
// } else if (averageDolphins < averageKaolas) {
//     console.log('Team Kaola is the winner');
// } else if (averageDolphins === averageKaolas) {
//     console.log('The both teams draw');
// } else {
//     console.log('We have no winner.');
// }

// BONUS 1

/*
const averageDolphins = (97 + 112 + 81) / 3;
const averageKaolas = (109 + 95 + 86) / 3;

if (averageDolphins > averageKaolas && averageDolphins >= 100) {
    console.log('Team Dolphin is the winner');
} else if (averageKaolas > averageDolphins && averageKaolas >= 100) {
    console.log('Team Kaola is the winner');
} else if (averageDolphins === averageKaolas && averageDolphins >= 100 && averageKaolas >= 100 ) {
    console.log('The both team draw');
} else {
    console.log('We have no winner 😢.');
}


console.log(averageDolphins, averageKaolas);
*/

//CODING CHALLENGE #4

// THIS IS MY SOLUTION
/*
const bill = 275;
// const bill = 40;
// const bill = 430;
const perTip1 = (15 / 100) * bill;
const perTip2 = (20 / 100) * bill;
const totalValue1 = bill + perTip1;
const totalValue2 = bill + perTip2;

let tip;
const finalValue = bill + tip;

if (bill >= 50 && bill <= 300 ) {
    console.log(`Bill value is ${bill}, tip was ${perTip1}`);
} else {
    console.log(`The Bill was ${bill}, the Tip was ${perTip2}, and the total value`);
}

tip = bill >= 50 && bill <= 300 ? `The Bill value was ${bill}, tip was ${perTip1}, and the total value is ${totalValue1}` : `The Bill was ${bill}, the Tip was ${perTip2}, and the total value ${totalValue2}`
console.log(tip); 
*/

// OR
/*
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
*/

//      PART 2

// CODING CHALLENGE #1
/*
const calAverage = (a, b, c) => (a + b + c) / 3;

// TEST DATA 1

let avgScoreDolphins = calAverage(44, 23, 71);
let avgScoreKaolas = calAverage(65, 54, 49);

console.log(avgScoreDolphins, avgScoreKaolas);


const checkWinner = function (avgDolphins, avgKaolas) {
    if (avgDolphins >= 2 * avgKaolas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKaolas})`);
    } else if (avgKaolas >= 2 * avgDolphins) {
        console.log(`Kaolas win (${avgKaolas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...')
    }
}

checkWinner(avgScoreDolphins, avgScoreKaolas);

// TEST DATA 2

avgScoreDolphins = calAverage(85, 54, 41);
avgScoreKaolas = calAverage(23, 34, 27);

console.log(avgScoreDolphins, avgScoreKaolas);
checkWinner(avgScoreDolphins, avgScoreKaolas);
*/

// CODING CHALLENGE #2

/*
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/

// CODING CHALLENGE #3

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

// console.log(mark.bmi)


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI()
john.calcBMI()

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}
*/

// CODING CHALLENGE #4
/*
const bills = [22, 295, 176, 440, 37, 105, 1, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

// console.log(tips, totals)

// BONUS
const calcAverage = function (arr) {
    let sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
};



// console.log(calcAverage([2, 3, 7]));
*/

// Developer Skills & Editor SetUp
// CODING CHALLENGE #1
/*
Given an array of forecasted maximum temperatures, thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// How to display a string with array
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`... ${data1[0]}C in 1 days ... ${data2[1]}C in 2 days ... ${data1[2]}C in 3 days ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    // str = str + `${arr[i]}C in ${i} days ...`;
    str += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log(str);
};

printForecast(data1);
*/

///////////////
// CODING CHALLENGE #1 DATA STRUCTURE
/*
const game = {
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

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5.
// const {team1, x: draw, team2} = game.odds;
const {odds: { team1, x: draw, team2} } = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} number of goal was scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
console.log(...game.scored);
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('team1 is likely to window');
team1 > team2 && console.log('team2 is likely to window');
console.log(team1 < team2 );
*/


////////////////////
// CODING CHALLENGE #2 DATA STRUCTURE

/*
// 1.
for (const [scores, player] of game.scored.entries()) {
    console.log(`Goal ${scores + 1}: ${player}`);
};

// 2.

const odds = Object.values(game.odds);
let sum = 0;

for (const odd of odds) {
    console.log(odd);
    sum += odd;
};

const average = sum / odds.length;
console.log(average);

// 3.
// Odd of victory Bayern Munich: 1.33
// Odd of draw:  3.25
// Odd of victory Borrussia Dortmund: 6.5

for (const [teams, odd] of Object.entries(game.odds)) {
    const victoryStr = teams === 'x' ? 'draw' : `victory ${game[teams]}`;
    console.log(teams, odd);
    console.log(`Odd of ${victoryStr}: ${odd} `);
};



// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element

const scorers = {};
for (const player of game.scored) {
    console.log(player);
    scorers[player] ? scorers[player]++ : (scorers[player] = 10);
}

scorers

*/



/////////////////
// CODING CHALLENGE #3
 /*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
events

// 2.
gameEvents.delete(64);


// 3.
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL
for(const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST HALF' : 'SECOND HALF' ;
    console.log(`[${half}] ${min}: ${event}`);
};
*/



///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
 calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea').value; 

document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const secondUpper = second.replace(second[0], second[0].toUpperCase());
        const output = `${first}${secondUpper}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
    
});
*/

/////////////////////////////////
// CODING CHALLENGE #1 CLOSER LOOK AT FUNCTIONS
/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
    console.log(answer);

    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;  
    // if (typeof answer === 'number' && answer <= 3) {
    //     this.answers[answer]++
    // }
    
    this.displayResults();
    this.displayResults('string');
  },
  // 3. displayresult
  displayResults(type = 'array') {
    if (type === 'array') {
        console.log(this.answers);
    } else if (type === 'string') {
        console.log(`Poll results are ${this.answers.join(',')}`);
    }
  }
};

// 2.
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
*/

// Bonus -- didn't do this myself.. lol
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');




///////////////////////////////////
// CODING CHALLENGE #2 CLOSER LOOK AT FUNCTIONS

/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/

/*
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', () => {
        header.style.color = 'blue';
    });
})();
*/



///////////////////////////////////////
// Coding Challenge #1 : WORKING WITH ARRAYS

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/



/*


const checkDogs = function (dogsJulia, dogsKate) {
    // 1. Remove First and Last of julia
    const dogsJuliaCorrected = dogsJulia.slice(1, 3);
    console.log(dogsJuliaCorrected);

    // 2. Both Julia and Kate
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);

    // 3. Foreach remaining dogs
    dogs.forEach((dog, i) => {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy🐶`);
        }
    });
}

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])
*/



///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/


/*

const calcAverageHumanAge = function (ages) {
    // 1.
    const dogHumanAges = ages.map((age) => age <= 2 ? 2 * age : 16 + age * 4);
    console.log(dogHumanAges);

    // 2. Exclude dogs < 18
    const adult = dogHumanAges.filter((age) => age >= 18);
    console.log(adult);
    
    // 3. Calc the average of humAge
    // const average = adult.reduce((acc, age) => acc + age / adult.length);
    const average = adult.reduce((acc, age) => acc + age / adult.length, 0);
    // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    console.log(average);

};

calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

*/


///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/



const calcAverageHumanAge2 = function (ages) {
    // 1.
    const dogHumanAges = ages.map((age) => age <= 2 ? 2 * age : 16 + age * 4);

    // 2. Exclude dogs < 18
    const adult = dogHumanAges.filter((age) => age >= 18);
    
    // 3. Calc the average of humAge
    const average = adult.reduce((acc, age) => acc + age / adult.length, 0);
};

const calcAverageHumanAge = ages => ages.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);
