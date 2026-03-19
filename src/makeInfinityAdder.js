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
    }

    const count = args.reduce((num1, num2) => num1 + num2, 0);

    sum += count;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
