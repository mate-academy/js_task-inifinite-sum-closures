'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += args.reduce((a, b) => a + b, 0);

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
