'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (...args) => {
    if (!args.length) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += +args;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
