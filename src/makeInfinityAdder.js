'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(value) {
    if (value !== undefined) {
      sum += value;

      return adder;
    } else {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
