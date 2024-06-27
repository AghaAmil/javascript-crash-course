/*

********************************************
****** Lesson 7 - if, else statement *******
********************************************

*/

/*

if, else statement

*/

// using prompt-sync
const prompt = require("prompt-sync")();

// sample 1
let yourMark = prompt("Enter Your Mark (0 - 100): ");

if (yourMark >= 90) {
  console.log("You are 'First Class' student");
} else if (yourMark >= 70) {
  console.log("You are 'Second Class' student");
} else if (yourMark >= 40) {
  console.log("You are 'Third Class' student");
} else {
  console.log("You are Failed");
}

// blank line
console.log();

// Nested if...else Statement
let marks = prompt("Enter Your Mark (0 - 100): ");

// outer if...else statement
// student passed if marks 40 or above
// otherwise, student failed

if (marks >= 40) {
  // inner if...else statement
  // Distinction if marks is 80 or above

  if (marks >= 80) {
    console.log("Distinction");
  } else {
    console.log("Passed");
  }
} else {
  console.log("Failed");
}

// blank line
console.log();

// sample 2
let timeOfTheDay = prompt("Enter the time in Hour: ");

if (timeOfTheDay > 0 && timeOfTheDay <= 24) {
  // valid

  if (timeOfTheDay > 4 && timeOfTheDay < 11) {
    console.log("Morning!");
  } else if (timeOfTheDay >= 11 && timeOfTheDay < 15) {
    console.log("Noon!");
  } else if (timeOfTheDay >= 15 && timeOfTheDay < 20) {
    console.log("Afternoon!");
  } else {
    console.log("Night!");
  }
} else {
  console.log("Enter a valid time in hour.");
}

// blank line
console.log();

/*

switch case statement

*/

// Suppose we want to display a message based on the current day of the week
let day = prompt("Enter the current day of week in numbers (1-7): ");

switch (day) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Invalid Day");
}

// switch statement
let trafficLight = prompt("Enter the traffic light color: ");
let message = "";

switch (trafficLight) {
  case "red":
    message = "Stop immediately.";
    break;
  case "yellow":
    message = "Prepare to stop.";
    break;
  case "green":
    message = "Proceed or continue driving.";
    break;
  default:
    message = "Invalid traffic light color.";
}

console.log(message);
