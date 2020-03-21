// Adding new elements
// Finding elements
// Removing customElements
// Splitting arrays
// Combining arrays

// Adding new elements
    const numbers = [3, 4];
//Add END of the array
    numbers.push(5, 6);
// Add begining of array
    numbers.unshift(1, 2);
//Middle of arry
    // 2-> arry index, 0 -> if we want to delete any values add here, add extra values after that
    numbers.splice(2, 0, 'a', 'b');

    console.log(numbers);

// Finding elements
    // FindingPrimitives in an array
        const numbers1 = [1, 2, 3, 1, 4];
        console.log(numbers1.indexOf('a'));
        console.log(numbers1.lastIndexOf(1));

        console.log(numbers1.indexOf(1) !== -1);
        console.log(numbers1.includes(1));

    //Finding Relatives in an arrya
    // Finding relatives is not same as primitives 
    // Bcz in objects the memory space is different when we comapare two objects
    // instaed of includes we use find
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

        const courses = [
            {id:1, name: 'vamsi'},
            {id:2, name: 'krishna'},
        ];
        const course = courses.find(function(course){
            return course.name === 'vamsi';
        });
        console.log(course);

//Arrow functions (=>)
// We can rewrite above example with arrow function

    const courses1 = [
        {id:1, name: 'vamsi'},
        {id:2, name: 'krishna'},
    ];
    const course1 = courses1.find(course1 => course1.name === 'vamsi');
    console.log(course1);

// Removing Elements
    const numbers2 = [1, 2, 3, 4];
//End
    //const last = numbers2.pop();
//Begining
    //const first = numbers2.shift();
// Middle
    numbers2.splice(2, 1);
    console.log(numbers2);


// Emptying an array
    let numbers3 = [1, 2, 3, 4];
    let another = numbers3;

//solution1
    numbers3 = [];

//Solution2
    numbers3.length = 0;

//solution3
    numbers3.splice(0, numbers3.length);

//solution4
    /* while(numbers.length > 0)
    numbers.pop(); */

    console.log(numbers3);
    console.log(another);


// Combining and slicing arrays
// It is same for both primitives and objects
    const first1 = [1, 2, 3];
    const second1 = [4, 5, 6];

    const combined = first1.concat(second1);
    const slice = combined.slice(2);

    console.log(combined);
    console.log(slice);

// Spread Operator[...]
    const first2 = [1, 2, 3, 'a'];
    const second2 = [4, 5, 6, 'b'];

    const Combining = [...first2, ...second2];
    console.log(Combining);

//Iterating an arrays
    const number4 = ['vamsi',1, 2, 3];

    /* for(let number of number4)
    console.log(number); */

    numbers.forEach((number, index) => console.log(index, number));

//Joining arrays
    const number5 = [9, 8, 7];
    const joined = number5.join(',');
    console.log(number5);

    const message = 'This my URL for the json string';
    const parts = message.split(' ');
    console.log(parts);
 // When we need to split a string as a url we use - hifen
    const combined2 = parts.join('-');
    console.log(combined2);

//Storing arrays
    /* const numbers6 = [2, 1, 3];
    numbers6.sort();
    console.log(numbers6); */

    const cources = [
        {id: 1, name: 'Node.js'},
        {id: 2, name: 'javascript'}    
    ];

    cources.sort(function(a, b){
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if(nameA < b.name) return -1;
        if(nameA > b.name) return 1;
        return 0;
    });

    console.log(cources);

//Testing the Elemts of an array
    //every() -> checks every element in an arrays matches the criteria
    //some() -> checks atleast one element in an arrays matches the criteria
    const numbers7 = [1, -1, 2, 3];
    /* const positive = numbers.every(function(values){
    return values  >= 0; */
    const atLeastOnepositive = numbers7.some(function(values){
        return values  >= 0;
    });
    console.log(atLeastOnepositive);

//Filtering an array
    const numbers8 = [1, -1, 2, -2, 3, 4];
    const filtered = numbers8.filter(value => value >=0);
    console.log(filtered);

//Mapping an array

// Maping arry to strings
    /* const numbers9 = [1, -1, 2, 3];
    const filtered2 = numbers9.filter(n => n >=0);
    const items = filtered2.map(n => '<li>' + n + '</li>');
    const html = '<ul>' + items.join('') + '</ul>';
    console.log(html); */
// Mapping array to object
    const numbers9 = [1, -1, 2, 3];
    const items = numbers9
        .filter(n => n >=0)
        .map(n => ({value: n }))
        .filter(obj => obj.value > 1)
        .map(obj => obj.value);
    console.log(items);

// Reducing an Array
// accumulator is an intial value we can assign it as a second parameter
// Otherwise it will consider the first element of an array as a accumulator
    const num = [1, -1, 2, 3];
    const sum = num.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    console.log(sum);