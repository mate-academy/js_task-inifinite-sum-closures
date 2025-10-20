'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(args) {
    if (args === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += args;

      return adder;
    }
  }

  return adder;
}

module.exports = makeAdder;
