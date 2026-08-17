'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(num = 0) {
    sum += num;

    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
