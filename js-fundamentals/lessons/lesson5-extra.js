/* 

********************************************
******** Lesson 5 - Objects (Extra) ********
********************************************

*/

/*

Basic Object

*/

const student = {
  fname: "Amirhossein",
  lname: "Moravveji",
  uid: 3455,
  intro: function () {
    console.log("Our new student is Amirhossein Moravveji");
  },
};

console.log(student.fname);
console.log(student["uid"]);
student.intro();

/*

JavaScript Method
A JavaScript method is a function defined within an object.

*/
