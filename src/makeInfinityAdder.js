'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Invalid input: expected a number');
    }

    sum += num;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
