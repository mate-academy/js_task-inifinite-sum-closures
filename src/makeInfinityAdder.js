'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(x) {
    if (!x) {
      const newSum = sum;

      sum = 0;

      return newSum;
    }
    sum += x;

    return adder;
  };
}
module.exports = makeInfinityAdder;
