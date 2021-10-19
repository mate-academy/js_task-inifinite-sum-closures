'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let num = 0;
  return function adder(x) {
    if (x) {
      num += x;
      return adder;
    }
    if (!x) {
      let result = num;
      num = 0;
      return result;
    }
  }
}

module.exports = makeInfinityAdder;
