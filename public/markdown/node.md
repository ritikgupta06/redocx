**JavaScript Fundamentals**

This document outlines key concepts in JavaScript:

**1\. Arrays**

An array is a versatile data structure that holds an ordered collection of items. It can store various data types, including numbers, strings, and even objects.

Here's how to work with arrays:

- **Creating an Array:**

JavaScript

```

let fruits = ['apple', 'banana', 'mango'];

```

Use code with caution.

- **Accessing Elements:**

Use the index (starting from 0) to access specific elements within the array.

JavaScript

console.log(fruits[0]); // Output: apple

Use code with caution.

- **Array Length:**

The length property gives the total number of elements in the array.

JavaScript

console.log(fruits.length); // Output: 3

Use code with caution.

- **Adding Elements:**

The push method appends a new element to the end of the array.

JavaScript

fruits.push('orange');

console.log(fruits); // Output: ['apple', 'banana', 'mango', 'orange']

Use code with caution.

**2\. Objects**

Objects act like containers for related data and functionality. They store information as key-value pairs.

Creating and accessing object properties:

JavaScript

```
let person = {

 name: 'John',

 age: 30,

 isEmployed: true

};

console.log(person.name); // Output: John

console.log(person['age']); // Output: 30 (alternative access using bracket notation)

```

Use code with caution.

- Adding new properties:

You can dynamically add new key-value pairs to an existing object.

JavaScript

person.job = 'Developer';

console.log(person); // Output: { name: 'John', age: 30, isEmployed: true, job: 'Developer' }

Use code with caution.

**3\. Function Return**

Functions are reusable blocks of code that perform specific tasks. They can optionally return a value when they finish execution.

The return statement specifies the value sent back to the code that called the function.

JavaScript

function addNumbers(a, b) {

return a + b;

}

let result = addNumbers(5, 10);

console.log(result); // Output: 15

Use code with caution.

**4\. Asynchronous JavaScript (Async JS)**

JavaScript is single-threaded, meaning it executes one task at a time. However, for operations like network requests or file reading that take time, Async JS provides ways to handle non-blocking code.

Here are some common approaches:

**4.1 Callback Functions**

A callback function is passed as an argument to another function. The first function executes the callback function after completing its own task.

JavaScript

function fetchData(callback) {

setTimeout(() => {

callback('Data loaded');

}, 2000);

}

fetchData((message) => {

console.log(message); // Output after 2 seconds: Data loaded

});

Use code with caution.

**4.2 Promises**

A promise is an object representing the eventual completion (resolved) or failure (rejected) of an asynchronous operation. It goes through three states: pending, resolved, or rejected.

JavaScript

let myPromise = new Promise((resolve, reject) => {

let success = true; // Simulate success

if (success) {

resolve('Promise resolved');

} else {

reject('Promise rejected');

}

});

myPromise

.then((message) => console.log(message)) // Output: Promise resolved

.catch((error) => console.log(error));

Use code with caution.

**4.3 Async/Await**

Async/await syntax provides a cleaner way to write asynchronous code, making it appear more synchronous.

JavaScript

async function fetchData() {

let promise = new Promise((resolve, reject) => {

setTimeout(() => resolve('Data loaded'), 2000);

});

let result = await promise; // Wait until the promise resolves

console.log(result); // Output after 2 seconds: Data loaded

}

fetchData();

Use code with caution.

This is a basic explanation of these core JavaScript concepts. Remember to explore further to gain a deeper understanding!

There are several ways to declare functions in JavaScript, each with its unique syntax and behavior. Let's go through them in detail:

**1\. Function Declaration**

This is the most common way to declare a function in JavaScript using the function keyword. Function declarations are hoisted, meaning you can call the function even before its declaration in the code.

**Syntax:**

javascript

Copy code

function functionName(parameters) {

// Function body

return something;

}

**Example:**

javascript

Copy code

function greet(name) {

return `Hello, ${name}!`;

}

