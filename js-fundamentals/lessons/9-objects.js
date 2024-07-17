/* 

********************************************
************ Lesson 9 - Objects ************
********************************************

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

const employee = {
  firstName: "Amirhossein",
  familyName: "Moravveji",
  age: 30,
  cars: ["BMW", "Benz", "Tesla"],
  position: {
    title: "QA Engineer",
    level: "L3G1",
  },
};

// displaying the whole object
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

// Add Object Properties
employee.location = "Zaferaniyeh-F9";
employee["position"]["team"] = "Superapp";

// logging the new object properties
console.log("The Object has new properties.");
console.log(employee);
console.log(`The Employee located at ${employee.location}.`);
console.log(`The Employee belongs to ${employee["position"]["team"]} team.`);

// blank line
console.log();

const student = {
  fname: "Amirhossein",
  lname: "Moravveji",
  uid: 3455,
  intro: function () {
    console.log("Our new student is Amirhossein Moravveji");
  },
};

console.log(`Object first name is : ${student.fname}`);
console.log(`Object User ID is : ${student["uid"]}`);
student.intro();

// blank line
console.log();

/*

JavaScript this Keyword
We use this keyword in an object method to access a property of the same object.

*/

// modify the object
student.fname = "Amir";
student.lname = "Fallah Sohy";
console.log(student);
student.intro();

// blank line
console.log();

//adding a method to an object
student.adaptiveIntro = function () {
  console.log(`Our new student is ${this.fname} ${this.lname}`);
};

console.log(student);
student.adaptiveIntro();

// blank line
console.log();

/*

JavaScript Constructor Function

*/

// constructor function with parameters
function person(fullname, yearBorn, gender) {
  this.fname = fullname;
  this.yearBorn = yearBorn;
  this.gender = gender;
  this.greet = function () {
    return `Hello ${this.fname}`;
  };

  this.age = function () {
    return 2024 - this.yearBorn;
  };
}

const person1 = new person("Amirhossein Moravveji", 1993, "Male");
const person2 = new person("Sara Rahmani", 1995, "Female");

console.log(person1);
console.log(person1.greet());
console.log(`The person1 age is ${person1.age()}`);

// blank line
console.log();

console.log(person2);
console.log(person2.greet());
console.log(`The person1 age is ${person2.age()}`);

// blank line
console.log();

/*

for...in loop
The JavaScript for...in loop iterates over the keys of an object.

*/

const employee = {
  firstName: "Amirhossein",
  familyName: "Moravveji",
  age: 30,
  cars: ["BMW", "Benz", "Tesla"],
  title: "QA Engineer",
  level: "L3G1",
};

// loop through the keys of employee object
for (let key in employee) {
  // display the key-value pairs
  console.log(`Key: ${key}, Value: ${employee[key]}`);
}

// blank line
console.log();

const salaries = {
  amir: 3200,
  ali: 5000,
  shiva: 2800,
  hossein: 4500,
};

for (let i in salaries) {
  let salaryFormat = "$" + salaries[i];

  console.log(`${i}'s salary: ${salaryFormat}`);
}
