'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const makeAdder = (num) => {
    if (num === undefined) {
      const totalSum = currentSum;

      currentSum = 0;

      return totalSum;
    }

    currentSum += num;

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
