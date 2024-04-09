/* 

********************************************
********** Lesson 3 - Data Types ***********
********************************************

*/

/*

Strings

*/

// single quotation
console.log("This is a text inside the single quote");

// double quotation
console.log("This is a text inside the double quote");

// using special quotation inside our text
console.log("I'm going to work everyday.");
console.log('I live in "Tehran" city');

// using backslash for quotations
console.log('I live in \t"Pasdaran"\t neighborhood.');

// This is also a string
console.log("12");

/*

Numbers

*/

// integers
console.log(71);
// float
console.log(34.123);

/*

Booleans

*/
let isTrue = true;
let isFalse = false;

console.log(isFalse);
console.log(isTrue);

/* 

null

*/
let amirGf = false;
let amirGfName = null;

console.log(amirGfName);

/* 

undefined

*/
let firstName;
console.log(firstName); // undefined

let lastName = undefined;
console.log(lastName); // undefined

/*

typeof

*/
const userName = "amir.mor";
typeof userName; // returns "string"

const number = 4;
typeof number; //returns "number"

const valueChecked = true;
typeof valueChecked; //returns "boolean"

const a = null;
typeof a; // returns "object"
