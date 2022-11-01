'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return (a) => {
    let sum = a;

    if (!a) {
      return 0;
    }

    const getSum = (b) => {
      if (b >= 0) {
        sum += b;

        return getSum;
      }

      const total = sum;

      sum = 0;

      return total;
    };

    return getSum;
  };
}

module.exports = makeInfinityAdder;
