'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function inner(a = null) {
    if (a === null) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += a;

    return inner;
  }

  return inner;
}

module.exports = makeInfinityAdder;
