'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  return function adder(num) {
    if (num === undefined) {
      const result = totalSum;

      totalSum = 0;

      return result;
    } else {
      totalSum += num;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
