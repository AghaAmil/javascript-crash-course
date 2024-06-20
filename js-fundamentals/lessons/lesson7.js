/*

********************************************
****** Lesson 7 - if, else statement *******
********************************************

*/

/*

if, else statement

*/

// sample 1
let yourMark = 99;

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
let marks = 60;

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

// Output: Passed

// blank line
console.log();

// sample 2
let timeOfTheDay = 19;

if (timeOfTheDay >= 6 && timeOfTheDay <= 12) {
  console.log("Good Morning To You");
} else if (timeOfTheDay > 12 && timeOfTheDay <= 18) {
  console.log("Good Afternoon To You");
} else if (timeOfTheDay > 18 && timeOfTheDay <= 24) {
  console.log("Good Night To You");
} else {
  console.log("Enter a Valid Time");
}

// blank line
console.log();

/*

switch case statement

*/

// Suppose we want to display a message based on the current day of the week
let day = 3;
let activity;

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
let trafficLight = "green";
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
