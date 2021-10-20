'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let result = 0;

  return function sum(num) {
    if (!num) {
      const sumOfNums = result;

      result = 0;

      return sumOfNums;
    }

    result += num;

    return sum;
  };
}

module.exports = makeInfinityAdder;
