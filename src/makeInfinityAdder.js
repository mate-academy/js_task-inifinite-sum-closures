'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const result = (num) => {
    if (num !== undefined) {
      sum += num;

      return result;
    }

    const total = sum;

    sum = 0;

    return total;
  };

  return result;
}

module.exports = makeInfinityAdder;
