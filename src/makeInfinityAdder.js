'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  return function adder(x) {
    if (x === undefined) {
      const count = amount;

      amount = 0;

      return count;
    }
    amount += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
