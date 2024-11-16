'use strict';

// const array = () => {
//     const data = []

//     return {
//       get: (i) => data[i],
//       push: (x) => data.push(x),
//       pop: () => data.pop()
//     }
//   };


const array = () => {
    const dataArray = []
    const get = (i) => dataArray[i]
    get.push = (data) => dataArray.push(data) 
    get.pop = () => dataArray.pop()
    return get
}

module.exports = { array };
