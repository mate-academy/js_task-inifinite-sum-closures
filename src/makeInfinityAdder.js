'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (typeof number !== 'number') {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }
    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
