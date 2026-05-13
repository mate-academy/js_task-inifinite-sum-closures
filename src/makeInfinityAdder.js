'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let total = 0;
  const adder = (...args) => {
    if (args.length === 0) {
      const result = total;

      total = 0;

      return result;
    } else {
      total += args[0];

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
