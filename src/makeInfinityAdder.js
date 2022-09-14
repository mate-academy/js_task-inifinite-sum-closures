'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (value) => {
    if (value === undefined) {
      const addSum = sum;

      sum = 0;

      return addSum;
    } else {
      sum += value;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
