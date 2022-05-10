'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number === undefined) {
      const newSum = sum;

      sum = 0;

      return newSum;
    }

    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
