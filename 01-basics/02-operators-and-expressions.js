// ============================================
// PHASE 1: OPERATORS & EXPRESSIONS
// ============================================

console.log("=== ARITHMETIC OPERATORS ===");

let a = 10;
let b = 3;

console.log("a =", a, ", b =", b);
console.log("Addition (a + b):", a + b);        // 13
console.log("Subtraction (a - b):", a - b);    // 7
console.log("Multiplication (a * b):", a * b); // 30
console.log("Division (a / b):", a / b);       // 3.333...
console.log("Modulus (a % b):", a % b);        // 1 (remainder)
console.log("Exponentiation (a ** b):", a ** b); // 1000 (10^3)

// Increment and Decrement
let count = 5;
console.log("\nIncrement/Decrement:");
console.log("count =", count);
count++; // Post-increment
console.log("After count++:", count); // 6
count--; // Post-decrement
console.log("After count--:", count); // 5
++count; // Pre-increment
console.log("After ++count:", count); // 6
--count; // Pre-decrement
console.log("After --count:", count); // 5

// Difference between post and pre
let x = 5;
let y = x++; // y = 5, x = 6 (post-increment assigns first, then increments)
console.log("\nPost-increment: y = x++");
console.log("y =", y, ", x =", x);

let m = 5;
let n = ++m; // n = 6, m = 6 (pre-increment increments first, then assigns)
console.log("Pre-increment: n = ++m");
console.log("n =", n, ", m =", m);

console.log("\n=== ASSIGNMENT OPERATORS ===");

let num = 10;
console.log("Initial num =", num);

num += 5; // num = num + 5
console.log("After num += 5:", num); // 15

num -= 3; // num = num - 3
console.log("After num -= 3:", num); // 12

num *= 2; // num = num * 2
console.log("After num *= 2:", num); // 24

num /= 4; // num = num / 4
console.log("After num /= 4:", num); // 6

num %= 4; // num = num % 4
console.log("After num %= 4:", num); // 2

num **= 3; // num = num ** 3
console.log("After num **= 3:", num); // 8

console.log("\n=== COMPARISON OPERATORS ===");

let p = 5;
let q = 5;
let r = 10;

console.log("p =", p, ", q =", q, ", r =", r);
console.log("p == q (loose equality):", p == q);   // true
console.log("p === q (strict equality):", p === q); // true
console.log("p != r (loose inequality):", p != r);  // true
console.log("p !== r (strict inequality):", p !== r); // true
console.log("p < r:", p < r);   // true
console.log("p > r:", p > r);   // false
console.log("p <= q:", p <= q); // true
console.log("p >= r:", p >= r); // false

// Important: == vs ===
console.log("\n=== == vs === (Important!) ===");
console.log("5 == '5':", 5 == '5');     // true (type coercion)
console.log("5 === '5':", 5 === '5');   // false (no type coercion)
console.log("0 == false:", 0 == false); // true (type coercion)
console.log("0 === false:", 0 === false); // false (no type coercion)
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false

// Always use === and !== for comparisons!

console.log("\n=== LOGICAL OPERATORS ===");

let isAdult = true;
let hasLicense = false;

console.log("isAdult =", isAdult, ", hasLicense =", hasLicense);

// AND (&&) - returns first falsy value or last truthy value
console.log("isAdult && hasLicense:", isAdult && hasLicense); // false
console.log("true && true:", true && true);   // true
console.log("true && false:", true && false); // false
console.log("false && true:", false && true); // false
console.log("false && false:", false && false); // false

// OR (||) - returns first truthy value or last falsy value
console.log("isAdult || hasLicense:", isAdult || hasLicense); // true
console.log("true || true:", true || true);   // true
console.log("true || false:", true || false); // true
console.log("false || true:", false || true); // true
console.log("false || false:", false || false); // false

// NOT (!) - inverts boolean
console.log("!isAdult:", !isAdult);           // false
console.log("!hasLicense:", !hasLicense);     // true
console.log("!!isAdult:", !!isAdult);        // true (double negation)

