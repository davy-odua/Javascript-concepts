//Conditionals

let hasMembership = false;
let signedIn = true;

if (hasMembership === true) {
  console.log("Show user the video");
} else if (signedIn) {
  console.log("Tell user to upgrade their account");
} else {
  console.log("Tell user to log in");
}

let age = 21;

if (age > 18) {
  console.log(`You are ${age} years old. You can enter`);
} 
else if (age === 18) {
  console.log("You just turned 18. Welcome");
} 
else {
  console.log(`You are ${age} years old. You cannot enter`);
}

// Comparison operators with conditionals

// Logcal operators
// && - And   || - or operator

let age1 = 18
let hasId = false

if (age >= 18 && hasId){
    console.log(`You may enter`)
}
else {
    console.log(`You cannot enter`)
}


// Falsey Values - Is any value which gives a false when converted into a boolean
// Includes - undefined, null, NaN, 0, ""(Empty string), false

// Truthy Values - Is any value which gives a true when converted into a boolean
// Includes- all numbers, strings, arrays and objects



// TERNARY OPERATORS
// Are a shortcut way to write an if else statement


let age3 = 8;
let hasCard = true;

allowed = age3 > 18 || hasCard ? `You are ${age3} years old. You can enter` : `You are ${age3} years old. You cannot enter`
console.log(allowed)

let loggedIn = false;
let hasMembership1 = true;

allowed2 = loggedIn && hasMembership1? 
    `Show the video`
    :`Do not show the video`
console.log(allowed2)





