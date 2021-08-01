'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(x) {
    if (!x) {
      const amount = sum;

      sum = 0;

      return amount;
    }
    sum += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
