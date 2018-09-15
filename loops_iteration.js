// Loops and Iteration

// FOR LOOPS
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log(`2 is my fav number`);
    continue; // by continue it will go to next iteration
  }
  if (i === 5) {
    break; // by break it will stop loop
  }
  console.log(i);
}

// WHILE LOOP
let i = 0;
while (i < 10) {
  console.log(`While ${i}`);
  i++;
}

// DO WHILE LOOP (it will always run once)
let x = 1;
do {
  console.log('Do Block', x);
  x++;
} while (x < 10);

// LOOP THROUGH ARRAY
const cars = ['ford', 'bmw', 'honda'];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// FOR EACH
cars.forEach(function(car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});

// MAP
const users = [
  { id: 1, name: 'sandeep' },
  { id: 2, name: 'nik' },
  { id: 3, name: 'sam' }
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

// FOR IN LOOP
const person = {
  firstName: 'sandeep',
  lastName: 'bansal',
  age: 23
};

for (let x in person) {
  console.log(`${x} : ${person[x]}`);
}
