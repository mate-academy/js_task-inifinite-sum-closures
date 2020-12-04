'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here

  let sum = 0;

  function add(x) {
    if (!x) {
      const a = sum;

      sum = 0;

      return a;
    } else {
      sum += x;

      // eslint-disable-next-line no-inner-declarations
      function f(y) {
        if (!y) {
          const b = sum;

          sum = 0;

          return b;
        } else {
          sum += y;

          return f;
        }
      }

      return f;
    }
  }

  return add;
}

module.exports = makeInfinityAdder;
