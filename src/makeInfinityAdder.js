'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (x) => {
    const currentSum = sum;

    if (x !== undefined) {
      sum += x;

      return add;
    } else {
      sum = 0;

      return currentSum;
    }
  };

  return add;
};

module.exports = makeInfinityAdder;
