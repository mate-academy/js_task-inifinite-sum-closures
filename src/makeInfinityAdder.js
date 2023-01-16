'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a >= 0) {
      sum += a;

      return adder;
    }

    const copySum = sum;

    sum = 0;

    return copySum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
