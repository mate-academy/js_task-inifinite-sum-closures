'use strict';

/***
 * @return {function}
 */

function makeInfinityAdder(a = 0) {
  let sum = a;

  function adder(b) {
    if (b !== undefined) {
      sum += b;

      return adder;
    } else {
      const res = sum;

      sum = 0;

      return res;
    }
  }

  return adder;
}
module.exports = makeInfinityAdder;
