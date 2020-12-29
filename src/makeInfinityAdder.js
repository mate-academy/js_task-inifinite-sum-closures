'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  function f(b) {
    const g = currentSum;

    if (b === undefined) {
      currentSum = 0;

      return g;
    }
    currentSum += b;

    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

module.exports = makeInfinityAdder;
