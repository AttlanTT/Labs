'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
    let array = []
    let n = 0
    for(let i = start; i <= end; i++) {
        array[n++] = i
    }
    return array
};

module.exports = { range };
