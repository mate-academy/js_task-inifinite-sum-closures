'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(input) {
    if (!input && input !== 0) {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }

    sum += input;

    return adder;
  };
}

module.exports = makeInfinityAdder;
