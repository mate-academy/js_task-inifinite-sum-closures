'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (value) => {
    if (value) {
      sum += value;

      return add;
    } else {
      const curSum = sum;

      sum = 0;

      return curSum;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
