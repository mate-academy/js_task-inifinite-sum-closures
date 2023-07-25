'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number !== undefined) {
      sum += number;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }

    return adder;
  };
}

module.exports = makeInfinityAdder;
