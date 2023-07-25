'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const adder = function(num) {
    if (num === undefined) {
      const totalSum = currentSum;

      currentSum = 0;

      return totalSum;
    }

    currentSum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
