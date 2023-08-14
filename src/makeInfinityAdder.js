'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (typeof number !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
