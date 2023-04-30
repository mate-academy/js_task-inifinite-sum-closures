'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(arg) {
    if (arg === undefined) {
      const prevSum = sum;

      sum = 0;

      return prevSum;
    }

    sum += arg;

    return adder;
  };
}

module.exports = makeInfinityAdder;
