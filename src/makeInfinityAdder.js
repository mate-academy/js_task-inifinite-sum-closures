'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  const getSum = (n) => {
    let sum = total;

    if (n === undefined) {
      total = 0;

      return sum;
    }

    sum += n;
    total = sum;

    return getSum;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
