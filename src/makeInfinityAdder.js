'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  // write code here
  let sum = 0;
  const adder = (...args) => {
    if (args.length === 0) {
      const nSum = sum;

      sum = 0;

      return nSum;
    }

    for (const i of args) {
      sum += i;
    }

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
