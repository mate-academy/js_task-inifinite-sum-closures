'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const START_VALUE = 0;
  let sum = START_VALUE;

  const adder = function(num) {
    if (num === undefined) {
      const tempSum = sum;

      sum = START_VALUE;

      return tempSum;
    }

    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
