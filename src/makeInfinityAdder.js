'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(x) {
  let sum = 0;

  const adder = (y) => {
    if (typeof y !== 'number') {
      const total = sum;

      sum = 0;

      return total;
    }

    sum += y;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
