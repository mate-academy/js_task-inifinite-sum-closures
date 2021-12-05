'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(x) {
    if (x || x === 0) {
      sum += x;

      return adder;
    } else {
      const copy = sum;

      sum = 0;

      return copy;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
