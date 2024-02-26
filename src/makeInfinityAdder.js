'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function(a) {
    if (a === undefined) {
      const copySum = sum;

      sum = 0;

      return copySum;
    }
    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
