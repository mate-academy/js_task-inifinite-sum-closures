'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(a) {
    if (typeof a === 'number') {
      sum += a;

      return adder;
    } else {
      const total = sum;

      sum = 0;

      return total;
    }
  };
}

module.exports = makeInfinityAdder;
