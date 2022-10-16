'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function adder(x) {
    if (x === undefined) {
      result = 0;

      return result;
    }

    result = x;

    return function sum(y) {
      if (y >= 0) {
        result += y;

        return sum;
      }

      return result;
    };
  }

  return adder;
}

module.exports = makeInfinityAdder;
