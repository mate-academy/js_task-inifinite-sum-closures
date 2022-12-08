'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(x) {
    if (x === undefined) {
      const total = sum;

      sum = 0;

      return total;
    }
    sum += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
