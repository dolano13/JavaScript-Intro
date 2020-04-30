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

//CLASS 4/29
//fizzbuzz homework question:
//Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz

for (let i = 0; i <= 100; i++) {
  // if(i%3=== 0 && i%5===0){
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
//nested loop
const statement = "We are CyberEd Partners";

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    let x = 0;

    while (x < statement.length) {
      let letter = statement[x];
      if (letter === "a") {
        console.log(i + " Cheers!");
      }
      x++;
    }
  }
}

//Arrays
//empty
var animalsArr = [];
console.log(animalsArr);
//pre-populated
var dogsArr = [
  "goldens",
  "pugs",
  "pits",
  "goldens",
  "pugs",
  "pits",
  "goldens",
  "pugs",
  "pits",
  "goldens",
];
//index - find index by using [i]; index starts at 0 so the first element of your array will be '0'
console.log(dogsArr[6]);
//length
console.log(dogsArr.length);
//push -add to END of array
dogsArr.push("husky");
console.log(dogsArr);
//unshift -adds to BEGINNING of your array
dogsArr.unshift("collie");
console.log(dogsArr);
//splice - a better version of delete, takes in two parameters 1. is the index which you what to delene, 2 is how many items you will delete
dogsArr.splice([1], 7);
console.log(dogsArr);
//looping through array
//for loop example
const animalArray = ["dog", "cat", "fish", "bird", "bunny"];

for (let i = 0; i < animalArray.length; i++) {
  console.log(`Index: ${i} - element: ${animalArray[i]}`);
}
//while loop example
let counter = 0;
while (counter < animalArray.length) {
  console.log(
    `Counter (===index): ${counter} - element: ${animalArray[counter]}`
  );
  counter++;
}
//forEach SPECIFIC FOR ARRAYS - loops through EACH element
//note the arrow function (ES6)
animalArray.forEach((animal) => {
  console.log(`option 2: ${animal}`);
});

//TASK 1: SUM THE NUMBERS
let sum = 0;
const numbers = [2, 3, 6, 1, 7, 10];

for (i = 0; i < numbers.length; i++) {
  //same as sum = sum + numbers[i]
  sum += numbers[i];
}
// Log the sum
console.log(sum);

//TASK 2: AVG THE NUMBERS
for (i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
let average = sum / numbers.length;
console.log(average);

//OBJECTS
let teacher = {
  //key:value
  firstName: "Daniela",
  age: 24,
  favoriteColor: "blue",
  favoriteFood: ["frosted flakes", "choco chip cookies"],
};
//accessing values
//dot notation - BEST PRACTICE USE THIS
console.log(teacher.favoriteColor);
//whole array
console.log(teacher.favoriteFood);
//array index
console.log(teacher.favoriteFood[1]);
//bracket notation
console.log(teacher.age);

//FUNCTIONS
//declaring a function
function sayHello() {
  console.log("HELLOOOO WORLD");
}
//calling a functiion
sayHello();
//function returning value
function addNum() {
  return 80 + 50;
}
addNum();
//using values as parameters - MAKES IT REUSABLE
function sumNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

var result = sumNumbers(5, 92844124);
console.log("The result is " + result);
