/* 

********************************************
*********** Lesson 2 - Variables ***********
********************************************

*/

// var
// declare then initiate
var firstName;
firstName = "Amirhossein";

// declare and initiate together
var lastName = "Moravveji";

// ES6(ES2015) new version of JS introduced let
// Recommended to use let
let userName = "Amir.Moravveji";

// showing different methods of initiating variables
let age, sex, job;
age = 30;
sex = "Female";
job = "Software QA Engineer";

// display variables
console.log(firstName);
console.log(lastName);
console.log(userName);
console.log(age);
console.log(sex);
console.log(job);

// difference between var & let
var a = 2;
console.log(a);
var a = 3;
console.log(a);
// let cannot be be redeclared
let b = 2;
// let b = 3;

// reinitialize can be possible
let x = 10;
console.log(x);
x = 11;
console.log(x);

// constant variables
const PI = 3.14;
console.log(PI);

/*

const PI;
PI = 3.14 // error


PI = 3.15 // error

*/