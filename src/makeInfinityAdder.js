'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number || number === 0) {
      sum += number;

      return adder;
    }

    const result = sum;

    sum = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
