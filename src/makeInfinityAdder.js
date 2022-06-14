'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const sumResult = currentSum;

      currentSum = 0;

      return sumResult;
    }

    currentSum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
