// Reference Type
// Objects, Arrays, Functions

let person = {
  name: "vamsi",
  age: 25
};

//Dot notation
person.name = "krishna";

//Bracket notation
person["age"] = 26;

//Bracket notation is useful when we are getting data from another location or at the run time
let selection = "name";
person["selection"] = "ram";

console.log(person);
