'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  function toAdd(number) {
    if (number === undefined) {
      const sum = currentSum;

      currentSum = 0;

      return sum;
    }

    currentSum += number;

    return toAdd;
  }

  return toAdd;
}

module.exports = makeInfinityAdder;
