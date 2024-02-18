'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(...arg) {
    if (arg.length === 0) {
      const res = sum;

      sum = 0;

      return res;
    }

    for (const num of arg) {
      sum += num;
    }

    return adder;
  };

  return adder;
  // write code here
}

module.exports = makeInfinityAdder;
