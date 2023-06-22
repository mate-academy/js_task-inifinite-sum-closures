'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(a) {
    if (a === undefined) {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }

    sum += a;

    return adder;
  };
}

module.exports = makeInfinityAdder;
