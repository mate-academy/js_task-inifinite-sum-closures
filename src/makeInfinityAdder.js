'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function addNums(n = undefined) {
    if (n === undefined) {
      const continueSum = sum;

      sum = 0;

      return continueSum;
    }

    sum += n;

    return addNums;
  }

  return addNums;
}

module.exports = makeInfinityAdder;
