'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;
  let count = 0;
  const adder = (number) => {
    if (!number) {
      currentSum = 0;

      return currentSum;
    }

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

    result(number);

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
