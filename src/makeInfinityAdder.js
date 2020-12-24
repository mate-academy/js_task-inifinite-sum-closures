'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  return function adder(number) {
    if (!number) {
      const result = amount;

      amount = 0;

      return result;
    }
    amount += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