console.log(greet('Ritik')); // Output: Hello, Ritik!

**2\. Function Expression**

In a function expression, the function is assigned to a variable. Unlike function declarations, function expressions are not hoisted, meaning you must define the function before calling it.

**Syntax:**

javascript

Copy code

const functionName = function(parameters) {

// Function body

return something;

};

**Example:**

javascript

Copy code

const add = function(a, b) {

return a + b;

};

console.log(add(5, 3)); // Output: 8

**3\. Arrow Function (ES6)**

Arrow functions provide a shorter syntax for writing functions. They do not have their own this, arguments, or super, making them useful in scenarios where function context is inherited from the parent scope. Arrow functions are not hoisted, like function expressions.

**Syntax:**

javascript

Copy code

const functionName = (parameters) => {

// Function body

return something;

};

**Example:**

javascript

Copy code

const multiply = (a, b) => {

return a \* b;

};

console.log(multiply(4, 5)); // Output: 20

When the function has only one statement, you can omit the curly braces {} and the return keyword.

**Shorter version:**

javascript

Copy code

const multiply = (a, b) => a \* b;

console.log(multiply(4, 5)); // Output: 20

For single parameters, you can omit the parentheses around the parameter.

javascript

Copy code

const square = x => x \* x;

console.log(square(6)); // Output: 36

**4\. Immediately Invoked Function Expression (IIFE)**

An IIFE is a function that is declared and immediately executed. It is often used to create a private scope to avoid polluting the global scope.

**Syntax:**

javascript

Copy code

(function() {

// Function body

})();

**Example:**

javascript

Copy code

(function() {

console.log('This is an IIFE!');

})(); // Output: This is an IIFE!

IIFE can also have parameters:

javascript

Copy code

(function(num) {

console.log(`Number: ${num}`);

})(5); // Output: Number: 5

**5\. Anonymous Function**

An anonymous function is a function without a name. It is typically used in places where you need a function just once, like event handlers or callbacks.

**Example:**

javascript

Copy code

setTimeout(function() {

console.log('This is an anonymous function!');

}, 2000); // Output after 2 seconds: This is an anonymous function!

**6\. Constructor Function (using** **new** **keyword)**

You can declare a function that serves as a constructor for creating objects. This is generally done with capitalized function names.

**Syntax:**

javascript

Copy code

function FunctionName(parameters) {

this.property = value;

}

**Example:**

javascript

Copy code

function Person(name, age) {

this.name = name;

this.age = age;

}

let person1 = new Person('John', 25);

console.log(person1.name); // Output: John

**7\. Generator Function**

A generator function is declared using the function\* syntax. It can pause execution using the yield keyword and can be resumed later.

**Syntax:**

javascript

Copy code

function\* generatorFunction() {

yield value;

}

**Example:**

javascript

Copy code

function\* generateNumbers() {

yield 1;

yield 2;

yield 3;

}

let generator = generateNumbers();

console.log(generator.next().value); // Output: 1

console.log(generator.next().value); // Output: 2

console.log(generator.next().value); // Output: 3

**8\. Method Definition in an Object**

Functions can also be defined as methods inside an object. This is commonly used in object-oriented programming.

**Syntax:**

javascript

Copy code

const obj = {

methodName() {

// Method body

}

};

**Example:**

javascript

Copy code

const car = {

brand: 'Tesla',

getBrand() {

return this.brand;

}

};

console.log(car.getBrand()); // Output: Tesla

**Summary of Function Declaration Ways:**

1.  **Function Declaration**: function functionName() {...}
2.  **Function Expression**: const functionName = function() {...};
3.  **Arrow Function**: const functionName = (parameters) => {...};
4.  **IIFE**: (function() {...})();
5.  **Anonymous Function**: function() {...}
6.  **Constructor Function**: function FunctionName() {...}
7.  **Generator Function**: function\* functionName() {...}
8.  **Method in Object**: { methodName() {...} }
