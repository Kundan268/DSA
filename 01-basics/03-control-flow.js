// ============================================
// PHASE 1: CONTROL FLOW
// ============================================

console.log("=== IF/ELSE STATEMENTS ===");

let age = 20;

// Simple if
if (age >= 18) {
  console.log("You are an adult");
}

// If-else
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote yet");
}

// If-else if-else
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Nested if statements
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, Admin!");
  } else {
    console.log("Welcome, User!");
  }
} else {
  console.log("Please log in");
}

console.log("\n=== SWITCH STATEMENTS ===");

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Regular weekday");
}

// Switch with numbers
let month = 2;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("Other month");
}

// Switch without break (fall-through)
let num = 2;
switch (num) {
  case 1:
  case 2:
  case 3:
    console.log("Small number");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Medium number");
    break;
  default:
    console.log("Large number");
}

console.log("\n=== FOR LOOPS ===");

// Basic for loop
console.log("Counting 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Loop through array
let fruits = ["apple", "banana", "orange"];
console.log("\nFruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Reverse loop
console.log("\nCounting backwards:");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Loop with step
console.log("\nEven numbers 0 to 10:");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

console.log("\n=== WHILE LOOPS ===");

// Basic while loop
let count = 1;
console.log("While loop - counting to 5:");
while (count <= 5) {
  console.log(count);
  count++;
}

// While loop with condition
let num = 10;
console.log("\nDividing by 2 until less than 1:");
while (num >= 1) {
  console.log(num);
  num = num / 2;
}

// Infinite loop prevention (always have an exit condition!)
let counter = 0;
while (counter < 5) {
  console.log("Counter:", counter);
  counter++; // Don't forget to increment!
  // Without counter++, this would be an infinite loop!
}

console.log("\n=== DO-WHILE LOOPS ===");

// Do-while executes at least once
let x = 10;
console.log("Do-while example:");
do {
  console.log("x =", x);
  x++;
} while (x < 5); // Condition is false, but loop ran once

console.log("\n=== FOR...OF LOOPS (Arrays) ===");

let colors = ["red", "green", "blue"];
console.log("Colors:");
for (let color of colors) {
  console.log(color);
}

// Getting index with for...of
for (let [index, color] of colors.entries()) {
  console.log(`Index ${index}: ${color}`);
}

console.log("\n=== FOR...IN LOOPS (Objects) ===");

let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log("Person properties:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Note: for...in can also iterate arrays, but it's not recommended
// Use for...of for arrays, for...in for objects

console.log("\n=== BREAK STATEMENT ===");

// Break exits the loop immediately
console.log("Breaking at 3:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Exit loop when i is 3
  }
  console.log(i);
}

// Break in while loop
let num2 = 1;
while (true) { // Infinite loop
  console.log("Number:", num2);
  num2++;
  if (num2 > 3) {
    break; // Exit the loop
  }
}

console.log("\n=== CONTINUE STATEMENT ===");

// Continue skips to next iteration
console.log("Skipping even numbers (printing only odds):");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}

// Continue in while loop
let num3 = 0;
while (num3 < 10) {
  num3++;
  if (num3 % 3 === 0) {
    continue; // Skip multiples of 3
  }
  console.log(num3);
}

console.log("\n=== NESTED LOOPS ===");

// Multiplication table
console.log("Multiplication table (2x2):");
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 2D array iteration
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("\n2D Array:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

console.log("\n=== LABELED BREAKS AND CONTINUES ===");

// Labels allow breaking/continuing outer loops
outerLoop: for (let i = 1; i <= 3; i++) {
  innerLoop: for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break outerLoop; // Breaks outer loop, not just inner
    }
    console.log(`i=${i}, j=${j}`);
  }
}

console.log("\n=== PRACTICE EXAMPLES ===");

// Example 1: Find maximum in array
let numbers = [3, 7, 2, 9, 1];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Maximum number:", max);

// Example 2: Count even numbers
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let evenCount = 0;
for (let num of nums) {
  if (num % 2 === 0) {
    evenCount++;
  }
}
console.log("Even numbers count:", evenCount);

// Example 3: Sum of array
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let value of arr) {
  sum += value;
}
console.log("Sum of array:", sum);

// Example 4: Find first occurrence
let items = ["apple", "banana", "orange", "banana"];
let target = "banana";
let foundIndex = -1;

for (let i = 0; i < items.length; i++) {
  if (items[i] === target) {
    foundIndex = i;
    break; // Found it, no need to continue
  }
}
console.log(`First occurrence of "${target}" at index:`, foundIndex);

// Example 5: FizzBuzz (classic interview question)
console.log("\nFizzBuzz (1-15):");
for (let i = 1; i <= 15; i++) {
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

