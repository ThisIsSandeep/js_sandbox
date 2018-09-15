// Object literals
const person = {
  firstName: 'sachin',
  lastName: 'tendulkar',
  age: 38,
  email: 'sachin@gmail.com',
  hobbies: ['cricket', 'football'],
  address: {
    city: 'Mumbai',
    Country: 'India'
  },
  getBirthYear: function() {
    return 2018 - this.age;
  }
};

let val;

val = person;
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.address;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'sandeep', age: 23 },
  { name: 'mayank', age: 5 },
  { name: 'naincy', age: 22 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
