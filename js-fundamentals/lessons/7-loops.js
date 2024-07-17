/*

********************************************
******* Lesson 7 - for, while loops ********
********************************************

*/

/*

for loops

*/

// using prompt-sync
const prompt = require("prompt-sync")();

// show the iteration
for (let i = 1; i <= 5; i++) {
  console.log(`This is iteration number: ${i}`);
}

// blank line
console.log();

// display sum of n natural numbers
// natural numbers = all positive integers from 1 to infinity
sum = 0;
input = prompt("Enter a positive integer: ");

// loop from i = 1 to i = n
// in each iteration, i is increased by 1
for (let i = 1; i <= input; i++) {
  sum += i; //  sum = sum + i
}

console.log(`The Sum of natural numbers upto ${input} = ${sum}`);

// blank line
console.log();

/*

while loops

*/
let i = 0;

while (i < 5) {
  console.log(`This is the iteration: ${i}`);
  i++;
}

console.log(`The value of i after the last iteration: ${i}`);

// blank line
console.log();

// Sum of Only Positive Numbers
let user_input = 0;
let sum1 = 0;
let counter = 0;

// loop as long as num is 0 or positive
while (user_input >= 0) {
  // add all positive numbers
  sum1 += user_input;

  // take input from the user
  user_input = Number(prompt("Enter a desired number: "));

  // counts the entered number
  counter++;
}

console.log(`${counter - 1} positive number is entered. The Sum = ${sum1}`);

// blank line
console.log();

/*

Break Statement

*/

let sumOfNumbers = 0;
let counter1 = 0;

// infinite loop
while (true) {
  // get number input
  let input = Number(prompt("Enter a desired number: "));

  // terminate the loop if num is negative
  if (input <= 0) {
    break;
  } else {
    // otherwise, add num to sum
    sumOfNumbers += input;
  }
  counter1++;
}

console.log(`${counter1} positive number is entered. The Sum = ${sumOfNumbers}`);

// blank line
console.log();
// blank line
console.log();

/*

Continue Statement

*/

// user input
let starter = 1;
let inputNumber = Number(prompt("Enter a number: "));

while (starter <= inputNumber) {
  if (starter % 2 === 0) {
    ++starter;
    continue;
  }

  console.log(starter);
  ++starter;
}
