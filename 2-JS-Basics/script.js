//Lecture: variables
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
Lecture: variables 2
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
// Lecture operators
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
//Lecture: boolean logic and switch

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
//Lecture: functions
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
//Lecture: statements and expressions
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

