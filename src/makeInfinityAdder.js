'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (!number) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += number;

    return adder;
  };
}

makeInfinityAdder()();

module.exports = makeInfinityAdder;
