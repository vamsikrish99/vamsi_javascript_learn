// if else
// If hour is b/w 6am and 12pm : Good morning
// If hour is b/w 12pm and 6pm : Good afternoon
// Otherwise: Good evening
let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afteroon!");
} else {
  console.log("Good Night");
}

// In the above example if we are writing only 
// single statement we don't need to use {}

//Sitch Case
let role;
switch(role){
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
}
