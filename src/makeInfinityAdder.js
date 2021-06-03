'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function adder(x) {
    if (x === undefined) {
      return 0;
    };

    let sum = x;

    return fun;

    function fun(y) {
      if (y !== undefined) {
        sum += y;

        return fun;
      };

      return sum;
    }
  };
}

module.exports = makeInfinityAdder;
