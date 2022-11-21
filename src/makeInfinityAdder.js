'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  return function adder(x) {
    if (x === undefined) {
      const sum = amount;

      amount = 0;

      return sum;
    }

    amount += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
