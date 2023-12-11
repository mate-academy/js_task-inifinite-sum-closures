'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let totalSum = 0;

  function adder(a) {
    if (a === undefined) {
      const sum = totalSum;

      totalSum = 0;

      return sum;
    }

    totalSum += a;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
