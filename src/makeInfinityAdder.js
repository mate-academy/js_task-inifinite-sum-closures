'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (nums) => {
    if (nums === undefined) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    }

    sum += nums;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
