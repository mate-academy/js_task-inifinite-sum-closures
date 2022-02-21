'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function getSum(number) {
    if (number === undefined) {
      const sumToReturn = sum;

      sum = 0;

      return sumToReturn;
    }
    sum += number;

    return getSum;
  };
}

module.exports = makeInfinityAdder;
