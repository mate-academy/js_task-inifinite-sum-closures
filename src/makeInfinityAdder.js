'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = function(num) {
    if (typeof num !== 'number') {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }

    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
