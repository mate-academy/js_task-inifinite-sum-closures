'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function innerAdder(a) {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += a;

    return innerAdder;
  }

  return innerAdder;
}

module.exports = makeInfinityAdder;
