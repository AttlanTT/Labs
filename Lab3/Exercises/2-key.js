'use strict';

const generateKey = (length, possible) => {
  let key = ''
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * possible.length)
    key += possible[index]
  }
  
  return key
};

const characters = 'qwerty123';
const key = generateKey(6, characters);
console.log(key)

module.exports = { generateKey };
