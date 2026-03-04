'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    args.forEach((el) => {
      const n = Number(el);

      if (Number.isFinite(n)) {
        sum += n;
      }
    });

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
