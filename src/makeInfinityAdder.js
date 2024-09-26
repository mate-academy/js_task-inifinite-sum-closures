'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const add = (x) => {
    if (x !== undefined) {
      sum += x;

      return add;
    } else {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
