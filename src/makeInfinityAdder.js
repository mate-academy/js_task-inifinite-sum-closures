'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(sum = 0) {
  let currentSum = sum;

  function add(next) {
    if (next === undefined) {
      const result = currentSum;

      currentSum = 0;

      return result;
    }

    currentSum += next;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
