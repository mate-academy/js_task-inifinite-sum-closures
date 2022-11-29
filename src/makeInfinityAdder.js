'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  function adder(number) {
    if (number === undefined) {
      const result = amount;

      amount = 0;

      return result;
    }
    amount += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
