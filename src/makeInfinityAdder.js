'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;

  return function sum(a) {
    if (a === undefined) {
      const currentCount = count;

      count = 0;

      return currentCount;
    }
    count += a;

    return sum;
  };
}

module.exports = makeInfinityAdder;
