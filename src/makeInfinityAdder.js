'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  return function adder(number) {
    if (number === undefined) {
      const sum = currentSum;

      currentSum = 0;

      return sum;
    }

    currentSum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
