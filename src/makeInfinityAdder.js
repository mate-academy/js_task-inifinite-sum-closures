'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let total = 0;

  const adder = (...args) => {
    if (args.length > 0) {
      total += args[0];

      return adder;
    }

    if (args.length === 0) {
      const result = total;

      total = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeAdder;
