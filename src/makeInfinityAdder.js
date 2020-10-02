'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (!number) {
      const lastSum = sum;

      sum = 0;

      return lastSum;
    }
    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
