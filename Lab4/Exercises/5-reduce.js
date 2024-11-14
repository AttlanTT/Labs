'use strict';

const sum = (...args) => args.reduce((acc, number) => acc + number, 0)

module.exports = { sum };
