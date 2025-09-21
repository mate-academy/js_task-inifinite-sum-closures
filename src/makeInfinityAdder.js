'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(arg) {
    if (typeof arg === 'undefined') {
      const printed = sum;

      sum = 0;

      return printed;
    } else {
      sum += arg;

      return adder;
    }
  }

  return adder;
}

module.exports = makeAdder;
