'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let currentSum = 0;

  return function adder(value) {
    if (value !== undefined) {
      currentSum += value;

      return adder;
    }

    const resultSum = currentSum;

    currentSum = 0;

    return resultSum;
  };
}

module.exports = makeInfinityAdder;
