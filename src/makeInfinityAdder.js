'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  return function adder(x) {
    let sum = x || 0;

    function inner(y) {
      if (y === undefined) {
        const result = sum;

        sum = 0;

        return result;
      }
      sum += y;

      return inner;
    }

    if (x === undefined) {
      return 0;
    }

    return inner;
  };
}

module.exports = makeInfinityAdder;
