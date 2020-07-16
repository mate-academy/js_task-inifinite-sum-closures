'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function getSum(number) {
    if (number === undefined) {
      const copy = sum;

      sum = 0;

      return copy;
    }
    sum += number;

    return getSum;
  };
}

module.exports = makeInfinityAdder;
