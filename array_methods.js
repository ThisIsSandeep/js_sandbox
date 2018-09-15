// Array Methods
const numbers = [12, 25, 34, 14, 51];
const numbers2 = new Array(23, 34, 56, 67);
const fruits = ['orange', 'apple'];
const mixed = ['hello', 1, true, null, undefined, { a: 1, b: 2 }, new Date()];

let val;

// Array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get a single value from array
val = numbers[3];
// Insert into array
numbers[2] = 1000;
// Findex index of value
val = numbers.indexOf(14);

// MUTATING ARRAYS
// Add on to end
numbers.push(90);
// Add on to front
numbers.unshift(0);
// Take of from end
numbers.pop();
// Take of from front
numbers.shift();
// Splice values
numbers.splice(2, 1);
// Reverse array
numbers.reverse();

// CONCATENATE ARRAYS
val = numbers.concat(numbers2);

// SORT AARRAY
val = fruits.sort();

// Sort array by number
const numArray = [23, 45, 100, 115, 34, 18, 9];
numArray.sort(); // This will only sort by using first value to solve this we need to use a callback function
numArray.sort(function(x, y) {
  return x - y;
});

// reverse sort
numArray.sort(function(x, y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);
console.log(numArray);
