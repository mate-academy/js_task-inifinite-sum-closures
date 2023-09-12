'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let addedValues = [];

  const adder = (...numbers) => {
    if (numbers.length === 0) {
      const result = addedValues.reduce((sum, item) => sum + item, 0);

      addedValues = [];

      return result;
    };

    for (const number of numbers) {
      addedValues.push(number);
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
