'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  return function adder(num) {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += num;

      return adder;
    }
  };
}

module.exports = makeAdder;
