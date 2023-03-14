'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function(x) {
    if (x === undefined) {
      return 0;
    }
    sum += x;

    const adder = function(y) {
      if (y !== undefined) {
        sum += y;

        return adder;
      }

      return sum;
    };

    return adder;
  };
}

module.exports = makeInfinityAdder;
