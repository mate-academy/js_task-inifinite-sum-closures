'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  return function adder(number) {
    if (number === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
