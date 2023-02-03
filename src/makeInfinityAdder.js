'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  return function sum(x) {
    if (x !== undefined) {
      amount = amount + x;

      return sum;
    } else {
      const count = amount;

      amount = 0;

      return count;
    }
  };
}

module.exports = makeInfinityAdder;
