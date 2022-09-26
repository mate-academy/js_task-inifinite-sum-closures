'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = number => {
    if (number === undefined) {
      const current = sum;

      sum = 0;

      return current;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
