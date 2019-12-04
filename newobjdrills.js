'use strict';

// exercise 1

let loaf = {
    flour: 300, 
    water: 210, 
    hydration: function () {
        return this.water / 100;
    },

};

console.log(loaf);

console.log(loaf.hydration());

//exercise 2

const fillerWords = {
    foo: 'fools',
    bar: 'bar hopping',
    fum: 'fee fi fo fum',
    quux: 'we are at the quux of this debate',
    spam: 'why do you exist?',
}

for (const key in fillerWords) {
    console.log(`${key}, ${fillerWords[key]}`);
}