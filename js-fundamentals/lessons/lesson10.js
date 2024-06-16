/*

********************************************
*********** Lesson 10 - Class **************
********************************************

*/

/* 

Javascript Classes

*/

class Person {
  // class constructor to initialize the properties
  constructor(firstName, lastName, bornYear, gender) {
    this.fname = firstName;
    this.lname = lastName;
    this.bornYear = bornYear;
    this.gender = gender;
  }

  // method to display a message
  greet = () => {
    console.log(`Hello and good morning, ${this.fname} ${this.lname}`);
  };

  // method to calculate age
  age = () => 2024 - this.bornYear;
}

const person1 = new Person("Amirhossein", "Moravveji", 1993, "Male");
const person2 = new Person("Shiva", "Rajabi", 1995, "Female");

console.log(person1);

// blank line
console.log();

person1.greet();
console.log(person1.age());

// blank line
console.log();

person2.greet();
console.log(person2.age());
