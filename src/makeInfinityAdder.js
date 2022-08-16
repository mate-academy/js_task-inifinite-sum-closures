'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  function adder(x) {
    if (x !== undefined) {
      sum += x;

      return adder;
    } else {
      const result = sum;

      sum = 0;

      return result;
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
