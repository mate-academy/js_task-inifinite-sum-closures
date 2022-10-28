'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(arg) {
    if (arg === undefined) {
      const value = sum;

      sum = 0;

      return value;
    }

    sum += arg;

    return adder;
  };
}

module.exports = makeInfinityAdder;
