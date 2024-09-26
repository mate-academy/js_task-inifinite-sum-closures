'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += args.reduce((acc, num) => acc + num, 0);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
