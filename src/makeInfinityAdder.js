'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(x) {
    if (x !== undefined) {
      sum += x;

      return adder;
    }

    const result = sum;

    sum = 0;

    return result;
  }

  return adder;
}

module.exports = makeInfinityAdder;
