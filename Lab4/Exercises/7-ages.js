'use strict';

const ages = (persons) => {
  const result = {};
  
  for (let name in persons) {
    const { died, born } = persons[name]
    result[name] = died - born
  }

  return result;
};

const persons = {
  lenin: { born: 1871, died: 1926 },
  mao: { born: 1899, died: 1980 },
  gandhi: { born: 1859, died: 1937 },
  hirohito: { born: 1911, died: 1990 },
};
console.log(ages(persons));

module.exports = { ages };
