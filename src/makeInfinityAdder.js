'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += args.reduce((total, num) => total + num, 0);

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
