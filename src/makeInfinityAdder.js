'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result = 0;

  return function adder(arg) {
    if (arg === undefined) {
      result = sum;
      sum = 0;

      return result;
    }
    sum = sum + arg;

    return adder;
  };
  // write code here
}

module.exports = makeInfinityAdder;
