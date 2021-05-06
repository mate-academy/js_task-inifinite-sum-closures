'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const totalSum = sum;

      sum = 0;

      return totalSum;
    } else {
      sum += num;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
