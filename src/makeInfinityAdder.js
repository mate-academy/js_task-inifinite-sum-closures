'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  function adder(number) {
    if (number === undefined) {
      const finalSum = currentSum;

      currentSum = 0;

      return finalSum;
    }

    currentSum += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
