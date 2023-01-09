'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (number) => {
    if (number === undefined) {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }

    sum += number;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
