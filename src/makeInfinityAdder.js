'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function adder(value) {
    if (value === undefined) {
      const newSum = sum;

      sum = 0;

      return newSum;
    }

    sum += value;

    return adder;
  };
}

module.exports = makeInfinityAdder;
