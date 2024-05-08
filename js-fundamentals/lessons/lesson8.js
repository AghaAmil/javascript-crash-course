/*

********************************************
******* Lesson 8 - for, while loops ********
********************************************

*/
/*

for loops

*/

// show the iteration
for (let i = 1; i <= 5; i++) {
  console.log(`This is iteration number: ${i}`);
}

// blank line
console.log();

// display sum of n natural numbers
// natural numbers = all positive integers from 1 to infinity
sum = 0;
n = 100;

for (let i = 1; i <= n; i++) {
  sum += i; //  sum = sum + i
}

// blank line
console.log();

console.log(`The Sum of natural numbers upto 100 = ${sum}`);

// iterate through an array
const cars = ["Benz", "BMW", "Tesla", "Volvo", "Audi", "Ford", "Ferrari"];
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  console.log(`Array index ${i} = ${cars[i]}`);
}

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

// Add numbers of array from start until their sum is bigger than 100
let ListOfNums = [12, 5, 2, 35, 18, 32, 1, 5, 2, 23, 32, 2, 22];
let sum1 = 0;
let j = 0;

while (sum1 <= 100) {
  sum1 += ListOfNums[j];
  j++;
}

console.log(`Value of J: ${j}. The Sum Of Numbers: ${sum1}`);

// blank line
console.log();

/*

Break Statement

*/
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

/*

Continue Statement

*/

// display odd numbers

for (let i = 1; i <= 10; i++) {
  // skip the iteration if i is even
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
