const name = 'sandeep';
const hobbies = 'cricket';
const job = 'web developer';
const city = 'Delhi';

// Without template string (es5)
html = '<ul> <li>name: ' + name + ' </li> <li>job: ' + job + ' </li> </ul>';

// With template literals
html = `
  <ul>
  <li>name: ${name} </li>
  <li>hobbies: ${hobbies} </li>
  <li>job: ${job} </li>
  <li>city: ${city} </li>
  <li> ${1 + 3} </li>
  <li> ${hello()} </li>
  </ul>
`;

function hello() {
  return 'hello';
}

document.body.innerHTML = html;
