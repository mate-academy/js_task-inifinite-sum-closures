'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let temp = 0;

  return function adder(args) {
    if (isNaN(args)) {
      const sum = temp;

      temp = 0;

      return sum;
    }
    temp += args;

    return adder;
  };
}

module.exports = makeInfinityAdder;
