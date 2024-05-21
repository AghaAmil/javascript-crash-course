/*

********************************************
********** Lesson 8 - Functions ************
********************************************

*/

/*

Basic Functions

*/

// function can be called before declaration
greeting();

function greeting() {
  console.log("Hello World!");
}

greeting();

// blank line
console.log();

let displayPi = function () {
  const PI = 3.14;
  console.log(`PI Number = ${PI}`);
};

// Function Expressions using variable name
displayPi();

// blank line
console.log();

/*

JavaScript Function Arguments

*/

function welcome(name) {
  console.log(`${name}, Welcome to JS Class.`);
}

welcome("Amirhossein");
welcome("Akbar");

// blank line
console.log();

/*

Return statement

*/

function display() {
  console.log("This will be executed.");

  return "Returning from function.";

  console.log("This will not be executed.");
}

let message = display();
console.log(message);

// blank line
console.log();

/*

JavaScript Library Functions

*/

// Math.sqrt() computes the square root
let squareRoot = Math.sqrt(4);
console.log("Square Root of 4 is", squareRoot);

// Math.pow() computes the power
let power = Math.pow(2, 3);
console.log("2 to the power of 3 is", power);

// toUpperCase() converts text to uppercase
let company = "Sanpp!";
let companyUpper = company.toUpperCase();
console.log(`My Company: ${companyUpper}`);

// blank line
console.log();

/*

Export & Import Functions

*/

// import a function
import { addition } from "../external-functions/arithmetics.js";

console.log(`10 + 5 = ${addition(10, 5)}`);

// import all
import * as arithmetics from "../external-functions/arithmetics.js";

console.log(`84 - 13 = ${arithmetics.subtraction(84, 13)}`);
console.log(`9 * 17 = ${arithmetics.multiplication(9, 17).toFixed(2)}`);
console.log(`46 / 23 = ${arithmetics.division(46, 23)}`);
