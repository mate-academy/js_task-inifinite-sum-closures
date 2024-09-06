'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const sum = count;

      count = 0;

      return sum;
    } else {
      count += args.reduce((a, b) => a + b, 0);

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
