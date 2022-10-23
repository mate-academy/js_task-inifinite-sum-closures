'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function getSum(value) {
    if (value === undefined) {
      const copySum = sum;

      sum = 0;

      return copySum;
    }

    sum += value;

    return getSum;
  };
}

module.exports = makeInfinityAdder;
