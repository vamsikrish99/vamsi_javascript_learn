// Address Object
// Display a street address
let address = {
    street: '180 Main St',
    City: 'Bridgewater',
    Zipcode: '02324'    
    
};

function showAddress(address){
    for(let key in address)
    console.log(key, address[key]);
}

showAddress(address);

//Factory and constructor function

let address2 = createAdress('180 Main St', 'Bridge', '02324');
console.log(address2);
// Factory
function createAdress(street, city, Zipcode){
    return{
        street,
        city,
        Zipcode
    };
}

// Constructor 
let address3 = new Adress('180 Main St', 'Bridge', '02324');
console.log(address3);
function Adress(street, city, Zipcode){
    this.street = street;
    this.city = city;
    this.Zipcode = Zipcode;
}


// object equality
let address4 = new Adress('3110 Main St', 'Bridge', '02324');
let address5 = new Adress('3110 Main St', 'Bridge', '02324');
// let address6 = address4;
console.log(areEqual(address4, address5));
console.log(areSame(address4, address5));
// console.log(areSame(address4, address6));


function Adressdiff(street, city, Zipcode){
    this.street = street;
    this.city = city;
    this.Zipcode = Zipcode;
}

function areEqual(address4, address5){
    return address4.street === address5.street &&
    address4.city === address5.city &&
    address4.Zipcode === address5.Zipcode
}

function areSame(){
    return address4 === address5;
}

// BlogPost Object
// title
// body
// author
// views
// comments(author, body)
// isLive

let post = {
    title: 'adventures of world',
    body: 'Book is all about ..............',
    author: 'vamsi',
    views: 1000,
    comments: [
        {author: 'raj', body: 'ssicence projects'},
        {author: 'venky', body: 'maths projj'},
    ],
    isLive: true
};

console.log(post);

// Constructor function
// post is still pending
let Pos2 = new Post2('a', 'b', 'c');
console.log(Post2);
function Post2(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}


// Price range Object
let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 1, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
];

let restaurents = [
    {averagePerPerson: 5}
];

//