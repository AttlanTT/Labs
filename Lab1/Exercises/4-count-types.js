'use strict';

// const countTypesInArray = (arr) => 
//     arr.reduce((counters, element) => {
//         const type = typeof element;
//         counters[type] = (counters[type] || 0) + 1;
//         return counters;
//     }, {});

const countTypesInArray = (arr) => {
    const counters = {}
    for(const element of arr) {
        const type = typeof element
        counters[type] = (counters[type] || 0) + 1
    }
    return counters
  };

console.log(countTypesInArray(["Oleg", 1, true, "false", 23, false, "Taras", false, true, 1, "We", undefined]));

module.exports = { countTypesInArray };