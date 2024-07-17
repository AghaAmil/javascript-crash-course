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

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area of the rectangle
  calculateArea() {
    return this.width * this.height;
  }

  // Method to calculate the perimeter of the rectangle
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }

  // Method to display the dimensions of the rectangle
  displayDimensions() {
    console.log(`Rectangle: ${this.width} x ${this.height}`);
  }
}

// Create a new Rectangle instance
const myRectangle = new Rectangle(5, 10);

// Display the dimensions of the rectangle
myRectangle.displayDimensions();

// Calculate and display the area of the rectangle
const area = myRectangle.calculateArea();
console.log(`Area: ${area}`);

// Calculate and display the perimeter of the rectangle
const perimeter = myRectangle.calculatePerimeter();
console.log(`Perimeter: ${perimeter}`);
