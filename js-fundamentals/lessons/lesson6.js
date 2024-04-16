/* 

********************************************
***** Lesson 6 - Comparison Operators ******
********************************************

*/

/*

Comparison Operators

*/

// greater than
let x = 7;
console.log(`x = ${x}`);
console.log(`10 > x : ${10 > x}`);

// less than
console.log(`10 < x : ${10 < x}`);

// greater than or equal
console.log(`7 >= x : ${7 >= x}`);

// less than or equal
console.log(`4 <= x : ${4 <= x}`);

// equal to
console.log(`3 == x : ${3 == x}`);

// not equal to
console.log(`12 != x : ${12 != x}`);

// strictly equal to
console.log(`'7' == x : ${"7" == x}`); // loss comparison
console.log(`'7' === x : ${"7" === x}`); // compare the value and also the datatype

// strictly not equal to
console.log(`'7' !== 7 : ${"7" !== x}`);

/*

Logical Operators

*/

// && logical AND
// both expressions are true
console.log(true && true);  // true
// only one expression is true
console.log(true && false);  // false
// comparison example
console.log(2 < 3 && 5 > 4);  // true

// || logical OR
// only one expression is true
console.log(true || false);  // true
// both expressions are false
console.log(false || false);  // false
// comparison example
console.log(2 < 3 || 2 > 3);  // true

// ! logical NOT

// NOT on true
console.log(!true);  // false
// NOT on false
console.log(!false);  // true
// comparison example
console.log(!(2 < 3));  // false

