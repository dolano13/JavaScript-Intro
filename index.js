//declare var name of var = value
var myClass = "Web Development Essentials";
console.log("myClass ---->", myClass);
console.log("concatenation------", myClass + "is awesome" + 7);

var students = 9;
console.log("students------->", students);

var students = 10;
console.log(students);
//OPERATORS
var addition = 2 + 2;
console.log("addition", addition);

var subtraction = 15 - 3;
console.log("subtraction", subtraction);

var multi = 5 * 123314324;
console.log("multiplcation", multi);

var division = 34235454352 / 4;
console.log("division", division);

var expo = 12 ** 3;
console.log("expo", expo);

var modulus = 10 % 3;
console.log("modulus AKA remainder", modulus);

var allOperators = (2 ** 4 / 2 + 90 - 8) % 4;
console.log(allOperators);

//BOOLEANS
var x = 7;
var y = "7";

let equal = x === y;
console.log(equal);

var hey = 24;
var hello = 67;

let whichBigger = 67 <= 67;
console.log(whichBigger);

//CONDITIONALS
//----if statement----------------------------
var bigDogs = 10;
var smallDogs = 100;
var cats = 50;
var kittens = 5;

if (bigDogs < smallDogs && cats > kittens) {
  console.log("more bigger animals");
} else if (bigDogs === smallDogs) {
  console.log("EVEN");
} else {
  console.log("LITTTLEEES DOGS");
}
//-----switch statement-------------------
const expr = "Mangos";
switch (expr) {
  case "Oranges":
    console.log("this is an orange");
    break;
  case "watermelon":
  case "Blueberriess":
    console.log("mangos and watermelon are the BEST");
    break;
  default:
    console.log("love these in fruit salad");
}

//LOOPS
//------while loop------
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter += 1;
}
//for loop------
for (let i = 3; i <= 12; i++) {
  console.log(i);
}

//loop task #1 display a countdown from 10 to 0.
//for loop
//In this case this is the answer because we are setting i as 0, then saying we want i to be less than or equal to 10, and we want to log i for every number but counting down which is why we are using -- rather than ++

for (let i = 0; i <= 10; i--) {
  console.log(i);
}
//while loop
//In this case we are setting a variable as 10 then are creating a condition that as long as its between 10 and 0 we are going to console.log it decrementing
var countdown = 10;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
