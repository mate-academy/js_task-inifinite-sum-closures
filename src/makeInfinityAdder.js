'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(x) {
  let sum = 0;

  function adder(y) {
    if (y === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += y;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
