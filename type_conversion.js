// TYPE CONVERSION
let val;

// Number to String
val = String(221);
val = String(4 + 4);

// Boolean to string
val = String(true);

// Date to string
val = String(new Date());

// Array to String
val = String([1, 2, 4, 5]);

// toString()
val = (5).toString();
val = true.toString();

// String to Numbers
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1, 2, 3, 4]);

val = parseInt('100.30');
val = parseFloat('100.20');

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // Length only works with string
console.log(val.toFixed(2)); // toFixed only works with number type

// TYPE COVERSION (Javascript engine changes the type implicitly)
val1 = String(5);
val2 = 6;
sum = val1 + val2;
console.log(sum);
console.log(typeof sum);
