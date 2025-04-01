'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let result = 0;

  return function adder(x) {
    if (x === undefined) {
      const res = result;

      result = 0;

      return res;
    }

    result += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
