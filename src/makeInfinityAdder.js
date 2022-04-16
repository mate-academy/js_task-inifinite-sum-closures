'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(prev = 0) {
  let sum = prev;

  const secondAdder = (num) => {
    if (typeof num !== 'number') {
      const res = sum;

      sum = 0;

      return res;
    } else {
      sum = sum + num;

      return secondAdder;
    }
  };

  return secondAdder;
}

module.exports = makeInfinityAdder;
