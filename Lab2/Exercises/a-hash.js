'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = new Map()

phonebook.set('Maksim', '+380234020349')
phonebook.set('Oleg', '+3803422222123')
phonebook.set('Taras', '+380234234234')
phonebook.set('Gena', '+38023123131')


const findPhoneByName = (name) => phonebook.get(name);

module.exports = { phonebook, findPhoneByName };
