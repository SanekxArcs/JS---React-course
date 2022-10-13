'use strict';

const arr = [1, 1 , 2, 3, 3, 4, 5, 6, 5];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));


// const set = new Set(arr);

// set.add('Ivan')
//     .add('Oleg');

// console.log(set);

// set.delete(value);
// set.has(value);
// set.clear(value);
// set.size;

// for (const value of set) {
//     console.log(value);
    
// }

// set.forEach((value, valueAgain) => {
//     console.log(value, valueAgain);
    
// })

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

// function unique(arr) {
//     return Array.from(new Set(arr));
// }