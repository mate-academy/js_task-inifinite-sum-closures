'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  function adder(x) {
    if (x === undefined) {
      const total = currentSum;

      currentSum = 0;

      return total;
    } else {
      currentSum += x;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
