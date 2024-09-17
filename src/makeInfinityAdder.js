'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (!arguments.length) {
      const oldSum = sum;

      sum = 0;

      return oldSum;
    }

    sum += +number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
