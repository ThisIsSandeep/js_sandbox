// Date and Time
let val;

const today = new Date();
let birthday = new Date('8-12-1981'); // 1981-08-11
birthday = new Date('September 10 1988');
birthday = new Date('9/10/1987');

val = today.getMonth();
val = today.getDay();
val = today.getDate();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // Timestamp

birthday.setMonth(9);
birthday.setDate(3);
birthday.setFullYear(2016);

console.log(birthday);
