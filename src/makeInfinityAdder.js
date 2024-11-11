'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function add(a) {
    if (a === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    } else {
      sum += a;

      return add;
    }
  };
}

module.exports = makeInfinityAdder;
