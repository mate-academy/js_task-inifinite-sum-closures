'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number === undefined) {
      const savedSum = sum;

      sum = 0;

      return savedSum;
    }

    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
