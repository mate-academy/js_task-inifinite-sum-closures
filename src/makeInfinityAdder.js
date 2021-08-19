'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value !== undefined) {
      sum += value;

      return adder;
    } else {
      const savedSum = sum;

      sum = 0;

      return savedSum;
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
