'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const adder = function(num) {
    if (num === undefined) {
      const sumCopy = currentSum;

      currentSum = 0;

      return sumCopy;
    }

    currentSum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
