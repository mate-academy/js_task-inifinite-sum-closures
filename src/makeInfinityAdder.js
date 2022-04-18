'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(prev = 0) {
  let sum = prev;

  const secondAdder = (num) => {
    if (num === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }
    sum += num;

    return secondAdder;
  };

  return secondAdder;
}

module.exports = makeInfinityAdder;
