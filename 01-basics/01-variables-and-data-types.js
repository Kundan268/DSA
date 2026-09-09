// ============================================
// PHASE 1: VARIABLES & DATA TYPES
// ============================================

console.log("=== VARIABLES ===");

// 1. VAR (Old way - avoid using this)
var oldVariable = "I'm old";
console.log("var example:", oldVariable);

// 2. LET (Use for variables that can change)
let changeableValue = 10;
console.log("let before:", changeableValue);
changeableValue = 20; // Can be reassigned
console.log("let after:", changeableValue);

// 3. CONST (Use for values that won't change)
const constantValue = "I never change";
console.log("const:", constantValue);
// constantValue = "new value"; // ❌ This will cause an error!

// Note: const doesn't make objects/arrays immutable, just prevents reassignment
const myArray = [1, 2, 3];
myArray.push(4); // ✅ This works!
console.log("const array modified:", myArray);
// myArray = [5, 6, 7]; // ❌ This would cause an error

console.log("\n=== DATA TYPES ===");

// 1. NUMBER
let integer = 42;
let decimal = 3.14;
let negative = -10;
let bigNumber = 9007199254740991; // Max safe integer
console.log("Numbers:", integer, decimal, negative);

// 2. STRING
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello ${singleQuote}`; // Template literal (ES6)
console.log("Strings:", singleQuote, doubleQuote, templateLiteral);

// 3. BOOLEAN
let isTrue = true;
let isFalse = false;
console.log("Booleans:", isTrue, isFalse);

// 4. NULL (intentional absence of value)
let nothing = null;
console.log("null:", nothing, typeof nothing); // typeof null returns "object" (this is a JavaScript quirk!)

// 5. UNDEFINED (variable declared but not assigned)
let notAssigned;
console.log("undefined:", notAssigned, typeof notAssigned);

// 6. SYMBOL (unique identifier)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbols:", sym1 === sym2); // false - each symbol is unique

// 7. BIGINT (for very large integers)
let bigInt = 9007199254740991n; // Note the 'n' suffix
console.log("BigInt:", bigInt, typeof bigInt);

console.log("\n=== TYPE CHECKING ===");

// Using typeof operator
console.log("typeof 42:", typeof 42);                    // "number"
console.log("typeof 'hello':", typeof 'hello');          // "string"
console.log("typeof true:", typeof true);                // "boolean"
console.log("typeof null:", typeof null);                // "object" (quirk!)
console.log("typeof undefined:", typeof undefined);      // "undefined"
console.log("typeof Symbol():", typeof Symbol());       // "symbol"
console.log("typeof 123n:", typeof 123n);                // "bigint"
console.log("typeof []:", typeof []);                    // "object"
console.log("typeof {}:", typeof {});                   // "object"
console.log("typeof function(){}:", typeof function(){}); // "function"

// Better way to check arrays
console.log("Array.isArray([]):", Array.isArray([]));    // true
console.log("Array.isArray({}):", Array.isArray({}));    // false

console.log("\n=== TYPE CONVERSION ===");

// String to Number
let strNum = "123";
let num = Number(strNum);
let num2 = Number.parseInt("123");
let num3 = Number.parseFloat("123.45");
console.log("String to Number:", num, num2, num3);

// Number to String
let numStr = 456;
let str = String(numStr);
let str2 = numStr.toString();
let str3 = numStr + ""; // Concatenation trick
console.log("Number to String:", str, str2, str3);

// Boolean conversion
console.log("Boolean(1):", Boolean(1));        // true
console.log("Boolean(0):", Boolean(0));        // false
console.log("Boolean(''):", Boolean(""));      // false
console.log("Boolean('hello'):", Boolean("hello")); // true
console.log("Boolean(null):", Boolean(null));  // false
console.log("Boolean(undefined):", Boolean(undefined)); // false

// Truthy and Falsy values
// Falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy

console.log("\n=== VARIABLE NAMING RULES ===");
// ✅ Valid names
let userName = "John";
let user_age = 25;
let $price = 99.99;
let _private = "secret";
let camelCase = "good practice";
let PascalCase = "for classes";
let UPPER_CASE = "for constants";

// ❌ Invalid names (would cause errors)
// let 123abc = "invalid";     // Can't start with number
// let my-name = "invalid";    // Can't use hyphens
// let let = "invalid";        // Can't use reserved words

console.log("\n=== PRACTICE EXAMPLES ===");

// Example 1: Calculate area of a circle
const PI = 3.14159;
let radius = 5;
let area = PI * radius * radius;
console.log("Circle area:", area);

// Example 2: String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// Example 3: Type checking before operations
let userInput = "42";
if (typeof userInput === "string") {
  let converted = Number(userInput);
  console.log("Converted input:", converted);
}

userInput == 42? console.log("String:", Number(userInput)) : console.log("Number:", String(userInput)  );