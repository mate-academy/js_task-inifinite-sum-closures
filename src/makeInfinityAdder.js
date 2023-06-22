'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const getValue = (value) => {
    if (value === undefined) {
      const curSum = sum;

      sum = 0;

      return curSum;
    }

    sum += value;

    return getValue;
  };

  return getValue;
}

module.exports = makeInfinityAdder;
