'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  return function adder(number) {
    if (arguments.length === 0) {
      const resultSum = currentSum;

      currentSum = 0;

      return resultSum;
    }

    currentSum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
