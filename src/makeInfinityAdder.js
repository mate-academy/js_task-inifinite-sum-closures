'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const adder = (argument) => {
    if (typeof argument === 'undefined') {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }
    sum += argument;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
