let x = 10;
let y = 2;

// Arthimatic
console.log(x + y); // we can use all the
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); // x to the power of y
console.log(x++);
console.log(x--);

// Assignment operator
let z = 10;
z = z + 5;
z += 3;

// Comparision operator
console.log(x > 0); // >=, <, <=, ===(identity)

// Equality operators
//Strict Equality operator (datatype and value should be equal)
console.log(1 === 1);

//Lose Equality operator(It checks only the values but not datatypes)
console.log(1 == 1);
console.log(true == 1); //true

//Terinary Operator
// If a customer has more tha 100 points they are 'gold', otherwise 'silver'
let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type);

//Logical Operators
//Logical AND(&&) returns true if both are true
let highIncome = false;
let godCreditScore = false;
let eligibleForLoan = highIncome || godCreditScore;
console.log("Elegible " + eligibleForLoan);

let applicaionRefused = !eligibleForLoan;
console.log("Application Refused", applicaionRefused);

//Logical Operators with Non-Booleans
// Falsy(false) All the below valuses are falsy values
// Undefined
// null
// 0
//''
//NaN
//Anything which is not falsy -> Truthy

false || true; //true
false || "Mosh"; // Mosh
false || 1; //1
false || 1 || 2; //1 (short-circuting)

let userColor = "";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);

// Bitwise operators
// 1 = 00000001
// 2 = 00000010
console.log(1 & 2);
console.log(1 | 2);

//Read, Write, Execute
// 00000100 (4)
// 00000010 (2)
// 00000001 (1)

const readPermission = 4;
const WritePermission = 2;
const ExecutePermission = 1;

let myPermission = 0;
myPermission = myPermission | WritePermission;

let message = myPermission & readPermission ? "Yes" : "No";
console.log(message);

//Precedence of Operators

// Swap the variable
let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
