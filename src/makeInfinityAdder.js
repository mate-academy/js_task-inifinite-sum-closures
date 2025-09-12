'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(num) {
  let sum = typeof num === 'number' ? num : 0;

  function inner(next) {
    if (next === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += next;

    return inner;
  }

  return inner;
}

module.exports = makeInfinityAdder;
