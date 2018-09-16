// In Vanilla js we have 2 type of selectors
// 1. Single element (Single element allows to grab an element by it id or class and it will store one thing)
// 2. Multiple element (It get all element and give html collection)

// Single Element

// document.getElementById()
console.log(document.getElementById('task-title'));

// Get Things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change Styling
taskTitle.style.backgroundColor = 'red';
taskTitle.style.color = 'white';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// Change Content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'my Task List';
taskTitle.innerHTML = '<span class="text-dark" > Text </span>';

// querySelector is new and it more efficient
// document.querySlector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-body'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:nth-child(2)').style.color = 'purple';

document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.backgroundColor = '#ccc';
document.querySelector('li:nth-child(even)').style.backgroundColor = '#f4f4f4';

console.clear();
// DOM SELECTOR FOR MULTIPLE ELEMENTS

// document.getElementsByClassName();
const items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[1].textContent = 'Hello';

const listItems = document
  .querySelector('ul')
  .getElementsByClassName('list-group-item');

console.log(listItems);
console.clear();

// document.getElementByTagname()
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'white';
lis[1].textContent = 'Hello Save';

// Covert HTML collection into array
lis = Array.from(lis);
lis.reverse();
lis.forEach(function(li, index) {
  console.log(li.className);
  li.textContent = `Index ${index}: Hello`;
});

console.log(lis);
console.clear();

// querySelectorAll()
const lItems = document.querySelectorAll('ul.list-group li.list-group-item');

lItems.forEach(function(item) {
  console.log(item);
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach(function(li, index) {
  li.style.backgroundColor = '#ccc';
});

console.log(lItems);
