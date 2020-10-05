'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const getSum = (number) => {
    if (number !== undefined) {
      sum += number;

      return getSum;
    }

    const actualSum = sum;

    sum = 0;

    return actualSum;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
