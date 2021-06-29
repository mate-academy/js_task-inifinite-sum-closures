'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const getSum = x => {
    if (!x) {
      return 0;
    }

    return y => {
      let sum = x + y;

      if (!y) {
        sum = 0;

        return x;
      } else {
        return getSum(sum);
      }
    };
  };

  return getSum;
}

module.exports = makeInfinityAdder;
