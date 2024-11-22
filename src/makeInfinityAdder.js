'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (typeof number === 'undefined') {
      const saveSum = sum;

      sum = 0;

      return saveSum;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
