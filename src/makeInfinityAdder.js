'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (value) => {
    if (value !== undefined) {
      sum += value;

      return add;
    }

    const resultSum = sum;

    sum = 0;

    return resultSum;
  };

  return add;
}

module.exports = makeInfinityAdder;
