'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number === undefined) {
      const totalAmount = sum;

      sum = 0;

      return totalAmount;
    }
      sum += number;

      return adder;

  };
}

module.exports = makeInfinityAdder;
