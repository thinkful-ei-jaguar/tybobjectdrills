'use strict';

// exercise 1

let loaf = {
    flour: 300, 
    water: 210, 
    hydration: function () {
        return this.water / 100;
    },

};

//console.log(loaf);

//console.log(loaf.hydration());

//exercise 2

const fillerWords = {
    foo: 'fools',
    bar: 'bar hopping',
    fum: 'fee fi fo fum',
    quux: 'we are at the quux of this debate',
    spam: 'why do you exist?',
}

//for (const key in fillerWords) {
    //console.log(`${key}, ${fillerWords[key]}`);
//}

//exercise 3 YAY hobbit themed objects FTW!

let menu = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
}

//console.log(menu.meals[3]);

//exercise 4

let employeeRecord = [
    {
        name: 'Jane Austen',
        jobTitle: 'Author',
    }
    ,
    {
        name: 'C-3P0',
        jobTitle: 'Human-Cyborg Relations',
    }
    ,
    {
        name: 'Macavity',
        jobTitle: 'The Mystery Cat',
    }
    ,
    {
        name: 'Ted Moseby',
        jobTitle: 'Architect',
    }
    ,    
    {
        name: 'Bilbo Baggins',
        jobTitle: 'Thief',
    }
];

function jobReport (arr) {
    for (let i = 0; i < arr.length; i++) {
        return arr.map(function(item){
            return `${item.name}: ${item.jobTitle}`;
        })
    } 
}

console.log(jobReport(employeeRecord));