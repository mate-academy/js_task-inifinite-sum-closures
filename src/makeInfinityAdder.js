'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    const currSum = sum;

    if (typeof num === 'undefined') {
      sum = 0;

      return currSum;
    }

    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
