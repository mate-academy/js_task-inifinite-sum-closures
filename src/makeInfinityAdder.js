'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (additionalSum) => {
    if (additionalSum === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += additionalSum;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
