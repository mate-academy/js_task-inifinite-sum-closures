'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function count(number) {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += number;

    return count;
  };
}

module.exports = makeInfinityAdder;
