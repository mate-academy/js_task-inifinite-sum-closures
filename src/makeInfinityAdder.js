'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result = function adder(args) {
    const currentSum = sum;

    if (args === undefined) {
      sum = 0;

      return currentSum;
    }

    sum += args;

    return result;
  };

  return result;
}

module.exports = makeInfinityAdder;
