'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(number) {
  let sum = 0;

  const adder = (nextNumber) => {
    if (nextNumber === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += nextNumber;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
