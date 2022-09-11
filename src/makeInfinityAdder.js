'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const result = (x) => {
    if (x === undefined) {
      const totalSum = sum;

      sum = 0;

      return totalSum;
    } else {
      sum += x;

      return result;
    };
  };

  return result;
};

module.exports = makeInfinityAdder;
