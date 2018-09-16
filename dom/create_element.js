// Create element
const li = document.createElement('li');

// add a class
li.className = 'list-group-item';

// Add a id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create Text node and append
li.appendChild(document.createTextNode('Hello World!!!!'));

// Create a new button
const button = document.createElement('button');
button.className = 'btn btn-danger btn-sm float-right';
button.appendChild(document.createTextNode('Delete'));

// Append li as child to ul
document.querySelector('ul.list-group').appendChild(li);

// Appent button to li
li.appendChild(button);

console.log(li);
console.log(button);
