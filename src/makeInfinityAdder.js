'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function adder(a = 0) {
    if (!a) {
      return 0;
    }

    let sum = a;

    function inner(b) {
      if (b === undefined) {
        return sum;
      }

      sum += b;

      return inner;
    }

    return inner;
  };
}

module.exports = makeInfinityAdder;
