'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  function add(num) {
    if (num !== undefined) {
      totalSum += num;

      return add;
    }

    if (num === undefined) {
      const newSum = totalSum;

      totalSum = 0;

      return newSum;
    }
  }

  return add;
}

module.exports = makeInfinityAdder;
