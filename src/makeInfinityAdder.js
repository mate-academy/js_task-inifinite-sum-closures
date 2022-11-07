'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  return function adder(num) {
    const sum = amount;

    if (num === undefined) {
      amount = 0;

      return sum;
    }

    amount += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
