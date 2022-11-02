'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    const currentSum = sum;

    if (number === undefined) {
      sum = 0;

      return currentSum;
    }

    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
