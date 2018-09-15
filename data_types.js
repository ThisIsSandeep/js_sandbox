// There are two types of data in javascript
// 1- Primitive Types (Directly stored in the location variable accesses, stored on the stack)
// 2- Reference Types (Accessed by reference, Objects that are stored on the heap, A pointer to a location in the memory)

// Primitive Data Types:
// 1 String
// 2 Number
// 3 Boolean
// 4 Null
// 5 Undefined (All variables are undefined by default)
// Symbols (ES6)

// Reference Data Types / Objects
// Arrays
// Object Literals
// Functions
// Dates
// Anything Else..

// Javascript is Dynamically typed language (The same variable can hold multiple types, we do not need to specify types)
// There are supersets of JS and addons to allow static typing (TypeScript, Flow)

const name = 'Sandeep';
const gravity = 9.8;
const sym = Symbol();
console.log(typeof sym);

const hobbies = ['movies', 'music'];
const address = {
  city: 'delhi',
  street: 30
};
const today = new Date();
console.log(typeof today);
