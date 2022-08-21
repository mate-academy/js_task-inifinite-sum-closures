'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(value) {
    if (value === undefined) {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }

    sum += value;

    return adder;
  };
}

module.exports = makeInfinityAdder;
