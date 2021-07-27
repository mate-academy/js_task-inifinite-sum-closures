'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function sum2(y) {
    if (y !== undefined) {
      sum += y;

      return sum2;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  }

  function adder(x) {
    if (x !== undefined) {
      sum = x;

      sum2.toString = function() {
        return sum;
      };

      return sum2;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
