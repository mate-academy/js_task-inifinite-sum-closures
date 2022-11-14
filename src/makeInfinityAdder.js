'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function f(num) {
    if (arguments.length === 0) {
      const bufer = sum;

      sum = 0;

      return bufer;
    } else {
      sum += num;

      return f;
    }
  };
}

module.exports = makeInfinityAdder;
