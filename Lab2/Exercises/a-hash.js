'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = new Map()

phonebook.set('Anton', '+380940913249')
phonebook.set('Egor', '+38034290922123')
phonebook.set('Bogdan', '+380134234234')
phonebook.set('Andriy', '+3809323423131')


const findPhoneByName = (name) => phonebook.get(name);

module.exports = { phonebook, findPhoneByName };
