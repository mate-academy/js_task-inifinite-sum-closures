'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function add(a) {
    if (a !== undefined) {
      sum += a;

      return add;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  }

  return add;
}

module.exports = makeInfinityAdder;
