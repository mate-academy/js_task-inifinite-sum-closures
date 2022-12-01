'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const calc = (num) => {
    const currentSum = sum;

    if (typeof num === 'number') {
      sum += num;

      return calc;
    }
    sum = 0;

    return currentSum;
  };

  return calc;
}

module.exports = makeInfinityAdder;
