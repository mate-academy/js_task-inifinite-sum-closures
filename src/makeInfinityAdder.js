'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(input) {
    if (input === undefined) {
      const newSum = sum;

      sum = 0;

      return newSum;
    }

    sum += input;

    return adder;
  };
};

module.exports = makeInfinityAdder;
