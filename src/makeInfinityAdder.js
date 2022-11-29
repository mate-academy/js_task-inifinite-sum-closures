'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(a) {
    if (arguments.length > 0) {
      sum += a;

      return adder;
    } else {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }
  };
}

module.exports = makeInfinityAdder;
