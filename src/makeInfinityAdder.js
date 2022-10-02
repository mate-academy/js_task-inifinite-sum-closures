'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = number => {
    const total = sum;

    if (number >= 0) {
      sum += number;

      return adder;
    }

    sum = 0;

    return total;
  };

  return adder;
};

module.exports = makeInfinityAdder;
