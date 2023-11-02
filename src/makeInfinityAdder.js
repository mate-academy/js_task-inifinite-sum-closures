'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalAmount = 0;

  function adder(value) {
    if (value === undefined) {
      const currentTotal = totalAmount;

      totalAmount = 0;

      return currentTotal;
    }

    totalAmount += value;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
