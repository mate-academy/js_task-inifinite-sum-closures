'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function adder(x) {
    if (x === undefined) {
      return result;
    }

    return function(y) {
      if (y === undefined) {
        result = 0;

        return x;
      }

      result = x + y;

      return adder(result);
    };
  };
}

module.exports = makeInfinityAdder;
