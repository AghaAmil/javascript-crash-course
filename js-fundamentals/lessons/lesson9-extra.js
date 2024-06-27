/*

********************************************
******* Lesson 8 - Arrow Functions *********
********************************************

*/

// simple form of functions
function greeting() {
  console.log("Hello World!");
}

let displayPi = function () {
  const PI = 3.14;
  console.log(`PI Number = ${PI}`);
};

greeting();
displayPi();

// blank line
console.log();

// arrow function format of above functions
const sayHello = () => {
  console.log("Hello World!");
};

const sayHello2 = () => "Hello World!";

const arrowDisplayPi = () => {
  const PI = 3.14;
  console.log(`PI Number = ${PI}`);
};

console.log(sayHello2());
arrowDisplayPi();

// blank line
console.log();

// an arrow function to add two numbers
const addNumbers = (a, b) => a + b;

// call the function with two numbers
const result = addNumbers(5, 3);
console.log(result);

// constructor function
function Person() {
  this.name = "Jack";
  this.age = 25;
  this.sayName = function () {
    console.log(this.age);

    let innerFunc = () => {
      console.log(this.age);
    };

    innerFunc();
  };
}

const x = new Person();
x.sayName();
