'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function addingFunction(n) {
    if (n === undefined) {
      const tmpSum = sum;

      sum = 0;

      return tmpSum;
    }

    sum += n;

    return addingFunction;
  }

  return addingFunction;
}

module.exports = makeInfinityAdder;
