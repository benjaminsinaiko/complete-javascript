// Lecture: let and const

// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age = 23;
// name6 = 'Jane Miller';
// console.log(name6);

// // ES5
// function driversLicence(passedTest) {
//   if (passedTest) {
//     console.log(firstName);
//     var firstName = 'John';
//     var yearOfBirth = 1990;
//   }
//   console.log(
//     firstName +
//       ', born in ' +
//       yearOfBirth +
//       ', is now officially allowed to drive a car.'
//   );
// }

// driversLicence(true);

// // ES6
// function driversLicence6(passedTest) {
//   // console.log(firstName);
//   let firstName;
//   const yearOfBirth = 1990;

//   if (passedTest) {
//     firstName = 'John';
//   }
//   console.log(
//     firstName +
//       ', born in ' +
//       yearOfBirth +
//       ', is now officially allowed to drive a car.'
//   );
// }

// driversLicence6(true);

// let i = 23;

// for (let i = 0; i < 5; i++) {
//   console.log(i); // 0..5
// }

// console.log(i); // 23

////////////////////////////////////////
// Lecture: Blocks and IIFEs

// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}
// console.log(a + b);
console.log(c);

// ES5
(function() {
  var d = 3;
})();

console.log(d);
