'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function add(a) {
    if (a === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }

    sum += a;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
