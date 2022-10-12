'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function adder(x) {
    if (arguments.length === 0) {
      result = 0;

      return result;
    }

    result = x;

    return function sum(y) {
      if (arguments.length > 0) {
        result += y;

        return sum;
      } else {
        return result;
      }
    };
  }

  return adder;
}

module.exports = makeInfinityAdder;
