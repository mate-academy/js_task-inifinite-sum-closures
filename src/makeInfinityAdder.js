'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;
  let count = 0;
  const adder = (number) => {
    if (number === undefined && count === 0) {
      count++;

      return currentSum;
    }

    if (number === undefined && count === 1) {
      currentSum = 0;

      return currentSum;
    }

    currentSum = number;

    const result = (num) => {
      if (num === undefined && count === 0) {
        count++;

        return currentSum;
      }

      if (num === undefined && count === 1) {
        currentSum = 0;

        return currentSum;
      }
      currentSum += num;

      return result;
    };

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
