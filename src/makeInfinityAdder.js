'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function next(nextValue) {
    if (arguments.length > 0) {
      sum += nextValue;

      return next;
    }

    const finalSum = sum;

    sum = 0;

    return finalSum;
  }

  return next;
}

module.exports = makeInfinityAdder;
