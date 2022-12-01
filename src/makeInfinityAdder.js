'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(x) {
    if (x === undefined) {
      const count = sum;

      sum = 0;

      return count;
    }

    sum += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
