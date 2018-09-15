// IF STATEMENT AND COMPARISION OPERATORS

const id = 100;

// // Equal to
// if (id == 100) {
//   console.log('Correct');
// } else {
//   console.log('In correct');
// }

// // Not equal to
// if (id != 101) {
//   console.log('Correct');
// } else {
//   console.log('In correct');
// }

// // Equal to value and type
// if (id === 100) {
//   console.log('Correct');
// } else {
//   console.log('In correct');
// }

// // Not Equal to value and type
// if (id !== 100) {
//   console.log('Correct');
// } else {
//   console.log('In correct');
// }

// Test if undefined
if (typeof id !== 'undefined') {
  console.log(`ID : ${id}`);
} else {
  console.log('NO ID');
}

// IF ELSE
const color = 'yellow';

if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// Logical Operator
const name = 'mayank';
const age = 5;

// && AND both needs to be true
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 12 && age < 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR || any of these is true
if (age < 16 || age > 65) {
  console.log(`${name} can not run in a race`);
} else {
  console.log(`${name} register for a race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
