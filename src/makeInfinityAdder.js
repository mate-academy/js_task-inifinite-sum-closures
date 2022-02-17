'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (num) => {
    if (num !== undefined) {
      sum += num;

      return add;
    } else {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
