'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const infinityAdder = (value) => {
    if (value === undefined) {
      const reserveSum = sum;

      sum = 0;

      return reserveSum;
    } else {
      sum += value;

      return infinityAdder;
    }
  };

  return infinityAdder;
}

module.exports = makeInfinityAdder;
