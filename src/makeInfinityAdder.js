'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const getSum = (num) => {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += num;

    return getSum;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
