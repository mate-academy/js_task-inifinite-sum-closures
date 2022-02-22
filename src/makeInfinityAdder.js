'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(y) {
    if (y === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += y;

    return adder;
  };
}

module.exports = makeInfinityAdder;
