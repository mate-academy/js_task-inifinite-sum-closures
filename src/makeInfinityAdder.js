'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const getSum = function(a) {
    if (a !== undefined) {
      sum += a;

      return getSum;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };

  return getSum;
}

module.exports = makeInfinityAdder;
