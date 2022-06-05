'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let clear = 0;

  return function adder(a) {
    if (a === undefined) {
      const sum = clear;

      clear = 0;

      return sum;
    }
    clear += a;

    return adder;
  };
}

module.exports = makeInfinityAdder;
