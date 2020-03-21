// Arry from range
    const num1 = arrayFromRange(-10, -3);
    console.log(num1);
    function arrayFromRange(min, max){
        const output = [];
        for(let i = min; i <= max; i ++)
        output.push(i);
        return output;
    } 

// Includes
    const num2 = [1, 2, 3, 4];
    console.log(includes(num2, -1));
    function includes(array, searchElement){
        for(let element of array)
        if(element === searchElement)
        return true;
        return false;
    }

//Except 
    const num3 = [1, 2, 3, 4, 1, 1];
    const output = except(num3, [1, 2]);
    console.log(output);
    function except(array, excluded){
        const output =[];
        for(let element of array)
        if(!excluded.includes(element))
        output.push(element);
        return output;
    }

//Moving an element
    const num4 = [1, 2, 3, 4];
    const output1 = move(num4, 0, 1);
    console.log(output1);
    function move(array, index, offset){
        const position = index + offset;
        if(position >= array.length || position < 0){
            console.error('Invalid offset');
            return;
        } 
        const output1 = [...array];
        const element = output1.splice(index, 1)[0];
        output1.splice(position, 0, element);
        return output1;
    }

// count occurences
    const num5 = [1, 2, 3, 4, 1];
    const count = countOccurences(num5, 1);
    console.log(count);
    function countOccurences(array, searchElement){
        /* let count = 0;
        for (let element of array)
            if(element === searchElement)
            count++;
            return count; */

        //Using reduce method
        return array.reduce((accumulator, current) => {
            const occurences = (current === searchElement)
            console.log(accumulator, current, searchElement);
            return accumulator + occurences;
        },0);
    }

//Get Max 
    const num6 = [1, 2, 3, 4];
    const max = getMax([1, 2, 3, 4, 10, 15, 55]);
    console.log(max);
    function getMax(array){
        if(array.length === 0) return undefined;
        return array.reduce((a, b) => (a > b) ? a : b);
    }

//Movies
    const movies = [
        {title: 'a', year: 2018, rating: 4.5},
        {title: 'b', year: 2018, rating: 4.7},
        {title: 'c', year: 2018, rating: 3},
        {title: 'd', year: 2017, rating: 4.5},
    ];
    // All the movies in 2018 with rating > 4
    // Sort them by their rating
    // Desecending order
    // Pick their title
    // we should get output 'b', 'a'

    const titles = movies
        .filter(m => m.year === 2018 && m.rating >= 4)
        .sort((a, b) => a.rating -b.rating)
        .reverse()
        .map(m => m.title)

    console.log(titles);
