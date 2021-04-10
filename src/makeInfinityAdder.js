'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;
  let count = 0;

  return function getCalculater(number) {
    if (number !== undefined) {
      currentSum += number;

      return getCalculater;
    }

    if (count > 0) {
      currentSum = 0;
    }

    count++;

    return currentSum;
  };
}

module.exports = makeInfinityAdder;
