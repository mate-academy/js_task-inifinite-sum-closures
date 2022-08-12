'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let calls = 0;

  return function add(a) {
    if (arguments.length > 0) {
      sum += a;
      calls++;

      return add;
    }

    if (calls > 0) {
      calls = 0;

      return sum;
    }

    return 0;
  };
}

module.exports = makeInfinityAdder;
