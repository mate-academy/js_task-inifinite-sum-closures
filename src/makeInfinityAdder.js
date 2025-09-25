'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  return function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += args[0];
    }

    return adder;
  };
}

module.exports = makeAdder;
