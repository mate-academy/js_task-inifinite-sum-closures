'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number === undefined) {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }

    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
