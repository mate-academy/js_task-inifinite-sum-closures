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
    } else if (args.length > 0) {
      args.forEach((v) => (sum += v));

      return adder;
    }
  };

  return adder;
}

module.exports = makeAdder;
