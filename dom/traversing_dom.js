let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

val = listItem;
val = list;

// Get Child node
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// Get Children element nodes
val = list.children;
val = list.children[1];
val = list.children[1].textContent = 'hello';

// children of children
val = list.children[0].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// Count child element
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;

val = listItem.parentElement.parentElement;

// Get siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get previous siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
