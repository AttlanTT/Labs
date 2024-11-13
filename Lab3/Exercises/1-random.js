'use strict';

const random = (min, max) => {
  if(!max) {
    max = min
    min = 0
  }
  
  return Math.floor(min + Math.random() * (max + 1 - min))
};

module.exports = { random };
