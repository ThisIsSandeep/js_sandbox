// document.querySelector('#clear-tasks').addEventListener('click', function(e) {
//   console.log('hello world!!');
//   // e.preventDefault();
// });

document.querySelector('#clear-tasks').addEventListener('click', onclick);

function onclick(e) {
  // console.log('clicked');

  let val;
  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // e.target.innerText = 'hello';

  // Event Type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coordinate to relative to window
  val = e.clientY;
  val = e.clientX;

  // Coordinate  relative to element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
