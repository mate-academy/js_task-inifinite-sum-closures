'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let infinitySum = 0;

  function add(a) {
    if (!a) {
      const infinitySumCopy = infinitySum;

      infinitySum = 0;

      return infinitySumCopy;
    }
    infinitySum += a;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
