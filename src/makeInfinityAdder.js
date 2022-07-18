'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(a = 0) {
  let sum = a;

  function adder(b) {
    if (b === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += b;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
