'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  const sum = (a) => {
    if (a === undefined) {
      return 0;
    }

    let totalSum = a;

    const adder = (b) => {
      if (b === undefined) {
        return totalSum;
      }

      totalSum += b;

      return adder;
    };

    return adder;
  };

  return sum;
}

module.exports = makeInfinityAdder;
