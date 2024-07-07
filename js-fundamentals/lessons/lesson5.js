/* 

********************************************
******* Lesson 5 - Objects & Arrays ********
********************************************

*/

/*

Objects

*/

// human object
const person = {
  name: "John",
  fname: "Miller",
  age: 45,
};

// displaying the whole object
console.log(`Our Object is: ${person}`);

// displaying object value using dot notation
console.log(`The person name is: ${person.name}`);

// displaying object value using bracket notation
console.log(`The person family name is: ${person["fname"]}`);
console.log(`The person age is: ${person.age}`);

// blank line
console.log();

/*

Arrays

*/

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

// empty array
const emptyArray = [];
// array of strings
const dailyActivities = ["eat", "work", "sleep"];
// array with mixed data types
const mixedArray = ["work", 1, true];
// multidimensional array
const data = [
  [1, 2, 3],
  [1, 3, 4],
  [4, 5, 6],
];

// accessing the first element of the array
console.log(`The first element of the arr is: ${arr[0]}`);
console.log(`The last element of the array is: ${arr[6]}`);

// length of an array
console.log(`The length of the array is: ${arr.length}`);

// the last index of array is:
console.log(arr.length - 1);

// therefore we can write in this way to find the last item of the array
console.log(`The last element of the array is: ${arr[arr.length - 1]}`);

// blank line
console.log();

// accessing multidimensional array
console.log(`displaying the first row of the complex arr: ${data[0]} `);
console.log(`displaying the middle number of our complex arr: ${data[1][1]}`);
console.log(`displaying the first number 3 in our complex arr: ${data[0][2]}`);

// blank line
console.log();

// loop through arrays
const cars = ["Benz", "BMW", "Tesla", "Volvo", "Audi", "Ford", "Ferrari"];
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  console.log(`Array index ${i} = ${cars[i]}`);
}

// other loop samples with array:
arr2 = [1, 3, 5, 7, 2, 11, 13, 15, 9, 17, 19];

for (i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    break;
  }
  console.log(`${arr2[i]}`);
}

// blank line
console.log();
// blank line
console.log();


// display odd numbers
for (let i = 1; i <= 10; i++) {
  // skip the iteration if i is even
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// blank line
console.log();

// adds an element at the end of the array
arr.push(8);
console.log(`Pushing the number 8 to the last index of arr: ${arr}`);
console.log(`The length of the arr is: ${arr.length}`);

// adds an element at the beginning of the array
arr.unshift(0);
console.log(arr);

// remove an element from any specified index of an array
// remove two elements at the index 5
arr.splice(5, 2);
console.log(arr);

// change the element of an array
arr[0] = "new array";
console.log(arr);
