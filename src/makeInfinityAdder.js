'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const adder = (number) => {
    if (typeof number === 'undefined') {
      const localSum = sum;

      sum = 0;

      return localSum;
    }
    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
