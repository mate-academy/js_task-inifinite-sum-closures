'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(term) {
    if (arguments.length === 0) {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }

    sum += term;

    return adder;
  };
}

module.exports = makeInfinityAdder;
