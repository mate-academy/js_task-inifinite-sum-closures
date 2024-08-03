'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(a) {
  let sum = 0;

  function inner(b) {
    if (b === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += b;

    return inner;
  }

  return inner;
}

module.exports = makeInfinityAdder;
