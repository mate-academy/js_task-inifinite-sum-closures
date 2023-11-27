'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number !== undefined) {
      sum = sum + number;

      return adder;
    }

    const prevSum = sum;

    sum = 0;

    return prevSum;
  };
}

module.exports = makeInfinityAdder;
