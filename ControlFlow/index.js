// Write a function that takes two numbers
// and return the maximum of two numbers.
let number = max(1, 2);
console.log(number);

function max(a, b) {
  return a > b ? a : b;
}

// Landscape / potrait
// If we pass (300, 600) it will return false automatically, no need to mention as
// a ternary operator

console.log(isLandscape(800, 600));
function isLandscape(width, height) {
  return width > height;
}

// FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not Divisible by 3 and 5 => input
// Not a Number  => 'Not a Number'

const output = fizzBuzz(9);
console.log(output);
function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0 && input % 5 === 0) return "fizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
}
// Demerit points
// Speed Limit = 70 => OK
// For increase of every 5KM => 1 Point
// Math.floor(1.3)
// 12 points => Susspended

checkSpeed(120);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("OK");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}

// Even and ODD
showNumbers(10);
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

// Count Truthy
const array = [0,null, undefined, '', 1, 2, 3];

console.log(countTruthy(array));

function countTruthy(array){
  let count =0;
  for(let value of array)
  if(value);
  count ++;
  return count;
}

//String properties
const movie = {
  title: 'simhadri',
  releaseYear: 2020,
  rating: 4.5,
  director: 'rajamouli'
};

showProperties(movie);
function showProperties(movie){
  for(let key in movie){
    if(typeof movie[key] === 'string')
    console.log(key, movie[key]);
  }
}

// Sum of multiples of 3 and 5
console.log(sum(10));

function sum(limit){
  let sum = 0;
  for (let i = 0; i <= limit; i++)
  if(i % 3 === 0 || i % 5 ===0)
  sum = sum +  i;

  return sum;
}

//Grade
// average 
// 1 to 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const marks = [80, 80, 50, 60];
function calculateGrade(marks){
  let sum = 0;
  for (let mark of marks)
  sum += mark;
  let average = sum/marks.length;

  if(average < 60) return 'F';
  if(average < 70) return 'D';
  if(average < 80) return 'C';
  if(average < 90) return 'B';
  return 'A';
}

//We can modify the above example simple using single responsible function
/* const marks = [80, 80, 50];

function calculateGrade(marks){
  const average = calculateAverage(marks);
  if(average < 60) return 'F';
  if(average < 70) return 'D';
  if(average < 80) return 'C';
  if(average < 90) return 'B';
  return 'A';
}
function caluclateAverage(array){
  let sum = 0;
  for (let value of array)
  sum += value;
  return  sum/array.length;
} */


// print the Stars

showStars(10);

function showStars(row){
  for (let row = 1; row <= rows; row++){
    let pattern = '';
    for(let i = 0; i < row; i++)
    pattern += '*';
    console.log(pattern);
  }
}

//Prime numbers

function showPrimes(limit){
  for (let number = 2; number <= limit; number++)
  if(isPrime(number))
  console.log(number);
}

function isPrime(number){
  for(let factor = 2; factor < number; factor ++)
  if(number % factor === 0)
  return false;
  return true;
}