// Short-circuit evaluation
console.log("\n=== Short-circuit Evaluation ===");
let result1 = true && "Hello"; // Returns "Hello" (last truthy)
let result2 = false && "Hello"; // Returns false (first falsy)
let result3 = true || "Hello";  // Returns true (first truthy)
let result4 = false || "Hello"; // Returns "Hello" (first truthy)

console.log("true && 'Hello':", result1);
console.log("false && 'Hello':", result2);
console.log("true || 'Hello':", result3);
console.log("false || 'Hello':", result4);

console.log("\n=== TERNARY OPERATOR ===");

// Syntax: condition ? valueIfTrue : valueIfFalse
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Age:", age, "Status:", status);

// Nested ternary (use sparingly)
let score = 85;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : "F";
console.log("Score:", score, "Grade:", grade);

// Equivalent if-else:
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log("\n=== NULLISH COALESCING (??) ===");

// Returns right side only if left is null or undefined
let username = null;
let defaultName = "Guest";
let displayName = username ?? defaultName;
console.log("username ?? defaultName:", displayName); // "Guest"

let count2 = 0;
let result = count2 ?? 10; // 0 (because 0 is not null/undefined)
console.log("0 ?? 10:", result);

// vs || operator
let resultOr = count2 || 10; // 10 (because 0 is falsy)
console.log("0 || 10:", resultOr);

console.log("\n=== OPTIONAL CHAINING (?.) ===");

let person = {
  name: "John",
  address: {
    city: "New York"
  }
};

// Safe property access
console.log("person.name:", person?.name);                    // "John"
console.log("person.address?.city:", person?.address?.city); // "New York"
console.log("person.phone?.number:", person?.phone?.number); // undefined (no error!)

// Without optional chaining, this would cause an error:
// console.log(person.phone.number); // ❌ Error: Cannot read property 'number' of undefined

console.log("\n=== TYPE OPERATORS ===");

console.log("typeof 42:", typeof 42);              // "number"
console.log("typeof 'hello':", typeof 'hello');   // "string"
console.log("typeof true:", typeof true);         // "boolean"
console.log("typeof undefined:", typeof undefined); // "undefined"

// instanceof (for objects)
let arr = [1, 2, 3];
console.log("arr instanceof Array:", arr instanceof Array); // true
console.log("arr instanceof Object:", arr instanceof Object); // true

console.log("\n=== OPERATOR PRECEDENCE ===");

// Order of operations matters!
let result1 = 2 + 3 * 4;      // 14 (multiplication first)
let result2 = (2 + 3) * 4;   // 20 (parentheses first)
console.log("2 + 3 * 4 =", result1);
console.log("(2 + 3) * 4 =", result2);

// Common precedence (from highest to lowest):
// 1. Parentheses ()
// 2. Exponentiation **
// 3. *, /, %
// 4. +, -
// 5. Comparison operators (>, <, >=, <=)
// 6. Equality (==, ===, !=, !==)
// 7. Logical AND (&&)
// 8. Logical OR (||)
// 9. Assignment (=, +=, -=, etc.)

console.log("\n=== PRACTICE EXAMPLES ===");

// Example 1: Calculate total with discount
let price = 100;
let discount = 0.1; // 10%
let total = price * (1 - discount);
console.log("Price:", price, "Discount:", discount * 100 + "%", "Total:", total);

// Example 2: Check if number is even
let number = 8;
let isEven = number % 2 === 0;
console.log("Is", number, "even?", isEven);

// Example 3: Find maximum of two numbers
let num1 = 15;
let num2 = 20;
let max = num1 > num2 ? num1 : num2;
console.log("Max of", num1, "and", num2, "is", max);

// Example 4: Safe property access
let user = {
  profile: {
    email: "user@example.com"
  }
};
let email = user?.profile?.email ?? "No email";
console.log("User email:", email);

