'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function makeAdder(input) {
    const currentSum = sum;

    if (input === undefined) {
      sum = 0;

      return currentSum;
    }

    sum += input;

    return makeAdder;
  };
}

module.exports = makeInfinityAdder;
