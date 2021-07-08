'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  function adder(number) {
    if (number === undefined) {
      const result = currentSum;

      currentSum = 0;

      return result;
    }

    currentSum += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
