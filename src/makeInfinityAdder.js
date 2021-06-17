'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(x) {
    if (x === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }

    sum += x;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
