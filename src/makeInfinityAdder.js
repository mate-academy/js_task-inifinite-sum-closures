'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;
  let result = 0;

  return function getCalculator(number) {
    if (number !== undefined) {
      currentSum += number;

      return getCalculator;
    }

    result = currentSum;
    currentSum = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
