JavaScript Fundamentals
-----------------------

This document outlines key concepts in JavaScript:

**1\. Arrays**

An array is a versatile data structure that holds an ordered collection of items. It can store various data types, including numbers, strings, and even objects.

Here's how to work with arrays:

-   **Creating an Array:**

JavaScript

```
let fruits = ['apple', 'banana', 'mango'];

```

Use code [with caution.](/faq#coding)

-   **Accessing Elements:**

Use the index (starting from 0) to access specific elements within the array.

JavaScript

```
console.log(fruits[0]); // Output: apple

```

Use code [with caution.](/faq#coding)

-   **Array Length:**

The `length` property gives the total number of elements in the array.

JavaScript

```
console.log(fruits.length); // Output: 3

```

Use code [with caution.](/faq#coding)

-   **Adding Elements:**

The `push` method appends a new element to the end of the array.

JavaScript

```
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'mango', 'orange']

```

Use code [with caution.](/faq#coding)

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

Use code [with caution.](/faq#coding)

-   Adding new properties:

You can dynamically add new key-value pairs to an existing object.

JavaScript

```
person.job = 'Developer';
console.log(person); // Output: { name: 'John', age: 30, isEmployed: true, job: 'Developer' }

```

Use code [with caution.](/faq#coding)

**3\. Function Return**

Functions are reusable blocks of code that perform specific tasks. They can optionally return a value when they finish execution.

The `return` statement specifies the value sent back to the code that called the function.

JavaScript

```
function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(5, 10);
console.log(result); // Output: 15

```

Use code [with caution.](/faq#coding)

**4\. Asynchronous JavaScript (Async JS)**

JavaScript is single-threaded, meaning it executes one task at a time. However, for operations like network requests or file reading that take time, Async JS provides ways to handle non-blocking code.

Here are some common approaches:

**4.1 Callback Functions**

A callback function is passed as an argument to another function. The first function executes the callback function after completing its own task.

JavaScript

```
function fetchData(callback) {
  setTimeout(() => {
    callback('Data loaded');
  }, 2000);
}

fetchData((message) => {
  console.log(message); // Output after 2 seconds: Data loaded
});

```

Use code [with caution.](/faq#coding)

**4.2 Promises**

A promise is an object representing the eventual completion (resolved) or failure (rejected) of an asynchronous operation. It goes through three states: pending, resolved, or rejected.

JavaScript

```
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

```

Use code [with caution.](/faq#coding)

**4.3 Async/Await**

Async/await syntax provides a cleaner way to write asynchronous code, making it appear more synchronous.

JavaScript

```
async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data loaded'), 2000);
  });

  let result = await promise; // Wait until the promise resolves
  console.log(result); // Output after 2 seconds: Data loaded
}

fetchData();

```

Use code [with caution.](/faq#coding)

This is a basic explanation of these core JavaScript concepts. Remember to explore further to gain a deeper understanding!