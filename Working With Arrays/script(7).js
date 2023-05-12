'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Ilerioluwa Akintunde',
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

/////////////////////////////////////////////////
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


const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = ''; // .textContent = 0

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;


    movs.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}€</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html)
    });
};



const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
};


const calcDisplaySummary = function (acc) {
    const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

    const outcome = acc.movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov);
    labelSumOut.textContent = `${Math.abs(outcome)}€`;

    const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate/100).filter((int) => {
        // console.log(arr);
        return int >= 1
    }).reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`
};



const createUsernames = function (accs) {
    accs.forEach((acc) => {
        acc.username = acc.owner.toLowerCase().split(' ').map((name)=> name[0]).join('');
    })

};

createUsernames(accounts);

const updateUI = function (acc) {
    // Display movements
    displayMovements(acc.movements);

    // Display balance
    calcDisplayBalance(acc)

    // Display summary
    calcDisplaySummary(acc);
}

// Event handler

let currentAccount;

btnLogin.addEventListener('click', (e) => {
    // Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find((acc) => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and a welcome message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ').at(0)}`;
        // containerApp.style = 'opacity: 100';
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        
        // Update UI
        updateUI(currentAccount);
    } else {
        console.log('PIN not correct');
    }

    // Trying a feature: If pin is not correct... check !=
    // if (currentAccount?.pin != Number(inputLoginPin.value)) {
    //     // containerApp.style.display = 'none';
    //     console.log('PIN not correct');
    // };
});

btnTransfer.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
        // Doing the tranfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', (e) => {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
});


btnClose.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        console.log(index);

        // Delete account
        accounts.splice(index, 1);

        
        // Hide UI
        containerApp.style.opacity = 0;
    }
    // Clear input value/field
    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', (e) => {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted); 
    sorted = !sorted;
});


/////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////
// LECTURES
/*
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// It mutates the original array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2) // position 1 and deleted 2 element
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // mutate the array
console.log(arr2);

// CONCAT 
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
*/

// At method
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// at method also works on string
console.log('promise'.at(0));
console.log('promise'.at(-1));
*/

// Looping Arrays: FOREACH 
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movements) {
for (const [i, movement] of movements.entries()) {
    if (movement > 0) { 
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('-------- FOREACH ---------');
movements.forEach((mov, i, arr) => {
    if (mov > 0) { 
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
});
*/

// FOREACH WITH MAPS AND SETS
// Map
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
} );

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
    console.log(`${value}: ${value}`);
});
*/


////////////
// DATA TRANSFORMATIONS: MAP, FILTER, REDUCE
/*
const euroToUsd = 1.1;

const movementsUSD = movements.map((mov) => {
    return mov * euroToUsd;
});
console.log(movements);
console.log(movementsUSD);


const movementsUSDfor = [];
for(const mov of movements) {
    movementsUSDfor.push(mov * euroToUsd);
};

console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => 
 `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);

console.log(movementsDescriptions);
*/

// Filter method
/*
const deposits = movements.filter(function (mov) {
    return mov > 0;
});

console.log(deposits);

const depositsFor = [];
for(const mov of movements) {
    if (mov > 0) {
        depositsFor.push(mov)
    }
};
console.log(depositsFor);

const withdrawals = movements.filter((mov) => {
    return mov < 0
});
console.log(withdrawals);
*/



// accumulator is like a snowball
/*
const balance = movements.reduce(function (acc, cur, i, arr) {
    console.log(`Iteration ${i}: ${acc}`);
    return acc + cur
}, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) {
    balance2 += mov
};

console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
    if (acc > mov) {
        return acc;
    } else {
        return mov;
    }
}, movements[0]);

*/


///////////////////////
// Chaining Method
/*
const euroToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/


//////////////
// FIND Method
/*
const firstWithdrawal = movements.find((mov) => mov < 0 );
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find( acc => acc.owner === 'Jessica Davis');
console.log(account);

// Challenge to re-write above with for-of loop
for (const acc of accounts) {
    // console.log(acc);
    if (acc.owner === 'Jessica Davis') {
        console.log(acc);
    }
}
*/

/////////////
// SOME METHOD 
/*
console.log(movements);

// EQAULITY
console.log(movements.includes(-130));

// CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);
*/

// EVERY
/*
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

// FLAT
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// FLAT
const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// FlatMap
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/

///////////////
// Sorting
/*

// With Strings
const owners = ['Jonas', 'Zach', 'Promise', 'Adam', 'Ilerioluwa'];
console.log(owners.sort());
console.log(owners);

// With Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A  (switch order)

// Ascending
// movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (b > a) return 1;
// });

movements.sort((a, b) => b - a);
console.log(movements);


*/



// More Ways Of Creating And Filling Arrays

const arr =[1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));


// When we pass in one argument it creates a new empty array with that length
// Empty arrays + fill methods 
const x = new Array(7);
console.log(x);

// FILL Method
x.fill(1, 3, 5);  // it mutates the original array
x.fill(1);  
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', () => {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));
    console.log(movementsUI);

    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});



// ARRAY METHODS PRACTICE

// 1.
const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositSum);

// 2. Count how many deposits there have been in the bank with at least $1000 

// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => cur >= 1000 ? ++count : count, 0)

console.log(numDeposits1000);

// 3. Create a new object instead of number or string
const sums = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
    cur > 0 ? sums.deposits += cur : sums.withdrawals += cur; 
    return sums;
}, {deposits: 0, withdrawals: 0})

console.log(sums);

// 4. Create a simple func. to convert any string to a titlecase
// E.g this is a nice title -> This Is a Nice Title
const convertTitleCase = function(title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);

    const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

    const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ');
    return capitalize(titleCase);
}; 

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a Long title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
