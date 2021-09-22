const prompt = require("prompt-sync")();

//#region Write a function that returns number of primary numbers below it
//Primary numbers are numbers that only be devided by itself and 1
//1,3,5,7,11…

//#region Variables

const userInput = parseInt(prompt("Please enter a positive number: "));
const lowestPrimeNumber = 2;
let isPrime = true;

//#endregion

//#region Check Prime Number

if (userInput === 1) {
  console.log("1 is neither a prime nor composite number");
} else if (userInput > 1) {
  for (let i = 2; i < userInput; i++) {
    if (userInput % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${userInput} is a prime number!`);
  } else {
    console.log(`${userInput} is not a prime number!`);
  }
}
//#endregion

//#region Log all Prime Numbers that are less than the user input functiton

console.log(`The prime numbers equal to and lower than ${userInput} are: `);

for (let i = lowestPrimeNumber; i <= userInput; i++) {
  let flag = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}

//#endregion

//#endregion

//#region Write a function that reverses a number contained of 5 digits
//rev(12345) should return 54321

const userInput2 = prompt(
  "Please enter any five digits you want reversed e.g 12345: "
);

function reverseUserInput2(userInput2) {
  return userInput2.split("").reverse().join("");
}

console.log(Number(reverseUserInput2(userInput2)));

//#endregion

//#region Write the function max that takes 2 parameters and returns the maximum number.
//Harder? Takes 3 parameters

//#endregion
