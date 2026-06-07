'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function connect(a) {
    if (a === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += a;

    return connect;
  };
}

module.exports = makeInfinityAdder;
