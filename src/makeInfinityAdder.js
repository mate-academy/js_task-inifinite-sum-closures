'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

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
