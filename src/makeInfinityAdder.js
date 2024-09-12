'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(x) {
    if (x === undefined) {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }

    sum += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
