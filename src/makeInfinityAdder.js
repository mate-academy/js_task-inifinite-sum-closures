'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += args.reduce((acumulator, value) => acumulator + value, 0);

    return adder;
  };
}

module.exports = makeInfinityAdder;
