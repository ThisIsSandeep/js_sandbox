// Window is the global object in client side javascript
// In client side javascript browser or window is an global environment.
// nodejs is javascript runtime that run as a standalone on system(computer system) system is the enviornment in case of nodejs while the window or the browser is the global environment in case of client side javascript
// now the cool thing is both browser and nodejs use javascript v8 engine it works the same way its just in diff envrionment

// Now the window object has a lot (like local storage, fetch api, geo location)

// WINDOW METHODS / OBJECT / PROPERTIES
// window.console.log(123);

// Alert
// window.alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm('Are You Sure?')) {
//   console.log('yes');
// } else {
//   console.log('Cancel');
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll Point
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;

// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// History Object
// val = window.history.go(-2);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
