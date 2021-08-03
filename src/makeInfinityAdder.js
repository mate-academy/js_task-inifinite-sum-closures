'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(value = 0) {
    sum += value;

    if (value === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
