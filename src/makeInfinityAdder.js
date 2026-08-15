'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const currSum = sum;

      sum = 0;

      return currSum;
    } else {
      sum += num;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
