'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const getSum = (numA) => {
    if (numA === undefined) {
      return 0;
    }

    return (numB) => {
      if (numB === undefined) {
        return numA;
      }

      return getSum(numA + numB);
    };
  };

  return getSum;
}

module.exports = makeInfinityAdder;
