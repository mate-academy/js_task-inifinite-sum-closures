'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const add = (y) => {
    if (y === undefined) {
      const result = currentSum;

      currentSum = 0;

      return result;
    }

    currentSum += y;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
