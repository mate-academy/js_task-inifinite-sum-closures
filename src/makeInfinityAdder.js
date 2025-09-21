'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(num) {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    if (typeof num === 'number' && !Number.isNaN(num)) {
      sum += num;

      return adder;
    }
  }

  return adder;
}

module.exports = makeAdder;
