//  In object we can group the variable.
// If a function is a part of an object we call it as a method
// obect oriented programming

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true, //boolean
  draw: function() {
    console.log("draw");
  }
};
circle.draw(); // Draw is a method

//Factory Functions
// In moderan javascript if key and value is same we can remove the value
// factory function is nothing but creating a single logic and using it in many places

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    }
  };
}
const circle1 = createCircle(1);
console.log(circle1);

//Constructor Function
// we need to use PAscal notation while writing contructor function
// JavaScript is dynamic so when we create an object once,
// we can add properties or methods in later time

/* function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(1); */

// Dynamic nature of Objects
//JavaScript is dynamic so when we create an object once,we can add properties or methods in later time

const cylender = {
  radius: 1
};
circle.color = "yellow";
circle.draw = function() {};
console.log(cylender);

//constructor property
// If an object has constructor property, that references the function that is used to create that object.

//Functions are Object

// Value vs Reference types
// Value types(Primitive types) -> Number, String, Boolean, Symbol, undefined, null
// Reference Types(Objects) -> Object, Function, Array

let x = { value: 10 };
let y = x;
x.value = 20;
// Primitives are copied by their value
// Objects are copied by their reference

// Enumarating properties of an object
// To check the key values in an array we can use the below
// For in/ for of/ if in

const circle3 = {
  radius: 1,
  draw() {
    console.log("draw");
  }
};

for (let key in circle3) console.log(key, circle3[key]);

for (let key of Object.keys(circle3)) console.log(key);
for (let entry of Object.entries(circle3)) console.log(entry);

if ("color" in circle) console.log("yes");

// Cloning an Object
// Spread operator ..., we can clone all properties of an object using this spread operator
// Using assign we can assigin certain properies to another object
const circle4 = {
  radius: 1,
  draw() {
    console.log("draw");
  }
};

//const another = Object.assign({}, circle);

const another = { ...circle };
console.log(another);

// Garbage collection
// In Javascript we don't need to worry about Garabage colection
// JavaScript engine automatically deallocate the memory if we don't use anything

// Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//Math.random();

//Template literals(``) backtick character
// we can add placeholder using ${expression}, and call dynamically
// Object literal {};
// Boolean literal true, false
// String '', ""
const name = "vamsi";
const message = `Hi ${name}, ${2 + 3}
Thanks for joining me
Regards
vamsi`;
console.log(message);

// Date
const now = new Date();
const date2 = new Date(2020, 4, 14, 9);

now.getFullYear(2019);
now.setFullYear(2020);

console.log(now);