'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let first = true;
  let sum = 0;

  function adder(...args) {
    if (args.length > 0) {
      sum += args[0];

      return adder;
    } else {
      if (first) {
        first = false;

        return sum;
      } else {
        sum = 0;

        return sum;
      }
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
