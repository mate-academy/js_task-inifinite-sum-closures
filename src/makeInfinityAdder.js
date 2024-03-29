'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const addToSum = (num) => {
    if (num === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }

    sum += num;

    return addToSum;
  };

  return addToSum;
}

module.exports = makeInfinityAdder;
