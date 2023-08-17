'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  function adder(num) {
    if (num !== undefined) {
      totalSum += num;

      return adder;
    }

    const result = totalSum;

    totalSum = 0;

    return result;
  }

  return adder;
}

module.exports = makeInfinityAdder;
