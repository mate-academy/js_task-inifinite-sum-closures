'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num !== undefined) {
      sum += num;

      return adder;
    }

    const finalAmount = sum;

    sum = 0;

    return finalAmount;
  };
}

module.exports = makeInfinityAdder;
