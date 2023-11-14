'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(numbers) {
    if (numbers === undefined) {
      const totalSum = sum;

      sum = 0;

      return totalSum;
    }
    sum += numbers;

    return adder;
  };
}

module.exports = makeInfinityAdder;
