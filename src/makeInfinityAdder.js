'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const add = (num) => {
    if (num === undefined) {
      const result = currentSum;

      currentSum = 0;

      return result;
    }

    currentSum += num;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
