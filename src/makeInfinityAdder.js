'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  // write code here
  let sum = 0;
  let sumPreClear;

  function adder() {
    if (arguments.length === 0) {
      sumPreClear = [sum];
      sum = 0;

      return sumPreClear;
    }

    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
