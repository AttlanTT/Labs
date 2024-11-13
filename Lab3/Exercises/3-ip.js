'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const NumArray = ip.split('.').map(Number)

  // let result = 0

  // for (let i = 0; i < NumArray.length; i++) {
  //   result += NumArray[i] << ((3 - i) * 8)
  // }

  return NumArray.reduce((acc, item, index) => acc + (item << (3 - index) * 8), 0)
};

module.exports = { ipToInt };
