/* 

********************************************
******* Lesson 5 - Objects & Arrays ********
********************************************

*/

/*

Objects

*/

const employee = {
  firstName: "Amirhossein",
  familyName: "Moravveji",
  age: 30,
  cars: ["BMW", "Benz", "Tesla"],
  position: {
    title: "QA Engineer",
    level: "L2G2",
  },
};

console.log(employee);

// blank line
console.log();

// Using dot Notation
console.log(employee.firstName);
console.log(employee.age);
console.log(employee.cars);

// Using bracket Notation
console.log(employee["cars"]);
console.log(employee["age"]);
console.log(employee["firstName"]);

// blank line
console.log();

// Nested Objects
console.log(employee.position.title);
console.log(employee["position"]["level"]);
console.log(employee.cars[0]);
console.log(employee["cars"][1]);

// blank line
console.log();

// Updating Object Values
employee["firstName"] = "Ali";
employee.familyName = "Fallah-Sohy";

console.log(`The Employee's new name is: ${employee.firstName}`);
console.log(`The Employee's new family name is: ${employee["familyName"]}`);

// blank line
console.log();

/*

Arrays

*/

arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1);

// adds an element at the end of the array
arr1.push(8);
console.log(`Pushing the number 8 to the last index of arr1: ${arr1}`);
console.log(`The length of the arr1 is: ${arr1.length}`);

// adds an element at the beginning of the array
arr1.unshift(0);
console.log(arr1);

// remove an element from any specified index of an array
// remove two elements at the index 5
arr1.splice(5, 2);
console.log(arr1);

// change the element of an array
arr1[0] = "new array";
console.log(arr1);

// length of an array
console.log(arr1.length);

// the last index of array is:
console.log(arr1.length - 1);
