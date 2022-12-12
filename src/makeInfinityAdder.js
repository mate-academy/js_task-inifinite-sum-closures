'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const adder = (num) => {
    if (num >= 0) {
      currentSum += num;

      return adder;
    }

    const sumOfnums = currentSum;

    currentSum = 0;

    return sumOfnums;
  };

  return adder;
}

module.exports = makeInfinityAdder;
