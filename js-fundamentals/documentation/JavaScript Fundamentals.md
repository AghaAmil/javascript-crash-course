# 0. Introduction
## 0.1 About
JavaScript is a versatile, high-level programming language that is widely supported across all major operating systems. To run JavaScript code, your system should have Node.js installed.

## 0.2 System Setup and Preparation
- Install Node.js
- Install git
- Install the IDE (VS Code)
	- Install required Extensions
	- List of the extensions:
		- HTML Boilerplate
		- HTML CSS Support
		- JavaScript (ES6) code snippets
		- Prettier - Code formatter
		- Code Runner
-  Create the project repository in the Github
- Clone the Project

[VsCode format on save](https://www.robinwieruch.de/how-to-use-prettier-vscode/)


## 0.3 Github & SSH Generation
If you have an existing SSH key, you can use the key to authenticate Git operations over SSH.
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys

This is explain in the video of the course
[Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) 


## 0.3 Setup In Project Folder
Initiate the Node.js in the main repository of project using npm (Node Package Manager)
```javascript
npm init
```

*package.josn* is the configuration file for the node.js application. **We use the default values**.

below parameters needs to be added to *package.josn* file in order to use externals libraries that we are going to use with our project:
```json
"dependencies": {},
"devDependencies": {}
```

So the whole *package.josn*  file would be like
```json
{
	"name": "js-fundamentals",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},

	"author": "",
	"license": "ISC",
	"dependencies": {},
	"devDependencies": {}
}
```

## 0.4 Installing promp-sync
The [`prompt-sync` Node module](https://github.com/heapwolf/prompt-sync) provides an easy-to-use alternative to this callback-based syntax.
1. Make sure you have Node and NPM installed
2. Run `npm install prompt-sync` in the terminal

```javascript
const prompt = require('prompt-sync')();
```

Notice the extra `()` after `require()`. The `prompt-sync` module is a function that creates prompting functions, so you need to call `prompt-sync` in order to get your actual prompting function.

Once you’ve loaded the `prompt-sync` module and called it, using it to retrieve user input is relatively straightforward:

```javascript
const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);
```
The `prompt()` function returns the user feedback, so simply store that return value to a variable to use it later. In the example above, the `name` variable stores the value, and it is then repeated to the user on the next line.

## 0.5 Running JS Codes
Because of its wide range of applications, you can run JavaScript in several ways:
- Using console tab of web browsers
- Using Node.js
- By creating web pages

JavaScript is a programming language that runs in web browsers. Most websites use JavaScript and when things go wrong, web developers use the console to investigate errors.

# 1.0 Hello World!
## 1.1 Logging Messages
The console is part of the web browser. **Logging** (writing) messages to the console is a good way to diagnose and troubleshoot minor issues in your code.
You can use **console.log()** to write or **log** messages. In the example code below, the message 'All good, no errors' is sent to the console.

Syntax of JavaScript **console.log()**
```javascript
console.log(message);
```
Here, message is a value or a variable whose value is to be printed to the console.

## 1.2 JavaScript Comments
JavaScript comments are annotations in the code that are completely ignored by the compiler.
In JavaScript, there are two ways to add comments to code:
1. `//` - Single-Line Comments
2. `/* */` - Multiline Comments

> [!Note]
> Remember the shortcut for using comments; it can be extremely helpful. For most code editors, it's `Ctrl + /` for Windows and `Cmd + /` for Mac.

# 2.0 Variables
A JavaScript variable is a container for storing data.
In JS variables first declared and then Initialize. Below are the different types of JS variables:
- var
- let
- const

## 2.1 Difference between `var` and `let`
Here's the overview of the differences between `let` and `var`.

| let                                        | var                                |
| ------------------------------------------ | ---------------------------------- |
| let is block-scoped.                       | var is function scoped.            |
| let does not allow to redeclare variables. | var allows to redeclare variables. |
| Hoisting does not occur in let.            | Hoisting occurs in var.            |
[Comprehensive comparison](https://codedamn.com/news/javascript/difference-between-let-and-var-in-javascript) 

## 2.2 Variable Naming Rules
1. The first character of a variable name **must be** a letter, underscore **`_`**, or a dollar sign **`$`** (Subsequent characters can be letters, digits, underscores, or dollar signs).
2. The first character of a variable name **can’t** be a number.
3. Variable names **can’t** include a **mathematical or logical operator** in their name. For instance, `2*something` or `this+that`;
4. Variable names **can’t contain spaces.**
5. You’re not allowed to use any special symbols, like my#num, num%, etc.
6. It’s super important to remember that JavaScript variable names are case-sensitive, for example, **Name** and **name** variables are different

# 3.0 DataTypes
Data types represent the different kinds of values we can use in JavaScript.
There are eight basic data types in JavaScript. They are:

| Data Types  | Description                                        | Example                           |
| ----------- | -------------------------------------------------- | --------------------------------- |
| `String`    | A string represents textual data.                  | `'hello'`, `"hello world!"` etc   |
| `Number`    | an integer or a floating-point number              | `3`, `3.234`, `3e-2` etc.         |
| `BigInt`    | an integer with arbitrary precision                | `900719925124740999n` , `1n` etc. |
| `Boolean`   | Any of two values: true or false                   | `true` and `false`                |
| `undefined` | a data type whose variable is not initialized      | `let a;`                          |
| `null`      | denotes a `null` value                             | `let a = null;`                   |
| `Symbol`    | data type whose instances are unique and immutable | `let value = Symbol('hello');`    |
| `Object`    | key-value pairs of collection of data              | `let student = { };`              |
## 3.1 Strings
A string represents textual data. It contains a sequence of characters.
In JavaScript, strings are surrounded by quotes:
- **Single quotes:** `'Hello'`
- **Double quotes:** `"Hello"`
- **Backticks:** `` `Hello` ``

## 3.2 Numbers
In JavaScript, the **number** type represents numeric values (both integers and floating-point numbers).

- **Integers** - Numeric values without any decimal parts. Example: **3**, **-74**, etc.
- **Floating-Point** - Numeric values with decimal parts. Example: **3.15**, **-1.3**, etc.

## 3.3 Booleans
In JavaScript, booleans are the primitive data types that can either be `true` or `false`.

## 3.4 Null
In JavaScript, `null` is a special value that represents an **empty** or **unknown value**.
In JavaScript, `null` is treated as an object.

## 3.5 Undefined
If a variable is declared but the value is not assigned, then the value of that variable will be `undefined`.
### 3.5.1 Practical Use Cases of undefined values
- Handle optional function parameters.
- Check if an object property exists before accessing it.
- Detect uninitialized variables during debugging.
Remember, understanding `undefined` is essential for writing reliable and bug-free JavaScript code!

# 4.0 Concatenation & Interpolation
In JavaScript, you can combine strings and variables in `console.log()` using the following methods:
**Using Substitution Strings**
```javascript
let count = 5;

console.log("There are %d items in your basket.", count);

// Output: There are 5 items in your basket.
```
In this example, we used the substitution string `%d` in `console.log()` to insert the value of the count variable into the printed message.
Here, `%d` is a placeholder for a decimal or integer number.

In a string, we can either use single quotes or double quotes. However, it is recommended to use double quotes.
Backticks are generally used when you need to insert variables or expressions into a string. This is done by wrapping variables or expressions with `${variable or expression}`.

```javascript
// strings example
let name1 = 'Peter';
let name2 = "Jack";
let result = `The names are ${name1} and ${name2}`;

console.log(result);

// Output: The names are Peter and Jack
```

You can access the characters in a string in two ways:
1. **Using Indexes**
2. **Using the charAt() Method**

JavaScript strings have some interesting features. The most important of these features are:
1. **JavaScript Strings are Immutable**
2. **JavaScript Strings are Case-Sensitive**

# 5.0 Comparison Operators
## 5.1 Comparison Operators
Comparison operators **compare** two values and return a boolean value (`true` or `false`).
Some commonly used comparison operators in JavaScript are:

| Operator | Meaning                  | Example              |
| -------- | ------------------------ | -------------------- |
| `==`     | Equal to                 | `3 == 5 // false`    |
| `!=`     | Not equal to             | `3 != 4 // true`     |
| `===`    | Strictly equal to        | `3 === "3" // false` |
| `!==`    | Strictly not equal to    | `3 !== "3" // true`  |
| `>`      | Greater than             | `4 > 4 // false`     |
| `<`      | Less than                | `3 < 3 // false`     |
| `>=`     | Greater than or equal to | `4 >= 4 // true`     |
| `<=`     | Less than or equal to    | `3 <= 3 // true`     |

> [!Note]
> In JavaScript, `==` is a comparison operator, whereas `=` is an assignment operator. If you mistakenly use `=` instead of `==`, you might get unexpected results.

The `==` (equality) operator only checks the values of the operands and not their types.
However, the `===` (strict equality) operator checks both the values and types of the operands. 
```javascript
// only checks the values
console.log(2 == "2");  // true

// checks both the values and the types
console.log(2 === "2");  // false
```

##  5.2 Logical Operators
Logical operators perform logical operations and manipulate boolean values.
The commonly used logical operators in JavaScript are:

| Operator           | Syntax                       | Description                                                    |
| ------------------ | ---------------------------- | -------------------------------------------------------------- |
| `&&` (Logical AND) | `expression1 && expression2` | `true` only if both `expression1` and `expression2` are `true` |
| `\|` (Logical OR)  | `expression1 \| expression2` | `true` if either `expression1` or `expression2` is `true`      |
| `!` (Logical NOT)  | `!expression`                | `false` if `expression` is `true` and vice versa               |

# 6.0 if...else, switch Statement
The JavaScript `if...else` statement is used to execute/skip a block of code based on a condition.

## 6.1 if statement
We use the `if` keyword to execute code based on some specific condition.
```javascript
if (condition) {
    // block of code
}
```
![Pasted image 20240620194706](https://github.com/user-attachments/assets/684e61d2-75b6-4551-b964-8c6e2863733f)


## 6.2 Else Statement
We use the `else` keyword to execute code when the condition specified in the preceding `if` statement evaluates to `false`.
```javascript
if (condition) {
    // block of code
    // execute this if condition is true
}
else {
    // block of code
    // execute this if condition is false
}
```
![Pasted image 20240620194842](https://github.com/user-attachments/assets/436bb930-7152-4ac3-8ddb-f3550386d6ed)


## 6.3 else if Statement
We can use the `else if` keyword to check for multiple conditions.
```javascript
// check for first condition
if (condition1) {
    // if body
}

// check for second condition
else if (condition2){
    // else if body
}

// if no condition matches
else {
    // else body
}
```
![Pasted image 20240620194953](https://github.com/user-attachments/assets/f5915a27-73c2-4e18-9292-c591e7d03b12)


## 6.4 switch...case Statement
The JavaScript `switch...case` statement executes different blocks of code based on the value of a given expression.
```javascript
switch (expression) {

    case value1:
        // code block to be executed
        // if expression matches value1
        break;

    case value2:
        // code block to be executed
        // if expression matches value2
        break;

    ...

    default:
        // code block to be executed
        // if expression doesn't match any case
}
```
![Pasted image 20240620204551](https://github.com/user-attachments/assets/65e4751f-c5d6-4bf6-97fe-b65d4e3a7d0a)


# 7.0 Loops
## 7.1 for loop
In JavaScript, the `for` loop is used for iterating over a block of code a certain number of times, or to iterate over the elements of an array.

```javascript
for (initialExpression; condition; updateExpression) {
    // for loop body
}
```
- `initialExpression` - Initializes a counter variable.
- `condition` - The condition to be evaluated. If `true`, the body of the `for` loop is executed.
- `updateExpression` - Updates the value of `initialExpression`.

Once an iteration of the loop is completed, the `condition` is evaluated again. The process continues until the condition is `false`.

![[forLoopFlow.png]]

Omitting Parts of the for Loop
```javascript
// initialization outside the loop
let i = 0;

// omit initialization and update statements
for (; i < 3; ) {

    console.log(`i is ${i}`);

    // increment inside the loop body
    i++; 
}
```

## 7.2 while loop Structure
The `while` loop repeatedly executes a block of code as long as a specified condition is `true`.
While loop is best suited to be used when you do not know the **number of iterations need to reach the result** and the only condition is known.
```javascript
while (condition) {
    // body of loop
}
```

![[whileLoopFlow.png]]

- The `break` statement terminates the loop immediately when it's encountered.
- The `continue` statement skips the current iteration of the loop and proceeds to the next iteration.

## 7.3 break Statement
The `break` statement terminates the loop immediately when it's encountered.
![Pasted image 20240620205803](https://github.com/user-attachments/assets/8dbf25bb-fcbe-4570-9814-0ef5961aa237)

> [!NOTE]
> The `break` statement is usually used inside decision-making statements such as if...else.

## 7.4 continue Statement
The `continue` statement skips the current iteration of the loop and proceeds to the next iteration.
![Pasted image 20240620222339](https://github.com/user-attachments/assets/3a6d68c3-02cd-4401-bf59-3ec481a83e8a)


# 8.0 Functions
A function is an independent block of code that performs a specific task, while a function expression is a way to store functions in variables.
We can create a function in JavaScript using the `function` keyword:
![Pasted image 20240625203645](https://github.com/user-attachments/assets/d6e30742-0572-4c06-a674-4cb88e04e061)
Here, we have created a simple function named `greet()` that prints `Hello World!` on the screen.
Our function contains the following parts:
- **Function Keyword** - The `function` keyword is used to create the function.
- **Function Name** - The name of the function is `greet`, followed by parentheses `()`.
- **Function Body** - The code that is executed when we call the function. In our case, it is `console.log("Hello World!");`

> [!Note] 
> We can see that functions provide the following benefits:
> - **Reusable Code**: Since functions are independent blocks of code, you can declare a function once and use it multiple times.
> -  **Organized Code:** Dividing small tasks into different functions makes our code easy to organize.
> - **Readability:** Functions increase readability by reducing redundancy and improving the structure of our code.

Creating a function doesn't mean we are executing the code inside it. In other words, the function is ready and available for us to execute whenever we choose. And if we want to use the function, we need to call it.
As you can see, we call a function by writing the function name (`func name`) followed by parentheses `()`.

## 8.1 Function Arguments
Arguments are values you pass to the function when you call it.
```javascript
// function with a parameter called 'name'
function greet(name) {
    console.log(`Hello ${name}`);
}

// pass argument to the function
greet("John");

// Output: Hello John
```
In the above example, we passed `"John"` as an argument to the `greet()` function.
![Pasted image 20240717120634](https://github.com/user-attachments/assets/7dea3afb-eef9-43cb-b6de-9954351e1370)
Notice the name variable declared inside parentheses:
Here, name is a **function parameter**, which acts as a placeholder to store the function argument.
In other words, the argument `"John"` is stored in the name parameter.
> [!NOTE] Remember
> A function argument is the value we pass to the function, while a function parameter is a placeholder that stores the argument passed to the function.

**Pass Different Arguments to the Function**
We can pass different arguments in each call, making the function re-usable and dynamic.
```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}

// pass "John" as argument
greet("John");

// pass "David" as argument
greet("David");
```
Output
```
Hello John
Hello David
```

## 8.2 The Return Statement
We can return a value from a JavaScript function using the `return` statement.
```javascript
// function to find square of a number
function findSquare(num) {

    // return square
    return num * num; 
}

// call the function and store the result
let square = findSquare(3);

console.log(`Square: ${square}`);

// output
// Square: 9
```

In the above example, we have created a function named `findSquare()`. The function accepts a number and returns the square of the number.
In our case, we passed **3** as an argument to the function. So, the function returns the square of **3**, which is **9**, to the function call.
We then stored this return value in the square variable and printed it.
![Pasted image 20240717121042](https://github.com/user-attachments/assets/3076bff6-4459-4fc5-bff2-73552d806b25)

Any code written in the function after the `return` statement is not executed. For example:
![Pasted image 20240717121142](https://github.com/user-attachments/assets/bad4432a-497b-4116-89ae-84987bd0aa97)

In this example, the `display()` function doesn't execute the second `console.log()` statement inside it.
This is because the function execution stops at the `return` statement. So, the following code is never reached:
```javascript
console.log("This will not be executed.");
```
This is what actually happens:
1. First, the function prints `This will be executed.` to the screen.
2. Then, it returns the string `Returning from function.` to the function call.
3. Finally, the function terminates its execution.
4. The return value is then stored in the message variable and printed.

## 8.3 Function Expression
In JavaScript, a function expression is a way to store functions in variables. For example:
```javascript
// store a function in the square variable
let square = function(num) {
    return num * num;
};

console.log(square(5));  

// Output: 25
```
In this example, the function that calculates the square of a number is assigned to the square variable.
We then used this variable to call the function expression using the code `square(5)`, where **5** is the function argument.

> [!NOTE] 
> Like with functions, we need to use parentheses `()` with the variable name to call a function expression.

## 8.4 Arrow Functions
JavaScript arrow functions are a concise syntax for writing function expressions.
The syntax of the arrow function is:
```javascript
let myFunction = (arg1, arg2, ...argN) => {
    statement(s)
}
```
Here,
- `myFunction` is the name of the function.
- `arg1, arg2, ...argN` are the function arguments.
- `statement(s)` is the function body.

If the body has single statement or expression, you can write the arrow function as:
```javascript
let myFunction = (arg1, arg2, ...argN) => expression
```

> [!NOTE] Note
> Arrow functions were introduced in ES6. Some browsers may not support the use of arrow functions. Visit [JavaScript Arrow Function support](https://caniuse.com/#search=arrow%20functions) to learn more.

**this Keyword With Arrow Function**
Inside a regular function, this keyword refers to the function where it is called.
However, `this` is not associated with arrow functions. So, whenever you call `this`, it refers to its parent scope. For example,

```javascript
// constructor function
function Person() {

    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);

        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();
```
Output
```
25
25
```
Here, the `innerFunc()` function is an arrow function.
And inside the arrow function, `this` refers to the parent's scope, i.e., the scope of the `Person()` function. Hence, `this.age` gives **25**.

## 8. 5 this
In JavaScript, `this` keyword refers to the object where it is called.

In JavaScript, constructor functions are used to create objects. When a function is used as a constructor function, `this` refers to the object inside which it is used. For example,
``` javascript
function Person() {

    this.name = 'Jack';
    console.log(this);

}

let person1 = new Person();
console.log(person1.name);
```
Output
```
Person {name: "Jack"}
Jack
```
Here, `this` refers to the person1 object. That's why, `person1.name` gives us Jack.


# 9.0 Object
JavaScript object is a non-primitive data-type that allows you to store multiple collections of data in **key-value** pairs.
The syntax of JavaScript object is:
```javascript
const objectName = {
    key1: value1,
    key2: value2,
    ...,
    keyN: valueN
};
```
Here,
- `objectName` - Name of the object.
- `key1: value1` - The first key-value pair.
- `key2: value2` - The second key-value pair.
- `keyN: valueN` - The `Nth` key-value pair.

Each key-value pair has a colon `:` between them and is separated by a comma `,`.

In JavaScript, the key-value pairs of an object are referred to as **properties**. For example:
![Uploading Pasted image 20240521175919.png…]()

Each member of an object is a **key: value** pair separated by commas and enclosed in curly braces `{}`.
In JavaScript, "key: value" pairs are called **properties**. You can access the **value** of a property by using its **key**.

# 10. Arrays
An array is an object that can store multiple values at once. We can create an array by placing elements inside an array literal `[]`, separated by commas.
```javascript
const age = [17, 18, 15, 19, 14];
```
In the above example, we created an array to record the age of five students.
![Pasted image 20240627204840](https://github.com/user-attachments/assets/98b9d7bf-1f7b-4420-acc0-ef5db8dec313)

Arrays allow us to organize related data by grouping them within a single variable.
Suppose you want to store a list of fruits. Using only variables, this process might look like this:
```javascript 
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Orange";
```
Here, we've only listed a few fruits. But what if we need to store **100** fruits?
For such a case, the easiest solution is to store them in an array.
```javascript
let fruits = ["Apple", "Banana", "Orange", ...];
```
An array can store many values in a single variable, making it easy to access them by referring to the corresponding index number.

Each element of an array is associated with a number called an **index**, which specifies its position inside the array.
Consider the following array:
```javascript
let numbers = [10, 30, 40, 60, 80];
```
Here is the indexing of each element:
We can use an array index to access the elements of the array.

| Code         | Description                         |
| ------------ | ----------------------------------- |
| `numbers[0]` | Accesses the first element **10**.  |
| `numbers[1]` | Accesses the second element **30**. |
| `numbers[2]` | Accesses the third element **40**.  |
| `numbers[3]` | Accesses the fourth element **60**. |
| `numbers[4]` | Accesses the fifth element **80**.  |

Let's look at an example.
```javascript
let numbers = [10, 30, 40, 60, 80]

// access first element
console.log(numbers[0]);  // 10

// access third element
console.log(numbers[2]);  // 40
```

> [!NOTE] Remember
>  Array indexes always start with **0**, not **1.**

## 10.1 Multidimensional Array
In JavaScript, multidimensional arrays contain another array inside them.
``` javascript
// multidimensional array
// contains 3 separate arrays as elements
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

console.log(data);

// Output : [ [ 1, 2, 3 ], [ 1, 3, 4 ], [ 4, 5, 6 ] ]
```
We can also create multidimensional arrays by nesting existing arrays within them. For example,
```javascript
// declare three arrays
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// create multidimensional array
// using student1, student2, and student3
let studentsData = [student1, student2, student3];

// print the multidimensional array
console.log(studentsData);

// Output: [ [ 'Jack', 24 ], [ 'Sara', 23 ], [ 'Peter', 24 ] ]
```

Here, we first created three arrays named student1, student2, and student3.
We then nested these three arrays within the studentsData array to create our multidimensional array:
```javascript
let studentsData = [student1, student2, student3];
```

**Access Elements of an Array**
You can access the elements of a multidimensional array using array indexes. For example,
```javascript
let x = [
['Jack', 24],
['Sara', 23], 
['Peter', 24]
];

// access the first item 
console.log(x[0]);  // [ 'Jack', 24 ]

// access the first item of the first inner array
console.log(x[0][0]);  // Jack

// access the second item of the third inner array
console.log(x[2][1]);  // 24
```
Output
```javascript
[ 'Jack', 24 ]
Jack
24
```
You can think of a multidimensional array (in this case, x), as a table with **3** rows and **2** columns.
<img width="387" alt="Pasted image 20240717140048" src="https://github.com/user-attachments/assets/9486b19b-a2a8-4387-80ab-4a2d0e99ecbd">


# 11.0 Classes
In JavaScript ES6, classes provide a way to create blueprints for objects, similar to traditional object-oriented programming languages like C++ or Java.
Let's explore a simple example by creating a `Person` class:
```javascript
// define a class named 'Person'
class Person {
    // class constructor to initialize the 'name' and 'age' properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // method to display a message
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// create two instances of the Person class
let person1 = new Person("Jack", 30);
let person2 = new Person("Tina", 33);

// call greet() method on two instances 
person1.greet();
person2.greet();
```
Output
```
Hello, my name is Jack and I am 30 years old.
Hello, my name is Tina and I am 33 years old.
```

In the above example, we have defined a `Person` class using the `class` keyword.
Inside `Person`, we have defined:
- a class constructor that initializes the `name` and `age` properties
- a `greet()` method that displays a greeting message using the `name` and `age` properties.

Using the `new` keyword, we have created two objects of the `Person` class- `person1` and `person2`.
We have then called the `greet()` method on `person1` and `person2` using the `.` operator:
- `person1.greet()` - calls `greet()` on `person1`
- `person2.greet()` - calls `greet()` on `person2`

## 11.1 Create Objects Without Classes
In JavaScript, you have the flexibility to create objects directly without the use of formal class definitions. This can be achieved by using object literals.
Let's look at the example below:
```javascript
// create an object 'person' without a formal class definition
let person = {
    name: "Jack",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
};

// call the greet() method on the person object
person.greet(); 
```
Output
```
Hello, my name is Jack and I am 30 years old.
```
In the above example, we have created an object named `person` directly using an object literal.
The `person` object has:
- properties - `name` and `age` with values `"Jack"` and **30** respectively.
- method - `greet()` that displays a greeting message.
We have called the `greet()` method on `person` using the `.` operator as `person.greet()`.

## 11.2 Features of Javascript Classes
Let's revisit the code from the beginning of the tutorial and explore each part in detail to gain a deeper understanding of how classes work in JavaScript.
```javascript
// define a class named 'Person'
class Person {
    // class constructor to initialize the 'name' and 'age' properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // method to display a message
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// create two instances of the Person class
let person1 = new Person("Jack", 30);
let person2 = new Person("Tina", 33);

// call greet() method on two instances 
person1.greet();
person2.greet();
```
Output
```
Hello, my name is Jack and I am 30 years old.
Hello, my name is Tina and I am 33 years old.
```

**Create a class**
In JavaScript, we create a class using the `class` keyword. For example,
```javascript
// create a class
class Person {
    // body of class
};
```

**Class Constructor**
A class constructor is a special method within a class that is automatically executed when a new object of that class is created.
The `Person` class constructor initializes the `name` and `age` properties when a new object is created.
Here,
- the `person1` object is initialized with `"Jack"` and **30**
- the `person2` object is initialized with `"Tina"` and **33**

![Pasted image 20240717123005](https://github.com/user-attachments/assets/c7dc7cd6-13d3-490b-ab9f-fb254943fb76)

**Class Method**
A class method is a function inside a class that defines behaviors for the class's objects.
![Pasted image 20240717123053](https://github.com/user-attachments/assets/4b96a4cc-eefc-4c59-829d-1afac41ce84b)
Here, `greet()` is a method of the `Person` class that displays a greeting message when called on objects of the class.

# ES6
**JavaScript ES6** (also known as **ECMAScript2015** or **ECMAScript6**) is the sixth edition of JavaScript introduced in June 2015.
[ECMAScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources) (European Computer Manufacturers Association Script) is the standard specification of JavaScript to ensure compatibility in all browsers and environments.


https://www.codecademy.com/article/getting-user-input-in-node-js


https://stackoverflow.com/questions/65852175/convert-prompt-sync-require-into-import-method
