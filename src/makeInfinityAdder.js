'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let amount = 0;

  function adder(number) {
    if (number) {
      amount += number;
    } else {
      const total = amount;

      amount = 0;

      return total;
    }

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
