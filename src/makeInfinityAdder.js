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
      args.forEach((num) => (sum += num));

      return adder;
    }
  };
}

module.exports = makeAdder;
