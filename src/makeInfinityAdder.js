'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = function(...args) {
    if (args.length < 1) {
      const temp = sum;

      sum = 0;

      return temp;
    }

    sum += args[0];

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
