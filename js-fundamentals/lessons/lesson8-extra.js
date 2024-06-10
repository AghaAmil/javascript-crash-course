/* 

********************************************
***** Lesson 8 - for...in loop (Extra) *****
********************************************

*/

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
