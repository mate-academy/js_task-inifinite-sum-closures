'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  return function adder(num) {
    if (num === undefined) {
      const calculationResult = total;

      total = 0;

      return calculationResult;
    }

    total += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
