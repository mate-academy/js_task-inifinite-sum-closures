'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  return function adder(x) {
    if (!x && x !== 0) {
      const count = amount;

      amount = 0;

      return count;
    } else {
      amount += x;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
