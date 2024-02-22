'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  function adder(num) {
    if (num === undefined) {
      const result = totalSum;

      totalSum = 0;

      return result;
    }
    totalSum += num;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
