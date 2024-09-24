'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function inner(num) {
    if (num === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }

    sum += num;

    return inner;
  }

  return inner;
}

module.exports = makeInfinityAdder;
