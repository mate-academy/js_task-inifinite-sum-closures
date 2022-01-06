'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let total = 0;

  function add(x) {
    if (x === undefined) {
      const totalCopy = total;

      total = 0;

      return totalCopy;
    }
    total += x;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
