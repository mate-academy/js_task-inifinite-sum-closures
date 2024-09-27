'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const returnedSum = sum;

      sum = 0;

      return returnedSum;
    }

    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
