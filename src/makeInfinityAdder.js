'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let actualSum = 0;

  const getSum = (number) => {
    if (!number) {
      actualSum = sum;
      sum = 0;

      return actualSum;
    }

    sum += number;

    return getSum;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
