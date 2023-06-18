'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (num === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    } else {
      sum += num;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
