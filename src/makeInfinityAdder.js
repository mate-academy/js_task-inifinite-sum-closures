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

    const finalSum = sum;

    sum = 0;

    return finalSum;
  };
}

module.exports = makeInfinityAdder;
