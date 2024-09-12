'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function add(num) {
    if (num === undefined) {
      const totalSum = sum;

      sum = 0;

      return totalSum;
    }
    sum += num;

    return add;
  };
}

module.exports = makeInfinityAdder;
