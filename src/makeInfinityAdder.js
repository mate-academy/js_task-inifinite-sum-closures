'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let count = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = count;

      count = 0;

      return result;
    }

    const sum = args.reduce((num1, num2) => num1 + num2, 0);

    count += sum;

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
