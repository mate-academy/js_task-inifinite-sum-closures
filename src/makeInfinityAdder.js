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

    const count = sum;

    sum = 0;

    return count;
  };

  return result;
}

module.exports = makeInfinityAdder;
