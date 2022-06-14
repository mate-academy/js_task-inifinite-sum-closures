'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const getSum = (num) => {
    if (num === undefined) {
      const sumOfNum = sum;

      sum = 0;

      return sumOfNum;
    }

    sum += num;

    return getSum;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
