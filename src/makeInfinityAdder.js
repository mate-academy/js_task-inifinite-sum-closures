'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number !== undefined) {
      sum += number;

      return adder;
    }

    const totalSum = sum;

    sum = 0;

    return totalSum;
  };
}

module.exports = makeInfinityAdder;
