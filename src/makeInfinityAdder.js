'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  function f(x) {
    if (x === undefined) {
      const clearSum = currentSum;

      currentSum = 0;

      return clearSum;
    } else {
      currentSum += x;

      return f;
    }
  }

  return f;
}

module.exports = makeInfinityAdder;
