'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let currentSum = 0;

  return function adder(...params) {
    if (params.length === 0) {
      const currentValue = currentSum;

      currentSum = 0;

      return currentValue;
    }
    currentSum += params[0];

    return adder;
  };
}

module.exports = makeInfinityAdder;
