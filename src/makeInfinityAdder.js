'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let result = 0;

  function adder(...args) {
    if (args.length === 0) {
      const finalResult = result;

      result = 0;

      return finalResult;
    }

    if (args.length > 0) {
      for (const arg of args) {
        result += arg;
      }
    }

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
