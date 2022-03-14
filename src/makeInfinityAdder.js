'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(arg) {
    if (arg === undefined) {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    };

    sum += arg;

    return adder;
  };
}

module.exports = makeInfinityAdder;
