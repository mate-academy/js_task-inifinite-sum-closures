'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const res = sum;

      sum = 0;

      return res;
    }

    sum += args[0];

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
