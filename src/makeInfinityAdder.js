'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function() {
    if (arguments.length === 0) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
    sum += arguments[0];

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
