'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(x) {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
