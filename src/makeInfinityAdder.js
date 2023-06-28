'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(arg) {
    if (arg === undefined) {
      const total = sum;

      sum = 0;

      return total;
    }

    sum += arg;

    return adder;
  };
}

module.exports = makeInfinityAdder;
