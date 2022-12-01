'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (...args) => {
    if (!args.length) {
      return 0;
    }

    const result = args.reduce((a, b) => a + b, 0);

    const sum = (...innerArgs) => {
      if (innerArgs.length === 0) {
        return result;
      }

      return adder(...args, ...innerArgs);
    };

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
