'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const infinityAdder = function(a) {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += a;

    return infinityAdder;
  };

  return infinityAdder;
}

module.exports = makeInfinityAdder;
