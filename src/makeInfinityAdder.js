'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (num !== undefined) {
      sum += num;

      return adder;
    } else {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
