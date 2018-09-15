const firstName = 'sandeep';
const lastName = 'bansal';
const str = 'Hello my name is sandeep bansal';
const tags = 'javascript basics, react, mongodb, oops, angular';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'mr';
val += 'sandeep';
val = 'hello' + ' ' + firstName;

// Escaping
val = "that's awesome I can't wait";

// Length
val = firstName.length;

// Concat() method
val = firstName.concat(' ', lastName);

// toUppercase()
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3];

// indexOf()
val = firstName.indexOf('d');
val = firstName.lastIndexOf('e');

// charAt()
val = firstName.charAt(5);

// get last character
val = firstName.charAt(firstName.length - 1);

// Sub string
val = firstName.substring(0, 5);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split() turns string into array based on spaces
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('sandeep', 'mayank');

// includes()
val = str.includes('sandeep');

console.log(val);
