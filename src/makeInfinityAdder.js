'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const returnSum = sum;

      sum = 0;

      return returnSum;
    }

    sum += args[0];

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
