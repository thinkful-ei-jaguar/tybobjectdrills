'use strict';

let loaf = {
    flour: 300, 
    water: 210, 
    hydration: function () {
        return this.water / 100;
    },

};

console.log(loaf);

console.log(loaf.hydration());

