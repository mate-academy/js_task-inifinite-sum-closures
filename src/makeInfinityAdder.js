'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function adder(num) {
    if (typeof num !== 'number') {
      return 0;
    }

    let currentSum = num;

    return function nextAdder(nextNum) {
      if (typeof nextNum !== 'number') {
        const result = currentSum;

        currentSum = 0;

        return result;
      }
      currentSum += nextNum;

      return nextAdder;
    };
  };
}

module.exports = makeInfinityAdder;
