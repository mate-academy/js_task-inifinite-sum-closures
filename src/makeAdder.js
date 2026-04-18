'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(args) {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += args;

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
