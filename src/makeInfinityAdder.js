'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function fn(num) {
    if (!num) {
      const res = sum;

      sum = 0;

      return res;
    }
    sum += num;

    return nextNum => fn(nextNum);
  };
}

module.exports = makeInfinityAdder;
