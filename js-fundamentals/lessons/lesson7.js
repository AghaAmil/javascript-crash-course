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

// Output: Proceed or continue driving.
