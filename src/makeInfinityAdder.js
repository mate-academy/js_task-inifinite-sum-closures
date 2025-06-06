'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += args.reduce((num1, num2) => num1 + num2, 0);

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
