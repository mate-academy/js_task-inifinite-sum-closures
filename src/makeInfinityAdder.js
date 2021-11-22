'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(x) {
    if (!x && x !== 0) {
      const lastSum = sum;

      sum = 0;

      return lastSum;
    }
    sum += x;

    return add;
  };
}

module.exports = makeInfinityAdder;
