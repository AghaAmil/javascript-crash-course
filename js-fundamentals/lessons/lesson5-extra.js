/* 

********************************************
******** Lesson 5 - Objects (Extra) ********
********************************************

*/

/*

Basic Object with Method
A JavaScript method is a function defined within an object.

*/

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
