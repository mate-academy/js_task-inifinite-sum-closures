'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = numbers => {
    if (typeof numbers === 'undefined') {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    } else {
      sum += numbers;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
