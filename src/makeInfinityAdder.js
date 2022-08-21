'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let currentSum = 0;

  return function sumNumbers(number) {
    if (!isNaN(number)) {
      currentSum += number;

      return sumNumbers;
    }

    const result = currentSum;

    currentSum = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
