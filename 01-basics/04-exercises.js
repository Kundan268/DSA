// ============================================
// PHASE 1: PRACTICE EXERCISES
// ============================================
// Try to solve these exercises on your own!
// Solutions are provided at the bottom (commented out)

console.log("=== EXERCISE 1: Variables & Types ===");
// TODO: Declare variables for:
// - Your name (string)
// - Your age (number)
// - Whether you're a student (boolean)
// - Print all three with labels

// Your code here:
let name = "John";
let age=25;



console.log("\n=== EXERCISE 2: Type Conversion ===");
// TODO: Convert the string "42" to a number and store it
// TODO: Convert the number 123 to a string and store it
// TODO: Print both converted values

// Your code here:




console.log("\n=== EXERCISE 3: Arithmetic Operations ===");
// TODO: Calculate the area of a rectangle
// Length = 10, Width = 5
// Formula: area = length * width

// Your code here:




console.log("\n=== EXERCISE 4: Comparison Operators ===");
// TODO: Compare two numbers: 15 and 20
// Print: which is greater, are they equal (strict), are they equal (loose)

// Your code here:




console.log("\n=== EXERCISE 5: Logical Operators ===");
// TODO: Check if a person can drive
// Conditions: age >= 18 AND hasLicense === true
// Test with: age = 20, hasLicense = true
// Test with: age = 16, hasLicense = false

// Your code here:




console.log("\n=== EXERCISE 6: Ternary Operator ===");
// TODO: Use ternary operator to determine if a number is even or odd
// Number = 7, should print "odd"
// Number = 8, should print "even"

// Your code here:




console.log("\n=== EXERCISE 7: If-Else Statement ===");
// TODO: Write a program that checks the temperature
// If temp > 30: print "Hot"
// Else if temp > 20: print "Warm"
// Else if temp > 10: print "Cool"
// Else: print "Cold"
// Test with temp = 25

// Your code here:




console.log("\n=== EXERCISE 8: Switch Statement ===");
// TODO: Use switch to print the day name based on day number
// 1 = Monday, 2 = Tuesday, ..., 7 = Sunday
// Test with day = 3 (should print "Wednesday")

// Your code here:




console.log("\n=== EXERCISE 9: For Loop ===");
// TODO: Print numbers from 1 to 10 using a for loop

// Your code here:




console.log("\n=== EXERCISE 10: While Loop ===");
// TODO: Print numbers from 10 down to 1 using a while loop

// Your code here:




console.log("\n=== EXERCISE 11: Array Iteration ===");
// TODO: Given array [1, 2, 3, 4, 5]
// Print each number multiplied by 2

// Your code here:




console.log("\n=== EXERCISE 12: Sum of Array ===");
// TODO: Calculate the sum of [10, 20, 30, 40, 50]
// Expected result: 150

// Your code here:




console.log("\n=== EXERCISE 13: Find Maximum ===");
// TODO: Find the maximum number in [3, 7, 2, 9, 1, 4]
// Expected result: 9

// Your code here:




console.log("\n=== EXERCISE 14: Count Even Numbers ===");
// TODO: Count how many even numbers are in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected result: 5

// Your code here:




console.log("\n=== EXERCISE 15: Break and Continue ===");
// TODO: Print numbers 1-10, but:
// - Skip multiples of 3 (use continue)
// - Stop if number is 8 (use break)

// Your code here:




console.log("\n=== EXERCISE 16: Nested Loops ===");
// TODO: Print a 3x3 grid pattern:
// 1-1 1-2 1-3
// 2-1 2-2 2-3
// 3-1 3-2 3-3

// Your code here:




console.log("\n=== EXERCISE 17: FizzBuzz ===");
// TODO: Classic FizzBuzz problem
// Print numbers 1-20, but:
// - If divisible by 3: print "Fizz"
// - If divisible by 5: print "Buzz"
// - If divisible by both: print "FizzBuzz"
// - Otherwise: print the number

// Your code here:




// ============================================
// SOLUTIONS (Uncomment to see answers)
// ============================================

/*
// SOLUTION 1
let myName = "Your Name";
let myAge = 25;
let isStudent = true;
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is Student:", isStudent);

// SOLUTION 2
let strToNum = Number("42");
let numToStr = String(123);
console.log("String to Number:", strToNum);
console.log("Number to String:", numToStr);

// SOLUTION 3
let length = 10;
let width = 5;
let area = length * width;
console.log("Area:", area);

// SOLUTION 4
let num1 = 15;
let num2 = 20;
console.log("Greater:", num1 > num2 ? num1 : num2);
console.log("Strict equal:", num1 === num2);
console.log("Loose equal:", num1 == num2);

// SOLUTION 5
let age = 20;
let hasLicense = true;
let canDrive = age >= 18 && hasLicense;
console.log("Can drive:", canDrive);

// SOLUTION 6
let number = 7;
let result = number % 2 === 0 ? "even" : "odd";
console.log(result);

// SOLUTION 7
let temp = 25;
if (temp > 30) {
  console.log("Hot");
} else if (temp > 20) {
  console.log("Warm");
} else if (temp > 10) {
  console.log("Cool");
} else {
  console.log("Cold");
}

// SOLUTION 8
let dayNum = 3;
switch (dayNum) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}

// SOLUTION 9
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// SOLUTION 10
let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}

// SOLUTION 11
let arr = [1, 2, 3, 4, 5];
for (let num of arr) {
  console.log(num * 2);
}

// SOLUTION 12
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log("Sum:", sum);

// SOLUTION 13
let nums = [3, 7, 2, 9, 1, 4];
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log("Maximum:", max);

// SOLUTION 14
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenCount = 0;
for (let num of numbers) {
  if (num % 2 === 0) {
    evenCount++;
  }
}
console.log("Even count:", evenCount);

// SOLUTION 15
for (let i = 1; i <= 10; i++) {
  if (i === 8) break;
  if (i % 3 === 0) continue;
  console.log(i);
}

// SOLUTION 16
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += `${i}-${j} `;
  }
  console.log(row);
}

// SOLUTION 17
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/

