// FUNCTION DECLARATION
function greet(firstName = 'sandeep', lastName = 'bansal') {
  return `Hello ${firstName} ${lastName} `;
}

console.log(greet());

// FUNCTION EXPRESSION
const square = function(x = 3) {
  return x * x;
};

console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSION - IIFEs
(function() {
  console.log('IIFEs Ran...');
})();

(function(name) {
  console.log(`IIFEs Ran... and name is ${name}`);
})('Sandeep Bansal');

// PROPERTY METHODS (when function inside an object is called methods)
const todo = {
  add: function() {
    console.log('Do something');
  },
  edit: function(id) {
    console.log(`Edit todo id: ${id}`);
  }
};

todo.delete = function() {
  console.log('Todo delete');
};

todo.add();
todo.edit(22);
todo.delete();
