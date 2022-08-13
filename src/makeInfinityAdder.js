'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const getSum = (num) => {
    if (num !== undefined) {
      sum += num;

      return getSum;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  }

  return getSum;
}

module.exports = makeInfinityAdder;
