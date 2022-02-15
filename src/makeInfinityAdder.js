'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function(value) {
    if (value === undefined) {
      const fullSum = sum;

      sum = 0;

      return fullSum;
    }
    sum += value;

    return adder;
  };

  return adder;
};
module.exports = makeInfinityAdder;
