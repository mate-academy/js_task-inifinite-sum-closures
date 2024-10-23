'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const res = sum;

      sum = 0;

      return res;
    }
    sum += args.reduce((prev, a) => prev + a, 0);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
