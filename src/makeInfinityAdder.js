'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const callback = (num) => {
    if (num === undefined) {
      const oldSum = sum;

      sum = 0;

      return oldSum;
    } else {
      sum += num;

      return callback;
    }
  };

  return callback;
}

module.exports = makeInfinityAdder;
