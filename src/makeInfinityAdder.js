'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalAmount = 0;

  function adder(number) {
    if (number === undefined) {
      const addingResult = totalAmount;

      totalAmount = 0;

      return addingResult;
    }
    totalAmount += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
