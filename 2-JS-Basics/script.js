//Lecture: Variables
/*
var name = "John";
console.log(name);

var lastName = "Smith";
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

/*

////////////////////////////////////////
Lecture: Variables 2
var name = "John";
var age = 26;

// console.log(name + age);
// console.log(age + age);

var job, isMarried;

// console.log(job);

job = "teacher";
isMarried = false;

console.log(
  name +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried +
    "."
);

age = "thirty six";
job = "driver";

console.log(
  name +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried +
    "."
);

var lastName = prompt("What is the last name?");
console.log(lastName);

alert(
  name +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried +
    "."
);
*/

/*

////////////////////////////////////////
// Lecture: Operators
var now = 2018;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2018 - 52
//1966

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

////////////////////////////////////////
//Lecture: if/else statements

/*
var name = "John";
var age = 26;
var isMarried = "yes";

if (isMarried === "yes") {
  console.log(name + " is married!");
} else {
  console.log(name + " will hopefully marry soon :)");
}

isMarried = false;

if (isMarried) {
  console.log("YES!");
} else {
  console.log("NO!");
}

if (23 === "23") {
  console.log("Something to print...");
}
*/

/*
////////////////////////////////////////
//Lecture: Boolean logic and switch

var age = 31;

if (age < 20) {
  console.log("John is a teenager");
} else if (age >= 20 && age < 30) {
  console.log("John is a young man.");
} else {
  console.log("John is a man.");
}

var job = prompt("What does John do?");

switch (job) {
  case "teacher":
    console.log("John teaches kids");
    break;
  case "driver":
    console.log("John drives a cab in Lisbon");
    break;
  case "cop":
    console.log("John helps fight crime");
    break;
  default:
    console.log("John does something else");
}
*/

////////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players wit the same score).

4. EXTRA: Add a third plaer and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution it's no problem :)
*/

/*
var player1Height = 200;
var player2Height = 200;
var player3Height = 200;

var player1Age = 20;
var player2Age = 20;
var player3Age = 20;

var player1Score = player1Height * 2 + player1Age;
var player2Score = player2Height * 2 + player2Age;
var player3Score = player3Height * 2 + player3Age;


if (player1Score > player2Score) {
  console.log("Player 1 wins with a score of " + player1Score);
} else if (player1Score < player2Score) {
  console.log("Player 2 wins with a score of " + player2Score);
} else {
  console.log("It's a tie");
}


if (player1Score > player2Score && player1Score > player3Score) {
  console.log("Player 1 wins with a score of " + player1Score);
} else if (player2Score > player1Score && player2Score > player3Score) {
  console.log("Player 2 wins with a score of " + player2Score);
} else if (player3Score > player1Score && player3Score > player2Score) {
  console.log("Player 3 wins with a score of " + player3Score);
} else {
  console.log("It's a tie");
}
*/

////////////////////////////////////////
//Lecture: Functions
/*
function calculateAge(yearOfBirth) {
  var age = 2018 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement >= 0) {
    console.log(name + " retires in " + retirement + " years.");
  } else {
    console.log(name + " is already retired.");
  }
}

yearsUntilRetirement("John", 1990);
yearsUntilRetirement("Mike", 1969);
yearsUntilRetirement("Mary", 1948);
*/

////////////////////////////////////////
//Lecture: Statements and expressions
/*
// function statment
function someFun(par) {
  //code
}
// funcion expression
var someFun2 = function(par) {
  //code
};

//Statements - do some action, peform something
if (x === 5) {
  //do something
}

//Expressons - produce a value
3 + 4;
var x = 3;
*/

////////////////////////////////////////
//Lecture: Arrays
/*
var names = ["John", "Jane", "Mark"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = "Ben";
console.log(names);

var john = ["John", "Smith", 1990, "designer", false];

john.push("blue");
john.unshift("Mr.");
john.pop();
john.shift();
console.log(john);

if (john.indexOf("teacher") === -1) {
  console.log("John is not a teacher");
}
*/

////////////////////////////////////////
//Lecture: Objects
/*
var john = {
  name: "John",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false
};

console.log(john.lastName);
console.log(john["lastName"]);

var xyz = "job";
console.log(john[xyz]);

john.lastName = "Miller";
john["job"] = "programmer";

console.log(john);

var jane = new Object();
jane.name = "jane";
jane.lastName = "Smith";
jane["yearOfBirth"] = 1969;
jane["job"] = "retired";
jane["isMarried"] = true;

console.log(jane);
*/

////////////////////////////////////////
//Lecture: Objects and methods

// v1.
/*
var john = {
  name: "John",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false,
  family: ["Jane", "Mark", "Bob"],
  calculateAge: function() {
    return 2018 - this.yearOfBirth;
  }
};

console.log(john.calculateAge());
// Objects can call functions - they're called Methods

var age = john.calculateAge();
john.age = age;
console.log(john);


// v2.0
var john = {
  name: "John",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false,
  family: ["Jane", "Mark", "Bob"],
  calculateAge: function() {
    this.age = 2018 - this.yearOfBirth;
  }
};

john.calculateAge();
console.log(john);

var mike = {
  name: "Mike",
  lastName: "Smith",
  yearOfBirth: 1950,
  job: "teacher",
  isMarried: false,
  family: ["Jane", "Mark", "Bob"],
  calculateAge: function() {
    this.age = 2018 - this.yearOfBirth;
  }
};

mike.calculateAge();
console.log(mike);
*/

////////////////////////////////////////
//Lecture: Loops
/*
for (var i = 0; i < 10; i++) {
  console.log(i);
}
*/
var names = ["John", "Jane", "Mary", "Mark", "Bob"];
/*
// for loops
for (var j = 0; j < names.length; j++) {
  console.log(names[j]);
}

for (var k = names.length - 1; k >= 0; k--) {
  console.log(names[k]);
}

// while loops
var i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}

for (var j = 1; j <= 5; j++) {
  if (j === 3) {
    break;
  }
  console.log(j);
}

for (var k = 1; k <= 5; k++) {
  if (k === 3) {
    continue;
  }
  console.log(k);
}
*/

////////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age
5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3., an 4. and returns a array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input: [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the sepcific array methods.
*/
/*
var birthYears = [2010, 2000, 1990, 1980, 1970];
var ages = [];

for (var i = 0; i < birthYears.length; i++) {
  ages.push(2018 - birthYears[i]);
}
console.log(ages);

for (var j = 0; j < ages.length; j++) {
  if (ages[j] >= 18) {
    console.log(
      "Person " +
        (j + 1) +
        " is of full age. They are " +
        ages[j] +
        " years old."
    );
  } else {
    console.log(
      "Person " +
        (j + 1) +
        " is NOT of full age. They are " +
        ages[j] +
        " years old."
    );
  }
}
*/
/*
function printFullAge(years) {
  var ages = [];
  var fullAges = [];

  for (var i = 0; i < years.length; i++) {
    ages.push(2018 - years[i]);
  }
  for (var j = 0; j < ages.length; j++) {
    if (ages[j] >= 18) {
      fullAges.push(true);
      console.log(
        "Person " +
          (j + 1) +
          " is of full age. They are " +
          ages[j] +
          " years old."
      );
    } else {
      fullAges.push(false);
      console.log(
        "Person " +
          (j + 1) +
          " is NOT of full age. They are " +
          ages[j] +
          " years old."
      );
    }
  }
  return fullAges;
}

var years = [2010, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([1965, 2008, 1992]);
*/
