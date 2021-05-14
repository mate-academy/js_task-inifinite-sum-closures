'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function add(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += num;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
