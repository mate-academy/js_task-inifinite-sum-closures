'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;
  const funSum = (param) => {
    if (param !== undefined) {
      sum += param;

      return funSum;
    } else {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }
  };

  return funSum;
}

module.exports = makeInfinityAdder;
