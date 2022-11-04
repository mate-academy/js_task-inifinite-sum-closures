'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (!arguments.length) {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }
    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
