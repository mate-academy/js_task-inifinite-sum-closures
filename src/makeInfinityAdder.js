'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function add(num) {
    if (num === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }

    sum += num;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
