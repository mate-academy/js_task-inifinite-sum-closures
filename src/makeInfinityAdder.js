'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let currentSum = 0;

  function makeAdder(a = null) {
    if (a !== null) {
      currentSum += a;

      return makeAdder;
    }

    const amount = currentSum;

    currentSum = 0;

    return amount;
  }

  return makeAdder;
}

module.exports = makeInfinityAdder;
