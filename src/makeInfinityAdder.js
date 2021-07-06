'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let amount = 0;

  function adder(number) {
    if (arguments.length < 1) {
      const total = amount;

      amount = 0;

      return total;
    }

    amount += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
