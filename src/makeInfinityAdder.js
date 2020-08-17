'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result = 0;

  return function adder(value) {
    if (value === undefined) {
      result = sum;
      sum = 0;

      return result;
    }
    sum += value;

    return adder;
  };
}

module.exports = makeInfinityAdder;
