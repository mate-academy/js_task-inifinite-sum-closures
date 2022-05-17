'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  return function adder(num) {
    if (num === undefined) {
      const newAmount = amount;

      amount = 0;

      return newAmount;
    }

    amount += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
