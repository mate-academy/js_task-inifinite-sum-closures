'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(...args) {
    if (args === undefined || args.length === 0) {
      const res = sum;

      sum = 0;

      return res;
    } else {
      sum += args.reduce((total, b) => total + b, 0);

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
