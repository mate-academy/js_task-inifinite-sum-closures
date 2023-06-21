'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const infinityAdder = function(num) {
    if (arguments.length === 0) {
      const lastSum = sum;

      sum = 0;

      return lastSum;
    }

    sum += num;

    return infinityAdder;
  };

  return infinityAdder;
}

module.exports = makeInfinityAdder;
