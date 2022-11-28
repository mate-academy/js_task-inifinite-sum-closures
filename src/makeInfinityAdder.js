'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;
  let result;

  function adder(number) {
    if (number === undefined) {
      result = amount;
      amount = 0;

      return result;
    }
    amount += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
