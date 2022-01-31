'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  return function summator(number) {
    if (number === undefined) {
      const sum = total;

      total = 0;

      return sum;
    }

    total += number;

    return summator;
  };
}

module.exports = makeInfinityAdder;
