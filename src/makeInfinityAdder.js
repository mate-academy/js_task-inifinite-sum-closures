'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(arg) {
    if (arg === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    } else {
      sum += arg;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
