'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let addedNumbers = 0;

  return function add(nextNumber) {
    if (typeof nextNumber === 'number') {
      addedNumbers += nextNumber;

      return add;
    }

    const resultNumber = addedNumbers;

    addedNumbers = 0;

    return resultNumber;
  };
}

module.exports = makeInfinityAdder;
