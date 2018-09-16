// ------------------- REPLACE ELEMENT --------------------

// Create Element
const newHeading = document.createElement('h1');
// Add id
newHeading.id = 'title';
// New text node
newHeading.appendChild(
  document.createTextNode('This is heading from javascript')
);

// Getting the Old heading
const oldHeading = document.querySelector('#title');
// parent (we need parent so that we can replace child)
const col = document.querySelector('.col');

// Replace
col.replaceChild(newHeading, oldHeading);

// console.log(oldHeading);
// console.log(newHeading);

// --------------------- REMOVE ELEMENT ----------------------
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
// lis[0].remove();

// Remove child element
// list.removeChild(lis[2]);

// CLASS AND ATTR
const firstli = document.querySelector('li:first-child');
const button = firstli.children[0];

let val;

val = button.className;
val = button.classList;
val = button.classList[0];
button.classList.add('test');
button.classList.remove('test');
val = button;

// Attributes
val = button.hasAttribute('href');
val = button.hasAttribute('title');
val = button.getAttribute('title');
button.setAttribute('title', 'by doing set attribute');
val = button.getAttribute('title');
button.removeAttribute('title');
val = button;

console.log(val);
