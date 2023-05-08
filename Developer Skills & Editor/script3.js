'use strict';

//  USING GOOGLE, STACKOVERFLOW AND MDN

// PROBLEM 1
// We work for a company building a smart home thermometer. Our most recent tast is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is Temperature Amplitude?
// -- Answer: Temperature amplitude is the difference between the minimum and maximum Temperature that occured within a specific recording time period.
// How to compute the max and min temperature?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems 
// - Sensor errors are actually ignored... How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from Max(amplitude) and return it

const calcTempAmplitude = function (temps) {
    let max = 0;
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue;

        if (temps[i] > max) {
            max = temps[i];
        }
        if (temps[i] < min) { min = temps[i]}
    }
    console.log(max, min);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
// Function should now receive two arrays of temps

// 1) Understanding the problem
// - With two arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue;

        if (temps[i] > max) {
            max = temps[i];
        }
        if (temps[i] < min) { min = temps[i]}
    }
    console.log(max, min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

// DEBUGGING
// THE DEBUGGING PROCESS
// -- Identify => Find BUG => Fix => Prevent

// DEBUGGING WITH THE CONSOLE AND BREAKPOINTS

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')),
  };
  // B) FIND

  // console.log(typeof measurement.value);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// HOW TO USE DEBUGGER IN CHROME
// -- GO TO SOURCES => CLICK ON SCRIPT.JS


// CREATE NEW BUG TO DEBUG

const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue;

        if (temps[i] > max) {
            max = temps[i];
        }
        if (temps[i] < min) { min = temps[i]}
    }
    console.log(max, min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
