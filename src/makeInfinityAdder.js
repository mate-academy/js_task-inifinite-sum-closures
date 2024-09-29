'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += args.reduce((acc, num) => acc + num, 0);

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
