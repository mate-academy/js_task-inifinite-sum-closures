'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    for (let i = 0; i < args.length; i++) {
      sum += args[i];
    }

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
