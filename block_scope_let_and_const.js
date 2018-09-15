// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(`Function scope ${a} ${b} ${c}`);
}

if (true) {
  // Block Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Block Scope:', a, b, c);
}

// for (var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

console.log(`Global scope ${a} ${b} ${c}`);
test();

// Var is changed when we have same variable in global scope and block scope
