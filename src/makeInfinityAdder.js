'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;
  let currentArgs = [];

  function adder(...args) {
    if (args.length === 0) {
      const result = sum + currentArgs.reduce((acc, val) => acc + val, 0);

      sum = 0;
      currentArgs = [];

      return result;
    } else {
      currentArgs = [...currentArgs, ...args];

      return adder;
    }
  }

  return adder;
}
module.exports = makeInfinityAdder;
