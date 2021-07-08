'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const callback = (num) => {
    if (num === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += num;

    return callback;
  };

  return callback;
}

module.exports = makeInfinityAdder;
