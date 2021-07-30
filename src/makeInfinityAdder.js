'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(x) {
    if (!x) {
      const copy = sum;

      sum = 0;

      return copy;
    }
    sum += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
