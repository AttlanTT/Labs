'use strict';

const iter = (obj, callback) => {
    const keys = Object.keys(obj)
    for(const key of keys) {
        const value = obj[key]
        callback(key, value)
    }
};

const obj = { a: 1, b: 2, c: 3 };
iter (obj, (key, value) => {
  console.log({ key, value });
});

module.exports = { iter };