'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (summand) => {
    if (summand !== undefined) {
      sum += summand;

      return adder;
    }

    const previousSum = sum;

    sum = 0;

    return previousSum;
  };

  return adder;
}
module.exports = makeInfinityAdder;
