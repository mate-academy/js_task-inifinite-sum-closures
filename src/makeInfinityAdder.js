'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function add(b) {
    const count = sum;

    if (typeof b !== 'undefined') {
      sum += b;

      return add;
    }

    sum = 0;

    return count;
  };
}

module.exports = makeInfinityAdder;
