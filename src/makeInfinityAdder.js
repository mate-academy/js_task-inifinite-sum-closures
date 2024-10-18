'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let currentSum = 0;

  return function adder(value) {
    if (value !== undefined) {
      currentSum += value;

      return adder;
    } else {
      const finalSum = currentSum;

      currentSum = 0;

      return finalSum;
    }
  };
}

module.exports = makeInfinityAdder;
