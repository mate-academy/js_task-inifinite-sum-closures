'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (addend) => {
    if (addend === undefined) {
      const savedSum = sum;

      sum = 0;

      return savedSum;
    }

    sum += addend;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
