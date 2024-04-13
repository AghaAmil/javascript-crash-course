/* 

********************************************
* Lesson 4 - Concatenation & Interpolation *
********************************************

*/

/*

String Concatenation

*/

let firstName = "Amirhossein";
let lastName = "Moravveji";
let output = "My first name is " + firstName + ". And my family name is " + lastName;
console.log(output);

/*

String Interpolation (Template Literals)

*/

let sample_str = `My first name is ${firstName} and my family name is ${lastName}`;
console.log(sample_str);

/*

Access String Characters

*/

let str1 = "Hello";
console.log(`The index 2 of the string "Hello" is: ${str1[2]}`);

let str2 = "World!";
console.log(`The index 1 of the string "World!" is: ${str2.charAt(1)}`);

/*

Strings are immutable

*/

let my_name = "amirhossein";
let my_name_cap = 'AMIRHOSSEIN'
my_name[0] = "A";
console.log(my_name);

/*

String Methods

*/

console.log(my_name.length)
console.log(my_name.toUpperCase())
console.log(my_name_cap.toLowerCase())
