'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const initialValue = 0;
  let sum = initialValue;

  const adder = function(arg) {
    if (arg || arg === 0) {
      sum += arg;

      return adder;
    }

    const newSum = sum;

    sum = initialValue;

    return newSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
