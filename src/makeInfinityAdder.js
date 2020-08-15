'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function isAdder(num) {
    if (num !== undefined) {
      sum += num;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }

    return isAdder;
  };
}

module.exports = makeInfinityAdder;
