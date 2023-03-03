'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(x) {
  let sum = 0;

  return function adder(value) {
    if (value === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += value;

    return adder;
  };
}

module.exports = makeInfinityAdder;
