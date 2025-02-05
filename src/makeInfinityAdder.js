'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(...arg) {
    // let sum = 0;

    if (arg.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += arg.reduce((a, b) => a + b, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
