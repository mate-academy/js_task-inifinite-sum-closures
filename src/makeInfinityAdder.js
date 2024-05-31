'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function addedFunc(a) {
    if (a !== undefined) {
      sum += a;

      return addedFunc;
    }

    const newSum = sum;

    sum = 0;

    return newSum;
  }

  return addedFunc;
}

module.exports = makeInfinityAdder;
