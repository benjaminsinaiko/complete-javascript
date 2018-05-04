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

// // ES6
// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }
// // console.log(a + b);
// console.log(c);

// // ES5
// (function() {
//   var d = 3;
// })();

// console.log(d);

////////////////////////////////////////
// Lecture: Strings

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
// function calculateAge(year) {
//   return 2018 - year;
// }

// // ES%
// console.log(
//   'This is ' +
//     firstName +
//     ' ' +
//     lastName +
//     '. He was born in ' +
//     yearOfBirth +
//     '. Today, he is ' +
//     calculateAge(yearOfBirth) +
//     ' years old.'
// );

// // ES6
// console.log(
//   `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calculateAge(
//     yearOfBirth
//   )} years old.`
// );

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('th'));
// console.log(n.includes(' '));
// console.log(firstName.repeat(5));
// console.log(`${firstName} `.repeat(5));

////////////////////////////////////////
// Lecture: Arrow functions - basics

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
  return 2018 - el;
});
console.log(ages5);

// ES6

// Simple
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

// More than one element
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);

// More than one line
ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
