'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  function add(b) {
    if (!b) {
      const temporary = currentSum;

      currentSum = 0;

      return temporary;
    }

    currentSum += b;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
