// if else
// If hour is b/w 6am and 12pm : Good morning
// If hour is b/w 12pm and 6pm : Good afternoon
// Otherwise: Good evening
// In the above example if we are writing only
// single statement we don't need to use {}
let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afteroon!");
} else {
  console.log("Good Night");
}

//Sitch Case
// we can if else to implement this also
let role = "guest";
switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  case "default":
    console.log("Unknown User");
}

//For loop
for (let i = 1; i <= 5; i++) {
  if (i % 2 != 0) console.log(i);
}

//While
/* let i = 0;
While(i <=5) {
  if(i % 2 !== 0)
  console.log(i);
  i++;
} */

//do while
// In the while loop if the condition is wrong it will not execute the statements.
// Where as in Do While it will excecute all the statements before even going to the condition.
/* let i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

// Infinet loops
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
} */
// The above one will go on infinet execution browser will keep on browse

while (true) {}

let x = 0;
do {
  //x++;
} while (x < 5);
for(let i = 0; i < 10; i++);



// For in
/* const person = {
  name = 'vamsi',
  age = 26
}
for (let key in person)
console,log(key, person[key]);

const colors = ['red', 'green', 'blue'];
for (let index in colors)
console.log(index, colors[index]); */

// For-of
const colors2 = ['red', 'green', 'blue'];
for (let color of colors2)
console.log(color);

// Break and Continue
let a = 0;
while (a <= 10){
 // if(a === 5) break;
 if(a % 2 === 0){
   a ++;
   continue;
 }
  console.log(a);
  a++;
}