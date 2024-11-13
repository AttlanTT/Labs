'use strict';

const methods = iface => {

    const result = []

    Object.keys(iface).forEach(key => {
      result.push([key, iface[key].length]);
    })

    return result
};

const iface = {
  m1: x => [x],
  m2: function (x, y) {
      return [x, y];
  },
  m3(x, y, z) {
      return [x, y, z];
  }
};

module.exports = { methods };
