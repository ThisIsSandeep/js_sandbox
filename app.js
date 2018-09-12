// Log to console
console.log('HELLO WORLD!!');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1, 2, 3, 4, 5]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });
console.error('This is error');
console.warn('This is warning');
// This will tell time taken by statement b/w the time with same identifier
console.time('Hello');
for (var i = 0; i < 100; i++) {
  console.log('Hello World');
}
console.timeEnd('Hello');
console.clear();

// Variables and declaration
// There are three possible keywords to define variables (var, let and const)
// We can reassign variables using var and let
var name = 'sandeep bansal';
console.log(name);
name = 'Sandy';
console.log(name);

// Init var
var nothing;
console.log(nothing);
nothing = 'Hello';
console.log(nothing);

// Rules and convention
// letters, number, _, $
// They cannot start with number (var 1num)
// We can use $ and _ in starting but not recommended (_name, $name)
// Recommended way of defining variables via camelCase (firstName)

// Let and var are almost identical at global scope but let have an advantage at block level

// Const
const gravity = 9.8;
console.log(gravity);
// gravity = 9.9; (we can't reassign const)

// Const must be assign a value at the time of defining
// const age; (we can't do this)

const person = {
  name: 'sandeep',
  age: 23
};
console.log(person);
person.name = 'sandeep bansal'; // We can change the person but we cannot reassign person
console.log(person);

const array = [1, 2, 3, 4, 5];
console.log(array);
array.push(6);
console.log(array);
