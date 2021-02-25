'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(value) {
    const currentSum = sum;

    if (value === undefined) {
      sum = 0;

      return currentSum;
    }

    sum += value;

    return adder;
  };
}
module.exports = makeInfinityAdder;
