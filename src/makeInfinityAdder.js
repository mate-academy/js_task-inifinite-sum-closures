'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  const adder = (value) => {
    if (typeof value !== 'number') {
      const result = totalSum;

      totalSum = 0;

      return result;
    } else {
      totalSum += value;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
