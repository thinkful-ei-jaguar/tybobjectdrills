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
        boss: 'herself',
    }
    ,
    {
        name: 'C-3P0',
        jobTitle: 'Protocol Droid',
        boss: 'R2-D2',
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
        boss: 'Drummond',
    }
    ,    
    {
        name: 'Bilbo Baggins',
        jobTitle: 'Thief',
        boss: 'Thorin Oakenshield',
    }
];

function jobReport (arr) {
    for (let i = 0; i < arr.length; i++) {
        return arr.map(function(item){
            if (item.boss === undefined) {
                return `${item.jobTitle} ${item.name} doesn't report to anybody.`;
            }
            return `${item.jobTitle} ${item.name} reports to ${item.boss}.`;
        })
    } 
}

console.log(jobReport(employeeRecord));

//exercise 5 is above

