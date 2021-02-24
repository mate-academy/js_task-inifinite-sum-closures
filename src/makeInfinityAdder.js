'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function makeSum(number) {
    const result = sum;

    if (number === undefined) {
      sum = 0;

      return result;
    }

    sum += number;

    return makeSum;
  };
}

module.exports = makeInfinityAdder;
