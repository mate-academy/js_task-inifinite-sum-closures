'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(a = 0) {
  let sum = a;

  function add(b) {
    if (b === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += b;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
