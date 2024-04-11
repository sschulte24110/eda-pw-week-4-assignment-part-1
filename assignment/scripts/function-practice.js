console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Scott'));

// 3. Function to add two numbers together & return the result

function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(4, 4));

// 4. Function to multiply three numbers & return the result

function multiplyThree(a, b, c) {
  return a * b * c;
}
console.log(multiplyThree(1, 2, 3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise

function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(3.14159));
console.log(isPositive(-3.14159));
console.log(isPositive(-12345));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
const array = [];
function getLast(array) {
  return array[array.length - 1];
}
console.log(getLast(array));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++)
    if (array[i] === value) {
    return true;
    }
    return false;
  }
console.log(find(24, array));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

let string = '';
function isFirstLetter(letter, string) {
  if (string.charAt(0) === letter){
    return true;
  } else {
    return false;
  }
}
console.log(isFirstLetter('s', string));

// 9. Function to return the sum of all numbers in an array

const array2 = [-1, 3, 6, -9, 12, -15, 18]
function sumAll(array2) {
  let sum = 0;
  // TODO: loop to add items
    for (let i = 0; i < array2.length; i++) {
      sum += array2[i];
    }
  // TODO: return the sum
     return sum; 
}
console.log(sumAll(array2));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array2) {
  let positive = [];
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 0) {
      positive.push(array2[i]);
    }
  }
  return positive;
}
console.log(allPositive(array2));
console.log(array2);
// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// A problem wanted me to create a function that would take in an array and a 
// multiplier. The function would multiply each element in the array by the multiplier and 
// return a new array.

// I created array3 for testing purposes.
// Function multiply takes in 2 values, array and multiplier.
// newArray is where the new values are going to be stored.
// for loop will loop through the each value in the array (i < array.length) taking each value
// times the multiplier.  
// The new values from the loop are pushed into new Array.
// newArray is returned.
const array3 = [4, 5, 6];
const array4 = [14, 184, 2003]
function multiply(array, multiplier) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
		  let newValue = array[i] * multiplier;
      newArray.push(newValue);
    }
    return newArray;
  }

// Console.log can take in a global array -or-
console.log(multiply(array3, 10));
console.log(multiply(array4, 10));
// You can input an array right in the console.log
console.log(multiply([7, 8, 9,], 10));

// Very similar to some of the other stretch problems, but I think I explained
// it pretty well. 
// This is similar to the .map method, but .map won't take in 2 parameters so you have
// to wrap the .map in another function that takes in 2 parameters. See below:

function mapMultiply (array, multiplier2) {
  return array.map((multiplier2 => x => x * multiplier2) (multiplier2));
};
console.log(mapMultiply(array3, 10));
console.log(mapMultiply(array4, 10));
console.log(mapMultiply([7, 8, 9], 10));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
