'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
    const obj1 = { name: 'Anton' }
    let obj2 = { name: 'Anton' }

    obj1.name = 'Bogdan'
    obj2.name = 'Bogdan'

    // obj1 = { name: 'Oleg' } - we can't re-record const, we can change only fields
    obj2 = { name: 'Egor' }
};

module.exports = { fn };
