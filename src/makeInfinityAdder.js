'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let rezult;

  return function getsum(x) {
    if (x === undefined) {
      return 0;
    }
    sum += x;

    return function adder(y) {
      if (y === undefined) {
        rezult = sum;
        sum = 0;

        return rezult;
      }

      return getsum(y);
    };
  };
}

module.exports = makeInfinityAdder;
