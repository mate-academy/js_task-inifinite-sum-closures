'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(arg) {
    if (arg === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += arg;

    return adder;
  };
}

module.exports = makeInfinityAdder;
