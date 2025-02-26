'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const res = sum;

      sum = 0;

      return res;
    }

    sum += args.reduce((acc, val) => acc + val, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
