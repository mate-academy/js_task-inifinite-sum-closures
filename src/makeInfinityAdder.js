'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  function adder(x) {
    if (!x) {
      return 0;
    }

    let sum = x;

    return function next(y) {
      if (y || y === 0) {
        sum += y;

        return next;
      }

      return sum;
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
