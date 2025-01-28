'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function adder(a) {
    if (arguments.length === 0) {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }
    sum += a;

    return adder;
  };
}

module.exports = makeInfinityAdder;
