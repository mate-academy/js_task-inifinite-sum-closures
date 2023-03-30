'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let numbersSum = 0;

  return function sumNumbersRecursion(num) {
    if (!isNaN(num) && isFinite(num)) {
      numbersSum += num;

      return sumNumbersRecursion;
    }

    const result = numbersSum;

    numbersSum = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
