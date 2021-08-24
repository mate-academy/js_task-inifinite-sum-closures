'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  return function adder(number) {
    let sum = 0;

    if (number === undefined) {
      sum = amount;
      amount = 0;

      return sum;
    }

    amount += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
