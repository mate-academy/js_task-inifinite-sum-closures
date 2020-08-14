'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (x) => {
    const currentSum = sum;

    let count = 0;

    if (x !== undefined) {
      sum += x;

      return add;
    } else {
      count++;
      sum = 0;

      return (count > 1) ? 0 : currentSum;
    }
  };

  return add;
};

module.exports = makeInfinityAdder;
