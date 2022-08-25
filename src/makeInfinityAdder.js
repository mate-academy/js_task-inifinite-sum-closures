'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(numbers) {
    if (typeof numbers === 'undefined') {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    } else {
      sum += numbers;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
