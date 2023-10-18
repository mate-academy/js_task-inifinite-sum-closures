"use strict";

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentAmount = 0;

  function adder(number) {
    if (number === undefined) {
      const result = currentAmount;

      currentAmount = 0;

      return result;
    } else {
      currentAmount += number;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
