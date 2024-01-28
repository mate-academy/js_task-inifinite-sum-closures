'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  function adder(x) {
    let currentSum = x;

    if (currentSum === undefined) {
      return 0;
    }

    function addNext(y) {
      if (y !== undefined) {
        currentSum += y;

        return addNext;
      } else {
        return currentSum;
      }
    }

    return addNext;
  }

  return adder;
}

module.exports = makeInfinityAdder;
