'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  return function adder(number) {
    if (number === undefined) {
      const calculationResult = total;

      total = 0;

      return calculationResult;
    }

    total += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
