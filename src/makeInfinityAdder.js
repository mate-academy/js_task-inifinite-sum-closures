'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = function(number) {
    if (arguments.length === 0) {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
