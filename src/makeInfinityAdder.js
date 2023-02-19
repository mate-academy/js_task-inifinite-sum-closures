'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(n) {
    if (n === undefined) {
      const total = sum;

      sum = 0;

      return total;
    }

    sum += n;

    return adder;
  };
}

module.exports = makeInfinityAdder;
