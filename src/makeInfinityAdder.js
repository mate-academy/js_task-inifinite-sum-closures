'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let currentSum = 0;

  function makeAdder(a) {
    if (a !== undefined) {
      sum += a;

      return makeAdder;
    } else {
      currentSum = sum;
      sum = 0;

      return currentSum;
    }
  }

  return makeAdder;
}

module.exports = makeInfinityAdder;
