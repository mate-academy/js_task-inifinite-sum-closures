'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function addReturn(num) {
    if (num === undefined) {
      const copy = sum;

      sum = 0;

      return copy;
    }

    sum += num;

    return addReturn;
  };
}

module.exports = makeInfinityAdder;
