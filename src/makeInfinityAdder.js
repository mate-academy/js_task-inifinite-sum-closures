'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  function adderFunction(num) {
    if (num === undefined) {
      const total = currentSum;

      currentSum = 0;

      return total;
    }

    currentSum += num;

    return adderFunction;
  };

  return adderFunction;
}

module.exports = makeInfinityAdder;
