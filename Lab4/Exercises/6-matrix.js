'use strict';

const max = (matrix) => {
  let value = 0
  for(let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for(let j = 0; j < row.length; j++) {
        if(value < row[j]) value = row[j]
    }
  }
  return value
};

const m = max([[20, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9
module.exports = { max };
