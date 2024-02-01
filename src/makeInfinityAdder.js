'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (x) => {
    if (x === undefined) {
      const copySum = sum;

      sum = 0;

      return copySum;
    }

    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
